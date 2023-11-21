import { type CourseGoalProps } from "../types";

const CourseGoal = ({ id, title, onDelete, children }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Del</button>
    </article>
  );
};

export default CourseGoal;
