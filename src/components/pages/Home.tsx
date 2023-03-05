import { useState } from "react";
import { useLocation } from "react-router-dom";

// components
import Nav from "../Nav";
import Banner from "../Banner";
import Header from "../Header";
import ChatModal from "../ChatModal";

// mui imports
import ChatInputModal from "../ChatInputModal";

function Home({ usersList }: any) {
  // active tabs state to render content accordingly
  const [tab, setTab] = useState("Profile");

  const location: any = useLocation();
  const { user } = location.state;

  // chat modal visibility states
  const [chatActive, setChatActive] = useState("hidden");

  // log out modal states & handler functions
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // active chat window states
  const [openChat, setOpenChat] = useState("hidden");
  const [minimize, setMinimize] = useState("");

  const [name, setName] = useState("");

  return (
    <div
      onClick={open ? handleClose : () => {}}
      className="flex flex-col lg:fixed"
    >
      <div className="p-10 flex lg:flex-row flex-col justify-center items-center gap-[44px]">
        {/* Side Navbar */}
        <Nav tab={tab} setTab={setTab} />

        {/* Header & Content*/}
        <div className=" w-[70vw]">
          {["Profile", "Posts", "Gallery", "ToDo"].map((item) => (
            <>
              {tab === item && (
                <>
                  <Header
                    open={open}
                    handleClose={handleClose}
                    handleOpen={handleOpen}
                    title={item}
                    user={user}
                    usersList={usersList}
                  />
                  {item === "Profile" ? <></> : <Banner />}
                </>
              )}
            </>
          ))}
        </div>
      </div>

      {/* Chat Popup */}
      <ChatModal
        setName={setName}
        usersList={usersList}
        chatActive={chatActive}
        setChatActive={setChatActive}
        setOpenChat={setOpenChat}
      />

      <ChatInputModal
        name={name}
        minimize={minimize}
        openChat={openChat}
        setMinimize={setMinimize}
        setOpenChat={setOpenChat}
      />
    </div>
  );
}

export default Home;
