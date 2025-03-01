import { CheckCircle, ExternalLink } from "lucide-react";
import { Task } from "../utils/types";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";

interface TaskListProps {
  tasks: Task[];
  completedTasks: string[];
  onComplete: (taskId: string) => void;
}

const TaskList = ({ tasks, completedTasks, onComplete }: TaskListProps) => {
  return (
    <div className="mt-6 w-full max-w-2xl">
      {tasks.map((task) => {
        const isCompleted = completedTasks.includes(
          task.contestId + task.index
        );

        return (
          <motion.div
            key={task.contestId + task.index}
            className={`p-5 border rounded-lg shadow-md transition-all duration-300 flex flex-col gap-3 ${
              isCompleted
                ? "bg-green-50 border-green-500"
                : "bg-white border-gray-300"
            }`}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {task.name}
              </h2>
              {isCompleted && (
                <CheckCircle className="text-green-500 w-6 h-6" />
              )}
            </div>
            <p className="text-sm text-gray-600">
              Difficulty:{" "}
              <span className="font-medium text-gray-800">
                {task.rating || "Unrated"}
              </span>
            </p>
            <div className="flex items-center justify-between">
              <a
                href={`https://codeforces.com/problemset/problem/${task.contestId}/${task.index}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 flex items-center gap-1 hover:underline font-medium"
              >
                Solve Problem <ExternalLink size={16} />
              </a>
              {!isCompleted && (
                <button
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-all duration-300 shadow-sm"
                  onClick={() => {
                    onComplete(task.contestId + task.index);
                    if (localStorage.getItem("notifications") === "true") {
                      toast.success(`Completed: ${task.name}`);
                    }
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
