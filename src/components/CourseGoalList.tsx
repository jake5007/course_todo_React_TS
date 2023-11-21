import { type ReactNode } from "react";
import { type CourseGoalListProps } from "../types";
import { CourseGoal, InfoBox } from "./";

const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning">
        Too many goals! Try not to put too much in your basket.
      </InfoBox>
    );
  }

  return (
    <>
      {goals.length === 0 ? (
        <InfoBox mode="hint" level="high">
          You have no course goals yet. Add some goals.
        </InfoBox>
      ) : (
        <>
          {warningBox}
          <ul>
            {goals.map((goal) => (
              <li key={goal.id}>
                <CourseGoal id={goal.id} title={goal.title} onDelete={onDelete}>
                  <p>{goal.description}</p>
                </CourseGoal>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
export default CourseGoalList;
