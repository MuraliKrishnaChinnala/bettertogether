import React from "react";
import logo from "../Images/logo.png";
import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded";
import { useNavigate } from "react-router";

export default function Header() {
  const Navigate = useNavigate()
  return (
    <div className="py-2.5 shadow-md shadow-[#b8b8b8] flex items-center justify-around relative bg-white z-10">
      <div className="flex items-center gap-3 font-sans cursor-pointer" onClick={()=>Navigate("/")}>
        <img src={logo} alt="logo" className="w-24 h-24" />
        <div className="text-[#001936]">
          <h1 className="text-2xl font-bold">BETTER TOGETHER</h1>
          <p className="font-semibold">Connecting Passion with Purpose</p>
        </div>
      </div>
      <div className="flex items-center gap-10 text-[#001936] text-xl font-bold">
        <button type="button">Who We Serve</button>
        <button type="button">Happy Moments</button>
        <button type="button">About Us</button>
        <button
          type="button"
          onClick={() => Navigate("/login")}
          className="bg-[#001936] text-white h-10 rounded-xl w-40 flex items-center justify-center gap-1 group"
        >
          Get Started{" "}
          <TrendingFlatRoundedIcon className="transition-transform transform translate-x-0 group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
}
