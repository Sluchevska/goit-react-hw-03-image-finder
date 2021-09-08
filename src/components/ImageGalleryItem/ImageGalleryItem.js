import { Component } from "react";

export default class ImageGalleryItem extends Component {
  state = {
    pictures: null,
    loading: false,
    error:''
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevProps.pictures;
    const nextSearch = this.props.pictures;
    const keyApi = "22597300-51a9bfff07e627635843c3062";
    if (prevSearch !== nextSearch) {
      this.setState({ loading: true });
      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?q=${nextSearch}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`
        )
          .then((res) => {
            if (res.ok) {
              res.json();
            }
            return Promise.reject(
              new Error(`no pictures with this name ${nextSearch}`)
            );
          })
          .then((pictures) => this.setState({ pictures }))
          .catch(error=>this.state({error}))
          .finally(() => this.setState({ loading: false }));
      }, 1000);
    }
  }
  render() {
    const { pictures, loading } = this.state;
    const{error}=this.props
    return (
      <li className="ImageGalleryItem">
        {error && <h1>{error.message}</h1>}
        {loading && <div>Loading...</div>}
        {pictures && (
           <img
          src={pictures}
          alt="i"
          className="ImageGalleryItem-image"
        />
     
       )}
       </li> 
    );
  }
}
