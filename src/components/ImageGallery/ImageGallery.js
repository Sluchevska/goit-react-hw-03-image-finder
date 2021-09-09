import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ pictures, selectedImg }) => {
  return (
    <ul className="ImageGallery">
      {pictures.map(({ id, webformatURL, tags, largeImageUrl }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          onClick={() => selectedImg(largeImageUrl, tags)}
          alt={tags}
        ></ImageGalleryItem>
      ))}
    </ul>
  );
};

export default ImageGallery;
