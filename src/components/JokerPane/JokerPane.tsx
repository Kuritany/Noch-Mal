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
      <JokerMarker index="Joker0" />
      <JokerMarker index="Joker1" />
      <JokerMarker index="Joker2" />
      <JokerMarker index="Joker3" />
      <JokerMarker index="Joker4" />
      <JokerMarker index="Joker5" />
      <JokerMarker index="Joker6" />
      <JokerMarker index="Joker7" />
    </div>
  );
}
