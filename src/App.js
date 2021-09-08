import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./App.css";
import "./components/image-finder/styles.css";
import { Component } from "react";

// &page=${this.state.page}

// axios.defaults.baseURL ='https://pixabay.com/api'
  
      
const fetchPics = async pictureName => {
  const keyApi = "22597300-51a9bfff07e627635843c3062";
   const response= await axios.get(`https://pixabay.com/api/?q=${pictureName}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`);
return response.data.hits
}

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


  async componentDidUpdate(prevProps, prevState) {
  const nextSearch = this.state.pictureName
    if (prevState.pictureName !== nextSearch) {
    const pictures = await fetchPics(nextSearch)
    
      this.setState({ pictures })
     
          }
  }

  render() {
    const {pictures}=this.state
    return (
      <div>
        <SearchBar onSearch={this.handleFormSubmit} />
        <ImageGallery pictures={pictures} />
       
        {/* <Button>
        <button type="button"></button>
        </Button> */}
        {/* <Modal/> */}
      </div>
    );
  }
}




  