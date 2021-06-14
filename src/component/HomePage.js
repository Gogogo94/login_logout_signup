import axios from "axios";
import { useEffect, useState } from "react";
import UserImages from "./UserImages";

function HomePage() {

    const [user, updateUser] = useState([]);

    useEffect(() => {
        axios.get("https://insta.nextacademy.com/api/v1/users")
            .then((resp) => { updateUser(resp.data) })
    }, [])


    return (
        <div>
            {user.map((i) => {
                return (
                    <div>
                        <img src={i.profileImage} style={{ height: "50px", width: "50px" }} />
                        <p>Username : {i.username}</p>
                        <p>ID : {i.id}</p>
                        <UserImages userID={i.id} />
                    </div>
                )
            })}
        </div>
    )









}

export default HomePage;