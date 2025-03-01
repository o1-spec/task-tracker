import { useState, useEffect } from "react";
import TaskList from "../components/TaskList";
import { fetchTasks } from "../utils/api";
import {
  saveDailyTasks,
  getDailyTasks,
  getCompletedTasks,
  markTaskAsCompleted,
  getStreak,
  updateStreak,
  updateSolvedCount,
} from "../utils/storage";
import { Task } from "../utils/types";
import { toast } from "react-hot-toast";
import ThemeToggle from "../components/ThemeToggle";
import { Settings } from "lucide-react";
import { motion } from "framer-motion";

const TaskPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [streak, setStreak] = useState<number>(getStreak());
  const [completedTasks, setCompletedTasks] = useState<string[]>(
    getCompletedTasks()
  );

  useEffect(() => {
    const generateNewTasks = async () => {
      const newTasks: Task[] = await fetchTasks(streak);
      saveDailyTasks(newTasks);
      setTasks(newTasks);
    };

    const todayTasks = getDailyTasks();
    if (todayTasks) {
      setTasks(todayTasks);
    } else {
      generateNewTasks();
    }
  }, [streak]);

  const handleCompleteTask = (taskId: string, rating: number) => {
    if (completedTasks.includes(taskId)) return;

    markTaskAsCompleted(taskId);
    setCompletedTasks((prevCompleted) => {
      const updatedCompleted = [...prevCompleted, taskId];

      updateSolvedCount(rating);

      if (updatedCompleted.length === 6) {
        const newStreak = streak + 1;
        updateStreak(newStreak);
        setStreak(newStreak);
        toast.success(`🔥 Streak increased to ${newStreak}! Keep going!`);
      }
      return updatedCompleted;
    });

    if (localStorage.getItem("notifications") === "true") {
      toast.success("Task marked as completed!");
    }
  };

  useEffect(() => {
    const checkEndOfDay = () => {
      const now = new Date();
      if (now.getHours() === 23 && now.getMinutes() === 59) {
        if (completedTasks.length === 6) {
          const newStreak = streak + 1;
          updateStreak(newStreak);
          setStreak(newStreak);
          toast.success(`🔥 Streak increased to ${newStreak}!`);
        } else {
          updateStreak(0);
          setStreak(0);
          toast.error("Streak lost! Complete all tasks next time.");
        }
      }
    };
    const interval = setInterval(checkEndOfDay, 60000);
    return () => clearInterval(interval);
  }, [completedTasks, streak]);

  return (
    <div className="p-6 py-8 max-w-4xl mx-auto min-h-screen bg-gray-50 dark:bg-gray-900 transition-all">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Daily Coding Tasks 🚀
        </h1>
        <div className="flex items-center gap-4">
          <motion.a
            href="/settings"
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white shadow-sm transition"
          >
            <Settings className="w-5 h-5" />
            <span className="hidden sm:inline">Settings</span>
          </motion.a>
          <ThemeToggle />
        </div>
      </div>

      <p className="text-center dark:text-white text-lg font-medium">
        Streak: <span className="text-orange-500 ">{streak} 🔥</span>
      </p>
      <div className="flex items-center flex-col">
        <TaskList
          tasks={tasks}
          completedTasks={completedTasks}
          onComplete={(taskId: string, rating: number) =>
            handleCompleteTask(taskId, rating)
          }
        />
      </div>
    </div>
  );
};

export default TaskPage;
