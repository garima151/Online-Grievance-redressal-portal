// import { useAuthStore } from "@/lib/auth-store";
import { LoginForm } from "@/components/auth/login-form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { LandingPageComponent } from "./components/landing-page";
import { DashboardComponent } from "./components/dashboard";

function App() {
  // const user = useAuthStore((state) => state.user);

  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPageComponent />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<LoginForm />} />
            <Route path="/dashboard" element={<DashboardComponent />} />
          </Routes>
        </Router>
      </main>
      <Toaster />
    </div>
  );
}

export default App;
