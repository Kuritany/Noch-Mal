import {
  Dispatch,
  createContext,
  useCallback,
  useContext,
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
  const [colorScoringBoxesMarkedState, colorColoringBoxesMarkedDispatch] =
    useReducer(colorScoreingBoxesReducer, colorScoreingBoxesInitialState);
  const [letterHeaderBoxesState, letterHeaderBoxesDispatch] = useReducer(
    letterHeaderBoxesReducer,
    letterHeaderBoxesInitalState
  );
  const [letterScoreingBoxesState, letterScoreingBoxesDispatch] = useReducer(
    letterScoreingBoxesReducer,
    letterScoreingBoxesInitialState
  );
  const [jokerBoxesState, jokerBoxesDispatch] = useReducer(
    jokerBoxesReducer,
    jokerBoxesInitialState
  );
  const [mainGridState, mainGridDispatch] = useReducer(
    mainGridReducer,
    mainGridInitialState
  );
  const colorScore = useMemo<number>(() => {
    let value = 0;
    colorScoringBoxesMarkedState.forEach((el) => {
      if (el.mark === Mark.Circled) value += el.score;
    });
    return value;
  }, [colorScoringBoxesMarkedState]);

  const letterScore = useMemo<number>(() => {
    let value = 0;
    letterScoreingBoxesState.forEach((el) => {
      if (el.mark === Mark.Circled) value += el.score;
    });
    return value;
  }, [letterScoreingBoxesState]);

  const jokerScore = useMemo<number>(() => {
    return jokerBoxesState.filter((el) => !el.isChecked).length;
  }, [jokerBoxesState]);

  const starScore = useMemo<number>(() => {
    return mainGridState.filter((el) => el.stared && !el.isChecked).length * -2;
  }, [mainGridState]);

  return (
    <ScoreContext.Provider
      value={{
        colorScore,
        colorBoxesMarkedState: colorScoringBoxesMarkedState,
        colorBoxesMarkedDispatch: colorColoringBoxesMarkedDispatch,
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
