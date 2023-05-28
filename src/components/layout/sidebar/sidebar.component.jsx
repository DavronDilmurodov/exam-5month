import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import avatar from "../../../assets/images/avatar.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar bg-[#373B53] h-screen rounded-r-[20px] fixed top-0 left-0 bottom-0 flex flex-col justify-between items-center pb-5">
      <div className="sidebar-header">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="sidebar-footer border-t-[#979797] border-solid border-t-[1px] pt-6 w-full">
        <img className="mx-auto" src={avatar} alt="avatar" />
      </div>
    </div>
  );
};
