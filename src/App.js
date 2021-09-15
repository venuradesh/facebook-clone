import Header from "./Components/Header";
import "./Styles/appBody.css";
import LeftSideBar from "./Components/LeftSideBar";
import Widgets from "./Components/Widgets";
import StatusPoster from "./Components/StatusPoster.js";
import Post from "./Components/Post";
import StorySection from "./Components/StorySection";
import Login from "./Components/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./features/User/UserSlice";

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app-body">
            <div className="app-body-left">
              <LeftSideBar />
            </div>
            <div className="app-body-middle">
              <div className="stories">
                <StorySection />
              </div>
              <StatusPoster />
              <Post profilePhoto="/images/profile.jpg" profileName="Venura Warnasooriya" time="6 min ago" media="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VifGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className="app-body-right">
              <Widgets />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
