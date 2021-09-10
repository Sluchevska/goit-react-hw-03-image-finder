import axios from "axios";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import "./App.css";
import "./components/image-finder/styles.css";
import { Component } from "react";

export default class App extends Component {
  state = {
    pictureName: "",
    pictures: [],
    selectedImg: null,
    reqStatus: "idle",
    page: 1,
    showModal:false,
  };
  

  fetchPics = async (pictureName, page) => {
    const keyApi = "22597300-51a9bfff07e627635843c3062";
    const response = await axios.get(
      `https://pixabay.com/api/?q=${pictureName}&page=${page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits;
  };

  async componentDidUpdate(prevProps, prevState) {
    const nextSearch = this.state.pictureName;
    const nextPage = this.state.page;
    if (prevState.pictureName !== nextSearch || prevState.page !== nextPage) {
      try {
        this.setState({ reqStatus: "pending" });
        const pictures = await this.fetchPics(nextSearch, nextPage);
        this.setState({ pictures, reqStatus: "resolved" });
      } catch (error) {
        this.setState({ reqStatus: "rejected" });
       
      }

      this.state.page > 1 &&
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
    }
  }

  handleFormSubmit = (pictureName) => {
    this.setState({ pictureName });
  };

  loadMoreBtnClick = () => {
       this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
   
  };

  handleSelectedImage = (largeImageUrl) => {
    this.setState((prevState) => ({
          showModal:!prevState.showModal,
      selectedImg: largeImageUrl,
      
    }))
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
     this.setState({
      selectedImg: '',
      
    });
   }


  render() {
    const { pictures, reqStatus, selectedImg, showModal } = this.state;

    const showButton = pictures.length >= 1;

    return (
      <div>
        <SearchBar onSearch={this.handleFormSubmit} />
        {reqStatus === "pending" && <Loader />}
        <ImageGallery
          pictures={pictures}
          onSelect={this.handleSelectedImage}
        />

        {showButton && <Button onClick={this.loadMoreBtnClick} />}
        {showModal && (
          <Modal
            src={selectedImg.largeImageURL} alt={selectedImg.tags} onClose={this.toggleModal}
          />
        )}

        
      </div>
    );
  }
}
