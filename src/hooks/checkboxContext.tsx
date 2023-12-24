import { createContext, useCallback, useContext, useState } from "react";

interface IScore {
  colorScore: number;
  addColorScore: (points: number) => void;
  subtractColorScore: (points: number) => void;

  letterScore: number;
  addLetterScore: (points: number) => void;
  subtractLetterScore: (points: number) => void;

  jokerScore: number;
  addJokerScore: (points: number) => void;
  subtractJokerScore: (points: number) => void;

  starScore: number;
  addStarScore: (points: number) => void;
  subtractStarScore: (points: number) => void;
}

const ScoreContext = createContext<IScore>({} as IScore);

export const ScoreProvider = ({ children }: any) => {
  const [colorScore, setColorScore] = useState<number>(0);
  const [letterScore, setLetterScore] = useState<number>(0);
  const [jokerScore, setJokerScore] = useState<number>(8);
  const [starScore, setStarScore] = useState<number>(-30);

  const addColorScore = useCallback((points: number) => setColorScore((prev) => prev + points), []);
  const subtractColorScore = useCallback((points: number) => setColorScore((prev) => prev - points), []);

  const addLetterScore = useCallback((points: number) => setLetterScore((prev) => prev + points), []);
  const subtractLetterScore = (points: number) => setLetterScore((prev) => prev - points);

  const addStarScore = useCallback((points: number) => setStarScore((prev) => prev + points), []);
  const subtractStarScore = (points: number) => setStarScore((prev) => prev - points);

  const addJokerScore = useCallback((points: number) => setJokerScore((prev) => prev + points), []);
  const subtractJokerScore = useCallback((points: number) => setJokerScore((prev) => prev - points), []);

  return (
    <ScoreContext.Provider
      value={{
        colorScore,
        addColorScore,
        subtractColorScore,
        letterScore,
        addLetterScore,
        subtractLetterScore,
        starScore,
        addStarScore,
        subtractStarScore,
        jokerScore,
        addJokerScore,
        subtractJokerScore
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
