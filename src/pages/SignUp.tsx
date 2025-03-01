import { useState } from "react";
import { motion } from "framer-motion";
import SignupForm from "../components/SignupForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
const slides = [
  {
    id: 0,
    bg: "bg-auth-1",
    title: "AlgoDaily",
    text: "Track your coding progress and stay consistent every day.",
    count: "01 ------ 03",
  },
  {
    id: 1,
    bg: "bg-auth-2",
    title: "Daily Challenges",
    text: "Solve coding problems daily and improve your problem-solving skills.",
    count: "02 ------ 03",
  },
  {
    id: 2,
    bg: "bg-auth-3",
    title: "Join the Community",
    text: "Connect with other learners, share solutions, and grow together.",
    count: "03 ------ 03",
  },
];

function SignUp() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex relative items-center justify-center">
      {/* Left Side - Signup Form */}
      <div className="basis-1/2 flex flex-col justify-center items-center gap-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Account</h1>
          <span>Start managing your coding tasks effectively.</span>
        </div>
        <SignupForm />
        <div className="flex items-center gap-1">
          <span className="text-[15px]">Already have an account?</span>
          <a className="text-[16px] text-[#fd7e14] underline" href="/log-in">
            Log in
          </a>
        </div>
      </div>

      {/* Right Side - Slideshow */}
      <div className="basis-1/2 hidden md:inline-block">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 w-[50%] h-[100vh] ${slides[currentSlide].bg} bg-cover bg-center signOverlay`}
        >
          {/* Top Section */}
          <div className="pt-8 px-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faLaptopCode}
                className="text-black text-xl bg-white px-3 py-3 rounded-full"
              />
              <span className="text-[15px] text-white">
                Code Smarter, Track Better
              </span>
            </div>
            <div className="w-32 h-[1px] bg-[#d6d1f8]"></div>
          </div>

          {/* Main Content */}
          <h1 className="text-[46px] xl:text-[66px] font-serif text-center pt-20 text-white">
            {slides[currentSlide].title}
          </h1>
          <div className="pt-12 text-white">
            <div className="pl-6">
              <span className="text-[72px]">&quot;</span>
              <p className="-translate-y-10 text-lg xl:text-2xl xl:w-[400px] md:w-[230px]">
                {slides[currentSlide].text}
              </p>
              <p>{slides[currentSlide].count}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-10 right-16 flex gap-4 text-white">
            <span
              onClick={handlePrevSlide}
              className="border border-white rounded-full text-md px-2.5 pt-1.5 pb-2 cursor-pointer"
            >
              &larr;
            </span>
            <span
              onClick={handleNextSlide}
              className="border border-white rounded-full text-md px-2.5 pt-1.5 pb-2 cursor-pointer"
            >
              &rarr;
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SignUp;
