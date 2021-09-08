import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./App.css";
import "./components/image-finder/styles.css";
import { Component } from "react";

// &page=${this.state.page}

// axios.defaults.baseURL ='https://pixabay.com/api'

const fetchPics = async (pictureName) => {
  const keyApi = "22597300-51a9bfff07e627635843c3062";
  const response = await axios.get(
    `https://pixabay.com/api/?q=${pictureName}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default class App extends Component {
  state = {
    pictureName: null,
    pictures: [],
    reqStatus: "idle",
    id: null,
    webformatURL: null,
    largeImageURL: null,
    page: 1,
     showModal: false,
  };

  handleFormSubmit = (pictureName) => {
    this.setState({ pictureName });
  };

  async componentDidUpdate(prevProps, prevState) {
    const nextSearch = this.state.pictureName;
    if (prevState.pictureName !== nextSearch) {
      try {
        this.setState({ reqStatus: 'pending', pictures:[]});
        const pictures = await fetchPics(nextSearch);
        this.setState({ pictures, reqStatus: "resolved" });
      } catch (error) {
         this.setState({ reqStatus: "rejected" });
        console.log("Error", error);
      }
    }
  }

   toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
     this.setState({
      filter: '',
      
    });
   }
   


  render() {
    const { pictures, reqStatus, showModal } = this.state;
    const showPictures=pictures.length>=1
    return (
      <div>
        <SearchBar onSearch={this.handleFormSubmit} />
       {showPictures && <ImageGallery pictures={pictures} />}
       {reqStatus==='pending' && <Loader />}
        {/* <Button>
        <button type="button"></button>
        </Button> */}
         {showModal &&
          <Modal onClose={this.toggleModal}> </Modal>}
      </div>
    );
  }
}
