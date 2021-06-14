import { useState } from 'react';
import axios from 'axios';

function UploadImage() {

    const [imageFile, setImageFile] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)


    const handleUpload = (e) => {
        e.preventDefault()
        let form = new FormData();
        form.append("image", imageFile)

        axios.post("https://insta.nextacademy.com/api/v1/images/", form, {
            headers: { Authorization: "Bearer " + localStorage.getItem("token") }
        })
            .then((resp) => { console.log(resp.data) })
    }


    return (
        <div>
            <form onSubmit={handleUpload} style={{ border: "solid 1px black", margin: "20px" }}>

                <input type="file" name="image-file"
                    onChange={(e) => {
                        setImageFile(e.target.files[0]);
                        setPreviewImage(URL.createObjectURL(e.target.files[0]))
                    }}
                />
                <div>
                    {previewImage ? <img src={previewImage} style={{ height: "50px", width: "50px" }} /> : null}
                </div>
                <button type="submit">Upload</button>

            </form>
        </div>
    )

}
export default UploadImage;