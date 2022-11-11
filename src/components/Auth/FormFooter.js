import Link from "next/link";

import styled from "styled-components";

const FormFooter = ({ label, link, linkTitle }) => {
  return (
    <StyledFormFooter>
      <p>
        {label}&nbsp;
        <Link href={link}>
          <a>{linkTitle}</a>
        </Link>
      </p>
    </StyledFormFooter>
  );
};

const StyledFormFooter = styled.div`
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
`;

export default FormFooter;
