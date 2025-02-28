export const saveDailyTasks = (tasks: unknown[]) => {
  localStorage.setItem("dailyTasks", JSON.stringify(tasks));
  localStorage.setItem("tasksDate", new Date().toDateString());
};

export const getDailyTasks = () => {
  const tasksDate = localStorage.getItem("tasksDate");
  if (tasksDate === new Date().toDateString()) {
    const tasks = localStorage.getItem("dailyTasks");
    return tasks ? JSON.parse(tasks) : null;
  }
  return null;
};

export const markTaskAsCompleted = (taskId: string) => {
  const storedTasks = localStorage.getItem("completedTasks");
  const completedTasks: string[] = storedTasks ? JSON.parse(storedTasks) : [];
  if (!completedTasks.includes(taskId)) {
    completedTasks.push(taskId);
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }
};

export const getCompletedTasks = () => {
  const completedTasks = localStorage.getItem("completedTasks");
  return completedTasks ? JSON.parse(completedTasks) : [];
};

export const updateStreak = (newStreak: number) => {
  localStorage.setItem("streak", newStreak.toString());
};

export const getStreak = () => {
  const streak = localStorage.getItem("streak");
  return streak ? parseInt(streak, 10) : 0;
};
