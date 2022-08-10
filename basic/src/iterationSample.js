import React from "react";

const IterationSample = () => {
  const name = ["눈사람", "얼음", "눈"];
  return (
    <div>
      {name.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </div>
  );
};

export default IterationSample;
