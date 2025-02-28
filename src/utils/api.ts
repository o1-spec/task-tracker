import axios from "axios";

export const fetchTasks = async (streak: number) => {
  try {
    const response = await axios.get(
      "https://codeforces.com/api/problemset.problems"
    );
    const problems = response.data.result.problems;

    const easyProblems = problems.filter(
      (p: { rating: number }) => p.rating >= 800 && p.rating <= 1400
    );
    const mediumProblems = problems.filter(
      (p: { rating: number }) => p.rating >= 1500 && p.rating <= 2000
    );
    const hardProblems = problems.filter(
      (p: { rating: number }) => p.rating > 2000
    );

    let dailyTasks;
    if (streak < 3) {
      dailyTasks = [
        ...easyProblems.sort(() => 0.5 - Math.random()).slice(0, 4),
        ...mediumProblems.sort(() => 0.5 - Math.random()).slice(0, 2),
      ];
    } else {
      dailyTasks = [
        ...easyProblems.sort(() => 0.5 - Math.random()).slice(0, 4),
        ...mediumProblems.sort(() => 0.5 - Math.random()).slice(0, 1),
        ...hardProblems.sort(() => 0.5 - Math.random()).slice(0, 1),
      ];
    }

    return dailyTasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
};
