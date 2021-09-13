import React from "react";
import styled from "styled-components";

const LeftSideBar = (props) => {
  return (
    <Container>
      <Wrapper>
        <div className="icon-wrapper">
          <img className={props.profile} src={props.src} />
        </div>
        <div className="text">
          <span className="title">{props.title}</span>
          <span className="subtitle">{props.subtitle}</span>
          <div className={props.dots}></div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default LeftSideBar;

const Container = styled.div`
  height: 55px;
  display: flex;
  align-items: Center;
  margin-left: 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const Wrapper = styled.div`
  padding: 0 7px;
  display: flex;
  align-items: center;

  .icon-wrapper {
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 15px;
    }

    .profile {
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
    }

    .see-more {
      width: 1rem;
      height: 1rem;
      background-color: #f0f2f5;
      padding: 8px;
      border-radius: 50%;
      box-sizing: content-box;
    }

    .cover {
      width: 1.5rem;
      height: 1.5rem;
      padding: 5px;
      box-sizing: content-box;
      border-radius: 4px;
      background-color: #f0f2f5;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    position: relative;

    .title {
      font-size: 1rem;
      font-weight: 500;
      color: #363738;
    }

    .subtitle {
      font-size: 0.75rem;
      font-weight: 400;
      padding: 0 10px;
      color: #2b80f0;
    }

    .dots {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #2b80f0;
      position: absolute;
      bottom: 4px;
    }
  }
`;
