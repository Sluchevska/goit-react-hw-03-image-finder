import { Component } from "react";

export default function ImageGalleryItem({id, webformatURL, largeImageURL}) {
  return (
    <li className="ImageGalleryItem">
  <img src="" alt="" className="ImageGalleryItem-image" />
</li>
  )
}



// export default class ImageGalleryItem extends Component {
//   state = {
//     pictures: null,
//     loading: false,
//     error: null
//   };

//   // componentDidUpdate(prevProps, prevState) {
//   //   const prevSearch = prevProps.pictures;
//   //   const nextSearch = this.props.pictures;
//   //   const keyApi = "22597300-51a9bfff07e627635843c3062";
//   //   if (prevSearch !== nextSearch) {
//   //     this.setState({ loading: true, pictures:null });
     
//   //       fetch(
//   //         `https://pixabay.com/api/?q=${nextSearch}&key=${keyApi}&image_type=photo&orientation=horizontal&per_page=12`
//   //       )
//   //         .then((res) => {
//   //           if (res.ok) {
//   //             res.json();
//   //           }
//   //           return Promise.reject(
//   //             new Error(`no pictures with this name ${nextSearch}`)
//   //           );
//   //         })
//   //         .then((pictures) => this.setState({ pictures }))
//   //         .catch(error=>this.state({error}))
//   //         .finally(() => this.setState({ loading: false }));
      
//   //   }
//   // }
//   render() {
//     const { pictures, loading } = this.state;
//     const{error}=this.props
//     return (
//       <li className="ImageGalleryItem">
//         {error && <h1>{error.message}</h1>}
//         {loading && <div>Loading...</div>}
//         {pictures && (
//            <img
//           src={pictures.pageUrl}
//           alt="i"
//           className="ImageGalleryItem-image"
//         />
     
//        )}
//        </li> 
//     );
//   }
// }
