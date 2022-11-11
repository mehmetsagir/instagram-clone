import Link from "next/link";

import styled from "styled-components";

import Avatar from "src/components/Avatar";

const RightBar = () => {
  return (
    <StyledRightBar>
      <div className="user">
        <div>
          <Avatar />
          <div>
            <Link href="#">
              <a>mehmetsagirc</a>
            </Link>
            <span>mehmet</span>
          </div>
          <button>Switch</button>
        </div>
      </div>

      <div className="title">
        <span>Suggestions For You</span>
        <Link href="#">
          <a>See All</a>
        </Link>
      </div>

      <div className="user-list">
        <div>
          <Avatar size="sm" />
          <div>
            <Link href="#">
              <a>username</a>
            </Link>
            <span>New to Instagram</span>
          </div>
          <button>Follow</button>
        </div>
        <div>
          <Avatar size="sm" />
          <div>
            <Link href="#">
              <a>username</a>
            </Link>
            <span>New to Instagram</span>
          </div>
          <button>Follow</button>
        </div>
        <div>
          <Avatar size="sm" />
          <div>
            <Link href="#">
              <a>username</a>
            </Link>
            <span>New to Instagram</span>
          </div>
          <button>Follow</button>
        </div>
        <div>
          <Avatar size="sm" />
          <div>
            <Link href="#">
              <a>username</a>
            </Link>
            <span>New to Instagram</span>
          </div>
          <button>Follow</button>
        </div>
        <div>
          <Avatar size="sm" />
          <div>
            <Link href="#">
              <a>username</a>
            </Link>
            <span>New to Instagram</span>
          </div>
          <button>Follow</button>
        </div>
      </div>

      <footer>
        <div className="links">
          <a>About</a>
          <a>Help</a>
          <a>Press</a>
          <a>API</a>
          <a>Jobs</a>
          <a>Privacy</a>
          <a>Terms</a>
          <a>Locations</a>
          <a>Top Accounts</a>
          <a>Hashtags</a>
          <a>Language</a>
        </div>
        <p className="copyright">© 2021 INSTAGRAM FROM FACEBOOK</p>
      </footer>
    </StyledRightBar>
  );
};

const StyledRightBar = styled.div`
  margin-left: 30px;

  .user {
    display: flex;
    align-items: flex-end;
    & > div {
      width: 100%;
      display: flex;
      align-items: center;
      div {
        margin-left: 10px;
        font-size: 14px;
        a {
          display: block;
          font-weight: 500;
        }
        span {
          color: #8e8e8e;
        }
      }
      button {
        margin-left: auto;
        color: #0095f6;
        font-weight: 600;
        font-size: 12px;
      }
    }
  }

  .title {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 14px;
      font-weight: 500;
      color: #8e8e8e;
    }
    a {
      font-size: 12px;
    }
  }

  .user-list {
    margin-top: 15px;
    div:not(:last-child) {
      margin-bottom: 5px;
    }
    div {
      display: flex;
      div {
        flex-direction: column;
        margin-left: 4px;
        a {
          display: block;
          font-weight: 500;
          font-size: 14px;
        }
        span {
          color: #8e8e8e;
          font-size: 12px;
        }
      }
      button {
        margin-left: auto;
        color: #0095f6;
        font-weight: 600;
        font-size: 12px;
      }
    }
  }

  .links {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    a {
      margin-right: 6px;
      padding-right: 6px;
      font-size: 11px;
      color: #c7c7c7;
      position: relative;
      cursor: pointer;
      &:not(:last-child)::before {
        content: "";
        position: absolute;
        top: 50%;
        right: -3px;
        transform: translateX(-50%);
        background: #cccccc;
        border-radius: 50%;
        width: 3px;
        height: 3px;
      }
    }
  }

  .copyright {
    margin-top: 18px;
    color: #c7c7c7;
    font-size: 11px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

export default RightBar;
