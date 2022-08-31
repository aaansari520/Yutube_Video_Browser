import React, { Component } from "react";
import youtube from "./api/youtube";
import Loader from "./components/Loader";
import SearchBar from "./components/SearchBar";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
    isLoading: false,
  };

  componentDidMount() {
    this.onSearchSubmit("Relaxing Music");
  }

  onSearchSubmit = async (term) => {
    this.setState({ isLoading: true });
    try {
      const response = await youtube.get("/search", {
        params: {
          q: term,
        },
      });
      console.log(response.data.items);
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0],
      });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log("Errors", error.message);
    }
  };

  onVideoClick = (video) => {
    console.log("From The APP comp", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="back">
        <div className="ui container">
          <SearchBar onSearchSubmit={this.onSearchSubmit} />
          {/* {this.selectedVideo ? (
          <VideoDetail video={this.state.selectedVideo} />
        ) : (
          ""
        )} */}
          {this.state.isLoading ? (
            <Loader />
          ) : (
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                  <VideoList
                    videos={this.state.videos}
                    onVideoClick={this.onVideoClick}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
