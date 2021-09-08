import logo from "./logo.svg";
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
  pictures:''
}

  handleFormSubmit = pictures => {
    
   this.setState({pictures})
 }
//  componentDidMount() {
//    
   
//   }
  render() {
    return (
      <div>
        <SearchBar submit={ this.handleFormSubmit}/>
        <ImageGallery pictures={ this.state.pictures}/>
        {/* <ImageGalleryItem /> */}
        {/* <Button>
        <button type="button"></button>
        </Button> */}
        {/* <Modal/> */}
      </div>
    );
  }
}
