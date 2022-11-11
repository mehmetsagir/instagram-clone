import styled from "styled-components";

const Form = ({ children, ...props }) => {
  return <StyledFrom {...props}>{children}</StyledFrom>;
};

const StyledFrom = styled.form`
  label {
    position: relative;
    display: flex;
    align-items: center;
    height: 38px;
    width: 100%;
    border: 1px solid #dbdbdb;
    padding: 0 10px;
    background: #fafafa;
    border-radius: 3px;
    cursor: text;

    &:not(:first-child) {
      margin-top: 6px;
    }

    span {
      position: absolute;
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
      font-size: 12px;
      pointer-events: none;
      color: #8e8e8e;
      transition: 250ms;
    }

    input {
      width: 100%;
      height: auto;
      font-size: 12px;
      color: #262626;
      line-height: 18px;
    }
  }

  & > button {
    margin-top: 15px;
  }

  .active {
    span {
      transform: none !important;
      font-size: 9px !important;
      top: 5px !important;
    }
    input {
      margin-top: auto;
      margin-bottom: 3px;
    }
  }

  .form-footer {
    max-width: 350px;
    width: 350px;
    padding: 10px 0;
    border: 1px solid #dbdbdb;
    background: #fff;
    margin-top: 10px;
    text-align: center;
    font-size: 14px;

    p {
      padding: 10px 0;
      a {
        color: #0095f6;
        font-weight: 500;
      }
    }
  }
`;

export default Form;
