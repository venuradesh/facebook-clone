import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import HomeIcon from "@material-ui/icons/Home";
import StorefrontIcon from "@material-ui/icons/Storefront";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

const Header = () => {
  return (
    <Container>
      <Search>
        <img src="/images/facebook-logo.png" />
        <SearchBar>
          <input type="text" name="serach-bar" id="search-bar" placeholder="Search Facebook" />
          <SearchIcon className="fa fa-search" />
        </SearchBar>
      </Search>
      <OptionIcons>
        <div className="home feed-options">
          <div className="hover">
            <HomeIcon className="home-icon" />
          </div>
        </div>
        <div className="watch feed-options">
          <div className="hover">
            <SubscriptionsOutlinedIcon className="watch-icon" />
          </div>
        </div>
        <div className="marketplace feed-options">
          <div className="hover">
            <StorefrontIcon className="market-icon" />
          </div>
        </div>
        <div className="group feed-options">
          <div className="hover">
            <SupervisedUserCircleIcon className="group-icon" />
          </div>
        </div>
      </OptionIcons>
      <RightOptions>
        <div className="profile right-menu">
          <img src="/images/profile.jpg" />
          <span>Venura</span>
        </div>
        <div className="menu right-menu">
          <img src="/images/dots-menu.png" />
        </div>
        <div className="messenger right-menu">
          <img src="/images/messenger.png" />
        </div>
        <div className="bell right-menu">
          <img src="/images/bell.png" />
        </div>
        <div className="drop-down right-menu">
          <img src="/images/down-filled-triangular-arrow.png" />
        </div>
      </RightOptions>
    </Container>
  );
};

const Container = styled.div`
  height: 3.4375rem;
  width: 100vw;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Search = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 42px;
    height: 42px;
    margin-right: 10px;
    cursor: pointer;
  }
`;

const SearchBar = styled.div`
  position: relative;

  input {
    width: 240px;
    height: 40px;
    border-radius: 100px;
    border: none;
    background-color: #f0f2f5;
    padding-left: 40px;
    font-size: 1rem;
    font-weight: 200;
    outline: none;
  }

  input::placeholder {
    color: #949aa0;
  }

  .fa-search {
    position: absolute;
    left: 10px;
    color: #949aa0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.3rem;
  }
`;

const OptionIcons = styled.div`
  display: flex;
  align-items: center;

  .feed-options {
    width: 110px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-bottom: 3px solid transparent;

    * {
      font-size: 2rem;
    }

    .home-icon {
      color: #1877f2;
    }

    .hover {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 47px;
      width: calc(100% - 5px);
      border-radius: 8px;
      transition: all 0.25s ease;

      &:hover {
        background-color: #f2f2f2;
      }
    }
  }

  .feed-options:first-of-type {
    .hover:hover {
      background-color: transparent;
    }
  }

  .home {
    border-bottom: 3px solid #1877f2;
  }

  .watch-icon,
  .market-icon,
  .group-icon {
    width: 30px;
    color: #6c6e72;
  }
`;

const RightOptions = styled.div`
  display: flex;
  align-items: center;

  .right-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;

    img {
      color: #363738;
      width: 18px;
    }

    span {
      color: #363738;
    }
  }

  .right-menu:last-of-type {
    margin-right: 0;

    img {
      width: 12px;
    }
  }

  .right-menu:first-of-type {
    padding: 5px;
    margin-right: 20px;
    border-radius: 100px;
    transition: all 0.25s ease;

    &:hover {
      background-color: #f2f2f2;
    }
  }

  .menu,
  .messenger,
  .bell,
  .drop-down {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #e4e6eb;
    transition: all 0.25s ease;

    &:hover {
      background-color: #d8dadf;
    }
  }

  .profile {
    display: flex;
    align-items: center;

    img {
      width: 30px;
      border-radius: 50%;
      margin-right: 10px;
    }

    span {
      font-weight: 600;
    }
  }

  .menu {
    height: 40px;
    width: 40px;
    overflow: hidden;

    img {
      background-position: -63px 107px;
    }
  }
`;

export default Header;
