import React from "react";
import styled from "styled-components";
import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";

const Post = (props) => {
  return (
    <Container>
      <Header>
        <div className="profile">
          <img className="profile-photo" src={props.profilePhoto}></img>
          <div className="text">
            <div className="main-heading">{props.profileName}</div>
            <div className="posted-on">
              <div className="time">{props.time}</div>
              <PublicIcon className="public-icon" />
            </div>
          </div>
        </div>
        <div className="more-details">
          <MoreHorizIcon className="more-info" />
        </div>
      </Header>
      <Description>
        <div className="caption">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum beatae blanditiis repudiandae eos sapiente vero alias eius vitae voluptatibus ratione soluta voluptates, repellat consequuntur quas dolorum tempore qui! Nobis, sunt magni ipsa quos voluptatibus cum repellendus officia maxime iure eum impedit, ab quasi sed? Eligendi officia sint recusandae quia iusto.</div>
      </Description>
      <Wrapper>
        <img src={props.media} />
      </Wrapper>
      <LikeCount>
        <div className="likes">
          <img src="/images/like.png" />
          <img src="/images/heart.png" />
          <span>17 Likes</span>
        </div>
        <div className="commentsNshare">
          <span>23 Comments</span>
          <span>2 shares</span>
        </div>
      </LikeCount>
      <div className="separator"></div>
      <Engagements>
        <div className="like-section">
          <ThumbUpAltOutlinedIcon className="thumb-up" />
          <span>Like</span>
        </div>
        <div className="comment-section">
          <ChatBubbleOutlineOutlinedIcon className="comment" />
          <span>Comment</span>
        </div>
        <div className="share-section">
          <img src="/images/share.png" />
          <span>Share</span>
        </div>
      </Engagements>
    </Container>
  );
};

export default Post;

const Container = styled.div`
  margin-top: 1.5rem;
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);

  .separator {
    padding: 0 1.5rem;
    width: 92%;
    margin: 0 auto;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const Header = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .profile {
    display: flex;
    align-items: center;

    .profile-photo {
      margin-right: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .text {
      .main-heading {
        font-size: 1rem;
        font-weight: 640;
        color: #363738;
        cursor: pointer;
      }

      .posted-on {
        margin-top: 3px;
        height: 15px;
        display: flex;
        align-items: center;
        cursor: default;

        .time {
          font-size: 0.8rem;
          margin-right: 10px;
          color: #949aa0;
          font-weight: 200;
        }

        .public-icon {
          color: rgba(0, 0, 0, 0.6);
          font-size: 0.8rem;
        }
      }
    }
  }

  .more-details {
    .more-info {
      color: rgba(0, 0, 0, 0.6);
      cursor: pointer;
    }
  }
`;

const Description = styled.div`
  padding: 0 1.5rem 1rem 1.5rem;

  .caption {
    text-align: justify;
    font-size: 15px;
    font-weight: 400;
    color: #363738;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fcfdfa;
`;

const LikeCount = styled.div`
  height: 2.8125rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 1.5rem;

  .likes {
    display: flex;
    align-items: center;

    img {
      width: 1rem;
    }

    span {
      margin-left: 10px;
      font-size: 0.8rem;
    }
  }

  .commentsNshare {
    span {
      font-size: 0.8rem;
      margin-left: 10px;
    }
  }
`;

const Engagements = styled.div`
  height: 2.75rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .like-section {
    width: 165px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.25s ease;

    .thumb-up {
      margin-right: 10px;
    }

    &:hover {
      background-color: #ebedf0;
    }
  }

  .comment-section {
    width: 165px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.25s ease;

    .comment {
      margin-right: 10px;
    }

    &:hover {
      background-color: #ebedf0;
    }
  }

  .share-section {
    width: 165px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.25s ease;

    img {
      width: 20px;
      margin-right: 10px;
    }

    &:hover {
      background-color: #ebedf0;
    }
  }
`;
