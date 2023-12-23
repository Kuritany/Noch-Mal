import { useEffect } from "react";
import { useScoreContext } from "../../hooks/checkboxContext";
import { ColorJoker } from "./ColorJoker";
import { JokerMarker } from "./JokerMarker";
import { NumberJoker } from "./Numberjoker";
import "./jokerStyles.css";

export default function JokerPane() {  
  return (
    <div className="joker-pane">
      <NumberJoker />
      <span className="text">/</span>
      <ColorJoker />
      <span className="text">=</span>
      <JokerMarker />
      <JokerMarker />
      <JokerMarker />
      <JokerMarker />
      <JokerMarker />
      <JokerMarker />
      <JokerMarker />
      <JokerMarker />
    </div>
  );
}
