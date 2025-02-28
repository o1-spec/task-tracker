import { CheckCircle, ExternalLink } from "lucide-react"; // Icons
import { Task } from "../utils/types";

interface TaskListProps {
  tasks: Task[];
  completedTasks: string[];
  onComplete: (taskId: string) => void;
}

const TaskList = ({ tasks, completedTasks, onComplete }: TaskListProps) => {
  return (
    <div className="space-y-4 mt-4">
      {tasks.map((task) => {
        const isCompleted = completedTasks.includes(
          task.contestId + task.index
        );

        return (
          <div
            key={task.contestId + task.index}
            className={`p-5 border rounded-lg shadow-md transition duration-300 ${
              isCompleted ? "bg-green-100 border-green-500" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">{task.name}</h2>
              {isCompleted && <CheckCircle className="text-green-500" />}
            </div>
            <p className="text-sm text-gray-600">
              Difficulty:{" "}
              <span className="font-medium">{task.rating || "Unrated"}</span>
            </p>
            <div className="mt-3 flex items-center gap-4">
              <a
                href={`https://codeforces.com/problemset/problem/${task.contestId}/${task.index}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 flex items-center gap-1 hover:underline"
              >
                Solve Problem <ExternalLink size={16} />
              </a>
              {!isCompleted && (
                <button
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white cursor-pointer font-semibold rounded-md transition duration-300"
                  onClick={() => onComplete(task.contestId + task.index)}
                >
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TaskList;
