import JokerPane from "./components/JokerPane/JokerPane";
import { MainGridColumn } from "./components/MainGridColumn";
import ScorePane from "./components/ScorePane/ScorePane";
import {
  columnAdata,
  columnBdata,
  columnCdata,
  columnDdata,
  columnEdata,
  columnFdata,
  columnGdata,
  columnHdata,
  columnIdata,
  columnJdata,
  columnKdata,
  columnLdata,
  columnMdata,
  columnNdata,
  columnOdata
} from "./constants/mainGridBoxes";
import { ScoreProvider } from "./hooks/checkboxContext";
import "./mainStyles.css";

/*
Auto borad rules:
every column and row has every color
every line has every color
for each color, there are 6 regimes, each with a different number of boxes.
there is never more than one regime of the same color in the same column
*/

export default function App() {
  return (
    <ScoreProvider>
      <div id="base" className="row base">
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
    </ScoreProvider>
  );
}
