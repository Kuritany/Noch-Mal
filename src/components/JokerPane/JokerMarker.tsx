import { useState } from "react";
import { Cross } from "../Symbols/Cross";
import { useScoreContext } from "../../hooks/checkboxContext";

export const JokerMarker = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { addJokerScore, subtractJokerScore } = useScoreContext();

  const OnClick = () => {
    if (isChecked) addJokerScore(1);
    if (!isChecked) subtractJokerScore(1);
    setIsChecked(!isChecked);
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
        <text x="45%" y="52%" fontSize="24" textAnchor="middle" dominantBaseline="central">
          !
        </text>
      </svg>
      {isChecked && <Cross />}
    </span>
  );
};
