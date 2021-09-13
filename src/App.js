import Header from "./Components/Header";
import LeftSideBar from "./Components/LeftSideBar";
import "./Styles/appBody.css";
import LeftSideBarBottom from "./Components/leftSideBarBottom";
import StoryReel from "./Components/StoryReel";
import Widgets from "./Components/Widgets";
import StatusPoster from "./Components/StatusPoster.js";
import Post from "./Components/Post";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <div className="app-body-left">
          <LeftSideBar src="/images/profile.jpg" title="Venura Warnasooriya" profile="profile" />
          <LeftSideBar src="/images/friends.png" title="Friends" subtitle="2 requests" dots="dots" />
          <LeftSideBar src="/images/bookmark.png" title="Pages" subtitle="9+ new" dots="dots" />
          <LeftSideBar src="/images/multiple-users-silhouette.png" title="Groups" />
          <LeftSideBar src="/images/store.png" title="Marketplace" />
          <LeftSideBar src="/images/facebook.png" title="Watch" subtitle="2 new videos" dots="dots" />
          <LeftSideBar src="/images/return-to-the-past.png" title="Memories" />
          <LeftSideBar src="/images/event.png" title="Events" />
          <LeftSideBar src="/images/suitcase.png" title="Jobs" />
          <LeftSideBar src="/images/expand-button.png" title="See more" profile="see-more" />
          <LeftSideBarBottom />
        </div>
        <div className="app-body-middle">
          <div className="stories">
            <StoryReel src="https://www.globaltranz.com/wp-content/uploads/logistics-mobile-apps.jpg" profile="/images/profile.jpg" name="Venura Warnasooriya" />
            <StoryReel src="https://thumbs.dreamstime.com/b/inspirational-quote-if-you-get-tired-learn-to-rest-not-quit-street-background-171742847.jpg" profile="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80" name="John Smith" />
            <StoryReel src="https://images.unsplash.com/photo-1617251137884-f135eccf6942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zcGlyYXRpb25hbCUyMHF1b3RlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" profile="https://images.unsplash.com/photo-1496440737103-cd596325d314?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" name="Sanduli Perera" />
            <StoryReel src="https://colibriwp.com/blog/wp-content/uploads/2018/07/banner-redimensionat.jpg" profile="https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" name="Emma Watson" />
            <StoryReel src="https://www.designbombs.com/wp-content/uploads/2017/02/make-a-website-1280x720.jpg" profile="https://www.designbombs.com/wp-content/uploads/2017/02/make-a-website-1280x720.jpg" name="Web Dev Simplify" />
            <StoryReel src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" profile="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" name="Kevin Powel" />
            <div className="more-stories">
              <img src="/images/arrow-pointing-to-right.png" />
            </div>
          </div>
          <StatusPoster />
          <Post profilePhoto="/images/profile.jpg" profileName="Venura Warnasooriya" time="6 min ago" media="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
        </div>
        <div className="app-body-right">
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default App;
