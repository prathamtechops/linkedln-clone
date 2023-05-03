import React from "react";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";

export function InputOption() {
    return (
        <div className="feed_input_option">
            <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
            <InputOption
                title="Video"
                Icon={SubscriptionsIcon}
                color="#E7A33E"
            />
            <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
            <InputOption
                title="Write Article"
                Icon={CalendarViewDayIcon}
                color="#7FCISE"
            />
        </div>
    );
}
