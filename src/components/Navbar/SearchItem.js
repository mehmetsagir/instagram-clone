import Link from "next/link";

import styled from "styled-components";

import Avatar from "src/components/Avatar";

const SearchItem = () => {
  return (
    <StyledSearchItem>
      <Avatar size="md" />
      <Link href="/">
        <a>
          <div>
            <b>mehmetsagirdev</b>
            <span>Mehmet Sağır</span>
          </div>
        </a>
      </Link>
    </StyledSearchItem>
  );
};

const StyledSearchItem = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 15px;

  & > a {
    display: block;
    width: 100%;
    div {
      b {
        font-weight: 500;
        display: block;
      }
      span {
        color: rgba(black, 0.7);
      }
    }
  }

  &:hover {
    background: rgba(#ddd, 0.3);
  }
`;

export default SearchItem;
