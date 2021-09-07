import logo from './logo.svg';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';
import './App.css';
import './components/image-finder/styles.css'

function App() {
  return (
    <div>
      <SearchBar />
      <ImageGallery />
      <ImageGalleryItem/>
   </div>
  );
}

export default App;
