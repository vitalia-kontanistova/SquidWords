import styled from "styled-components";
import { colors } from "../../../../global";

export const StyledBurger = styled.button`
  height: 22px;
  width: fit-content;
  background: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  /* z-index: 20; */

  transform: ${(props) =>
    props.isOpen ? "translateX(250%)" : "translateX(0)"};

  div {
    height: 4px;
    background: ${colors.blue};
    transition: all 0.3s ease-out;
    border-radius: 25%;
    transform-origin: 12% 50%;
    /* z-index: 20; */

    :nth-child(1) {
      width: 35px;
      transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      width: 30px;
      opacity: ${(props) => (props.isOpen ? "0" : "1")};
    }
    :nth-child(3) {
      width: ${(props) => (props.isOpen ? "35px" : "25px")};
      transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
