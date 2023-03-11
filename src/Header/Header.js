import React, { useState } from "react";
import logo from "../Images/logo_together.svg";
import TrendingFlatRoundedIcon from "@mui/icons-material/TrendingFlatRounded";
import { useLocation, useNavigate } from "react-router";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

export default function Header() {
  const Navigate = useNavigate();
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="py-2.5 shadow-md shadow-[#b8b8b8] flex items-center justify-around relative bg-white z-10">
      <div
        className="flex items-center gap-3 font-sans cursor-pointer"
        onClick={() => {
          location.pathname === "/" ? Navigate("/") : Navigate("/dashboard");
        }}
      >
        <img src={logo} alt="logo" className="w-24 h-24" />
        <div className="text-[#001936]">
          <h1 className="text-2xl font-bold">BETTER TOGETHER</h1>
          <p className="font-semibold">Connecting Passion with Purpose</p>
        </div>
      </div>
      <div className="flex items-center gap-10 text-[#001936] text-xl font-bold">
        <button type="button">Who We Serve</button>
        <button type="button">
          {location.pathname === "/" ? "Framing Our Future" : "My Campaigns"}
        </button>
        <button type="button">About Us</button>

        <div className="flex items-center gap-3">
          {location.pathname !== "/" && (
            <p>
              Welcome, <span className="text-[#355ffe]">Dhruv</span>
            </p>
          )}
          {location.pathname === "/" ? (
            <button
              type="button"
              onClick={() => Navigate("/login")}
              className="bg-[#001936] text-white h-10 rounded-xl w-40 flex items-center justify-center gap-1 group"
            >
              Get Started{" "}
              <TrendingFlatRoundedIcon className="transition-transform transform translate-x-0 group-hover:translate-x-2" />
            </button>
          ) : (
            <>
              <Tooltip title="Account settings">
                <img
                  onClick={handleClick}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  src="https://i.pinimg.com/originals/12/6f/e8/126fe8d3dbb0d7dc4c5da8f0c5608003.jpg"
                  alt="profile_pic"
                  className="w-16 h-16 rounded-full cursor-pointer"
                />
              </Tooltip>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                // onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Avatar /> Profile
                </MenuItem>
                <Divider />
                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    Navigate("/");
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
