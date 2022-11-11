import Link from "next/link";

import styled from "styled-components";

import Avatar from "src/components/Avatar";
import Button from "src/components/Button";

const NotificationModalItem = ({ type }) => {
  return (
    <StyledNotificationModalItem>
      <Avatar />
      <div>
        <Link href="#">
          <a>mehmetsagirdev</a>
        </Link>
        {type === "like" ? <p>like this.</p> : <p>started following you.</p>}
        <span>6d</span>
      </div>
      {type === "like" ? (
        <>
          <Link href="#">
            <a>
              <img
                src="https://i.internethaber.com/storage/files/images/2019/05/08/avatar-2-3-ve-4un-vizyon-tarihle-lna9_cover.jpg"
                alt=""
              />
            </a>
          </Link>
        </>
      ) : (
        <Button background={false} block={false}>
          Following
        </Button>
      )}
    </StyledNotificationModalItem>
  );
};

const StyledNotificationModalItem = styled.div`
  width: 100%;
  min-height: 80px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 15px;
  font-size: 14px;

  & > a:not(:first-child) {
    margin-left: auto;
    img {
      width: 50px;
      height: 50px;
      border-radius: 4px;
    }
  }

  div {
    p {
      display: inline-block;
      margin: 0 5px;
    }
    a {
      font-weight: 500;
    }
    span {
      color: #ccc;
    }
  }

  button {
    margin-left: auto;
    font-weight: 500;
  }
`;

export default NotificationModalItem;
