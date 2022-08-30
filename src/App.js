import React, { Component } from "react";
import youtube from "./api/youtube";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

class App extends Component {
  state = {
    videos: [],
  };

  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    console.log(response.data.items);
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
