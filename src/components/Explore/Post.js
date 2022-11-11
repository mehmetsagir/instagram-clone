import Link from "next/link";

import styled from "styled-components";

const Post = ({ post }) => {
  return (
    <Link href="/post/1">
      <StyledPost>
        <img
          src={`https://picsum.photos/300/300?random=${post.id}`}
          alt="user-image"
        />
        <div>
          <p>
            <svg fill="#fff" width="20" height="20" viewBox="0 0 48 48">
              <path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
            </svg>
            <span>{post.like}</span>
          </p>
          <p>
            <svg fill="#fff" width="20" height="20" viewBox="0 0 512 512">
              <path d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path>
            </svg>
            <span>{post.comment}</span>
          </p>
        </div>
      </StyledPost>
    </Link>
  );
};

const StyledPost = styled.a`
  width: 295px;
  height: 295px;
  cursor: pointer;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  &:hover div {
    opacity: 1;
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(black, 0.4);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: white;
    opacity: 0;
    font-size: 17px;
    font-weight: 600;
    transition: 200ms;

    p {
      display: flex;
      align-items: center;
      &:first-child {
        margin-right: 10px;
      }
      svg {
        margin-right: 5px;
      }
    }
  }
`;

export default Post;
