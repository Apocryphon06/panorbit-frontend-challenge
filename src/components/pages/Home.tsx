import { useState } from "react";
import Banner from "../Banner";
import Header from "../Header";

function Home() {
  const [tab, setTab] = useState("Profile");

  return (
    <div className="p-[47px] flex flex-row items-center gap-[44px]">
      <div className="w-[250px] bg-gradient-to-b from-[#3A58C8] to-[#5e3bc8] text-white flex flex-col justify-center items-start px-10 rounded-3xl h-[627px]">
        <div className="text-start flex flex-col gap-[20px] font-semibold text-base">
          <p
            className="cursor-pointer font-semibold"
            onClick={() => setTab("Profile")}
          >
            Profile
          </p>
          <p
            className="cursor-pointer font-semibold"
            onClick={() => setTab("Posts")}
          >
            Posts
          </p>
          <p
            className="cursor-pointer font-semibold"
            onClick={() => setTab("Gallery")}
          >
            Gallery
          </p>
          <p
            className="cursor-pointer font-semibold"
            onClick={() => setTab("ToDo")}
          >
            ToDo
          </p>
        </div>
      </div>

      <div className="h-[627px] w-[70vw]">
        {tab === "Profile" && (
          <>
            <Header title="Profile" user="Leanne Graham" />
          </>
        )}
        {tab === "Posts" && (
          <>
            <Header title="Posts" user="Leanne Graham" />
            <Banner />
          </>
        )}
        {tab === "Gallery" && (
          <>
            <Header title="Gallery" user="Leanne Graham" />
            <Banner />
          </>
        )}
        {tab === "ToDo" && (
          <>
            <Header title="ToDo" user="Leanne Graham" />
            <Banner />
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
