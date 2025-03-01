import { CheckCircle, ExternalLink } from "lucide-react";
import { Task } from "../utils/types";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { updateSolvedCount } from "../utils/storage";

interface TaskListProps {
  tasks: Task[];
  completedTasks: string[];
  onComplete: (taskId: string, rating: number) => void;
}

const TaskList = ({ tasks, completedTasks, onComplete }: TaskListProps) => {
  return (
    <div className="mt-6 w-full max-w-2xl space-y-6">
      {tasks.map((task) => {
        const isCompleted = completedTasks.includes(
          task.contestId + task.index
        );

        return (
          <motion.div
            key={task.contestId + task.index}
            className={`p-5 border rounded-xl shadow-lg transition-all duration-300 flex flex-col gap-3 relative ${
              isCompleted
                ? "bg-green-100 dark:bg-green-900 border-green-500"
                : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            }`}
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {isCompleted && (
              <motion.div
                className="absolute inset-0 bg-green-500 opacity-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            )}

            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                {task.name}
              </h2>
              {isCompleted && (
                <CheckCircle className="text-green-500 w-6 h-6" />
              )}
            </div>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Difficulty:{" "}
              <span className="font-medium">{task.rating || "Unrated"}</span>
            </p>

            <div className="flex items-center justify-between">
              <a
                href={`https://codeforces.com/problemset/problem/${task.contestId}/${task.index}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:underline font-medium"
              >
                Solve Problem <ExternalLink size={16} />
              </a>
              {!isCompleted && (
                <button
                  className="px-4 py-2 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-semibold rounded-md transition-all shadow-sm"
                  onClick={() => {
                    onComplete(task.contestId + task.index, task.rating || 0);
                    toast.success(`Completed: ${task.name}`);
                    updateSolvedCount(task.rating || 0);
                  }}
                >
                  Mark as Completed
                </button>
              )}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TaskList;
