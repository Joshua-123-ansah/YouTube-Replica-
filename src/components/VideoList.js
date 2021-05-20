import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  let videos = props.videos;

  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={props.onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui relax divided list">{renderedList}</div>;
};

export default VideoList;
