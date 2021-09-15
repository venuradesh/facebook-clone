import React, { useEffect } from "react";
import styled from "styled-components";
import { auth, googleProvider } from "../firebase";
import { useDispatch } from "react-redux";
import { login } from "../features/User/UserSlice";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            name: user.displayName,
            email: user.email,
            profilePhoto: user.photoURL,
          })
        );
        history.push("/");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(googleProvider).then((result) => {
      dispatch(
        login({
          name: result.user.displayName,
          email: result.user.email,
          profilePhoto: result.user.photoURL,
        })
      );
      history.push("/");
    });
  };

  return (
    <Container>
      <Wrapper>
        <FBLogo src="/images/facebook-logo.png" />
        <FBName>
          facebook <span>clone</span>
        </FBName>
      </Wrapper>
      <BtnWrapper>
        <Button onClick={signIn}>Continue With Google Account</Button>
      </BtnWrapper>
      <Copyrights>&copy; 2021 Venura Warnasooriya</Copyrights>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const Wrapper = styled.div`
  flex: 2;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: default;
`;

const FBLogo = styled.img`
  width: 100px;
`;

const FBName = styled.h1`
  font-size: 5rem;
  background: -webkit-linear-gradient(top, #4a7aff, #0053bf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  span {
    font-size: 1.2rem;
  }
`;

const BtnWrapper = styled.div`
  flex: 1;
`;

const Button = styled.button`
  width: 380px;
  height: 60px;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-radius: 100px;
  background-color: #0053bf;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 300ms ease;

  &:hover {
    background-color: #4a7aff;
  }
`;

const Copyrights = styled.div`
  position: absolute;
  bottom: 20px;
  left: 30px;
  color: #363738;
`;
