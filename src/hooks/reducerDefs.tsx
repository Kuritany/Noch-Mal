import { allThemBoxes } from "../constants/mainGridBoxes";
import { CheckedState, MainGridCheckedState, Mark, MarkedState } from "../types/types";

export const mainGridInitialState: MainGridCheckedState[] = getAllThemCheckedStates();

function getAllThemCheckedStates(): MainGridCheckedState[] {
  const checkedStates: MainGridCheckedState[] = [];
  allThemBoxes.forEach((box) => {
    checkedStates.push({ index: box.index, stared: box.stared, isChecked: false });
  });
  return checkedStates;
}

export const mainGridReducer = (state: MainGridCheckedState[], action: any) => {
  switch (action.type) {
    case "check":
      const checkState = state.map((box: MainGridCheckedState) => {
        if (box.index === action.index) {
          return { ...box, isChecked: action.isChecked };
        } else {
          return box;
        }
      });
      sessionStorage.setItem("main",JSON.stringify(checkState));
      return checkState;
    case "resset":
      const ressetState = state.map((box: MainGridCheckedState) => {
        return { ...box, isChecked: false };
      });
      sessionStorage.setItem("main",JSON.stringify(ressetState));
      return ressetState;
    case "restore":
      return action.stored;
    default:
      return state;
  }
};

export const letterHeaderBoxesInitalState: CheckedState[] = [
  { index: "A", isChecked: false },
  { index: "B", isChecked: false },
  { index: "C", isChecked: false },
  { index: "D", isChecked: false },
  { index: "E", isChecked: false },
  { index: "F", isChecked: false },
  { index: "G", isChecked: false },
  { index: "H", isChecked: false },
  { index: "I", isChecked: false },
  { index: "J", isChecked: false },
  { index: "K", isChecked: false },
  { index: "L", isChecked: false },
  { index: "M", isChecked: false },
  { index: "N", isChecked: false },
  { index: "O", isChecked: false }
];

export const letterHeaderBoxesReducer = (state: CheckedState[], action: any) => {
  switch (action.type) {
    case "check":
      const checkState = state.map((box: CheckedState) => {
        if (box.index === action.index) {
          return { ...box, isChecked: action.isChecked };
        } else {
          return box;
        }
      });
      sessionStorage.setItem("headers",JSON.stringify(checkState));
      return checkState;
    case "resset":
      const ressetState = state.map((box: CheckedState) => {
        return { ...box, isChecked: false };
      });
      sessionStorage.setItem("headers",JSON.stringify(ressetState));
      return ressetState;
    case "restore":
      return action.stored;
    default:
      return state;
  }
};

export const letterScoreingBoxesInitialState: MarkedState[] = [
  { index: "A1st", score: 5, mark: Mark.Blank },
  { index: "B1st", score: 3, mark: Mark.Blank },
  { index: "C1st", score: 3, mark: Mark.Blank },
  { index: "D1st", score: 3, mark: Mark.Blank },
  { index: "E1st", score: 2, mark: Mark.Blank },
  { index: "F1st", score: 2, mark: Mark.Blank },
  { index: "G1st", score: 2, mark: Mark.Blank },
  { index: "H1st", score: 1, mark: Mark.Blank },
  { index: "I1st", score: 2, mark: Mark.Blank },
  { index: "J1st", score: 2, mark: Mark.Blank },
  { index: "K1st", score: 2, mark: Mark.Blank },
  { index: "L1st", score: 3, mark: Mark.Blank },
  { index: "M1st", score: 3, mark: Mark.Blank },
  { index: "N1st", score: 3, mark: Mark.Blank },
  { index: "O1st", score: 5, mark: Mark.Blank },
  { index: "A2nd", score: 3, mark: Mark.Blank },
  { index: "B2nd", score: 2, mark: Mark.Blank },
  { index: "C2nd", score: 2, mark: Mark.Blank },
  { index: "D2nd", score: 2, mark: Mark.Blank },
  { index: "E2nd", score: 1, mark: Mark.Blank },
  { index: "F2nd", score: 1, mark: Mark.Blank },
  { index: "G2nd", score: 1, mark: Mark.Blank },
  { index: "H2nd", score: 0, mark: Mark.Blank },
  { index: "I2nd", score: 1, mark: Mark.Blank },
  { index: "J2nd", score: 1, mark: Mark.Blank },
  { index: "K2nd", score: 1, mark: Mark.Blank },
  { index: "L2nd", score: 2, mark: Mark.Blank },
  { index: "M2nd", score: 2, mark: Mark.Blank },
  { index: "N2nd", score: 2, mark: Mark.Blank },
  { index: "O2nd", score: 3, mark: Mark.Blank }
];

