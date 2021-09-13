import React from "react";
import styled from "styled-components";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import RecordVoiceOverOutlinedIcon from "@material-ui/icons/RecordVoiceOverOutlined";

const Widgets = () => {
  return (
    <Container>
      <WrapperFriends>
        <FriendRequests>
          <div className="header">
            <div className="left">
              <img src="/images/friends.png" />
              <span>Friend Requests</span>
            </div>
            <div className="more-info">
              <MoreHorizIcon className="icon" />
            </div>
          </div>
          <Profile>
            <div className="profile-photo"></div>
            <div className="details">
              <div className="name">Shawn Mendes</div>
              <div className="title">Singer/Artist</div>
              <div className="btn-container">
                <button className="confirm btn">Confirm</button>
                <button className="delete btn">Delete</button>
              </div>
            </div>
          </Profile>
        </FriendRequests>
      </WrapperFriends>
      <Separator />
      <PageWrapper>
        <div className="header">
          <span>Your Pages</span>
          <MoreHorizIcon className="info-icon" />
        </div>
        <div className="page">
          <div className="page-image"></div>
          <div className="page-name">Studio Pariganaka</div>
        </div>
        <div className="engagements">
          <div className="messages">
            <QuestionAnswerOutlinedIcon className="msg-icon" />
            <span>2 Messages</span>
          </div>
          <div className="promotions">
            <RecordVoiceOverOutlinedIcon className="promo-icon" />
            <span>Create Promotion</span>
          </div>
        </div>
      </PageWrapper>
      <Separator />
    </Container>
  );
};

export default Widgets;

const Container = styled.div`
  min-hegiht: 100vh;
  overflow: hidden;
`;

const WrapperFriends = styled.div`
  width: 100%;
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 0.75);
`;

const FriendRequests = styled.div`
  .header {
    display: flex;
    justify-content: space-between;

    .left {
      display: flex;
      align-items: center;

      img {
        width: 20px;
        margin-right: 10px;
      }

      span {
        color: #363738;
        font-weight: 500;
        font-size: 0.9rem;
      }
    }

    .more-info {
      .icon {
        color: #666666;
        cursor: pointer;
      }
    }
  }
`;

const Profile = styled.div`
  margin-top: 10px;
  display: flex;
  cursor: pointer;

  .profile-photo {
    width: 60px;
    height: 60px;
    background-image: url("https://assets.teenvogue.com/photos/5e84a18cc0eb1500087d6a81/1:1/w_2400,h_2400,c_limit/GettyImages-1189889794.jpg");
    background-size: cover;
    object-fit: cover;
    background-position: center;
    border-radius: 50%;
    margin-right: 15px;
  }

  .details {
    .name {
      color: #363738;
      font-weight: 500;
      font-size: 1rem;
    }

    .title {
      color: #666666;
      font-weight: 100;
      font-size: 0.8rem;
    }

    .btn-container {
      display: flex;

      .btn {
        margin-top: 10px;
        border-radius: 4px;
        border: none;
        font-weight: 520;
        font-size: 1rem;
        width: 90px;
        height: 37px;
        cursor: pointer;
        letter-spacing: 1.1px;
      }

      .confirm {
        margin-right: 10px;
        color: #ffffff;
        background-color: #1771e6;
      }

      .delete {
        background-color: #f0f2f5;
        color: #363738;
      }
    }
  }
`;

const Separator = styled.div`
  width: 100%;
  height: 1.5px;
  margin: 20px 0;
  background-color: rgba(0, 0, 0, 0.1);
`;

const PageWrapper = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 12px;
  padding-right: 1.5rem;

  .header {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    span {
      font-size: 17px;
      color: #65676b;
      font-weight: 600;
    }

    .info-icon {
      color: #666666;
      cursor: pointer;
    }
  }

  .page {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .page-image {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-image: url("https://scontent.fcmb11-1.fna.fbcdn.net/v/t1.6435-9/89445934_111169000507386_7519234669997457408_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fHmnZhF-GqIAX8f6KU3&_nc_ht=scontent.fcmb11-1.fna&oh=4d6ab6557945ab578e5773a718d0b502&oe=6164AB67");
      background-size: cover;
      object-fit: cover;
      background-position: center;
      cursor: pointer;
      margin-right: 10px;
    }
    .page-name {
      font-weight: 600;
      cursor: pointer;
      color: #363738;
    }
  }

  .engagements {
    padding: 0 1.1rem;

    .messages {
      margin-bottom: 5px;
      display: flex;
      align-items: center;

      .msg-icon {
        color: #6d6f73;
        width: 20px;
        margin-right: 10px;
      }

      span {
        color: #6d6f73;
        font-weight: 600;
        font-size: 0.9rem;
        cursor: pointer;
      }
    }

    .promotions {
      display: flex;
      align-items: center;

      .promo-icon {
        width: 20px;
        color: #6d6f73;
        margin-right: 10px;
      }

      span {
        color: #6d6f73;
        font-weight: 600;
        cursor: pointer;
        font-size: 0.9rem;
      }
    }
  }
`;
