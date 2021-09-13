import React, { useState } from "react";
import styled from "styled-components";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import MoodIcon from "@material-ui/icons/Mood";

const StatusPoster = () => {
  const [input, setInput] = useState("");
  const [inputURL, setInputURL] = useState("");

  return (
    <Container>
      <HeaderTop>
        <div className="status">
          <div className="profile"></div>
          <input type="text" placeholder="Whats on your mind, Venura?" value={input} onChange={(e) => setInput(e.target.value)} />
        </div>
        <div className="imageurl">
          <input type="text" placeholder="Image url (Optional)" value={inputURL} onChange={(e) => setInputURL(e.target.value)} />
        </div>
      </HeaderTop>
      <HeaderBottom>
        <div className="separator"></div>
        <div className="icons">
          <div className="live-video">
            <VideoCallIcon className="video-call-icon" />
            <span>Live Video</span>
          </div>
          <div className="photo-video">
            <PhotoLibraryIcon className="photolib" />
            <span>Photo/Video</span>
          </div>
          <div className="feeling">
            <MoodIcon className="mood" />
            <span>Feeling/Activity</span>
          </div>
        </div>
      </HeaderBottom>
    </Container>
  );
};

export default StatusPoster;

const Container = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  height: 7.8125rem; //125px;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);
`;

const HeaderTop = styled.div`
  height: 4rem;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 1rem;

  .status {
    display: flex;
    align-items: center;
    flex: 2;

    .profile {
      margin-right: 10px;
      width: 46px;
      height: 40px;
      background-image: url("/images/profile.jpg");
      border-radius: 50%;
      background-size: cover;
      object-fit: cover;
      background-position: center;
    }

    input {
      height: 40px;
      width: 100%;
      border-radius: 100px;
      padding: 0 20px;
      outline: none;
      border: none;
      background-color: #f0f2f5;
      font-size: 1rem;
    }

    input::placeholder {
      color: #949aa0;
    }
  }

  .imageurl {
    margin-left: 10px;
    flex: 1;
    input {
      width: 100%;
      border-radius: 100px;
      padding: 0 20px;
      outline: none;
      border: none;
      height: 40px;
      background-color: #f0f2f5;
      font-size: 1rem;
    }

    input::placeholder {
      color: #949aa0;
    }
  }
`;

const HeaderBottom = styled.div`
  height: calc(7.8125rem - 4rem);
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  .separator {
    width: ;
    height: 1px;
    background-color: #f0f2f5;
  }

  .icons {
    flex: 1;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .live-video {
      padding: 10px 20px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.25s ease;
      display: flex;
      align-items: center;

      .video-call-icon {
        color: #e42645;
        margin-right: 10px;
      }

      &:hover {
        background-color: #ebedf0;
      }
    }

    .photo-video {
      display: flex;
      align-items: Center;
      padding: 10px 20px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.25s ease;

      .photolib {
        color: #41b35d;
        margin-right: 10px;
      }

      &:hover {
        background-color: #ebedf0;
      }
    }

    .feeling {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.25s ease;

      .mood {
        color: #eab127;
        margin-right: 10px;
      }

      &:hover {
        background-color: #ebedf0;
      }
    }

    span {
      font-weight: 600;
      color: #606266;
    }
  }
`;
