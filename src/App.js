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
    alt: null,
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
        console.log(nextPage)
        const pictures = await this.fetchPics(nextSearch, nextPage);
         console.log(nextPage)
        this.setState({ pictures, reqStatus: "resolved" });
      } catch (error) {
        this.setState({ reqStatus: "rejected" });
        console.log("Error", error);
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
    console.log(this.state.page)
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
   
  };

  handleSelectedImage = (largeImageUrl, tags) => {
    this.setState((prevState) => ({
          showModal:!prevState.showModal,
      selectedImg: largeImageUrl,
      alt: tags,
    }))
  };

  // closeModal = () => {
  //   this.setState({
  //     selectedImg: null,
  //   });
  // };

  render() {
    const { pictures, reqStatus, selectedImg, alt, showModal } = this.state;

    const showButton = pictures.length >= 1;

    return (
      <div>
        <SearchBar onSearch={this.handleFormSubmit} />
        {reqStatus === "pending" && <Loader />}
        <ImageGallery
          pictures={pictures}
          selectedImg={this.handleSelectedImage}
        />

        {showButton && <Button onCLick={this.loadMoreBtnClick} />}
        {showModal && (
          <Modal
            src={selectedImg.largeImageURL} alt={selectedImg.tags} onSelect={this.handleSelectedImage}
          />
        )}

        {/* {showModal &&
          <Modal onClose={this.toggleModal}> </Modal>} */}
      </div>
    );
  }
}
