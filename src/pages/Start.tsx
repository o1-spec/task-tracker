import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import BgIcons from "../components/BgIcons";

const Start = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white text-center">
      <ThemeToggle />
      <BgIcons />
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Ready to Begin?
      </h1>
      <p className="text-lg text-gray-700 dark:text-white mb-6">
        Click the <strong>Start</strong> button to begin your daily tasks.
      </p>
      <button
        onClick={() => navigate("/taskpage")}
        className="px-6 py-3 bg-[#fd7e14] text-white text-lg cursor-pointer font-semibold rounded-full shadow-md hover:bg-orange-600 transition"
      >
        Start
      </button>
      <button
        onClick={() => navigate("/")}
        className="mt-4 text-gray-600 dark:text-white/50 underline cursor-pointer"
      >
        Maybe later
      </button>
    </div>
  );
};

export default Start;
