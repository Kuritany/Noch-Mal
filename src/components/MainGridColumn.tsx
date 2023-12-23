import { useEffect } from "react";
import { ColumnData } from "../types/types";
import { ColumnIdBox } from "./ColumnIdBox";
import { ColumnScoringBox } from "./ColumnScoringBox";
import { MainGridBox } from "./MainGridBox";
import { useScoreContext } from "../hooks/checkboxContext";

export const MainGridColumn = ({
  column,
  centerLine
}: {
  column: ColumnData;
  centerLine?: boolean;
}) => {  
  return (
    <div className="column">
      <ColumnIdBox columnId={column.column} redText={centerLine} marginAdjust="bottom" />
      {column.boxesData.map((box) => (
        <MainGridBox key={box.index} box={box} centerLine={centerLine} />
      ))}
      <ColumnScoringBox
        columnId={column.column}
        redText={centerLine} 
        score={column.pointsFirstBonus + column.pointsBase}
        marginAdjust="top"
      />
      <ColumnScoringBox
        columnId={column.column}
        redText={centerLine} 
        score={column.pointsBase}
      />
    </div>
  );
};
