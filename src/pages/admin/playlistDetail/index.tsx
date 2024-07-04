import React from "react";
import { useParams } from "react-router-dom";

const PlaylistDetail = () => {
  const { name } = useParams();
  return <div>PlaylistDetail: {name}</div>;
};

export default PlaylistDetail;
