import React from "react";
import styled from "styled-components";
import { logout } from "../features/User/UserSlice";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

function Logout(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const onLogoutClick = () => {
    auth.signOut().then((res) => {
      dispatch(logout());
      history.push("/login");
    });
  };

  return props.trigger ? (
    <Container className="Container-container" onClick={onLogoutClick}>
      <div className="logout-wrapper">
        <img src="/images/logout.png" />
      </div>
      <span>Log Out</span>
    </Container>
  ) : (
    ""
  );
}

export default Logout;

const Container = styled.div`
  position: absolute;
  right: 15px;
  top: 50px;
  width: 200px;
  height: 60px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  box-shadow: 0 5px 7px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  .logout-wrapper {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #e4e6eb;
    margin-right: 20px;

    img {
      transform: translateX(-3px);
      width: 20px;
    }
  }

  span {
    font-size: 1rem;
    font-weight: 500;
  }

  &:hover {
    background-color: #d8dadf;

    .logout-wrapper {
      background-color: #ffffff;
    }
  }
`;

// const Logout = styled.div`
//   width: 200px;
//   height: 60px;
//   background-color: #ffffff;
//   position: absolute;
//   right: 15px;
//   top: 50px;
//   display: flex;
//   align-items: center;
//   padding: 0 1.5rem;
//   box-shadow: 0 5px 7px 2px rgba(0, 0, 0, 0.15);
//   border-radius: 12px;
//   cursor: pointer;
//   transition: all 0.25s ease;

//   .logout-wrapper {
//     width: 40px;
//     height: 40px;
//     background-color: ;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     margin-right: 10px;
//     transition: all 0.25s ease;

//     img {
//       width: 20px;
//       transform: translateX(-10%);
//     }
//   }

//   span {
//     font-size: 0.9rem;
//     font-weight: 600;
//   }

// `;
