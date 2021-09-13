import React from "react";
import styled from "styled-components";
import LeftSideBar from "./LeftSideBar";

const LeftSideBarBottom = () => {
  return (
    <Container>
      <Separator></Separator>
      <h3>Your Shortcuts</h3>
      <LeftSideBar src="/images/programmer.png" title="Full Stack Dev" profile="cover" />
      <Footer>
        <ul>
          <li>This</li>
          <li>is</li>
          <li>only</li>
          <li>for</li>
          <li>Fun.</li>
          <li>Not</li>
          <li>to</li>
          <li>duplicate</li>
          <li>facebook</li>
          <li>&copy; Venura Warnasooriya</li>
        </ul>
      </Footer>
    </Container>
  );
};

export default LeftSideBarBottom;

const Container = styled.div`
  width: 100%;
  padding-right: 24px;

  h3 {
    margin-left: 16px;
    color: #adafb4;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

const Separator = styled.div`
  margin: 10px 7px;
  width: 100%;
  height: 1px;
  background-color: #bcc0c4;
`;

const Footer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;

  ul {
    margin: 0 16px;
    padding: 0 16px;
    display: flex;
    flex-wrap: wrap;

    li {
      margin-right: 20px;
      color: #adafb4;
      font-size: 0.8rem;
    }
  }
`;
