import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import ThemeToggle from "../components/ThemeToggle";
import { Task } from "../utils/types";
import { getCompletedTasks, getDailyTasks } from "../utils/storage";

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({ userName: "", email: "" });
  const [streak, setStreak] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [easyCount, setEasyCount] = useState(0);
  const [mediumCount, setMediumCount] = useState(0);
  const [hardCount, setHardCount] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const storedNotifications =
      localStorage.getItem("notifications") === "true";
    const storedStreak = parseInt(localStorage.getItem("streak") || "0", 10);
    const storedTasks = parseInt(
      localStorage.getItem("tasksCompleted") || "0",
      10
    );

    const completedTaskIds = getCompletedTasks();
    const dailyTasks = getDailyTasks() || [];
    const completedTaskDetails = dailyTasks.filter((task: Task) =>
      completedTaskIds.includes(task.contestId + task.index)
    );
    setCompletedTasks(completedTaskDetails);

    if (storedUser.userName) setUser(storedUser);
    setNotificationsEnabled(storedNotifications);
    setStreak(storedStreak);
    setTasksCompleted(storedTasks);
    setEasyCount(parseInt(localStorage.getItem("easyCount") || "0"));
    setMediumCount(parseInt(localStorage.getItem("mediumCount") || "0"));
    setHardCount(parseInt(localStorage.getItem("hardCount") || "0"));
  }, []);

  const toggleNotifications = () => {
    const newValue = !notificationsEnabled;
    setNotificationsEnabled(newValue);
    localStorage.setItem("notifications", JSON.stringify(newValue));
    toast.success(
      newValue ? "Notifications Enabled 🔔" : "Notifications Disabled ❌"
    );
  };

  const handleSaveProfile = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
    toast.success("Profile Updated!");
  };

  return (
    <div className="relative min-h-screen p-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
      <ThemeToggle />

      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-1/3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
          User Profile
        </h2>
        <div className="space-y-4">
          <div>
            <label className="text-gray-600 dark:text-gray-300 font-medium">
              Name:
            </label>
            {isEditing ? (
              <input
                type="text"
                value={user.userName}
                onChange={(e) => setUser({ ...user, userName: e.target.value })}
                className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700"
              />
            ) : (
              <p className="text-gray-800 dark:text-gray-200">
                {user.userName}
              </p>
            )}
          </div>
          <div>
            <label className="text-gray-600 dark:text-gray-300 font-medium">
              Email:
            </label>
            {isEditing ? (
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700"
              />
            ) : (
              <p className="text-gray-800 dark:text-gray-200">{user.email}</p>
            )}
          </div>
          <button
            className={`w-full p-2 rounded-lg text-white font-semibold cursor-pointer ${
              isEditing
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={isEditing ? handleSaveProfile : () => setIsEditing(true)}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </button>
        </div>
      </motion.div>

      <div className="w-full md:w-2/3 space-y-6">
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Your Progress
          </h2>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            🔥 Streak:
            <span className="font-bold text-orange-600">{streak}</span>
          </p>
          <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
            ✅ Tasks Completed:
            <span className="font-bold text-green-600">{tasksCompleted}</span>
          </p>
          <div className="mt-3 space-y-1">
            <p className="text-gray-700 dark:text-gray-400">
              Easy:
              <span className="text-blue-600 font-semibold">{easyCount}</span>
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              Medium:
              <span className="text-yellow-600 font-semibold">
                {mediumCount}
              </span>
            </p>
            <p className="text-gray-700 dark:text-gray-400">
              Hard:
              <span className="text-red-600 font-semibold">{hardCount}</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex justify-between items-center"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Notifications
          </h2>
          <button
            className={`w-16 h-8 flex items-center rounded-full transition-all ${
              notificationsEnabled ? "bg-green-500" : "bg-gray-400"
            }`}
            onClick={toggleNotifications}
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform ${
                notificationsEnabled ? "translate-x-8" : "translate-x-1"
              } transition-transform`}
            />
          </button>
        </motion.div>
        <motion.div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Completed Tasks ✅
          </h2>

          {completedTasks.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300">
              No tasks completed yet.
            </p>
          ) : (
            <ul className="space-y-3">
              {completedTasks.map((task) => (
                <li
                  key={task.contestId + task.index}
                  className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg flex flex-col md:flex-row gap-2 md:gap-0 justify-between"
                >
                  <a
                    href={`https://codeforces.com/contest/${task.contestId}/problem/${task.index}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {task.name}
                  </a>
                  <span className="text-sm text-gray-500 dark:text-white/70">
                    Ratings: {task.rating}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default SettingsPage;
