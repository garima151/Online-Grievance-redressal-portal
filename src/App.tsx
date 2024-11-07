import { useAuthStore } from '@/lib/auth-store';
import { LoginForm } from '@/components/auth/login-form';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {!user ? (
          <div className="mx-auto max-w-md">
            <div className="rounded-lg border bg-white p-8 shadow-sm">
              <h1 className="mb-6 text-2xl font-semibold text-rose-600">
                Welcome Back
              </h1>
              <LoginForm />
            </div>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold">
              Welcome, {user.name}!
            </h1>
          </div>
        )}
      </main>
      <Toaster />
    </div>
  );
}

export default App;