import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ pictures, onSelect }) => {
  return (
    <ul className="ImageGallery">
      {pictures.map((picture) => (
        <ImageGalleryItem
        image={picture}
          onClick={() => onSelect(picture)}
         
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};

export default ImageGallery;
