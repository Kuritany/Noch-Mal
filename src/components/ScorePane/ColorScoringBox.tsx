import { useState } from "react";
import { BoxColors } from "../../types/types";
import { Circled } from "../Symbols/Circled";
import { Cross } from "../Symbols/Cross";
import { ColorMap } from "../../constants/ColorMap";
import { useScoreContext } from "../../hooks/checkboxContext";

enum States {
  Blank = 0,
  Circled = 1,
  Scratched = 2
}

export const ColorScoringBox = ({
  score, color
}: {
  score: number; color: BoxColors
}) => {
  const [state, setState] = useState<States>(States.Blank);
  const stateArray: States[] = [States.Blank, States.Circled, States.Scratched];
  const { addColorScore, subtractColorScore } = useScoreContext();

  const onClick = () => {
    const nextState = stateArray[(state + 1) % stateArray.length];
    setState(nextState);
    if (nextState === States.Circled) addColorScore(score);
    if (nextState === States.Scratched) subtractColorScore(score);
  };

  return (
    <span
      className={`box ${color}`}
      onClick={onClick}
    >
      <span className="light" />
      <svg
        fill={ColorMap.get(color)}
        stroke={ColorMap.get(color)}
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
