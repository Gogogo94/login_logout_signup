
import axios from 'axios';
import { useEffect, useState } from 'react';

import { Route, Link } from 'react-router-dom';

// id: 1846
// gogogo
// 699699699

// id: 1847
// gogogo2
// 699699699

// id: 1850
// gogogo3
// 699699699

function Login() {

    const [username, changeUsername] = useState("")
    const [password, changePassword] = useState("")
    const [currentUserA, updateCurrentUser] = useState(undefined)
    const [email, changeEmail] = useState("")





    const login = () => {
        axios.post("https://insta.nextacademy.com/api/v1/login", { username, password })
            .then((resp) => { localStorage.setItem("token", resp.data.auth_token); fetchUserInfo(); console.log(resp) })
    }
    /////////////////////////////////////////////////////////////////////////////////

    const fetchUserInfo = () => {

        axios.get("https://insta.nextacademy.com/api/v1/users/me", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then((resp) => { updateCurrentUser(resp.data) });
    }


    ////////////////////////////////////////////////////////////////////////////////////////


    useEffect(() => {
        if (localStorage.getItem("token")) {
            fetchUserInfo()
        }

    }, [])

    ////////////////////////////////////////////////////////////////////////////////////////

    const logout = () => {
        localStorage.removeItem("token")
        updateCurrentUser("")
        changeUsername("")
        changePassword("")
    }

    ///////////////////////////////////////////////////////////////////////////



    //////////////////////////////////////////////////////////////////////////////



    if (currentUserA) {
        return (
            <div style={{ textAlign: "center" }}>
                <p>Username : {currentUserA.username}</p>
                <p>Email : {currentUserA.email}</p>
                <img src={currentUserA.profile_picture} style={{ height: "80px", width: "80px" }} />
                <p>ID : {currentUserA.id}</p>
                <button onClick={logout}>Log Out</button>
                <h1>H1</h1>
            </div>
        )
    } else {
        return (
            <div>
                <input type="text" placeholder="username" value={username} onChange={(e) => { changeUsername(e.target.value) }} />
                <input type="text" placeholder="password" value={password} onChange={(e) => { changePassword(e.target.value) }} />
                <button onClick={login}>Log In</button>
                <br />
                <br />
            </div>
        )
    }







}
export default Login;
