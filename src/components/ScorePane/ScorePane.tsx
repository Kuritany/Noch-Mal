import { useState } from "react";
import { useScoreContext } from "../../hooks/checkboxContext";
import { BoxColors } from "../../types/types";
import { Bonus } from "./Bonus";
import { ColorScoringBox } from "./ColorScoringBox";
import { ScoreJoker } from "./ScoreJoker";
import { ScoreStar } from "./ScoreStar";
import "./scoreStyles.css";
import { ErasureButton } from "../SidePanel/ErasureButton";
import { ShareButton } from "../SidePanel/ShareButton";

export default function ScorePane() {
  const {
    colorScore,
    letterScore,
    jokerScore,
    starScore
  } = useScoreContext();
  const [isCancelConfirming, setIsCancelConforming] = useState(false);

  return (
    <div className="column right">
      <div className="row right">
        <ColorScoringBox score={5} color={BoxColors.Green} index="R1st" />
        <ColorScoringBox score={3} color={BoxColors.Green} index="R2nd" />
      </div>
      <div className="row right">
        <ColorScoringBox score={5} color={BoxColors.Yellow} index="G1st" />
        <ColorScoringBox score={3} color={BoxColors.Yellow} index="G2nd" />
      </div>
      <div className="row right">
        <ColorScoringBox score={5} color={BoxColors.Blue} index="B1st" />
        <ColorScoringBox score={3} color={BoxColors.Blue} index="B2nd" />
      </div>
      <div className="row right">
        <ColorScoringBox score={5} color={BoxColors.Red} index="Y1st" />
        <ColorScoringBox score={3} color={BoxColors.Red} index="Y2nd" />
      </div>
      <div className="row right">
        <ColorScoringBox score={5} color={BoxColors.Orange} index="O1st" />
        <ColorScoringBox score={3} color={BoxColors.Orange} index="O2nd" />
      </div>
      <div className="row right">
        <Bonus />
        <span className="score-container">
          <span>=</span>
          <span className="score">{colorScore}</span>
        </span>
      </div>
      <div className="row right">
        <span className="score-label letter-score">A-O</span>
        <span className="score-container">
          <span className="text-green">+</span>
          <span className="score">{letterScore}</span>
        </span>
      </div>
      <div className="row right">
        <ScoreJoker />
        <span className="score-container">
          <span className="text-green">+</span>
          <span className="score">{jokerScore}</span>
        </span>
      </div>
      <div className="row right">
        <ScoreStar />
        <span className="score-container">
          <span className="text-red">-</span>
          <span className="score">{starScore}</span>
        </span>
      </div>
      <div className="row right">
        <span className="spacer">---------------</span>
      </div>
      <div className="row right">
        <span className="score-label letter-score">TOTAL</span>
        <span className="score-container">
          <span>=</span>
          <span className="score">
            {colorScore + jokerScore + letterScore + starScore}
          </span>
        </span>
      </div>
      <div className="row right" style={{ marginTop: "auto" }}>
        <ShareButton />
        <ErasureButton />
      </div>
    </div>
  );
}
