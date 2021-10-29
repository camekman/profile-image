import React from "react";
import "./ProfileImage.css";

const ProfileImage = ({ image, name }) => {
  return (
    <div className="container">
      <div className="overlay"></div>
      <img className="profile-img" src={image} alt="profile-img" />
      <h1 className="profile-name" style={{ color: "#EBFF00" }}>
        {name}
      </h1>
    </div>
  );
};

export default ProfileImage;
