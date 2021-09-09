

export default function ImageGalleryItem({selectedImg, webformatURL, tags}) {
  return (
    <li className="ImageGalleryItem">
  <img src={webformatURL}  alt={tags} onClick={selectedImg} className="ImageGalleryItem-image" />
</li>
  )
}

