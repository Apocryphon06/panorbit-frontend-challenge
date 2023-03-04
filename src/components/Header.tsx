import { Box, Modal } from "@mui/material";
import { useState } from "react";
import map from "../assets/images/map.png";
import { Link } from "react-router-dom";


function Header({ title, user }: any) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  return (
    <>
      <div className="lg:h-[627px] lg:w-[70vw]">
        <div className="flex flex-row justify-between items-center py-[20px] border-b border-[#d8d8d8]">
          <p className="text-lg font-interRegular  text-[#545454]">{title}</p>

          <div onClick={handleOpen} className="flex gap-2 items-center">
            <img
              className="w-[28px] h-[28px] rounded-full cursor-pointer"
              src={user.profilepicture}
              alt="avatar"
            />
            <p className="cursor-pointer font-interRegular">{user.name}</p>
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
              <p className="text-[#545454] pt-[10px] text-center font-interBold">
                {user.name ?? ""}
              </p>

              <div className="border-b border-[#CACACA] flex flex-col gap-1 px-5 py-2">
                <p className="text-[#545454] font-interRegular ">
                  <span className="text-[#9a9a9a] font-interRegular">
                    Username&nbsp;:
                  </span>
                  &nbsp;
                  {user.username ?? ""}
                </p>
                <p className="text-[#545454] font-interRegular ">
                  <span className="text-[#9a9a9a] font-interRegular">
                    e-mail&nbsp;:
                  </span>
                  &nbsp;
                  {user.email ?? ""}
                </p>
                <p className="text-[#545454] font-interRegular ">
                  <span className="text-[#9a9a9a] font-interRegular">
                    Phone&nbsp;:
                  </span>
                  &nbsp;
                  {user.phone ?? ""}
                </p>
                <p className="text-[#545454] font-interRegular ">
                  <span className="text-[#9a9a9a] font-interRegular">
                    Website&nbsp;:
                  </span>
                  &nbsp;
                  {user.website ?? ""}
                </p>
              </div>

              {/* Company Details */}

              <div className="flex flex-col gap-1 mt-[10px]">
                <p className=" text-[#9a9a9a] font-interRegular">Company</p>

                <div className="px-5 py-2">
                  <p className="text-[#545454] font-interRegular ">
                    <span className="text-[#9a9a9a] font-interRegular">
                      Name&nbsp;:
                    </span>
                    &nbsp;
                    {user.company.name ?? ""}
                  </p>
                  <p className="text-[#545454] font-interRegular ">
                    <span className="text-[#9a9a9a] font-interRegular">
                      catchphrase&nbsp;:
                    </span>
                    &nbsp;
                    {user.company.catchPhrase ?? ""}
                  </p>
                  <p className="text-[#545454] font-interRegular ">
                    <span className="text-[#9a9a9a] font-interRegular">
                      bs&nbsp;:
                    </span>
                    &nbsp;
                    {user.company.bs ?? ""}
                  </p>
                </div>
              </div>
            </div>

            {/* Address details */}
            <div className="p-5">
              <div className="border-t border-[#d8d8d8] lg:hidden block" />

              <p className="text-[#9a9a9a] font-interRegular">Address:</p>
              <div className="px-5 py-2">
                <div className="flex flex-col gap-1 px-2">
                  <p className="text-[#545454] font-interRegular ">
                    <span className="text-[#9a9a9a] font-interRegular">
                      Street&nbsp;:
                    </span>
                    &nbsp;
                    {user.address.street ?? ""}
                  </p>
                  <p className="text-[#545454] font-interRegular ">
                    <span className="text-[#9a9a9a] font-interRegular">
                      Suite&nbsp;:
                    </span>
                    &nbsp;
                    {user.address.suite ?? ""}
                  </p>
                  <p className="text-[#545454] font-interRegular ">
                    <span className="text-[#9a9a9a] font-interRegular">
                      City&nbsp;:
                    </span>
                    &nbsp;
                    {user.address.city ?? ""}
                  </p>
                  <p className="text-[#545454] font-interRegular ">
                    <span className="text-[#9a9a9a] font-interRegular">
                      Zipcode&nbsp;:
                    </span>
                    &nbsp;
                    {user.address.zipcode ?? ""}
                  </p>
                </div>

                {/* Map & geo details */}
                <div>
                  <img
                    className="lg:h-[300px]  rounded-2xl p-2"
                    src={map}
                    alt={map}
                  />
                  <div className="flex flex-row gap-5 justify-end px-2">
                    <p className="text-[#545454] font-interBold text-xs">
                      <span className="text-[#9a9a9a] font-interRegular">
                        Lat&nbsp;:
                      </span>
                      &nbsp;
                      {user.address.geo.lat ?? ""}
                    </p>
                    <p className="text-[#545454] font-interBold text-xs">
                      <span className="text-[#9a9a9a] font-interRegular">
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
              <p className="text-[18px] font-interRegular ">{user.name}</p>
              <p className="text-base text-[#9a9a9a] font-interRegular">
                {user.email}
              </p>
            </div>
            <div className="border-t w-[160px] my-[5px]" />

            <Link to="/">
              <div className="flex flex-row gap-2 items-center cursor-pointer">
                <span className=" ">
                  <img
                    className="w-[28px] h-[28px] rounded-full"
                    src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1009.jpeg"
                    alt="person1"
                  />
                </span>{" "}
                <p className="text-sm font-interRegular text-[#545454] ">
                  {" "}
                  Clementine Bauch
                </p>
              </div>
            </Link>

            <div className="border-t w-[160px] my-[5px]" />

            <Link to="/">
              <div className="flex flex-row gap-2 items-center cursor-pointer ">
                <span className=" ">
                  <img
                    className="w-[28px] h-[28px] rounded-full"
                    src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1008.jpeg"
                    alt="person1"
                  />
                </span>{" "}
                <p className="text-sm font-interRegular text-[#545454]">
                  {" "}
                  Patricia Lebsack
                </p>
              </div>
            </Link>

            <Link to="/">
              <button
                onClick={handleClose}
                className="bg-[#D55151] rounded-full p-2 px-4 text-white cursor-pointer font-interRegular font-bold mt-[10px]"
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
