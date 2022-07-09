import React from "react";
import { Idea } from "./ideasSlice";

type Props = {
  idea: Idea;
};

const IdeaComponent = ({ idea }: Props) => {
  return (
    <div>
      <h1>{idea.idea}</h1>
      <h1>{idea.category}</h1>
    </div>
  );
};

export default IdeaComponent;
