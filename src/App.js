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

// const fetchPics = async (pictureName) => {
//   const keyApi = "22597300-51a9bfff07e627635843c3062";
//   const response = await axios.get(
//     `https://pixabay.com/api/?q=${pictureName}&page=${this.state.page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`
//   );
//   return response.data.hits;
// };

export default class App extends Component {
  state = {
    pictureName: null,
    pictures: [],
    tags: null,
    selectedImg:null,
    reqStatus: "idle",
    page: 1,
     showModal: false,
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
    if (prevState.pictureName !== nextSearch) {
      try {
        this.setState({ reqStatus: 'pending', pictures:[]});
        const pictures = await this.fetchPics(nextSearch);
        this.setState({ pictures, reqStatus: "resolved" });
        
        if (prevState.page !== this.state.page) {
      this.setState(this.fetchPics(this.state.page))
    }
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

   toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
     this.setState({
      filter: '',
      
    });
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
 
  
 


  render() {
    const { pictures, reqStatus, showModal, tags } = this.state;
  
    const showButton=pictures.length>=12
    return (
      <div>
        <SearchBar onSearch={this.handleFormSubmit} />
        <ImageGallery pictures={pictures} onClick={ this.handleSelectedImage}/>
        {reqStatus === 'pending' && <Loader />}
         {showButton && <Button onCLick={this.loadMoreBtnClick}/>}
        
               
         {showModal &&
          <Modal onClose={this.toggleModal}> </Modal>}
      </div>
    );
  }
}
