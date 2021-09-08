

export default function ImageGalleryItem({id, webformatURL, tags}) {
  return (
    <li className="ImageGalleryItem" key={id}>
  <img src={webformatURL}  alt={tags} className="ImageGalleryItem-image" />
</li>
  )
}

