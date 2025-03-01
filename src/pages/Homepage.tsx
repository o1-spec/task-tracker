import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle"; // Import the component

import { isAuthenticated } from "../utils/auth";
import BgIcons from "../components/BgIcons";

function Homepage() {
  const navigate = useNavigate();

  const handleWelcomeClick = () => {
    if (!localStorage.getItem("firstVisit")) {
      localStorage.setItem("firstVisit", "true");
      navigate("/welcome");
    } else if (isAuthenticated()) {
      navigate("/taskpage");
    } else {
      navigate("/sign-up");
    }
  };

  return (
    <div className="relative h-screen flex flex-col items-center pt-40 bg-gray-100 dark:bg-gray-900 text-black dark:text-white overflow-hidden">
      <ThemeToggle />
      <BgIcons />
      <h1 className="md:text-5xl text-4xl md:px-0 font-bold mb-6 text-center">
        Welcome to AlgoDaily
      </h1>
      <p className="text-lg text-center max-w-lg mb-8">
        Track your coding progress, solve daily challenges, and join a growing
        community of developers. Get started today!
      </p>
      <button
        onClick={handleWelcomeClick}
        className="bg-white dark:bg-gray-800 text-[#fd7e14] cursor-pointer px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        Get Started
      </button>
    </div>
  );
}

export default Homepage;
