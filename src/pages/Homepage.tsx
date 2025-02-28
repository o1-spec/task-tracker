import { useNavigate } from "react-router-dom";
import {
  FaCode,
  FaMicrochip,
  FaLaptopCode,
  FaCogs,
  FaServer,
  FaDatabase,
} from "react-icons/fa";
import { isAuthenticated } from "../utils/auth";

function Homepage() {
  const navigate = useNavigate();

  const handleWelcomeClick = () => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="relative h-screen flex flex-col justify-center items-center text-black bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-32 h-0.5 bg-gray-300 opacity-50"></div>
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
        <FaServer className="absolute top-1/4 right-1/3 text-gray-300 text-5xl opacity-35" />
        <FaDatabase className="absolute bottom-1/4 left-1/4 text-gray-400 text-6xl opacity-35" />
      </div>

      <h1 className="text-5xl font-bold mb-6">Welcome to AlgoDaily</h1>
      <p className="text-lg text-center max-w-lg mb-8">
        Track your coding progress, solve daily challenges, and join a growing
        community of developers. Get started today!
      </p>
      <button
        onClick={handleWelcomeClick}
        className="bg-white text-[#fd7e14] cursor-pointer px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-200 transition"
      >
        Get Started
      </button>
    </div>
  );
}

export default Homepage;
