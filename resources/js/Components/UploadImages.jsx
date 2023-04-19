import React, { useState } from "react";
import { useForm } from "@inertiajs/react";

const UploadImages = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [uploadStatus, setUploadStatus] = useState(null);

    const { post } = useForm();

    const handleImageUpload = (e) => {
        setSelectedImages(e.target.files);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (let i = 0; i < selectedImages.length; i++) {
            formData.append(`images[${i}]`, selectedImages[i]);
        }
        post("/api/upload-images", formData, {
            onSuccess: (response) => {
                setUploadStatus(response.message);
            },
            onError: (error) => {
                console.log(error);
            },
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    name="images"
                    multiple
                    onChange={handleImageUpload}
                />
                <button type="submit">Upload Images</button>
            </form>
            {uploadStatus && <p>{uploadStatus}</p>}
        </div>
    );
};

export default UploadImages;
