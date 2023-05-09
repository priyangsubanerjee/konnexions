import React from "react";

function SnapBox({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-center">{children}</div>
  );
}

export default SnapBox;
