import { type ReactNode } from "react";

export type CourseGoalTypes = {
  title: string;
  description: string;
  id: number;
};

export interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}

export interface CourseGoalProps {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  children: ReactNode;
}

export interface CourseGoalListProps {
  goals: CourseGoalTypes[];
  onDelete: (id: number) => void;
}

export interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void;
}

export interface InfoBoxProps {
  mode: "hint" | "warning";
  level?: "low" | "medium" | "high";
  children: ReactNode;
}
