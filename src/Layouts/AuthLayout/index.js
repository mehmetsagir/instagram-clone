import styled from "styled-components";

import Footer from "src/components/Auth/Footer";

const AuthLayout = ({ children }) => {
  return (
    <StyledLayout>
      <StyledAuthContainer>{children}</StyledAuthContainer>
      <Footer />
    </StyledLayout>
  );
};

const StyledLayout = styled.section`
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 100px);
  }

  footer {
    text-align: center;
    font-size: 12px;
    color: #8e8e8e;

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 20px;
      line-height: 14px;
      font-weight: 500;
    }

    div {
      margin-top: 12px;
      margin-bottom: 52px;
      span:first-child {
        margin-right: 20px;
      }
    }
  }
`;

const StyledAuthContainer = styled.main`
  .container {
    max-width: 350px;
    width: 350px;
    padding: 10px 0;
    border: 1px solid hsl(0, 0%, 86%);
    background: #fff;
  }

  .form-header {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    img {
      width: 175px;
    }
  }

  .phone {
    width: 450px;
    height: 618px;
    background: url("/images/phone-layout.png");
    background-size: 454px 618px;
    position: relative;

    img {
      position: absolute;
      top: 100px;
      right: 60px;
      width: 240px;
    }

    @media (max-width: 850px) {
      display: none;
    }
  }

  .form-content {
    padding: 0 40px;
  }

  .or {
    margin: 30px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    hr {
      width: 100%;
      height: 1px;
      background: #ddd;
    }
    span {
      background: #fff;
      padding: 10px 20px;
      position: absolute;
      font-size: 14px;
      color: #8e8e8e;
      font-weight: bold;
    }
  }

  .login-with-fb {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 0;
    color: #385185;
    font-size: 14px;
    font-family: "Arial", sans-serif;
    font-weight: 500;
    img {
      margin-right: 8px;
    }
  }

  .forgot-password {
    display: block;
    text-align: center;
    font-size: 12px;
    color: #00376b;
    margin: 12px 0;
  }

  .sign-up-text {
    text-align: center;
    font-weight: bold;
    color: rgba(142, 142, 142, 0.7);
    margin: 5px 0 15px;
  }

  .conditions {
    font-size: 12px;
    text-align: center;
    margin: 15px 0 25px;
    color: rgba(142, 142, 142, 0.7);
  }
`;

export default AuthLayout;
