import { Box, Modal } from "@mui/material";
import { useState } from "react";
import map from "../assets/images/map.png";
import { Link } from "react-router-dom";

const style = {
  position: "absolute" as "absolute",
  top: "38%",
  left: "85%",
  transform: "translate(-50%, -50%)",
};

function Header({ title, user }: any) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="lg:h-[627px] lg:w-[70vw]">
        <div className="flex flex-row justify-between items-center py-[20px] border-b border-[#d8d8d8]">
          <p className="text-lg font-ptSansRegular font-semibold text-[#545454]">
            {title}
          </p>

          <div
            onClick={open ? handleClose : handleOpen}
            className="flex gap-2 items-center"
          >
            <img
              className="w-[28px] h-[28px] rounded-full cursor-pointer"
              src={user.profilepicture}
              alt="avatar"
            />
            <p className="cursor-pointer font-ptSansRegular">{user.name}</p>
          </div>
        </div>

        {title === "Profile" && (
          <div className="flex lg:flex-row flex-col justify-center px-5 pt-[30px] text-[18px] text-start">
            {/* Bio */}
            <div className="lg:border-r p-5 flex flex-col justify-center">
              <img
                className="w-[150px] h-[150px] rounded-full m-auto"
                src={user.profilepicture}
                alt="account_picture"
              />
              <p className="text-[#545454] pt-[10px] text-center font-ptSansBold">
                {user.name ?? ""}
              </p>

              <div className="border-b border-[#CACACA] flex flex-col gap-1 px-5 py-2">
                <p className="text-[#545454] font-ptSansRegular font-semibold">
                  <span className="text-[#9a9a9a] font-ptSansRegular">
                    Username&nbsp;:
                  </span>
                  &nbsp;
                  {user.username ?? ""}
                </p>
                <p className="text-[#545454] font-ptSansRegular font-semibold">
                  <span className="text-[#9a9a9a] font-ptSansRegular">
                    e-mail&nbsp;:
                  </span>
                  &nbsp;
                  {user.email ?? ""}
                </p>
                <p className="text-[#545454] font-ptSansRegular font-semibold">
                  <span className="text-[#9a9a9a] font-ptSansRegular">
                    Phone&nbsp;:
                  </span>
                  &nbsp;
                  {user.phone ?? ""}
                </p>
                <p className="text-[#545454] font-ptSansRegular font-semibold">
                  <span className="text-[#9a9a9a] font-ptSansRegular">
                    Website&nbsp;:
                  </span>
                  &nbsp;
                  {user.website ?? ""}
                </p>
              </div>

              {/* Company Details */}

              <div className="flex flex-col gap-1 mt-[10px]">
                <p className=" text-[#9a9a9a] font-ptSansRegular">Company</p>

                <div className="px-5 py-2">
                  <p className="text-[#545454] font-ptSansRegular font-semibold">
                    <span className="text-[#9a9a9a] font-ptSansRegular">
                      Name&nbsp;:
                    </span>
                    &nbsp;
                    {user.company.name ?? ""}
                  </p>
                  <p className="text-[#545454] font-ptSansRegular font-semibold">
                    <span className="text-[#9a9a9a] font-ptSansRegular">
                      catchphrase&nbsp;:
                    </span>
                    &nbsp;
                    {user.company.catchPhrase ?? ""}
                  </p>
                  <p className="text-[#545454] font-ptSansRegular font-semibold">
                    <span className="text-[#9a9a9a] font-ptSansRegular">
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
              <p className="text-[#9a9a9a] font-ptSansRegular">Address:</p>
              <div className="px-5 py-2">
                <div className="flex flex-col gap-1 px-2">
                  <p className="text-[#545454] font-ptSansRegular font-semibold">
                    <span className="text-[#9a9a9a] font-ptSansRegular">
                      Street&nbsp;:
                    </span>
                    &nbsp;
                    {user.address.street ?? ""}
                  </p>
                  <p className="text-[#545454] font-ptSansRegular font-semibold">
                    <span className="text-[#9a9a9a] font-ptSansRegular">
                      Suite&nbsp;:
                    </span>
                    &nbsp;
                    {user.address.suite ?? ""}
                  </p>
                  <p className="text-[#545454] font-ptSansRegular font-semibold">
                    <span className="text-[#9a9a9a] font-ptSansRegular">
                      City&nbsp;:
                    </span>
                    &nbsp;
                    {user.address.city ?? ""}
                  </p>
                  <p className="text-[#545454] font-ptSansRegular font-semibold">
                    <span className="text-[#9a9a9a] font-ptSansRegular">
                      Zipcode&nbsp;:
                    </span>
                    &nbsp;
                    {user.address.zipcode ?? ""}
                  </p>
                </div>

                {/* Map & geo details */}
                <div>
                  <img
                    className="w-[500px] h-[250px] rounded-2xl p-2"
                    src={map}
                    alt={map}
                  />
                  <div className="flex flex-row gap-5 justify-end px-2">
                    <p className="text-[#545454] font-ptSansBold text-xs">
                      <span className="text-[#9a9a9a] font-ptSansRegular">
                        Lat&nbsp;:
                      </span>
                      &nbsp;
                      {user.address.geo.lat ?? ""}
                    </p>
                    <p className="text-[#545454] font-ptSansBold text-xs">
                      <span className="text-[#9a9a9a] font-ptSansRegular">
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
        // disableEnforceFocus
        closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}
      >
        <Box
          sx={style}
          style={{
            textAlign: "center",
            // borderRadius: "24px",
            outline: "none",
          }}
        >
          <div className="flex flex-col justify-center items-center p-10 w-[270px] rounded-2xl shadow-lg bg-white">
            <img
              className="w-[90px] h-[90px] rounded-full mb-[10px]"
              src={user.profilepicture}
              alt={user.profilepicture}
            />

            <div className="flex flex-col">
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>

            <div className="flex flex-row gap-2 items-center mt-[10px]">
              <span className=" ">
                <img
                  className="w-[28px] h-[28px] rounded-full"
                  src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1009.jpeg"
                  alt="person1"
                />
              </span>{" "}
              <p className="text-sm "> Clementine Bauch</p>
            </div>

            <div className="flex flex-row gap-2 items-center mt-[10px]">
              <span className=" ">
                <img
                  className="w-[28px] h-[28px] rounded-full"
                  src="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1008.jpeg"
                  alt="person1"
                />
              </span>{" "}
              <p className="text-sm "> Patricia Lebsack</p>
            </div>

            <Link to="/">
              <button
                onClick={handleClose}
                className="bg-[#D55151] rounded-full p-2 px-4 text-white cursor-pointer font-ptSansRegular font-semibold mt-[10px]"
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
