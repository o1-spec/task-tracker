import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

const SettingsPage = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({ userName: "", email: "" });
  const [streak, setStreak] = useState(0);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [stats, setStats] = useState({ easy: 0, medium: 0, hard: 0 });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    console.log(storedUser.userName);
    const storedNotifications =
      localStorage.getItem("notifications") === "true";
    const storedStreak = parseInt(localStorage.getItem("streak") || "0", 10);
    const storedTasks = parseInt(
      localStorage.getItem("tasksCompleted") || "0",
      10
    );
    const storedStats = JSON.parse(
      localStorage.getItem("stats") || '{"easy":0,"medium":0,"hard":0}'
    );

    if (storedUser.userName) setUser(storedUser);
    setNotificationsEnabled(storedNotifications);
    setStreak(storedStreak);
    setTasksCompleted(storedTasks);
    setStats(storedStats);
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
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 min-h-screen rounded-lg shadow-md flex flex-col md:flex-row gap-6">
      <div className="bg-white p-5 rounded-lg shadow-md w-full md:w-1/3">
        <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
        <div className="space-y-3">
          <div>
            <label className="text-gray-600 font-medium">Name:</label>
            {isEditing ? (
              <input
                type="text"
                value={user.userName}
                onChange={(e) => setUser({ ...user, userName: e.target.value })}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p className="text-gray-800">{user.userName}</p>
            )}
          </div>
          <div>
            <label className="text-gray-600 font-medium">Email:</label>
            {isEditing ? (
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="w-full p-2 border rounded-lg"
              />
            ) : (
              <p className="text-gray-800">{user.email}</p>
            )}
          </div>
          {isEditing ? (
            <button
              className="w-full bg-green-500 text-white p-2 rounded-lg mt-2"
              onClick={handleSaveProfile}
            >
              Save Changes
            </button>
          ) : (
            <button
              className="w-full bg-blue-500 text-white p-2 rounded-lg mt-2"
              onClick={() => setIsEditing(true)}
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="w-full md:w-2/3 space-y-6">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
          <p className="text-lg font-medium text-gray-700">
            🔥 Streak:{" "}
            <span className="font-bold text-orange-600">{streak} days</span>
          </p>
          <p className="text-lg font-medium text-gray-700">
            ✅ Tasks Completed:{" "}
            <span className="font-bold text-green-600">{tasksCompleted}</span>
          </p>
          <div className="mt-3 space-y-1">
            <p className="text-gray-700">
              Easy:{" "}
              <span className="text-blue-600 font-semibold">{stats.easy}</span>
            </p>
            <p className="text-gray-700">
              Medium:{" "}
              <span className="text-yellow-600 font-semibold">
                {stats.medium}
              </span>
            </p>
            <p className="text-gray-700">
              Hard:{" "}
              <span className="text-red-600 font-semibold">{stats.hard}</span>
            </p>
          </div>
        </div>

        <motion.div
          className="bg-white p-5 rounded-lg shadow-md flex justify-between items-center"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              notificationsEnabled
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={toggleNotifications}
          >
            {notificationsEnabled ? "On" : "Off"}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SettingsPage;
