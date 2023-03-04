import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function ChatModal({
  usersList,
  setChatActive,
  chatActive,
  setOpenChat,
  setName,
}: any) {
  return (
    <div className="bg-[#2C65C8] border-[#2C65C8] border-b-0 lg:block hidden w-[220px] text-white rounded-tl-lg rounded-tr-lg absolute bottom-1 right-[70px]">
      <div className="flex  justify-between p-2 px-3">
        <div className="flex gap-2 items-center">
          <ChatBubbleOutlineIcon
            sx={{ width: "22px", height: "22px" }}
            className="mirror"
          />
          <p className="inline font-avenirBook">Chats</p>
        </div>
        {chatActive === "hidden" ? (
          <KeyboardArrowUpIcon
            onClick={() => {
              setChatActive("");
            }}
            sx={{ cursor: "pointer", width: "22px", height: "22px" }}
          />
        ) : (
          <KeyboardArrowDownIcon
            onClick={() => {
              setChatActive("hidden");
            }}
            sx={{ cursor: "pointer", width: "22px", height: "22px" }}
          />
        )}
      </div>

      <div
        className={`bg-white px-1 border border-t-0 border-[#2C65C8] ${chatActive}`}
      >
        <div className=" text-black px-5 h-[300px] overflow-y-scroll">
          {usersList.map((user: any) => (
            <>
              {/* <Link to="/home" state={{ user: user } as any}> */}
              <div
                onClick={() => {
                  setOpenChat("");
                  setName(user.name);
                }}
                className="flex flex-row justify-between items-center py-[5px] cursor-pointer "
              >
                <div className="flex gap-[10px] items-center">
                  <img
                    className="lg:w-[32px] w-[28px] lg:h-[32px] h-[28px] rounded-full"
                    src={user.profilepicture}
                    alt="profile_pic"
                  />

                  <p className="text-sm font-avenirBook opacity-70">
                    {user.name}
                  </p>
                </div>
                {/* random */}
                <p
                  className={`${
                    Math.floor(Math.random() * 2) === 0
                      ? "text-[#1CAD62]"
                      : "text-[#dfdfdf]"
                  } scale-[2.5] relative bottom-[5px] left-[10px]`}
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
  );
}

export default ChatModal;
