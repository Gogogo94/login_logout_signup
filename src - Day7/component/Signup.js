import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Signup() {

    const [username, updateSignUpUsername] = useState("")
    const [email, updateSignUpEmail] = useState("")
    const [password, updateSignUpPassword] = useState("")
    const [currentUser, updateCurrentUser] = useState(undefined)

    const signup = () => {
        axios.post("https://insta.nextacademy.com/api/v1/users/", { username, password, email })
            .then((resp) => { localStorage.setItem("token", resp.data.auth_token); fetchUserInfo(); console.log(resp) })
    }

    const fetchUserInfo = () => {
        axios.get("https://insta.nextacademy.com/api/v1/users/me", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((resp) => { updateCurrentUser(resp.data) });
    }


    const logout = () => {
        localStorage.removeItem("token")
        updateCurrentUser("")
    }

    // const fetchUserInfo = () => {

    //     axios.get("https://insta.nextacademy.com/api/v1/users/me", {
    //         headers: {
    //             Authorization: "Bearer " + localStorage.getItem("token")
    //         }
    //     })
    //         .then((resp) => { updateCurrentUser(resp.data) });
    // }

    if (currentUser) {
        return (
            <div style={{ textAlign: "center" }}>
                <p>Username : {currentUser.username}</p>
                <p>Email : {currentUser.email}</p>
                <img src={currentUser.profile_picture} style={{ height: "80px", width: "80px" }} />
                <p>ID : {currentUser.id}</p>
                <button onClick={logout}>Log Out</button>
                <h1>H1</h1>
            </div>
        )
    } else {

        return (
            <>
                <input type="text" placeholder="username" value={username} onChange={(e) => { updateSignUpUsername(e.target.value) }} />
                <input type="text" placeholder="password" value={password} onChange={(e) => { updateSignUpPassword(e.target.value) }} />
                <input type="text" placeholder="email" value={email} onChange={(e) => { updateSignUpEmail(e.target.value) }} />
                <button onClick={signup}>Sign Up</button>

            </>
        )

    }












}
export default Signup;
