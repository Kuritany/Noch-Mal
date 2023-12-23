export const ColorJoker = () => {
  return (
    <span className="white-square">
      <svg
        fill="black"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={0.5}
        className="character"
      >
        <text
          x="29%"
          y="50%"
          fontSize="24"
          textAnchor="middle"
          dominantBaseline="central"
        >
          X
        </text>
      </svg>
    </span>
  );
};
