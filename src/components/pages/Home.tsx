import { useState } from "react";
import { useLocation } from "react-router-dom";

// components
import Banner from "../Banner";
import Header from "../Header";

// svgs
import activeIcon from "../../assets/svg/activeIcon.svg";

function Home({usersList}:any) {
  // active tabs state
  const [tab, setTab] = useState("Profile");

  const location: any = useLocation();
  const { user } = location.state;

  return (
    <div className="p-10 flex lg:flex-row flex-col justify-center items-center gap-[44px]">
      <div className="lg:w-[240px] bg-gradient-to-b from-inkBlue to-purple text-white flex flex-col justify-center items-start px-10 rounded-3xl lg:h-[90vh]">
        <div className="text-start flex lg:flex-col flex-row lg:gap-0 gap-5 lg:p-0 p-5 font-ptSansRegular text-base text-[#A5A5E5]">
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

      <div className="h-[627px] w-[70vw]">
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
  );
}

export default Home;
