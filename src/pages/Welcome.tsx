import { useNavigate } from "react-router-dom";
import BgIcons from "../components/BgIcons";
import ThemeToggle from "../components/ThemeToggle";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="relative md:p-8 p-5 py-14 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center overflow-hidden">
      <ThemeToggle />
      <BgIcons />
      <h1 className="text-4xl text-center font-bold mb-4 text-gray-900 dark:text-white">
        Welcome to AlgoDaily 🎉
      </h1>
      <p className="text-md md:text-lg max-w-2xl text-gray-700 dark:text-white/80 mb-6">
        AlgoDaily helps you track your coding progress, solve daily challenges,
        and improve your algorithm skills. Join a community of developers and
        level up your problem-solving abilities!
      </p>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl text-left">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          How It Works 🔥
        </h2>
        <ul className="list-disc list-inside dark:text-white/80 text-gray-700 text-[15px] text-lg space-y-3">
          <li className="flex flex-col gap-0.5">
            <strong className="text-[18px]">Daily Challenges 📌</strong>
            <p>
              Get &nbsp;
              <span className="text-green-600 text-[16px]">4 Easy</span> &
              &nbsp;
              <span className="text-yellow-600 text-[16px]">
                2 Medium&nbsp;
              </span>
              Codeforces problems every day.
            </p>
          </li>
          <li className="flex flex-col gap-0.5">
            <strong className="text-[18px]">
              Progress-Based Difficulty 📈
            </strong>
            <p>
              Maintain a &nbsp;
              <span className="font-semibold text-blue-600">3-day streak</span>
              &nbsp; to unlock harder problems (1 Hard).
            </p>
          </li>
          <li className="flex flex-col gap-0.5">
            <strong className="text-[18px]">No Timers, Just Learning ⏳</strong>
            <p>Complete all 6 problems daily, at your own pace.</p>
          </li>
          <li className="flex flex-col gap-0.5">
            <strong className="text-[18px]">Track Your Growth 📊</strong>
            <p>Keep your streak alive and level up consistently.</p>
          </li>
        </ul>
      </div>

      <button
        onClick={() => navigate("/sign-up")}
        className="mt-6 px-6 py-3 bg-[#fd7e14] cursor-pointer text-white text-lg font-semibold rounded-full shadow-md hover:bg-orange-600 transition"
      >
        Next
      </button>
    </div>
  );
};

export default Welcome;
