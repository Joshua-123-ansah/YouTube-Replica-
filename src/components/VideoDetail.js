import React from "react";

//Destructuring the props

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="ui segment">
      <div className="ui embed">
        <iframe src={videoSRC} title='Video Player'></iframe>
      </div>
      <h4 className="ui header">{video.snippet.title}</h4>
      <br />
      <p>{video.snippet.description}</p>
    </div>
  );
};
export default VideoDetail;



