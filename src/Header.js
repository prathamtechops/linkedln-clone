import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "./features/counter/userSlice";
import { auth } from "./firebaseData";
function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };

    return (
        <div className="header">
            <div className="header_left">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt=""
                />

                <div className="header_search">
                    {/* Search Icon */}
                    <SearchIcon />
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="header-right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Chat" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption
                    onClick={logoutOfApp}
                    avatar="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Dprofile&psig=AOvVaw03vGdLavST6JDRv5V-iqxZ&ust=1682860699532000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCNCVteOWz_4CFQAAAAAdAAAAABAE"
                    title="Me"
                />
            </div>
        </div>
    );
}

export default Header;
