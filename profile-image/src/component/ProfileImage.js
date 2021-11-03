import React from "react";
// import "./ProfileImage.css";
import styled from "styled-components";

const OverLay = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 99%;
  background-color: black;
  opacity: 0;
`;

const ProfileImg = styled.img`
  width: 250px;
`;

const ProfileName = styled.h1`
  color: ${(props) => props.color};
  display: none;
  position: absolute;
  top: 25%;
  left: 5%;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
`;

const Container = styled.div`
  position: relative;
  border-radius: 50%;
  width: 250px;
  text-align: center;
  margin: 100px auto;
  &:hover${OverLay} {
    opacity: 0.5;
  }
  &:hover${ProfileName} {
    display: block;
  }
`;

const ProfileImage = ({ image, name }) => {
  return (
    <Container>
      <OverLay> </OverLay>
      <ProfileImg src={image} alt="profile-img" />
      <ProfileName color={"#EBFF00"}>{name}</ProfileName>
    </Container>
  );
};

export default ProfileImage;
