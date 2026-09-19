import { Link } from "react-router-dom";

export default function Chat() {
  return (
    <main className="min-h-screen bg-[#eef2f7] flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen">

        <header className="bg-[#082653] text-white px-5 py-4 font-semibold">
          ← &nbsp; Padi AI
        </header>

        <div className="p-5">

          <div className="bg-white rounded-2xl p-4 mb-4">
            Based on what you've told me, I've identified some career paths
            that match your interests.
          </div>

          <div className="bg-[#082653] text-white rounded-2xl p-4 ml-auto max-w-[85%]">
            What should I focus on first?
          </div>

          <div className="mt-6 bg-white rounded-2xl p-5">
            <p className="font-bold text-[#082653]">Your recommendations</p>

            <div className="mt-4 space-y-3">
              <div className="border rounded-xl p-3">
                <b>Junior Frontend Developer</b>
                <p className="text-xs text-slate-500">
                  HTML • CSS • JavaScript
                </p>
              </div>

              <div className="border rounded-xl p-3">
                <b>UI/UX Implementation Intern</b>
                <p className="text-xs text-slate-500">
                  Design • Figma • Frontend
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/dashboard"
            className="block text-center mt-6 bg-[#082653] text-white rounded-xl py-4 font-semibold"
          >
            View My Career Dashboard →
          </Link>

        </div>
      </div>
    </main>
  );
}