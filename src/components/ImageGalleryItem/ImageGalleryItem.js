
function ImageGalleryItem(pictureUrl, name) {
    return (
       <li className="ImageGalleryItem">
  <img src={pictureUrl} alt={name} className="ImageGalleryItem-image" />
</li> 
  )
}

export default ImageGalleryItem