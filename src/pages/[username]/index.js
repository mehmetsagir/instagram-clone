import React from "react";

import Post from "src/components/Explore/Post";
import { StyledPosts } from "../explore";
import Header from "src/components/Profile/Header";

const username = () => {
  const fakePostData = [
    {
      id: 321,
      like: 413,
      comment: 1,
    },
    {
      id: 232,
      like: 65,
      comment: 5,
    },
    {
      id: 123,
      like: 244,
      comment: 3,
    },
  ];

  return (
    <>
      <Header />
      {fakePostData.length > 0 ? (
        <StyledPosts>
          {fakePostData.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </StyledPosts>
      ) : (
        <span className="info-text">Post not found!</span>
      )}
    </>
  );
};

export default username;
