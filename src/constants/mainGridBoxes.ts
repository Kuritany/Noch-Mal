import { BoxData, ColumnData } from "../types/types";
import {
  boxA0,
  boxA1,
  boxA2,
  boxA3,
  boxA4,
  boxA5,
  boxA6,
  boxB0,
  boxB1,
  boxB2,
  boxB3,
  boxB4,
  boxB5,
  boxB6,
  boxC0,
  boxC1,
  boxC2,
  boxC3,
  boxC4,
  boxC5,
  boxC6,
  boxD0,
  boxD1,
  boxD2,
  boxD3,
  boxD4,
  boxD5,
  boxD6,
  boxE0,
  boxE1,
  boxE2,
  boxE3,
  boxE4,
  boxE5,
  boxE6,
  boxF0,
  boxF1,
  boxF2,
  boxF3,
  boxF4,
  boxF5,
  boxF6,
  boxG0,
  boxG1,
  boxG2,
  boxG3,
  boxG4,
  boxG5,
  boxG6,
  boxH0,
  boxH1,
  boxH2,
  boxH3,
  boxH4,
  boxH5,
  boxH6,
  boxI0,
  boxI1,
  boxI2,
  boxI3,
  boxI4,
  boxI5,
  boxI6,
  boxJ0,
  boxJ1,
  boxJ2,
  boxJ3,
  boxJ4,
  boxJ5,
  boxJ6,
  boxK0,
  boxK1,
  boxK2,
  boxK3,
  boxK4,
  boxK5,
  boxK6,
  boxL0,
  boxL1,
  boxL2,
  boxL3,
  boxL4,
  boxL5,
  boxL6,
  boxM0,
  boxM1,
  boxM2,
  boxM3,
  boxM4,
  boxM5,
  boxM6,
  boxN0,
  boxN1,
  boxN2,
  boxN3,
  boxN4,
  boxN5,
  boxN6,
  boxO0,
  boxO1,
  boxO2,
  boxO3,
  boxO4,
  boxO5,
  boxO6
} from "./boxesData";

const columnA: BoxData[] = [boxA0, boxA1, boxA2, boxA3, boxA4, boxA5, boxA6];
export const columnAdata: ColumnData = {
  column: "A",
  boxesData: columnA,
  pointsBase: 3,
  pointsFirstBonus: 2
};

const columnB: BoxData[] = [boxB0, boxB1, boxB2, boxB3, boxB4, boxB5, boxB6];
export const columnBdata: ColumnData = {
  column: "B",
  boxesData: columnB,
  pointsBase: 2,
  pointsFirstBonus: 1
};

const columnC: BoxData[] = [boxC0, boxC1, boxC2, boxC3, boxC4, boxC5, boxC6];
export const columnCdata: ColumnData = {
  column: "C",
  boxesData: columnC,
  pointsBase: 2,
  pointsFirstBonus: 1
};

const columnD: BoxData[] = [boxD0, boxD1, boxD2, boxD3, boxD4, boxD5, boxD6];
export const columnDdata: ColumnData = {
  column: "D",
  boxesData: columnD,
  pointsBase: 2,
  pointsFirstBonus: 1
};

const columnE: BoxData[] = [boxE0, boxE1, boxE2, boxE3, boxE4, boxE5, boxE6];
export const columnEdata: ColumnData = {
  column: "E",
  boxesData: columnE,
  pointsBase: 1,
  pointsFirstBonus: 1
};

const columnF: BoxData[] = [boxF0, boxF1, boxF2, boxF3, boxF4, boxF5, boxF6];
export const columnFdata: ColumnData = {
  column: "F",
  boxesData: columnF,
  pointsBase: 1,
  pointsFirstBonus: 1
};

const columnG: BoxData[] = [boxG0, boxG1, boxG2, boxG3, boxG4, boxG5, boxG6];
export const columnGdata: ColumnData = {
  column: "G",
  boxesData: columnG,
  pointsBase: 1,
  pointsFirstBonus: 1
};

const columnH: BoxData[] = [boxH0, boxH1, boxH2, boxH3, boxH4, boxH5, boxH6];
export const columnHdata: ColumnData = {
  column: "H",
  boxesData: columnH,
  pointsBase: 0,
  pointsFirstBonus: 1
};

const columnI: BoxData[] = [boxI0, boxI1, boxI2, boxI3, boxI4, boxI5, boxI6];
export const columnIdata: ColumnData = {
  column: "I",
  boxesData: columnI,
  pointsBase: 1,
  pointsFirstBonus: 1
};

const columnJ: BoxData[] = [boxJ0, boxJ1, boxJ2, boxJ3, boxJ4, boxJ5, boxJ6];
export const columnJdata: ColumnData = {
  column: "J",
  boxesData: columnJ,
  pointsBase: 1,
  pointsFirstBonus: 1
};

const columnK: BoxData[] = [boxK0, boxK1, boxK2, boxK3, boxK4, boxK5, boxK6];
export const columnKdata: ColumnData = {
  column: "K",
  boxesData: columnK,
  pointsBase: 1,
  pointsFirstBonus: 1
};

const columnL: BoxData[] = [boxL0, boxL1, boxL2, boxL3, boxL4, boxL5, boxL6];
export const columnLdata: ColumnData = {
  column: "L",
  boxesData: columnL,
  pointsBase: 2,
  pointsFirstBonus: 1
};

const columnM: BoxData[] = [boxM0, boxM1, boxM2, boxM3, boxM4, boxM5, boxM6];
export const columnMdata: ColumnData = {
  column: "M",
  boxesData: columnM,
  pointsBase: 2,
  pointsFirstBonus: 1
};

const columnN: BoxData[] = [boxN0, boxN1, boxN2, boxN3, boxN4, boxN5, boxN6];
export const columnNdata: ColumnData = {
  column: "N",
  boxesData: columnN,
  pointsBase: 2,
  pointsFirstBonus: 1
};

const columnO: BoxData[] = [boxO0, boxO1, boxO2, boxO3, boxO4, boxO5, boxO6];
export const columnOdata: ColumnData = {
  column: "O",
  boxesData: columnO,
  pointsBase: 3,
  pointsFirstBonus: 2
};

export const allThemBoxes: BoxData[] = [
  ...columnA,
  ...columnB,
  ...columnC,
  ...columnD,
  ...columnE,
  ...columnF,
  ...columnG,
  ...columnH,
  ...columnI,
  ...columnJ,
  ...columnK,
  ...columnL,
  ...columnM,
  ...columnN,
  ...columnO
];
