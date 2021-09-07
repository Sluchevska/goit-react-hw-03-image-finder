import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';
import './App.css';
import './components/image-finder/styles.css'

function App() {
  return (
    <div>
      <SearchBar />
      <ImageGallery />
      <ImageGalleryItem />
      {/* <Button>
        <button type="button"></button>
        </Button> */}
      {/* <Modal/> */}
   </div>
  );
}

export default App;
