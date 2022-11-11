import { useRef } from "react";

import styled from "styled-components";

import SearchItem from "src/components/Navbar/SearchItem";

import useOnClickOutside from "src/hooks/useOnClickOutside";

const SearchModal = ({ setSearchModal }) => {
  const ref = useRef();

  useOnClickOutside(ref, () => setSearchModal(false));

  return (
    <StyledSearchModal ref={ref}>
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </StyledSearchModal>
  );
};

const StyledSearchModal = styled.div`
  width: 400px;
  max-height: 450px;
  position: absolute;
  background-color: #fff;
  left: -80px;
  top: 40px;
  border-radius: 6px;
  box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
  z-index: 999;
  overflow-y: auto;
  animation: openModal 500ms forwards;

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

export default SearchModal;
