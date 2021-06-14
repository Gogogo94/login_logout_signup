import { useEffect, useState } from 'react';
import axios from 'axios';
import UploadImage from './UploadImage';

function LoginModal({ close, storeSession }) {

    const [username, changeUsername] = useState("")
    const [password, changePassword] = useState("")
    const [currentUser, updateCurrentUser] = useState(undefined)


    const logIn = () => {
        axios.post("https://insta.nextacademy.com/api/v1/login", { username, password })
            .then((resp) => { storeSession(resp.data.auth_token); fetchUserInfo(); })
    }

    const fetchUserInfo = () => {
        axios.get("https://insta.nextacademy.com/api/v1/users/me", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((resp) => { updateCurrentUser(resp.data) })
    }


    useEffect(() => {
        fetchUserInfo()
    }, [])

    const logOut = () => {
        localStorage.removeItem("token")
        changeUsername("")
        changePassword("")
        updateCurrentUser(undefined)
    }


    if (currentUser) {
        return (
            <div style={{ textAlign: "center" }}>
                <img src={currentUser.profile_picture} style={{ height: "80px", widht: "80px", }} />
                <p>UserName : {currentUser.username}</p>
                <p>Email : {currentUser.email}</p>
                <p>ID : {currentUser.id}</p>
                <button onClick={logOut}>Log Out</button>
                <UploadImage />
            </div>

        )
    } else {
        return (
            <div style={{
                backgroundColor: "HotPink", position: "fixed", top: "50%", left: "50%", border: "solid 1px black", transform: "translate(-50%, -50%)"
            }} >
                <h1>Login</h1>
                <button onClick={close}>X</button>


                <input type="text" placeholder="username" value={username} onChange={(e) => { changeUsername(e.target.value) }} />
                <input type="password" placeholder="password" value={password} onChange={(e) => { changePassword(e.target.value) }} />
                <button onClick={logIn}>Login</button>


            </div>
        )
    }





}

export default LoginModal;