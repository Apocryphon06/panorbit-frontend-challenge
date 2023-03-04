import { useState } from "react";
import { Link } from "react-router-dom";
import { users } from "../../data.js";

function Login() {
  // eslint-disable-next-line
  const [usersList, setuserList] = useState(users);

  return (
    <div className="w-[570px] m-auto pt-[140px]">
      <div className="bg-lightGray rounded-tl-3xl rounded-tr-3xl p-10 shadow-md ">
        <p className="text-center font-ptSansRegular font-semibold opacity-80 text-xl">
          Select an account
        </p>
      </div>
      <div className="bg-white shadow-md rounded-bl-3xl rounded-br-3xl p-2">

        <div className="h-[400px] overflow-y-scroll px-[30px] ">
        {usersList.map((user: any) => (
          <>
            <Link to="/home" state={{ user: user } as any}>
              <div className="flex flex-row items-center py-[8px] gap-[10px] cursor-pointer border-b">
                <img
                  className="w-[32px] h-[32px] rounded-full"
                  src={user.profilepicture}
                  alt="profile_pic"
                />
                <p className="text-[17px] font-ptSansRegular opacity-70">{user.name}</p>
              </div>
            </Link>
          </>
        ))}

        <br />
        </div>

      </div>
    </div>
  );
}

export default Login;
