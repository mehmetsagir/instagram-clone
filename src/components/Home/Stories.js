import { useState } from "react";

import styled from "styled-components";

import Avatar from "src/components/Avatar";

const Stories = () => {
  const [isDown, setIsDown] = useState(false);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  function mouseUp(e) {
    setIsDown(false);
  }

  function mouseLeave(e) {
    setIsDown(false);
  }

  function mouseDown(e) {
    setIsDown(true);
    setScrollX(e.pageX - document.getElementById("stories").offsetLeft);
    setScrollLeft(document.getElementById("stories").scrollLeft);
  }

  function mouseMove(e) {
    if (!isDown) return;
    let element = e.pageX - document.getElementById("stories").offsetLeft;
    let scrolling = (element - scrollX) * 2;
    document.getElementById("stories").scrollLeft = scrollLeft - scrolling;
  }

  const userList = [
    "adelia",
    "adelice",
    "adelina",
    "adelind",
    "adeline",
    "adella",
    "adelle",
    "adelynn",
    "aden",
    "adena",
    "adeniyi",
    "adey",
    "adi",
    "adiana",
    "adie",
    "adina",
    "aditya",
    "admin",
    "adnan",
    "adon",
    "adonis",
    "adora",
    "adore",
    "adoree",
    "adorne",
    "adrea",
    "adreanna",
    "adri",
    "adria",
    "adriaens",
  ];

  return (
    <StyledStories>
      <ul
        id="stories"
        onMouseDown={mouseDown}
        onMouseLeave={mouseLeave}
        onMouseUp={mouseUp}
        onMouseMove={mouseMove}
      >
        {userList.map((user) => (
          <li key={user}>
            <Avatar story="true" />
            <span>{user}</span>
          </li>
        ))}
      </ul>
    </StyledStories>
  );
};

const StyledStories = styled.div`
  width: 100%;
  margin-bottom: 30px;
  max-width: 603px;

  ul {
    border: 1px solid #dbdbdb;
    padding: 16px 12px 12px;
    display: flex;
    gap: 15px;
    overflow-x: scroll;
    cursor: grab;

    &::-webkit-scrollbar {
      display: none;
    }
    li {
      text-align: center;
      span {
        font-size: 13px;
      }
    }
  }
`;

export default Stories;
