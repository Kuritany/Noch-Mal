import { useState } from "react";
import { ColumnId } from "../types/types";
import { Circled } from "./Symbols/Circled";
import { Cross } from "./Symbols/Cross";
import { useScoreContext } from "../hooks/checkboxContext";

enum States {
  Blank = 0,
  Circled = 1,
  Scratched = 2
}

export const ColumnScoringBox = ({
  columnId,
  score,
  redText = false,
  marginAdjust
}: {
  columnId: ColumnId;
  score: number;
  redText?: boolean;
  marginAdjust?: "top" | "bottom";
}) => {
  const [state, setState] = useState<States>(States.Blank);
  const stateArray: States[] = [States.Blank, States.Circled, States.Scratched];
  const { addLetterScore, subtractLetterScore } = useScoreContext();

  const OnClick = () => {
    const nextState = stateArray[(state + 1) % stateArray.length];
    setState(nextState);
    if (nextState === States.Circled) addLetterScore(score);
    if (nextState === States.Scratched) subtractLetterScore(score);
  };

  return (
    <span
      id={columnId}
      key={columnId}
      className={"main-grid-scoring-boxes" + (marginAdjust ? ` ${marginAdjust}-margin` : "")}
      onClick={OnClick}
    >
      <svg
        fill={redText ? "red" : "black"}
        stroke={redText ? "red" : "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        className="character"
      >
        <text
          x="47%"
          y="50%"
          fontSize="24"
          textAnchor="middle"
          dominantBaseline="central"
          className="small"
        >
          {score}
        </text>
      </svg>
      {state === States.Scratched && (
        <Cross />
      )}
      {state === States.Circled && (
        <Circled />
      )}
    </span>
  );
};
