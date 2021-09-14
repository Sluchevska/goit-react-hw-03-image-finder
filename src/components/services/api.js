import axios from 'axios';

export const fetchPics = async (pictureName, page) => {
    const keyApi = '22597300-51a9bfff07e627635843c3062';
    const response = await axios.get(
      `https://pixabay.com/api/?q=${pictureName}&page=${page}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`,
    );
    return response.data.hits;
  };