import { useState } from "react";
import { useLocation } from "react-router-dom";
import Banner from "../Banner";
import Header from "../Header";

function Home() {
  const [tab, setTab] = useState("Profile");

  const location: any = useLocation();
  const { user } = location.state;

  return (
    <div className="p-10 flex flex-row items-center gap-[44px]">
      
      <div className="w-[250px] bg-gradient-to-b from-inkBlue to-purple text-white flex flex-col justify-center items-start px-10 rounded-3xl h-[627px]">
        <div className="text-start flex flex-col  font-ptSansRegular text-base text-[#A5A5E5]">
          {/* setting select menu title styles via state by tab value*/}
          <p
            className={`cursor-pointer ${
              tab === "Profile" ? "font-bold text-white" : ""
            }`}
            onClick={() => setTab("Profile")}
          >
            Profile
          </p>
          <div className="border-b border-[#A5A5E5] lg:w-[170px] my-2" />
          <p
            className={`cursor-pointer ${
              tab === "Posts" ? "font-bold text-white" : ""
            }`}
            onClick={() => setTab("Posts")}
          >
            Posts
          </p>
          <div className="border-b border-[#A5A5E5] lg:w-[170px] my-2" />

          <p
            className={`cursor-pointer ${
              tab === "Gallery" ? "font-bold text-white" : ""
            }`}
            onClick={() => setTab("Gallery")}
          >
            Gallery
          </p>
          <div className="border-b border-[#A5A5E5] lg:w-[170px] my-2" />

          <p
            className={`cursor-pointer ${
              tab === "ToDo" ? "font-bold text-white" : ""
            }`}
            onClick={() => setTab("ToDo")}
          >
            ToDo
          </p>
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
