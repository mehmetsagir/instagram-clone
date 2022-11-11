import { useEffect, useRef, useState } from "react";

import styled from "styled-components";

import NotificationModalItem from "src/components/Navbar/NotificationModalItem";

import useOnClickOutside from "src/hooks/useOnClickOutside";

const NotificationModal = ({ setNotification }) => {
  const [loading, setLoading] = useState(true);

  const ref = useRef();
  useOnClickOutside(ref, () => setNotification(false));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <StyledNotificationModal ref={ref}>
      {loading ? (
        <div style={{ textAlign: "center" }}>
          <svg height="26px" style={{ marginTop: "2px" }} viewBox="0 0 50 50">
            <path
              fill="#000"
              d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      ) : (
        <>
          <NotificationModalItem type="like" />
          <NotificationModalItem type="follow" />
        </>
      )}
    </StyledNotificationModal>
  );
};

const StyledNotificationModal = styled.div`
  width: 500px;
  position: absolute;
  background-color: #fff;
  right: -50px;
  top: 40px;
  padding: 8px 0;
  border-radius: 6px;
  max-height: 500px;
  overflow-y: auto;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  animation: openModal 500ms forwards;
  z-index: 999;

  @keyframes openModal {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default NotificationModal;
