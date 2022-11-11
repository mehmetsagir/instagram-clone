import Post from "src/components/Post.js";

import RightBar from "src/components/Home/RightBar";
import Stories from "src/components/Home/Stories";
import styled from "styled-components";

export default function Home() {
  return (
    <StyledHome className="relative">
      <div>
        <Stories />
        <Post />
        <Post />
      </div>
      <RightBar />
    </StyledHome>
  );
}

const StyledHome = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;
