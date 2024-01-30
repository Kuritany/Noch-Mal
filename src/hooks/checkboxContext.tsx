import {
  Dispatch,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import { CheckedState, Mark, MarkedState } from "../types/types";
import {
  colorScoreingBoxesInitialState,
  colorScoreingBoxesReducer,
  jokerBoxesInitialState,
  jokerBoxesReducer,
  letterHeaderBoxesInitalState,
  letterHeaderBoxesReducer,
  letterScoreingBoxesInitialState,
  letterScoreingBoxesReducer,
  mainGridInitialState,
  mainGridReducer,
} from "./reducerDefs";

interface IScore {
  colorScore: number;
  colorBoxesMarkedState: MarkedState[];
  colorBoxesMarkedDispatch: any;

  letterScore: number;
  letterHeaderBoxesState: CheckedState[];
  letterHeaderBoxesDispatch: any;
  letterScoreingBoxesState: MarkedState[];
  letterScoreingBoxesDispatch: any;

  jokerScore: number;
  jokerBoxesState: CheckedState[];
  jokerBoxesDispatch: any;

  starScore: number;
  mainGridState: CheckedState[];
  mainGridDispatch: any;
}

const ScoreContext = createContext<IScore>({} as IScore);

export const ScoreProvider = ({ children }: any) => {
  const [colorBoxesMarkedState, colorBoxesMarkedDispatch] = useReducer(
    colorScoreingBoxesReducer,
    sessionStorage.getItem("colorScoring")
      ? JSON.parse(sessionStorage.getItem("colorScoring") ?? "{}")
      : colorScoreingBoxesInitialState
  );
  const [letterHeaderBoxesState, letterHeaderBoxesDispatch] = useReducer(
    letterHeaderBoxesReducer,
    sessionStorage.getItem("headers")
      ? JSON.parse(sessionStorage.getItem("headers") ?? "{}")
      : letterHeaderBoxesInitalState
  );
  const [letterScoreingBoxesState, letterScoreingBoxesDispatch] = useReducer(
    letterScoreingBoxesReducer,
    sessionStorage.getItem("columnScoring")
      ? JSON.parse(sessionStorage.getItem("columnScoring") ?? "{}")
      : letterScoreingBoxesInitialState
  );
  const [jokerBoxesState, jokerBoxesDispatch] = useReducer(
    jokerBoxesReducer,
    sessionStorage.getItem("jokers")
      ? JSON.parse(sessionStorage.getItem("jokers") ?? "{}")
      : jokerBoxesInitialState
  );
  const [mainGridState, mainGridDispatch] = useReducer(
    mainGridReducer,
    sessionStorage.getItem("main")
      ? JSON.parse(sessionStorage.getItem("main") ?? "{}")
      : mainGridInitialState
  );
  const colorScore = useMemo<number>(() => {
    let value = 0;
    colorBoxesMarkedState.forEach((el: any) => {
      if (el.mark === Mark.Circled) value += el.score;
    });
    return value;
  }, [colorBoxesMarkedState]);

  const letterScore = useMemo<number>(() => {
    let value = 0;
    letterScoreingBoxesState.forEach((el: any) => {
      if (el.mark === Mark.Circled) value += el.score;
    });
    return value;
  }, [letterScoreingBoxesState]);

  const jokerScore = useMemo<number>(() => {
    return jokerBoxesState.filter((el: any) => !el.isChecked).length;
  }, [jokerBoxesState]);

  const starScore = useMemo<number>(() => {
    return (
      mainGridState.filter((el: any) => el.stared && !el.isChecked).length * -2
    );
  }, [mainGridState]);

  return (
    <ScoreContext.Provider
      value={{
        colorScore,
        colorBoxesMarkedState,
        colorBoxesMarkedDispatch,
        letterScore,
        letterHeaderBoxesState,
        letterHeaderBoxesDispatch,
        letterScoreingBoxesState,
        letterScoreingBoxesDispatch,
        starScore,
        mainGridState,
        mainGridDispatch,
        jokerScore,
        jokerBoxesState,
        jokerBoxesDispatch,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export function useScoreContext() {
  const context = useContext(ScoreContext);
  if (context === undefined) {
    throw new Error("Context is undefined");
  }
  return context;
}
