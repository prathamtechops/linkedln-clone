import React, { useState } from "react";
import "./Login.css";
import { auth } from "./firebaseData";
import { useDispatch } from "react-redux";
import { login } from "./features/counter/userSlice";

function Login() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile, setProfile] = useState("");
    const dispatch = useDispatch();
    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((userAuth) => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        profileUrl: userAuth.user.profile,
                    })
                );
            })
            .catch((err) => {
                alert(err);
            });
    };
    const register = () => {
        if (!name) {
            return alert("Please enter full name");
        }

        auth.createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        profileUrl: profile,
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: name,
                                photoUrl: profile,
                            })
                        );
                    });
            })
            .catch((error) => {
                alert(error);
            });
    };
    return (
        <div className="login">
            <img
                src="https://logos-world.net/wp-content/uploads/2020/05/Linkedin-Logo.png"
                alt=""
            />

            <form>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="FullName"
                />
                <input
                    type="text"
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                    placeholder="Profile Pic Url"
                />
                <input
                    type="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit" onClick={loginToApp}>
                    Sign in
                </button>
            </form>

            <p>
                Not a member?{" "}
                <span className="login-register" onClick={register}>
                    Register Now
                </span>
            </p>
        </div>
    );
}

export default Login;
