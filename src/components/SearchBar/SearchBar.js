import { Component } from "react";


export default class SearchBar extends Component{
  state = {
    pictures:''
  }

  handleSearcheChange = e => {
  this.setState({pictures: e.currentTarget.value.toLowerCase()})
  }
  
  
  handleSubmit = e => {
    e.preventDefault()
    if (this.state.pictures.trim() === '') {
      return
    }
    this.props.submit(this.state.pictures)
    this.setState({ pictures:''})
    }

  render() {
    return (
        <header className="Searchbar">
  <form className="SearchForm" onSubmit={this.handleSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
            type="text"
           
            value={this.state.pictures}
            onChange={this.handleSearcheChange}
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
  }

}