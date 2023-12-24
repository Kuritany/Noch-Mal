export const ScoreJoker = () => {
  return (
    <span className="score-label">
      <span className="joker-score">
      <svg
        fill="#404040"
        stroke="#404040"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="character"
      >
        <text x="45%" y="52%" fontSize="24" textAnchor="middle" dominantBaseline="central">
          !
        </text>
      </svg>
    </span>
      <span className="small-text">(+1)</span>
    </span>
  );
};
