import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoClick }) => {
  //   console.log("videos", videos);
  const renderList = videos.map((vid) => {
    return (
      <div key={vid.id.videoId} className="item">
        <VideoItem video={vid} onVideoClick={onVideoClick} />
      </div>
    );
  });
  return <div className="ui relaxed divided list"> {renderList}</div>;
};

export default VideoList;
