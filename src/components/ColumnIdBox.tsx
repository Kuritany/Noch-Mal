import { useState } from "react";
import { ColumnId } from "../types/types";
import { Cross } from "./Symbols/Cross";

export const ColumnIdBox = ({
  columnId,
  redText = false,
  marginAdjust
}: {
  columnId: ColumnId;
  redText?: boolean;
  marginAdjust?: "top" | "bottom";
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const OnClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <span
      id={columnId}
      key={columnId}
      className={"main-grid-scoring-boxes " + marginAdjust}
      onClick={() => OnClick()}
    >
      <svg
        fill={redText ? "red" : "black"}
        stroke={redText ? "red" : "black"}
        strokeWidth={0.5}
        strokeLinecap="round"
        strokeLinejoin="round"
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
          {columnId}
        </text>
      </svg>
      {isChecked && (
        <Cross />
      )}
    </span>
  );
};
