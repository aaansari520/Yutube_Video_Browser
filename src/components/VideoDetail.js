import React from "react";
import Loader from "./Loader";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <Loader />;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} frameBorder="0"></iframe>
      </div>
      <div className="ui segement">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p style={{ color: "darkblue" }}>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
