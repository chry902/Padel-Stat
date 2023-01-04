import React from "react";

const PointStatz = ({ goodPoints, badPoints }) => {
  const totalPoints = goodPoints + badPoints;
  const evaluation = (goodPoints / totalPoints) * 100;

  let result;
  let color;
  if (evaluation < 55) {
    result = "principiante";
    color = "#ff0000"; // rosso
  } else if (evaluation < 65) {
    result = "principiante avanzato";
    color = "#ff7f00"; // arancione
  } else if (evaluation < 75) {
    result = "intermedio";
    color = "#ffff00"; // giallo
  } else if (evaluation < 85) {
    result = "medio";
    color = "#e8fc03"; // verde
  } else {
    result = "pro";
    color = "#befc03"; // verde scuro
  }

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "20px",
          background: `linear-gradient(to right, #ff0000, ${color})`,
        }}
      ></div>
      <div>{result}</div>
    </div>
  );
};

export default PointStatz;
