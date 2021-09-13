import React from "react";
import styled from "styled-components";

const StoryReel = (props) => {
  return (
    <Container>
      <CoverPhoto src={props.src}></CoverPhoto>
      <div className="shade"></div>
      <ProfilePhoto src={props.profile}></ProfilePhoto>
      <h5>{props.name}</h5>
    </Container>
  );
};

export default StoryReel;

const Container = styled.div`
  position: relative;
  width: 5.8125rem;
  height: 10.25rem;
  border-radius: 12px;
  overflow: hidden;
  margin-right: 8px;
  cursor: pointer;
  box-shadow: 0 5px 17px -7px rgba(0, 0, 0, 0.75);

  .shade {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: all 0.25s ease;
  }

  h5 {
    width: 100%:
    text-align:center;
    font-size: 0.75rem;
    color: #eaecef;
    position: absolute;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
  }

  &:hover {
    .shade {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const CoverPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfilePhoto = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  object-fit: cover;
  left: 10px;
  top: 10px;
  border: 4px solid #166ada;
`;
