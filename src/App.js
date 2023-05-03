import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Login from "./Login";
import { auth } from "./firebaseData";
import Widget from "./Widget";

function App() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            if (userAuth) {
                dispatch(
                    login({
                        email: userAuth.email,
                        uid: userAuth.uid,
                        displayName: userAuth.displayName,
                        photoUrl: userAuth.photoURL,
                    })
                );
            } else {
                dispatch(logout());
            }
        });
    }, []);
    return (
        <div className="app">
            <Header />
            {!user ? (
                <Login />
            ) : (
                <div className="app_body">
                    <Sidebar />
                    <Feed />
                    <Widget />
                </div>
            )}
        </div>
    );
}

export default App;
