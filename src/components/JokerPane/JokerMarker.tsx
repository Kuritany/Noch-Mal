import { useMemo, useState } from "react";
import { Cross } from "../Symbols/Checking/Cross";
import { useScoreContext } from "../../hooks/checkboxContext";

export const JokerMarker = ({ index }: { index: string }) => {
  const {
    jokerBoxesState,
    jokerBoxesDispatch,
  } = useScoreContext();

  const isChecked = useMemo(
    () => jokerBoxesState.find((el) => el.index === index)!.isChecked,
    [jokerBoxesState]
  );

  const OnClick = () => {
    jokerBoxesDispatch({
      type: "check",
      index: index,
      isChecked: !isChecked,
    });
  };

  return (
    <span className="white-circle" onClick={() => OnClick()}>
      <svg
        fill="black"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="character"
      >
        <text
          x="45%"
          y="52%"
          fontSize="24"
          textAnchor="middle"
          dominantBaseline="central"
        >
          !
        </text>
      </svg>
      {isChecked && <Cross />}
    </span>
  );
};
