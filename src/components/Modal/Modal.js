import { createPortal } from "react-dom";
import { Component } from "react";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackDrop = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { selectedImg, tags } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleBackDrop}>
        <div className="Modal">
          <img src={selectedImg} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
