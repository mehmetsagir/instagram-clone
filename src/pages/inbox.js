import Link from "next/link";
import ContentLoader from "react-content-loader";

import Button from "src/components/Button";
import styled from "styled-components";

const inbox = () => {
  return (
    <StyledInbox className="relative">
      <div className="message-list">
        <div className="message-list-header">
          <Link href="#">
            <a>mehmetsagirdev</a>
          </Link>
          <button>
            <svg fill="#262626" height="24" viewBox="0 0 44 44" width="24">
              <path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path>
              <path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path>
              <path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path>
            </svg>
          </button>
        </div>
        <ul className="message-list-content">
          <li>
            <ContentLoader
              speed={2}
              width={200}
              height={60}
              viewBox="0 0 200 60"
              backgroundColor="#ecebeb"
              foregroundColor="#f3f3f3"
            >
              <rect x="70" y="14" rx="3" ry="3" width="135" height="13" />
              <circle cx="29" cy="29" r="29" />
              <rect x="70" y="36" rx="3" ry="3" width="83" height="13" />
            </ContentLoader>
          </li>
          <li>
            <ContentLoader
              speed={2}
              width={200}
              height={60}
              viewBox="0 0 200 60"
              backgroundColor="#ecebeb"
              foregroundColor="#f3f3f3"
            >
              <rect x="70" y="14" rx="3" ry="3" width="135" height="13" />
              <circle cx="29" cy="29" r="29" />
              <rect x="70" y="36" rx="3" ry="3" width="83" height="13" />
            </ContentLoader>
          </li>
          <li>
            <ContentLoader
              speed={2}
              width={200}
              height={60}
              viewBox="0 0 200 60"
              backgroundColor="#ecebeb"
              foregroundColor="#f3f3f3"
            >
              <rect x="70" y="14" rx="3" ry="3" width="135" height="13" />
              <circle cx="29" cy="29" r="29" />
              <rect x="70" y="36" rx="3" ry="3" width="83" height="13" />
            </ContentLoader>
          </li>
        </ul>
      </div>
      <div className="message-container no-message">
        <div>
          <svg fill="#262626" height="50" viewBox="0 0 48 48" width="50">
            <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
          </svg>
        </div>
        <p>Your Messages</p>
        <span>Send private photos and messages to a friend or group.</span>
        <Button block={false}>Send Message</Button>
      </div>
    </StyledInbox>
  );
};

const StyledInbox = styled.div`
  height: 87vh;
  border: 1px solid #d8d8d8;
  display: flex;

  .message-list {
    width: 350px;
    height: 100%;
    border-right: 1px solid #d8d8d8;
  }

  .message-list-header {
    border-bottom: 1px solid #d8d8d8;
    position: relative;
    text-align: center;

    a {
      line-height: 60px;
      font-weight: 600;
    }
    svg {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .message-list-content {
    padding: 20px;
    li:not(:first-child) {
      margin-top: 7px;
    }
  }

  .message-container {
    flex: 1;
    height: 100%;
  }

  .no-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    div {
      border: 2px solid #000;
      border-radius: 50%;
      padding: 10px 20px;
      svg {
        margin-top: 14px;
      }
    }
    p {
      margin-top: 10px;
      font-size: 22px;
      font-weight: 300;
      color: #262626;
    }
    span {
      margin-top: 4px;
      color: #8e8e8e;
      font-size: 14px;
    }
    button {
      margin-top: 20px;
      font-weight: 500;
    }
  }
`;

export default inbox;
