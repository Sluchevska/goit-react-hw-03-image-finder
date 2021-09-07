import { Component } from "react";


export default class SearchBar extends Component{
  state = {
    picture:''
  }

  handleSearcheChange = e => {
  this.setState({picture: e.currentTarget.value.toLowerCase()})
  }
  
  
  handleSubmit = e => {
    e.preventDefault()
    if (this.state.picture.trim() === '') {
      return
    }
    this.props.submit(this.state.picture)
    this.setState({ picture:''})
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
           
            value={this.state.picture}
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