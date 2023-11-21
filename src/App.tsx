import { useState, useEffect } from "react";
import { type CourseGoalTypes } from "./types";
import { Header, CourseGoalList, NewGoal } from "./components";
import goalsImg from "./assets/goals.jpg";

const App = () => {
  const [goals, setGoals] = useState<CourseGoalTypes[]>([]);

  useEffect(() => {
    const storedGoals = localStorage.getItem("goals");

    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  const setLocalGoals = (newGoals: CourseGoalTypes[]) => {
    localStorage.setItem("goals", JSON.stringify(newGoals));
  };

  const handleAddGoal = (goal: string, summary: string) => {
    setGoals((prev) => {
      const newGoal: CourseGoalTypes = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      const newGoals = [...prev, newGoal];
      setLocalGoals(newGoals);
      return newGoals;
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prev) => {
      const newGoals = prev.filter((goal) => goal.id !== id);
      setLocalGoals(newGoals);
      return newGoals;
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "a list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
};

export default App;
