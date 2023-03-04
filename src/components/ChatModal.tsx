import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ChatModal({usersList,setChatActive,chatActive}:any) {
  return (
    <div className="bg-[#2C65C8] lg:block hidden w-[220px] text-white rounded-tl-lg rounded-tr-lg absolute bottom-0 right-[70px]">
        <div className="flex  justify-between p-2 px-3">
          <div className="flex gap-2">
            <ChatBubbleOutlineIcon className="mirror" />
            <p className="inline ">Chats</p>
          </div>
          {chatActive === "hidden" ? (
            <KeyboardArrowUpIcon
              onClick={() => {
                setChatActive("");
              }}
              sx={{ cursor: "pointer" }}
            />
          ) : (
            <KeyboardArrowDownIcon
              onClick={() => {
                setChatActive("hidden");
              }}
              sx={{ cursor: "pointer" }}
            />
          )}
        </div>

        <div className={`bg-white px-1 border border-[#2C65C8] ${chatActive}`}>
          <div className=" text-black px-5 h-[300px] overflow-y-scroll">
            {usersList.map((user: any) => (
              <>
                {/* <Link to="/home" state={{ user: user } as any}> */}
                <div className="flex flex-row justify-between items-center py-[5px] cursor-pointer ">
                  <div className="flex gap-[10px] items-center">
                    <img
                      className="lg:w-[32px] w-[28px] lg:h-[32px] h-[28px] rounded-full"
                      src={user.profilepicture}
                      alt="profile_pic"
                    />
                    <p className="text-xs font-avenir opacity-70">
                      {user.name}
                    </p>
                  </div>
                  {/* random */}
                  <p
                    className={`${
                      Math.floor(Math.random() * 2) === 0
                        ? "text-[#1CAD62]"
                        : "text-[#dfdfdf]"
                    } scale-[2.5]`}
                  >
                    &#x2022;
                  </p>
                </div>
                {/* </Link> */}
              </>
            ))}
          </div>
        </div>
      </div>
  )
}

export default ChatModal