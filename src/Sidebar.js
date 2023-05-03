import React from "react";
import "./Sidebar.css";
import { Avatar } from "@mui/material";
import { selectUser } from "./features/counter/userSlice";
import { useSelector } from "react-redux";
function Sidebar() {
    const user = useSelector(selectUser);
    const recentItems = (topic) => {
        return (
            <div className="recentItem">
                <span className="sidebar_hash">#</span>
                <p>{topic}</p>
            </div>
        );
    };

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img
                    src="https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"
                    alt=""
                />
                <Avatar src={user.photoUrl} className="sidebar_avatar" />
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className="statNumber">3000</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className="statNumber">2000</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItems("react")}
                {recentItems("programming")}
                {recentItems("jobs")}
            </div>
        </div>
    );
}

export default Sidebar;
