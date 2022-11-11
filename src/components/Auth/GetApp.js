import styled from "styled-components";

const GetApp = () => {
  return (
    <StyledGetApp>
      <p>Get the app.</p>
      <div>
        <a
          href="https://apps.apple.com/app/instagram/id389801252?vt=lo"
          target="_blank"
        >
          <img src="/images/app-store.png" width="130" />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android"
          target="_blank"
        >
          <img src="/images/play-store.png" width="130" />
        </a>
      </div>
    </StyledGetApp>
  );
};

const StyledGetApp = styled.div`
  text-align: center;
  p {
    margin: 20px 0 15px;
    font-size: 14px;
  }
  div {
    margin: 10px 0;
    img:first-child {
      margin-right: 10px;
    }
  }
`;

export default GetApp;
