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
    pictureName: null,
    pictures: [],
    tags: null,
    selectedImg:null,
    reqStatus: "idle",
    page: 1,
 
  };

  fetchPics = async (pictureName) => {
  const keyApi = "22597300-51a9bfff07e627635843c3062";
  const response = await axios.get(
    `https://pixabay.com/api/?q=${pictureName}&page=${this.state.page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

  handleFormSubmit = (pictureName) => {
    this.setState({ pictureName });
  };

  async componentDidUpdate(prevProps, prevState) {
    const nextSearch = this.state.pictureName;
    const nextPage = this.state.page;
      if (prevState.pictureName !== nextSearch || prevState.page !== nextPage) {
      try {
        this.setState({ reqStatus: 'pending', pictures:[]});
        const pictures = await this.fetchPics(nextSearch, nextPage);
        this.setState({ pictures, reqStatus: "resolved" });
        
 
      } catch (error) {
         this.setState({ reqStatus: "rejected" });
        console.log("Error", error);
      }
      this.state.page > 1 &&
        window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
        });
    }
  }

   
    loadMoreBtnClick = () => {
        this.setState(prevState => ({
         page: prevState.page + 1,
        }));
  }
  
   handleSelectedImage = (largeImageUrl, tags) => {
    this.setState({
      selectedImg: largeImageUrl,
      tags: tags
    })
  }
   closeModal = () => {
    this.setState({
      selectedImg: null,
    })
  }
 
  
 


  render() {
    const { pictures, reqStatus, selectedImg, tags } = this.state;
  
    const showButton = pictures.length >= 1
   
    return (
      <div>
        <SearchBar onSearch={this.handleFormSubmit} />
        <ImageGallery pictures={pictures} selectedImg={ this.handleSelectedImage}/>
        {reqStatus === 'pending' && <Loader />}
         {showButton && <Button onCLick={this.loadMoreBtnClick}/>}
        {selectedImg && <Modal selectedImg={selectedImg} tags={tags} onClose={this.closeModal}/>}
               
         {/* {showModal &&
          <Modal onClose={this.toggleModal}> </Modal>} */}
      </div>
    );
  }
}
