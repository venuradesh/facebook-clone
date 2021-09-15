import React from "react";
import styled from "styled-components";
import LeftSideBarTile from "./LeftSideBarTile";
import LeftSideBarBottom from "./leftSideBarBottom";

const LeftSideBar = (props) => {
  return (
    <Container>
      <LeftSideBarTile src={props.profilePhoto} title={props.profileName} profile="profile" />
      <LeftSideBarTile src="/images/friends.png" title="Friends" subtitle="2 requests" dots="dots" />
      <LeftSideBarTile src="/images/bookmark.png" title="Pages" subtitle="9+ new" dots="dots" />
      <LeftSideBarTile src="/images/multiple-users-silhouette.png" title="Groups" />
      <LeftSideBarTile src="/images/store.png" title="Marketplace" />
      <LeftSideBarTile src="/images/facebook.png" title="Watch" subtitle="2 new videos" dots="dots" />
      <LeftSideBarTile src="/images/return-to-the-past.png" title="Memories" />
      <LeftSideBarTile src="/images/event.png" title="Events" />
      <LeftSideBarTile src="/images/suitcase.png" title="Jobs" />
      <LeftSideBarTile src="/images/expand-button.png" title="See more" profile="see-more" />
      <LeftSideBarBottom />
    </Container>
  );
};

export default LeftSideBar;

const Container = styled.div``;
