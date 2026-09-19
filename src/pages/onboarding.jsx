import { Link } from "react-router-dom";

export default function Onboarding() {
  return (
    <main className="min-h-screen bg-[#eef2f7] flex justify-center">
      <div className="w-full max-w-[430px] min-h-screen">

        <header className="bg-[#082653] text-white px-5 py-4 text-lg font-semibold">
          ← &nbsp; Padi AI
        </header>

        <div className="p-5">

          <div className="bg-white rounded-2xl p-5 mb-4 max-w-[85%]">
            What are your interests, hobbies and qualifications?
          </div>

          <div className="bg-[#082653] text-white rounded-2xl p-5 ml-auto max-w-[85%] mb-4">
            I have a degree in public relations. I love planning,
            organizing and communicating.
          </div>

          <div className="bg-white rounded-2xl p-5 max-w-[85%] mb-4">
            Would you consider a career in Virtual Assistance?
            I can send you the link to a few courses you need.
          </div>

          <div className="bg-[#082653] text-white rounded-2xl p-5 ml-auto max-w-[85%]">
            I'd love that. It's worth a shot.
          </div>

          <Link
            to="/chat"
            className="block text-center mt-8 bg-[#082653] text-white rounded-xl py-4 font-semibold"
          >
            Continue to Padi AI →
          </Link>

        </div>
      </div>
    </main>
  );
}