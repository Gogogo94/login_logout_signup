import axios from 'axios';
import { useEffect, useState } from 'react';

function UserImages({ userID }) {
    // console.log(userID)

    const [images, setImages] = useState([])

    useEffect(() => {
        axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${userID}`)
            .then((resp) => { setImages(resp.data); console.log(resp.data) })
    })

    return (
        <div>
            {images.map((i) => {
                return (
                    <img src={i.url} alt="img" style={{ height: "70px", width: "70px" }} />
                )
            })}
        </div>
    )



}
export default UserImages;