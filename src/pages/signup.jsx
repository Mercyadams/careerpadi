import { Link } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function Signup() {
  return (
    <main className="min-h-screen bg-[#f1f4f8] flex items-center justify-center px-5 py-8">
      <div className="w-full max-w-md">
        
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#082b5c] flex items-center justify-center text-white font-bold">
              P
            </div>
            <span className="text-2xl font-bold text-[#082b5c]">
              CareerPadi
            </span>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Your career journey starts here.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-7 sm:p-9">
          <div className="mb-7">
            <h1 className="text-2xl font-bold text-[#082b5c]">
              Create your account
            </h1>

            <p className="text-sm text-slate-500 mt-2">
              Let's get to know you and help you find your next step.
            </p>
          </div>

          <form className="space-y-4">
            
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                Email Address
              </label>

              <div className="relative mt-2">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#00a9c7] focus:ring-2 focus:ring-[#00a9c7]/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="relative mt-2">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#00a9c7] focus:ring-2 focus:ring-[#00a9c7]/10"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                Confirm Password
              </label>

              <div className="relative mt-2">
                <Lock
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm outline-none transition focus:border-[#00a9c7] focus:ring-2 focus:ring-[#00a9c7]/10"
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 py-2 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 accent-[#082b5c]"
              />

              <span className="text-xs leading-5 text-slate-500">
                I agree to the Terms of Service and Privacy Policy.
              </span>
            </label>

            {/* Button */}
            <Link
              to="/onboarding"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#082b5c] py-3.5 text-sm font-semibold text-white transition hover:bg-[#0b376f]"
            >
              Create Account
              <ArrowRight size={17} />
            </Link>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-7">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">
              or continue with
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Google
            </button>

            <button className="rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Apple
            </button>
          </div>

          <p className="text-center text-sm text-slate-500 mt-7">
            Already have an account?{" "}
            <span className="font-semibold text-[#082b5c] cursor-pointer">
              Log in
            </span>
          </p>
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          CareerPadi • Your career, your next step.
        </p>
      </div>
    </main>
  );
}