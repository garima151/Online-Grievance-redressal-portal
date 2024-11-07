"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, FileText, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "./layout/header";

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full bg-gradient-to-br from-pink-50 py-12 md:py-24 lg:py-32 xl:py-56">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-7xl/none">
                  Your{" "}
                  <span className="bg-gradient-to-tr from-pink-600 to-red-600 bg-clip-text text-transparent">
                    Voice
                  </span>{" "}
                  Matters
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Empowering change through efficient grievance resolution.
                  Submit, track, and resolve issues with ease.
                </p>
              </div>
              <div className="space-x-4">
                <Link to={"/dashboard"}>
                  <Button>Get Started</Button>
                </Link>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg">
                <FileText className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Submit</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400 text-center">
                  Easily submit your grievance through our user-friendly form.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg">
                <MessageCircle className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Track</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400 text-center">
                  Stay updated on the progress of your grievance in real-time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg">
                <CheckCircle className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Resolve</h3>
                <p className="text-sm text-muted-foreground dark:text-gray-400 text-center">
                  Get timely resolutions and feedback on your submitted
                  grievances.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Be Heard?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of citizens making a difference. Start your
                  journey towards resolution today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" to="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2024 GrievEase. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
