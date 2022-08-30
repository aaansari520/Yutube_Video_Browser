import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  //   console.log("videos", videos);
  const renderList = videos.map((vid) => {
    return <VideoItem video={vid} />;
  });
  return <div> {renderList}</div>;
};

export default VideoList;
