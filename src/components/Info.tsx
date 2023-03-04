import React from "react";

function Info({ label, value }: any) {
  return (
    <p className="w-[250px] text-base pt-[3px]">
      <span className="text-[#9a9a9a] font-avenirRoman">{label}&nbsp;:</span>
      &nbsp;
      <span className="text-[#545454] font-avenir">{value ?? ""}</span>
    </p>
  );
}

export default Info;
