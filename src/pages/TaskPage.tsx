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
} from "../utils/storage";
import { Task } from "../utils/types";
import { toast } from "react-hot-toast";
import ThemeToggle from "../components/ThemeToggle";
import { Settings } from "lucide-react";

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

  const handleCompleteTask = (taskId: string) => {
    markTaskAsCompleted(taskId);
    setCompletedTasks((prevCompleted) => [...prevCompleted, taskId]);

    if (localStorage.getItem("notifications") === "true") {
      toast.success("Task marked as completed!");
    }
  };

  useEffect(() => {
    const checkEndOfDay = () => {
      const now = new Date();
      if (now.getHours() === 23 && now.getMinutes() === 59) {
        if (completedTasks.length === 6) {
          updateStreak(streak + 1);
          setStreak(streak + 1);
          if (localStorage.getItem("notifications") === "true") {
            toast.success("Great job! Streak increased! 🔥");
          }
        } else {
          updateStreak(0);
          setStreak(0);
          if (localStorage.getItem("notifications") === "true") {
            toast.error("Streak lost! Complete all tasks next time.");
          }
        }
      }
    };
    const interval = setInterval(checkEndOfDay, 60000);
    return () => clearInterval(interval);
  }, [completedTasks, streak]);

  return (
    <div className="p-6 max-w-3xl mx-auto min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
      <a
        href="/settings"
        className="absolute top-6 right-28 p-1 rounded-full border dark:border-white/50 border-gray-800"
      >
        <Settings className="dark:text-white rounded-full text-black" />
      </a>
      <ThemeToggle />
      <h1 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        Daily Coding Tasks 🚀
      </h1>
      <p className="text-center text-lg font-medium text-gray-800 dark:text-gray-300">
        Streak: <span className="text-orange-500">{streak} 🔥</span>
      </p>
      <TaskList
        tasks={tasks}
        completedTasks={completedTasks}
        onComplete={handleCompleteTask}
      />
    </div>
  );
};

export default TaskPage;
