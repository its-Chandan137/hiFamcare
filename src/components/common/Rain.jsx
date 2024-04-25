import React from "react";

export const Rain = () => {
  const generateSpanStyles = (index) => {
    return { "--i": index }; ///////////dynamical style generation ---------
  };
  return (
    <div className="w-full h-full">
      <div className="rain relative flex flex-wrap z-99">
        {[11, 21, 10,22,18,12,16,14,20,22,13,15,17,23,11,16].map((index) => (
          <span key={index} style={generateSpanStyles(index)} className="opacity-65"></span>
        ))}
      </div>
      <div className="rain relative flex flex-wrap z-99">
        {[10,16,14,20,17,23,11,16].map((index) => (
          <span key={index} style={generateSpanStyles(index)} className="opacity-100"></span>
        ))}
      </div>
    </div>
  );
};
