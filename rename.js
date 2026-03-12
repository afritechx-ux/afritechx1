const fs = require('fs');
const path = require('path');

function walk(dir, done) {
  let results = [];
  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(function(file) {
      file = path.resolve(dir, file);
      fs.stat(file, function(err, stat) {
        if (stat && stat.isDirectory()) {
          if (file.includes('node_modules') || file.includes('.git') || file.includes('.next')) {
            if (!--pending) done(null, results);
            return;
          }
          walk(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          results.push(file);
          if (!--pending) done(null, results);
        }
      });
    });
  });
}

function processFiles(files) {
  let changedFilesCount = 0;
  files.forEach(file => {
    if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.html') || file.endsWith('.json') || file.endsWith('.md')) {
      const content = fs.readFileSync(file, 'utf8');
      
      let newContent = content
        .replace(/AfritechX/g, 'Afrixtech')
        .replace(/Afritechx/g, 'Afrixtech')
        .replace(/afritechx/g, 'afrixtech')
        .replace(/AFRITECHX/g, 'AFRIXTECH');
        
      if (newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated: ${file}`);
        changedFilesCount++;
      }
    }
  });
  console.log(`Total files modified: ${changedFilesCount}`);
}

walk(__dirname, function(err, results) {
  if (err) throw err;
  processFiles(results);
});
