const ShowImage = (data) => {
    const { imageURL, setShowFullImage } = data
    const handleImageClick = () => {
        setShowFullImage(false)
    }
    return (
        <div className="modal-box" onClick={handleImageClick}>
            <img src={imageURL} />
        </div>
    );
}

export default ShowImage;