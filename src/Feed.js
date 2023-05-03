import React, { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import firebase from "firebase/compat/app";
import { db, auth } from "./firebaseData";
import { useSelector } from "react-redux";
import { selectUser } from "./features/counter/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
                setPosts(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            name: user.displayName,
            description: user.email,
            message: input,
            url: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    };

    return (
        <div className="feed">
            <div className="feed_input_container">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                        />
                        <button onClick={sendPost} type="submit">
                            Send
                        </button>
                    </form>
                </div>

                <div className="feed_input_option">
                    <AllOptions
                        ImageIcon={ImageIcon}
                        SubscriptionsIcon={SubscriptionsIcon}
                        EventNoteIcon={EventNoteIcon}
                        CalendarViewDayIcon={CalendarViewDayIcon}
                    />
                </div>
            </div>
            <FlipMove>
                {posts.map(
                    ({ id, data: { name, description, message, url } }) => (
                        <Post
                            key={id}
                            name={name}
                            description={description}
                            message={message}
                            url={url}
                        />
                    )
                )}
            </FlipMove>
        </div>
    );
}

function AllOptions({
    ImageIcon,
    SubscriptionsIcon,
    EventNoteIcon,
    CalendarViewDayIcon,
}) {
    return (
        <>
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
        </>
    );
}

export default Feed;
