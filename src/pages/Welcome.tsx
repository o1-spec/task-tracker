import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaLaptopCode,
  FaMicrochip,
  FaCogs,
  FaDatabase,
} from "react-icons/fa";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="relative md:p-8 p-5 py-12 flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-16 w-32 h-0.5 bg-gray-300 opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-40 h-0.5 bg-gray-400 opacity-50"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-0.5 bg-gray-300 opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-52 h-0.5 bg-gray-400 opacity-50"></div>
        <div className="absolute top-1/4 left-1/5 w-60 h-0.5 bg-gray-300 opacity-30"></div>
      </div>

      <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
        <FaCode className="absolute top-12 left-12 text-gray-300 text-4xl opacity-40" />
        <FaMicrochip className="absolute bottom-16 right-20 text-gray-400 text-5xl opacity-40" />
        <FaLaptopCode className="absolute top-1/3 right-16 text-gray-300 text-6xl opacity-30" />
        <FaCogs className="absolute bottom-1/3 left-16 text-gray-400 text-5xl opacity-30" />
        <FaDatabase className="absolute bottom-1/4 left-1/4 text-gray-400 text-6xl opacity-35" />
      </div>

      <h1 className="text-4xl text-center font-bold mb-4 text-gray-900">
        Welcome to AlgoDaily 🎉
      </h1>
      <p className="text-md md:text-lg max-w-2xl text-gray-700 mb-6">
        AlgoDaily helps you track your coding progress, solve daily challenges,
        and improve your algorithm skills. Join a community of developers and
        level up your problem-solving abilities!
      </p>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl text-left">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          How It Works 🔥
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-[15px] text-lg space-y-3">
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
