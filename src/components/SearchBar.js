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
    this.setState({ term: "" });
  };

  render() {
    return (
      <div
        className="search-bar ui segment"
        style={{ backgroundColor: "#ffebee", padding: "1rem" }}
      >
        <form
          className="ui form"
          onSubmit={this.handleSubmit}
          autoComplete="off"
        >
          <div className="field">
            <label
              className="label"
              style={{
                textTransform: "capitalize",
                fontSize: "15px",
                color: "darkblue",
              }}
            >
              Welcome to the Video Search App
            </label>
            <input
              className="in"
              type="text"
              name="search"
              value={this.state.term}
              onChange={this.handleChange}
              placeholder="Search here..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
