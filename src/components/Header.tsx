import { Box, Modal } from "@mui/material";
import { useState } from "react";
import map from "../assets/images/map.png";
import { Link } from "react-router-dom";
import Info from "./Info";

function Header({ title, user, usersList }: any) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="lg:h-[627px] lg:w-[70vw]">
        <div className="flex flex-row justify-between items-center py-[20px] border-b border-[#d8d8d8]">
          <p className="text-lg font-avenirBook  text-[#545454]">{title}</p>

          <div onClick={handleOpen} className="flex gap-2 items-center">
            <img
              className="w-[28px] h-[28px] rounded-full cursor-pointer"
              src={user.profilepicture}
              alt="avatar"
            />
            <p className="cursor-pointer font-avenirBook">{user.name}</p>
          </div>
        </div>

        {title === "Profile" && (
          <div className="flex lg:flex-row flex-col justify-center pt-[30px] text-base text-start">
            {/* Bio */}
            <div className="lg:border-r p-5 flex flex-col justify-center">
              <img
                className="w-[170px] h-[170px] rounded-full m-auto"
                src={user.profilepicture}
                alt="account_picture"
              />
              <p className="text-[#545454] pt-[10px] text-center font-avenir">
                {user.name ?? ""}
              </p>

              <div className="border-b border-[#CACACA] flex flex-col gap-1 px-5 py-2">
                {[
                  { label: "Username", value: user.username },
                  { label: "e-mail", value: user.email },
                  { label: "Phone", value: user.phone },
                  { label: "Website", value: user.website },
                ].map((item) => (
                  <Info label={item.label} value={item.value} />
                ))}
              </div>

              {/* Company Details */}

              <div className="flex flex-col gap-1 mt-[10px]">
                <p className=" text-[#9a9a9a] font-avenirRoman text-center">Company</p>

                <div className="px-5">
                  {[
                    { label: "Name", value: user.company.name },
                    { label: "catchphrase", value: user.company.catchPhrase },
                    { label: "bs", value: user.company.bs },
                  ].map((item) => (
                    <Info label={item.label} value={item.value} />
                  ))}
                </div>
              </div>
            </div>

            {/* Address details */}
            <div className="p-5 ">
              <div className="border-t border-[#d8d8d8] lg:hidden block mb-2" />

              <p className="text-[#9a9a9a] font-avenirRoman">Address:</p>
              <div className="px-5 ">
                <div className="flex flex-col gap-1 px-2">
                  {[
                    { label: "Street", value: user.address.street },
                    { label: "Suite", value: user.address.suite },
                    { label: "City", value: user.address.city },
                    { label: "Zipcode", value: user.address.zipcode },
                  ].map((item) => (
                    <Info label={item.label} value={item.value} />
                  ))}
                </div>

                {/* Map & geo details */}
                <div>
                  <img
                    className="lg:h-[300px]  rounded-2xl p-2"
                    src={map}
                    alt={map}
                  />
                  <div className="flex flex-row gap-5 justify-end px-2">
                    <p className="text-[#545454] font-avenirBook text-xs">
                      <span className="text-[#9a9a9a] font-avenirBook">
                        Lat&nbsp;:
                      </span>
                      &nbsp;
                      {user.address.geo.lat ?? ""}
                    </p>
                    <p className="text-[#545454] font-avenirBook text-xs">
                      <span className="text-[#9a9a9a] font-avenirBook">
                        Long&nbsp;:
                      </span>
                      &nbsp;
                      {user.address.geo.lng ?? ""}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>

      {/* Log out modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // hideBackdrop
      >
        <Box
          style={{
            textAlign: "center",
            // borderRadius: "24px",
            outline: "none",
            position: "absolute" as "absolute",
            top: "40%",
            left: "85%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="flex flex-col justify-center items-center p-10 w-[270px] rounded-2xl shadow-md bg-white">
            <img
              className="w-[90px] h-[90px] rounded-full mb-[10px]"
              src={user.profilepicture}
              alt={user.profilepicture}
            />

            <div className="flex flex-col">
              <p className="text-[18px] font-avenirBook ">{user.name}</p>
              <p className="text-base text-[#9a9a9a] font-avenirBook">
                {user.email}
              </p>
            </div>
            <div className="border-t w-[160px] my-[5px]" />

            <div className="grid grid-flow-row justify-center gap-2">
              {usersList.slice(0,2).map((item: any) => (
                <Link to="/home" state={{ user: item } as any}>
                  <div
                    onClick={handleClose}
                    className="flex flex-row gap-2 items-center cursor-pointer"
                  >
                    <span>
                      <img
                        className="w-[28px] h-[28px] rounded-full"
                        // src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1009.jpeg"
                        src={item.profilepicture}
                        alt="person1"
                      />
                    </span>{" "}
                    <p className="text-sm font-avenirBook text-[#545454] ">
                      {" "}
                      {item.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <Link to="/">
              <button
                onClick={handleClose}
                className="bg-[#D55151] rounded-full p-2 px-4 text-white cursor-pointer font-avenir font-bold mt-[10px]"
              >
                Sign out
              </button>
            </Link>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default Header;