export const letterScoreingBoxesReducer = (state: MarkedState[], action: any) => {
  switch (action.type) {
    case "mark":
      const checkState = state.map((box: MarkedState) => {
        if (box.index === action.index) {
          return { ...box, mark: action.mark };
        } else {
          return box;
        }
      });
      sessionStorage.setItem("columnScoring",JSON.stringify(checkState));
      return checkState;
    case "resset":
      const ressetState = state.map((box: MarkedState) => {
        return { ...box, mark: Mark.Blank };
      });
      sessionStorage.setItem("columnScoring",JSON.stringify(ressetState));
      return ressetState;
    case "restore":
        return action.stored;
    default:
      return state;
  }
};

export const colorScoreingBoxesInitialState: MarkedState[] = [
  { index: "R1st", score: 5, mark: Mark.Blank },
  { index: "G1st", score: 5, mark: Mark.Blank },
  { index: "B1st", score: 5, mark: Mark.Blank },
  { index: "Y1st", score: 5, mark: Mark.Blank },
  { index: "O1st", score: 5, mark: Mark.Blank },
  { index: "R2nd", score: 3, mark: Mark.Blank },
  { index: "G2nd", score: 3, mark: Mark.Blank },
  { index: "B2nd", score: 3, mark: Mark.Blank },
  { index: "Y2nd", score: 3, mark: Mark.Blank },
  { index: "O2nd", score: 3, mark: Mark.Blank }
];

export const colorScoreingBoxesReducer = (state: MarkedState[], action: any) => {
  switch (action.type) {
    case "mark":
      const checkState = state.map((box: MarkedState) => {
        if (box.index === action.index) {
          return { ...box, mark: action.mark };
        } else {
          return box;
        }
      });
      sessionStorage.setItem("colorScoring",JSON.stringify(checkState));
      return checkState;
    case "resset":
      const ressetState = state.map((box: MarkedState) => {
        return { ...box, mark: Mark.Blank };
      });
      sessionStorage.setItem("colorScoring",JSON.stringify(ressetState));
      return ressetState;
    case "restore":
      return action.stored;
    default:
      return state;
  }
};

export const jokerBoxesInitialState: CheckedState[] = [
  { index: "Joker0", isChecked: false },
  { index: "Joker1", isChecked: false },
  { index: "Joker2", isChecked: false },
  { index: "Joker3", isChecked: false },
  { index: "Joker4", isChecked: false },
  { index: "Joker5", isChecked: false },
  { index: "Joker6", isChecked: false },
  { index: "Joker7", isChecked: false }
];

export const jokerBoxesReducer = (state: CheckedState[], action: any) => {
  switch (action.type) {
    case "check":
      const checkState = state.map((box: CheckedState) => {
        if (box.index === action.index) {
          return { ...box, isChecked: action.isChecked };
        } else {
          return box;
        }
      });
      sessionStorage.setItem("jokers",JSON.stringify(checkState));
      return checkState;
    case "resset":
      const ressetState = state.map((box: CheckedState) => {
        return { ...box, isChecked: false };
      });
      sessionStorage.setItem("jokers",JSON.stringify(ressetState));
      return ressetState;
    case "restore":
      return action.stored;
    default:
      return state;
  }
};
