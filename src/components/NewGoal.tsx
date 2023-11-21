import { useRef, useState, type FormEvent } from "react";
import { type NewGoalProps } from "../types";
import { InfoBox } from ".";

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  const [showWarning, setShowWarning] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    if (enteredGoal.length === 0 || enteredSummary.length === 0) {
      setShowWarning(true);
    } else {
      e.currentTarget.reset();
      onAddGoal(enteredGoal, enteredSummary);
      setShowWarning(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="goal">Your goal</label>
          <input id="goal" type="text" ref={goal} />
        </p>
        <p>
          <label htmlFor="summary">Short summary</label>
          <input id="summary" type="text" ref={summary} />
        </p>
        <p>
          <button type="submit">Add Goal</button>
        </p>
      </form>
      {showWarning && (
        <InfoBox mode="warning" level="low">
          At least, You should write something...
        </InfoBox>
      )}
    </>
  );
};
export default NewGoal;
