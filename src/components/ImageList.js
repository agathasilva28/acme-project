import ShowImage from "./ShowImage";
import { useState } from 'react';

const ImageList = (data) => {
    const [showFullImage, setShowFullImage] = useState(false);
    const [imageURL, setImageURL] = useState(false);

    const { imageData } = data;

    const handleImageClick = (url) => {
        setImageURL(url)
        setShowFullImage(true);
    }

    return (
        <div>
            <ul className="list">
                {imageData.map((image) => {
                    return(
                    <li key={image.id}>
                        <img
                            src={image.images.preview_gif.url}
                            onClick={() => {handleImageClick(image.images.original.url)}} />
                    </li>
                    );
                })}
            </ul>
            { showFullImage && 
                <ShowImage imageURL={imageURL} setShowFullImage={setShowFullImage} /> 
            }
        </div>
    );
}

export default ImageList;