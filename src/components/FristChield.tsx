import { useEffect } from "react";
import { columnAdata, columnBdata, columnCdata, columnDdata, columnEdata, columnFdata, columnGdata, columnHdata, columnIdata, columnJdata, columnKdata, columnLdata, columnMdata, columnNdata, columnOdata } from "../constants/mainGridBoxes";
import { useScoreContext } from "../hooks/checkboxContext";
import JokerPane from "./JokerPane/JokerPane";
import { MainGridColumn } from "./MainGridColumn";
import ScorePane from "./ScorePane/ScorePane";

export default function FirstChield() {
  const { colorScore, letterScore, jokerScore, starScore } = useScoreContext();

  useEffect(() => {
    console.log("colorScore", colorScore);
    console.log("letterScore", letterScore);
    console.log("jokerScore", jokerScore);
    console.log("starScore", starScore);
  }, [colorScore, jokerScore, letterScore, starScore]);

  return (
      <div className="row root">
        <div>
          <div className="row">
            <MainGridColumn column={columnAdata} />
            <MainGridColumn column={columnBdata} />
            <MainGridColumn column={columnCdata} />
            <MainGridColumn column={columnDdata} />
            <MainGridColumn column={columnEdata} />
            <MainGridColumn column={columnFdata} />
            <MainGridColumn column={columnGdata} />
            <MainGridColumn column={columnHdata} centerLine />
            <MainGridColumn column={columnIdata} />
            <MainGridColumn column={columnJdata} />
            <MainGridColumn column={columnKdata} />
            <MainGridColumn column={columnLdata} />
            <MainGridColumn column={columnMdata} />
            <MainGridColumn column={columnNdata} />
            <MainGridColumn column={columnOdata} />
          </div>
          <JokerPane />
        </div>
        <ScorePane />
      </div>
  );
}