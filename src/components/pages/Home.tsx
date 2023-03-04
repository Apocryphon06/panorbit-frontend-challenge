import { useState } from "react";
import { useLocation } from "react-router-dom";

// components
import Nav from "../Nav";
import Banner from "../Banner";
import Header from "../Header";
import ChatModal from "../ChatModal";

function Home({ usersList }: any) {
  // active tabs state to render content accordingly
  const [tab, setTab] = useState("Profile");

  const location: any = useLocation();
  const { user } = location.state;

  // chat modal visibility states
  const [chatActive, setChatActive] = useState("hidden");

  return (
    <div className="flex flex-col lg:fixed">
      <div className="p-10 flex lg:flex-row flex-col justify-center items-center gap-[44px]">
        {/* Side Navbar */}
        <Nav tab={tab} setTab={setTab} />

        {/* Header & Content*/}
        <div className=" w-[70vw]">
          {["Profile", "Posts", "Gallery", "ToDo"].map((item) => (
            <>
              {tab === item && (
                <>
                  <Header title={item} user={user} usersList={usersList} />
                  {item === "Profile" ? <></> : <Banner />}
                </>
              )}
            </>
          ))}
        </div>
      </div>

      {/* Chat Popup */}
      <ChatModal
        usersList={usersList}
        chatActive={chatActive}
        setChatActive={setChatActive}
      />
    </div>
  );
}

export default Home;
