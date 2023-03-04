import React from "react";

function Info({ label, value }: any) {
  return (
    <p className="text-[#545454] font-avenir ">
      <span className="text-[#9a9a9a] font-avenir">{label}&nbsp;:</span>
      &nbsp;
      {value ?? ""}
    </p>
  );
}

export default Info;
