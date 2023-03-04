import React from "react";
import ActiveIcon from "./ActiveIcon";

function Nav({ tab, setTab }: any) {
  return (
    <div className="lg:w-[240px] bg-gradient-to-b from-inkBlue to-purple text-white flex flex-col justify-center items-start px-10 lg:rounded-3xl lg:h-[90vh]">
      <div className="text-start flex lg:flex-col flex-row lg:gap-0 gap-5 lg:p-0 p-5 font-avenirRoman text-base text-[#A5A5E5]">
        {/* setting active highlight for text on active tab */}
        <div className="flex">
          <p
            className={`cursor-pointer ${
              tab === "Profile" ? "font-bold text-white" : ""
            }`}
            onClick={() => setTab("Profile")}
          >
            Profile{" "}
          </p>
          {tab === "Profile" ? <ActiveIcon pos="left-[127px]" /> : <></>}
        </div>

        <div className="border-b border-[#A5A5E5] lg:w-[170px] my-2" />
        <div className="flex">
          <p
            className={`cursor-pointer ${
              tab === "Posts" ? "font-bold text-white" : ""
            }`}
            onClick={() => setTab("Posts")}
          >
            Posts
          </p>
          {tab === "Posts" ? <ActiveIcon pos="left-[135px]" /> : <></>}
        </div>

        <div className="border-b border-[#A5A5E5] lg:w-[170px] my-2" />

        <div className="flex">
          <p
            className={`cursor-pointer ${
              tab === "Gallery" ? "font-bold text-white" : ""
            }`}
            onClick={() => setTab("Gallery")}
          >
            Gallery
          </p>
          {tab === "Gallery" ? <ActiveIcon pos="left-[123px]" /> : <></>}
        </div>

        <div className="border-b border-[#A5A5E5] lg:w-[170px] my-2" />

        <div className="flex">
          <p
            className={`cursor-pointer ${
              tab === "ToDo" ? "font-bold text-white" : ""
            }`}
            onClick={() => setTab("ToDo")}
          >
            ToDo
          </p>
          {tab === "ToDo" ? <ActiveIcon pos="left-[137px]" /> : <></>}
        </div>
      </div>
    </div>
  );
}

export default Nav;
