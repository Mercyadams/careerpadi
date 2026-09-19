import { Link } from "react-router-dom";

export default function CV() {
  return (
    <main className="min-h-screen bg-[#eef2f7] flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl p-7 max-w-md w-full">
        <p className="text-sm text-cyan-600 font-semibold">PADI AI</p>
        <h1 className="text-2xl font-bold text-[#082653] mt-2">
          CV Draft
        </h1>

        <div className="mt-6 space-y-4 text-sm">
          <div>
            <b>Chioma Okafor</b>
            <p className="text-slate-500">Junior Frontend Developer</p>
          </div>

          <hr />

          <div>
            <b>Skills</b>
            <p className="text-slate-500 mt-1">
              HTML • CSS • JavaScript • React • Figma
            </p>
          </div>

          <div>
            <b>Career Target</b>
            <p className="text-slate-500 mt-1">
              Junior Frontend Development
            </p>
          </div>
        </div>

        <Link
          to="/dashboard"
          className="block text-center mt-7 bg-[#082653] text-white rounded-xl py-3"
        >
          Back to Dashboard
        </Link>
      </div>
    </main>
  );
}