const fs = require('fs');
const path = require('path');
const net = require('net');
const { execSync } = require('child_process');
require('dotenv').config();

const schemaPath = path.join(__dirname, '..', 'prisma', 'schema.prisma');

function checkPostgresConnection(dbUrl) {
    return new Promise((resolve) => {
        if (!dbUrl || !dbUrl.startsWith('postgresql')) {
            return resolve(false);
        }

        try {
            const lastAtIndex = dbUrl.lastIndexOf('@');
            const slashIndex = dbUrl.indexOf('/', lastAtIndex);
            const authority = dbUrl.substring(lastAtIndex + 1, slashIndex !== -1 ? slashIndex : dbUrl.length);
            const [host, portStr] = authority.split(':');
            const port = parseInt(portStr || '5432', 10);

            console.log(`Checking connection to PostgreSQL at ${host}:${port}...`);
            const socket = net.createConnection({ host, port, timeout: 7000 });

            socket.on('connect', () => {
                socket.destroy();
                resolve(true);
            });

            socket.on('error', (err) => {
                console.log(`Connection error for ${host}:${port} : ${err.message}`);
                socket.destroy();
                resolve(false);
            });

            socket.on('timeout', () => {
                console.log(`Connection timeout for ${host}:${port}`);
                socket.destroy();
                resolve(false);
            });
        } catch (e) {
            console.log(`Error parsing database URL: ${e.message}`);
            resolve(false);
        }
    });
}

async function setup() {
    const dbUrl = process.env.DIRECT_URL || process.env.DATABASE_URL;
    const isPostgresReachable = await checkPostgresConnection(dbUrl);

    let schemaContent = fs.readFileSync(schemaPath, 'utf8');

    if (isPostgresReachable) {
        console.log('PostgreSQL database is REACHABLE. Setting up PostgreSQL provider with Connection Pooler & Direct URL...');
        // Replace provider and url block in schema to use postgresql with directUrl
        schemaContent = schemaContent.replace(
            /datasource\s+db\s*{[\s\S]*?}/,
            `datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}`
        );
        fs.writeFileSync(schemaPath, schemaContent, 'utf8');

        console.log('Running prisma generate...');
        execSync('npx prisma generate', { stdio: 'inherit' });

        try {
            console.log('Running prisma db push on PostgreSQL using direct connection...');
            execSync('npx prisma db push', { stdio: 'inherit' });
        } catch (e) {
            console.log('Warning: prisma db push failed. Moving forward anyway.');
        }
    } else {
        console.log('PostgreSQL database is UNREACHABLE or not configured. Falling back to local SQLite...');
        // Replace provider and url block in schema to use sqlite without directUrl
        schemaContent = schemaContent.replace(
            /datasource\s+db\s*{[\s\S]*?}/,
            `datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}`
        );
        fs.writeFileSync(schemaPath, schemaContent, 'utf8');

        console.log('Running prisma generate...');
        execSync('npx prisma generate', { stdio: 'inherit' });

        try {
            console.log('Running prisma db push on local SQLite database...');
            execSync('npx prisma db push', { stdio: 'inherit' });
        } catch (e) {
            console.log('Warning: SQLite database sync failed. Schema might already be in sync.');
        }
    }
}

setup().catch((err) => {
    console.error('Database setup script failed:', err);
    process.exit(1);
});
