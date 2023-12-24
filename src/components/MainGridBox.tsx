import { useState } from "react";
import { BoxData } from "../types/types";
import { Cross } from "./Symbols/Cross";
import { Star } from "./Symbols/Star";
import { Circle } from "./Symbols/Circle";
import { useScoreContext } from "../hooks/checkboxContext";

export const MainGridBox = ({ box, centerLine }: { box: BoxData; centerLine?: boolean }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { addStarScore, subtractStarScore } = useScoreContext();

  const OnClick = (boxIndex: string) => {
    if (box.stared && !isChecked) addStarScore(2);
    if (box.stared && isChecked) subtractStarScore(2);
    setIsChecked(!isChecked);
  };

  return (
    <span
      id={box.index}
      key={box.index}
      className={`box ${box.color} ${centerLine ? "center-column" : ""}`}
      onClick={() => OnClick(box.index)}
    >
      {box.stared || <Circle />}
      {box.stared && (
        <Star />
      )}
      {isChecked && (
        <Cross />
      )}
    </span>
  );
};
