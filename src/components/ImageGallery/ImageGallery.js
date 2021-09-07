import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component {
  state = {
          pictures:null
      }

    componentDidUpdate(prevProps, prevState) {
          if (prevProps.pictures !== this.props.pictures) {
      const myKey = "22597300-51a9bfff07e627635843c3062";
      fetch(
        `https://pixabay.com/api/?q=${this.props.pictures}ь&page=1&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then(pictures=>this.setState({pictures}));
    }
  }

    render() {
     
    return (
      <ul className="ImageGallery">
   
      </ul>
    )
  }
}


 //         {this.state.pictures && {
    //             pictures.map((picture) => (
    //                 <ImageGalleryItem key={picture.id} name={pictures.name} pictureUrl = {picture.url}></ImageGalleryItem>
    //    ))}}
