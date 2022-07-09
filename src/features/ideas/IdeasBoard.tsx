import React from "react";
import { RootState } from "../../app/store";
import IdeaComponent from "./IdeaComponent";
import { useSelector } from "react-redux";

const IdeasBoard: React.FC = (): JSX.Element => {
  const { ideas } = useSelector((state: RootState) => state);
  return (
    <div className="wrapper border-2 border-red-50">
      {ideas.map((idea) => {
        return <IdeaComponent idea={idea} key={idea.id} />;
      })}
    </div>
  );
};

export default IdeasBoard;
