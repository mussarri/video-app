import React from "react";
import { useParams } from "react-router-dom";

const VideoDetail = () => {
  const { title } = useParams();
  return <div>VideoDetail: {title}</div>;
};

export default VideoDetail;
