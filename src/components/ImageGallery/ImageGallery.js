import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ pictures }) => {
  console.log(pictures)
  return(
      <ul className = "ImageGallery" >
      {pictures.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} alt={tags}></ImageGalleryItem>
      ))}
      </ul>
    );
  }


export default ImageGallery


