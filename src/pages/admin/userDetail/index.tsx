import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { username } = useParams();
  return <div>UserDetail : {username}</div>;
};

export default UserDetail;
