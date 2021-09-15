import React, { useEffect, useState } from "react";
import LeftSideBar from "./LeftSideBar";
import Header from "./Header";
import StatusPoster from "./StatusPoster";
import StorySection from "./StorySection";
import Widgets from "./Widgets";
import Post from "./Post";
import { useSelector } from "react-redux";
import { selectName, profilePhoto } from "../features/User/UserSlice";
import { useHistory } from "react-router-dom";
import db from "../firebase";

const Home = () => {
  const userName = useSelector(selectName);
  const prPhoto = useSelector(profilePhoto);
  const history = useHistory();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot(
      (snap) => {
        setPosts(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      },
      (err) => console.log(err)
    );
  }, []);

  return (
    <>
      {!userName ? (
        history.push("/login")
      ) : (
        <>
          <Header profileName={userName} profilePhoto={prPhoto} />
          <div className="app-body">
            <div className="app-body-left">
              <LeftSideBar profileName={userName} profilePhoto={prPhoto} />
            </div>
            <div className="app-body-middle">
              <div className="stories">
                <StorySection />
              </div>
              <StatusPoster profilePhoto={prPhoto} profileName={userName} />
              {posts.map((post) => (
                <>
                  {console.log(post.data.timestamp.seconds)}
                  <Post profilePhoto={post.data.profilePhoto} profileName={post.data.profileName} time={post.data.timestamp} media={post.data.image} message={post.data.message} key={post.id} />
                </>
              ))}
            </div>
            <div className="app-body-right">
              <Widgets />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
