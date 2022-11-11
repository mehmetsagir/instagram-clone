import Link from "next/link";

import styled, { css } from "styled-components";

const Avatar = ({ size, story = false }) => {
  const getSize = () => {
    if (size === "sm") return "32";
    else if (size === "x-sm") return "20";
    else if (size === "md") return "44";
    else if (size === "lg") return "150";
    return "56";
  };

  return (
    <Link href="#">
      <StyledAvatar story={story}>
        <img
          width={getSize()}
          height={getSize()}
          src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
          alt=""
        />
      </StyledAvatar>
    </Link>
  );
};

const StyledAvatar = styled.a`
  display: flex;
  margin: 0;
  padding: 2px;
  border-radius: 50%;
  max-width: max-content;
  max-height: max-content;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  img {
    border-radius: 50%;
    border: 1px solid white;
  }

  ${(props) =>
    props.story &&
    css`
      background: linear-gradient(
        219deg,
        rgba(184, 63, 140, 1) 0%,
        rgba(237, 158, 90, 1) 100%
      );
    `}
`;

export default Avatar;
