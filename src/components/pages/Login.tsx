import { useState } from "react";
import { Link } from "react-router-dom";
import { users } from "../../data.js";

function Login() {
  const [usersList, setuserList] = useState(users);

  return (
    <div className="w-[470px] m-auto pt-[150px]">
      <div className="bg-[#f6f6f6] rounded-tl-lg rounded-tr-lg px-10 py-7 shadow-md ">
        <p className="text-center font-sans font-bold opacity-60">
          Select an account
        </p>
      </div>
      <div className="bg-white shadow-md px-5 rounded-bl-lg rounded-br-lg h-[320px] overflow-y-scroll">
        {usersList.map((item: any) => (
          <>
            <Link to="/home">
              <div className="flex flex-row items-center py-2 gap-[10px] cursor-pointer border-b">
                <img
                  className="w-[24px] h-[24px] rounded-full"
                  src={item.profilepicture}
                  alt="profile_pic"
                />
                <p className="text-[14px]">{item.name}</p>
              </div>
            </Link>
          </>
        ))}
        <br />
      </div>
    </div>
  );
}

export default Login;
