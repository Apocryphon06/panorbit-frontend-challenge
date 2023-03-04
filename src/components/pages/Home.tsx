import { useState } from "react";
import { useLocation } from "react-router-dom";

// components
import Banner from "../Banner";
import Header from "../Header";

// svgs
import activeIcon from "../../assets/svg/activeIcon.svg";

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Home({ usersList }: any) {
  // active tabs state
  const [tab, setTab] = useState("Profile");

  const location: any = useLocation();
  const { user } = location.state;

  const [chatActive, setChatActive] = useState("hidden");

  return (
    <div className="flex flex-col lg:fixed">
      <div className="p-10 flex lg:flex-row flex-col justify-center items-center gap-[44px]">
        <div className="lg:w-[240px] bg-gradient-to-b from-inkBlue to-purple text-white flex flex-col justify-center items-start px-10 rounded-3xl lg:h-[90vh]">
          <div className="text-start flex lg:flex-col flex-row lg:gap-0 gap-5 lg:p-0 p-5 font-interRegular text-base text-[#A5A5E5]">
            {/* setting select menu title styles via state by tab value*/}
            <div className="flex">
              <p
                className={`cursor-pointer ${
                  tab === "Profile" ? "font-bold text-white" : ""
                }`}
                onClick={() => setTab("Profile")}
              >
                Profile{" "}
              </p>
              {tab === "Profile" ? (
                <img
                  className="lg:inline-block hidden w-[30px] relative left-[127px] bg-white rounded-tl-full rounded-bl-full"
                  src={activeIcon}
                  alt={activeIcon}
                />
              ) : (
                <></>
              )}
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
              {tab === "Posts" ? (
                <img
                  className="lg:inline-block hidden w-[30px] relative left-[135px] bg-white rounded-tl-full rounded-bl-full"
                  src={activeIcon}
                  alt={activeIcon}
                />
              ) : (
                <></>
              )}
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
              {tab === "Gallery" ? (
                <img
                  className="lg:inline-block hidden w-[30px] relative left-[123px] bg-white rounded-tl-full rounded-bl-full"
                  src={activeIcon}
                  alt={activeIcon}
                />
              ) : (
                <></>
              )}
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
              {tab === "ToDo" ? (
                <img
                  className="lg:inline-block hidden w-[30px] relative left-[137px] bg-white rounded-tl-full rounded-bl-full"
                  src={activeIcon}
                  alt={activeIcon}
                />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>

        <div className=" w-[70vw]">
          {tab === "Profile" && (
            <>
              <Header title="Profile" user={user} />
            </>
          )}
          {tab === "Posts" && (
            <>
              <Header title="Posts" user={user} />
              <Banner />
            </>
          )}
          {tab === "Gallery" && (
            <>
              <Header title="Gallery" user={user} />
              <Banner />
            </>
          )}
          {tab === "ToDo" && (
            <>
              <Header title="ToDo" user={user} />
              <Banner />
            </>
          )}
        </div>
      </div>


        {/* Chat Popup */}

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
                <div className="flex flex-row justify-between items-center py-[8px] cursor-pointer ">
                  <div className="flex gap-[10px] items-center">
                    <img
                      className="lg:w-[32px] w-[28px] lg:h-[32px] h-[28px] rounded-full"
                      src={user.profilepicture}
                      alt="profile_pic"
                    />
                    <p className="text-xs font-interRegular opacity-70">
                      {user.name}
                    </p>
                  </div>
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
    </div>
  );
}

export default Home;
