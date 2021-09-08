import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./App.css";
import "./components/image-finder/styles.css";
import { Component } from "react";

export default class App extends Component {
  state = {
    pictureName: null,
    pictures: [],
    reqStatus: "idle",
    id: null,
    webformatURL: null,
    largeImageURL: null,
    page: 1,
  };

  handleFormSubmit = (pictureName) => {
    this.setState({ pictureName });
  };

  //  this.setState({pictures: null });

  //     fetch(
  //       `https://pixabay.com/api/?q=${nextSearch}&page=${this.state.page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then((res) => res.json())
  //       .then(
  //         (pictures) => this.setState({ pictures }),
  //         console.log(this.state.pictures)
  //       )

  async componentDidUpdate(prevProps, prevState) {
    const nextSearch = this.state.pictureName
  
    const keyApi = "22597300-51a9bfff07e627635843c3062";
    if (prevState.pictureName !== nextSearch) {
     const {data}= await axios.get(`https://pixabay.com/api/?q=${nextSearch}&page=${this.state.page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`);
      console.log(data)
      this.setState({pictures:data})
    }
  }

  // handleSelectImage = (data)=>this.setState({selectedImage:data})

  render() {
    return (
      <div>
        <SearchBar onSearch={this.handleFormSubmit} />
        <ImageGallery pictures={this.state.pictures} />
        {/* <ImageGalleryItem /> */}
        {/* <Button>
        <button type="button"></button>
        </Button> */}
        {/* <Modal/> */}
      </div>
    );
  }
}
