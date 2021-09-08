import { Component } from "react";

export default class ImageGalleryItem extends Component {
  state = {
    pictures: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.pictures;
    const nextSearch = this.props.pictures;
    const keyApi = "22597300-51a9bfff07e627635843c3062";
    if (prevSearch !== nextSearch) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${nextSearch}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then((res) => res.json())
        .then((pictures) => this.setState({ pictures }))
        .finally(() => this.setState({ loading: false }));
    }
  }
  render() {

    return (
      <li className="ImageGalleryItem">
        <img
          src={this.state.pictures}
          alt="i"
          className="ImageGalleryItem-image"
        />
      </li>
    );
  }
}
