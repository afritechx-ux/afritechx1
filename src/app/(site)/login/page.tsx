import LoginForm from './LoginForm';

export const metadata = {
    title: 'Client Portal Sign In',
    description: 'Sign in to the Afrixtech Client Portal.',
};

export default function LoginPage() {
    return (
        <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-4 py-28">
            <div className="w-full max-w-md">
                <div className="mb-8 text-center">
                    <h1 className="h-display text-3xl">Sign in to your portal</h1>
                    <p className="mt-2 text-sm text-ink-muted">Access project dashboards, invoices and documents.</p>
                </div>
                <div className="card p-6 sm:p-8">
                    <LoginForm />
                </div>
            </div>
        </section>
    );
}
