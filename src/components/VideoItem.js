import React from "react";

const VideoItem = ({ video, onVideoClick }) => {
  return (
    <div className="item" onClick={() => onVideoClick(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header" style={{ color: "darkblue" }}>
          {video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
