import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ pictures, onClick, ...allyProps  }) => {
   return(
      <ul className = "ImageGallery" >
      {pictures.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} onClick={onClick} {...allyProps } alt={tags}></ImageGalleryItem>
      ))}
      </ul>
    );
  }


export default ImageGallery


