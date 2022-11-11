import Post from "src/components/Explore/Post";

import styled from "styled-components";

const explore = () => {
  const fakePostData = [
    {
      id: 1,
      like: 23,
      comment: 1,
    },
    {
      id: 2,
      like: 65,
      comment: 5,
    },
    {
      id: 3,
      like: 244,
      comment: 3,
    },
    {
      id: 4,
      like: 125,
      comment: 7,
    },
    {
      id: 5,
      like: 986,
      comment: 25,
    },
    {
      id: 6,
      like: 757,
      comment: 42,
    },
    {
      id: 7,
      like: 7,
      comment: 1,
    },
    {
      id: 8,
      like: 34,
      comment: 6,
    },
    {
      id: 9,
      like: 64,
      comment: 2,
    },
  ];

  return (
    <StyledPosts>
      {fakePostData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </StyledPosts>
  );
};

export const StyledPosts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  padding-bottom: 40px;

  .info-text {
    display: block;
    color: #8e8e8e;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    margin: 30px 0;
  }
`;

export default explore;
