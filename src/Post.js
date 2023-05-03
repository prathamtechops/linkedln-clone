import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import { forwardRef } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from "@mui/icons-material/Chat";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const Post = forwardRef(({ name, description, message, url }, ref) => {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar />
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_button">
                <InputOption title="Like" Icon={ThumbUpIcon} color="grey" />
                <InputOption title="Connect" Icon={ChatIcon} color="grey" />
                <InputOption
                    title="Share"
                    Icon={ShareOutlinedIcon}
                    color="grey"
                />
                <InputOption
                    title="Send"
                    Icon={SendOutlinedIcon}
                    color="grey"
                />
            </div>
        </div>
    );
});

export default Post;
