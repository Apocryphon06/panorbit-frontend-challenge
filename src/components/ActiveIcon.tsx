import activeIcon from "../assets/svg/activeIcon.svg";


function ActiveIcon({pos}:any) {
  return (
    <img
      className={`lg:inline-block hidden w-[30px] relative ${pos} bg-white rounded-tl-full rounded-bl-full`}
      src={activeIcon}
      alt={activeIcon}
    />
  );
}

export default ActiveIcon;
