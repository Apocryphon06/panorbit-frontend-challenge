import React from 'react'

import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ChatInputModal({name,minimize,openChat,setMinimize,setOpenChat}:any) {
  return (
    <div
        className={`bg-[#2C65C8] border-[#2C65C8] border-b-0 ${openChat} w-[220px] absolute bottom-1 rounded-tl-lg rounded-tr-lg right-[25%] text-white`}
      >
        <div className="flex  justify-between p-2 px-3">
          <div className="flex gap-2 items-center">
            <img
              className="w-[22px] h-[22px] rounded-full"
              src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1001.jpeg"
              alt="user_pic"
            />
            <p className="inline font-avenirBook text-sm">{name}</p>
          </div>
          <span>
            {minimize === "hidden" ? (
              <KeyboardArrowUpIcon
                onClick={() => {
                  setMinimize("");
                }}
                sx={{ cursor: "pointer", width: "22px", height: "22px" }}
              />
            ) : (
              <KeyboardArrowDownIcon
                onClick={() => {
                  setMinimize("hidden");
                }}
                sx={{ cursor: "pointer", width: "22px", height: "22px" }}
              />
            )}

            <CloseIcon
              onClick={() => setOpenChat("hidden")}
              sx={{ width: "20px", height: "20px", cursor: "pointer" }}
            />
          </span>
        </div>

        <div
          className={`bg-white p-2 border border-t-0 border-b-0 border-primaryBlue ${minimize} `}
        >
          <div className="h-[180px] overflow-y-scroll">
            {[1, 2, 2, 11, 1, 100, 1].map((item: any) => (
              <div
                className={`flex flex-col  ${
                  Math.floor(Math.random() * 2) === 0
                    ? "justify-end items-end"
                    : ""
                }`}
              >
                {Math.floor(Math.random() * 2) === 0 ? (
                  <p className="w-[180px] p-2 bg-[#f1f1f1] text-[#9a9a9a] text-xs my-2 rounded-md font-avenirBook">
                    Velit in incididunt cupsdas. asdasfsad asdasdas asdas
                  </p>
                ) : (
                  <p className="w-[180px] p-2 bg-[#f1f1f1] text-[#9a9a9a] text-xs my-2 rounded-md font-avenirBook">
                    Sei Cgaf Grsad
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex gap-1 items-center bg-white border border-t-0 border-primaryBlue ${minimize}`}
        >
          <div className="p-1 flex flex-row gap-1 justify-between items-center w-full mb-1">
            <input
              className="bg-none outline-none border text-black p-1 w-full font-avenirBook"
              style={{ fontSize: "12px", color: "#545454" }}
              type="text"
            />
            <SendIcon
              sx={{
                width: "22px",
                height: "22px",
                cursor: "pointer",
                color: "#2C65C8",
              }}
            />
          </div>
        </div>
      </div>
  )
}

export default ChatInputModal