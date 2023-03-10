import { Link } from "react-router-dom";
import bg from '../../assets/images/bg.jpeg'

function Login({ usersList }: any) {
  return (
    <div className="lg:fixed">
      <img src={bg} alt={bg}/>
      <div className="lg:w-[570px] w-[325px] absolute lg:top-[130px] top-[50px] lg:left-[450px] left-[125px]">
        <div className="bg-lightGray rounded-tl-3xl rounded-tr-3xl p-10 shadow-md ">
          <p className="text-center font-avenir opacity-60 lg:text-xl text-lg">
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
                      className="lg:w-[32px] w-[28px] lg:h-[32px] h-[28px] rounded-full"
                      src={user.profilepicture}
                      alt="profile_pic"
                    />
                    <p className="lg:text-lg text-base font-avenirBook  opacity-70">
                      {user.name}
                    </p>
                  </div>
                </Link>
              </>
            ))}

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
