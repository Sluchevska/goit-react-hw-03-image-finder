import { Component } from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

export default class ImageGallery extends Component {
  state = {
    pictures: null,
    page:1,
    
 
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.pictures;
    const nextSearch = this.props.pictures;

    const keyApi = "22597300-51a9bfff07e627635843c3062";
    if (prevSearch !== nextSearch) {
      this.setState({pictures: null });

      fetch(
        `https://pixabay.com/api/?q=${nextSearch}&page=${this.state.page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then(
          (pictures) => this.setState({ pictures }),
          console.log(this.state.pictures)
        )
       
    }
  }

  render() {
    return (
      <ul className="ImageGallery">
        {this.state.pictures && <ImageGalleryItem></ImageGalleryItem>}
      </ul>
    );
  }
}
