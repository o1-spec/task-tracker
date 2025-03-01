import {
  FaCode,
  FaMicrochip,
  FaLaptopCode,
  FaCogs,
  FaServer,
  FaDatabase,
} from "react-icons/fa";

function BgIcons() {
  return (
    <>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-20 w-32 h-0.5 bg-gray-300 dark:bg-gray-700 opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-40 h-0.5 bg-gray-400 dark:bg-gray-600 opacity-50"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-0.5 bg-gray-300 dark:bg-gray-700 opacity-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-52 h-0.5 bg-gray-400 dark:bg-gray-600 opacity-50"></div>
      </div>

      <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
        <FaCode className="absolute top-12 left-12 text-gray-300 dark:text-gray-700 text-4xl opacity-40" />
        <FaMicrochip className="absolute top-16 right-20 text-gray-400 dark:text-gray-600 text-5xl opacity-40" />
        <FaLaptopCode className="absolute top-1/3 right-16 text-gray-300 dark:text-gray-700 text-6xl opacity-30" />
        <FaCogs className="absolute bottom-1/3 left-16 text-gray-400 dark:text-gray-600 text-5xl opacity-30" />
        <FaServer className="absolute top-1/4 right-1/3 text-gray-300 dark:text-gray-700 text-5xl opacity-35" />
        <FaDatabase className="absolute bottom-1/4 left-1/4 text-gray-400 dark:text-gray-600 text-6xl opacity-35" />
      </div>
    </>
  );
}

export default BgIcons;
