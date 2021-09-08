import { createPortal } from 'react-dom'
import { Component } from 'react'

// function Modal(id) {
  
//     return (
//       <div className="Overlay">
//   <div className="Modal">
//     <img src="" alt="" />
//   </div>
// </div>  
//  )
// }

// export default Modal
const modalRoot=document.querySelector('#modal-root')

export default class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
       window.removeEventListener('keydown', this.handleKeyDown) 
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    };

    handleBackDrop = e => {
        if (e.currentTarget === e.target) {
           this.props.onClose()
       } 
    }

    render() {
        return createPortal(

            <div className="Overlay" onClick={this.handleBackDrop}>
                <div className="Modal">
    <img src="" alt="" />
  </div>
            </div>, modalRoot,
        )
    }
}