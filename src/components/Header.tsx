import React from "react";

function Header({title, user}:any) {
  return (
    <div className="h-[627px] w-[70vw]">
      <div className="flex flex-row justify-between items-center py-[20px] border-b border-[#d8d8d8]">
        <p className="text-lg font-semibold">{title}</p>

        <div className="flex gap-2 items-center">
          <img
            className="w-[24px] h-[24px] rounded-full"
            src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
            alt="avatar"
          />
          <p className="cursor-pointer">Leanne Graham</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
