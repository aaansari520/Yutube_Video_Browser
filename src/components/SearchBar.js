import React, { Component } from "react";

export class SearchBar extends Component {
  state = {
    term: "",
  };

  handleChange = (e) => {
    this.setState({ term: e.target.value });
    // console.log(e.target.value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  };

  //   AIzaSyBV21UjHnucHGp_mzFDyjcbY4Yr4gpho6E;

  render() {
    return (
      <div className="search-bar ui segment">
        <form
          className="ui form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              name="search"
              value={this.state.term}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
