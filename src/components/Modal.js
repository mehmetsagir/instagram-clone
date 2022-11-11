import { useRef } from "react";
import Link from "next/link";

import styled from "styled-components";

import Avatar from "src/components/Avatar";
import Button from "src/components/Button";
import useOnClickOutside from "src/hooks/useOnClickOutside";

const Modal = ({ isHide, type = "followers" }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => isHide(false));

  const getTitle = () => {
    switch (type) {
      case "followers":
        return { title: "Followers", btnText: "Remove" };
      case "following":
        return { title: "Following", btnText: "Following" };
      case "likes":
        return { title: "Likes", btnText: "Following" };
    }
  };

  return (
    <StyledModal>
      <div className="modal" ref={ref}>
        <div className="header">
          <h1>{getTitle().title}</h1>
          <button onClick={() => isHide(false)}>
            <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24">
              <path d="M41.1 9.1l-15 15L41 39c.6.6.6 1.5 0 2.1s-1.5.6-2.1 0L24 26.1l-14.9 15c-.6.6-1.5.6-2.1 0-.6-.6-.6-1.5 0-2.1l14.9-15-15-15c-.6-.6-.6-1.5 0-2.1s1.5-.6 2.1 0l15 15 15-15c.6-.6 1.5-.6 2.1 0 .6.6.6 1.6 0 2.2z"></path>
            </svg>
          </button>
        </div>
        <div className="content">
          <div>
            <Avatar size="sm" />
            <div>
              <Link href="#">
                <a>mehmetsagirdev</a>
              </Link>
              <p>Mehmet Sağır</p>
            </div>
            <Button background={false} block={false} type={type}>
              {getTitle().btnText}
            </Button>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  place-items: center;
  z-index: 999;

  .modal {
    width: 400px;
    height: 400px;
    border-radius: 12px;
    background-color: #fff;

    .header {
      border-bottom: 1px solid #d8d8d8;
      position: relative;

      h1 {
        font-weight: 600;
        line-height: 45px;
        text-align: center;
        font-size: 16px;
      }
      button {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .content {
      overflow: auto;
      height: 350px;
      & > div {
        padding: 5px 10px;
        display: flex;
        align-items: center;
        color: #262626;
        div {
          margin-left: 10px;
          a {
            font-size: 14px;
            font-weight: 600;
            &:hover {
              text-decoration: underline;
            }
          }
          p {
            color: #8e8e8e;
            font-size: 14px;
          }
        }

        button {
          margin-left: auto;
          font-weight: 600;
        }
      }
    }
  }
`;

export default Modal;
