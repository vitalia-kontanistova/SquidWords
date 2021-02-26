import styled from "styled-components";
import { colors } from "../../global";
import bg from "../../assets/img/bg_tr25.png";

/* border: 1px solid plum; */

export const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr min-content;
`;

export const Content = styled.div`
  width: 100%;
  padding: 30px 0;
  margin: 0 auto;
  border: 1px solid green;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: bottom;
  background-size: 50% auto;

  @media (max-width: 600px) {
    padding: 20px 0 40px 0;
  }
`;

export const Image = styled.img``;
export const Container = styled.div`
  max-width: 1080px;
  min-width: 290px;
  margin: 0 auto;
  padding: 0 30px;
  border: 1px solid plum;

  @media (max-width: 600px) {
    padding: 0 15px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  text-align: ${(props) => (props.left ? "left" : "center")};
`;

export const Summary = styled.div`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 25px;
`;

export const Button = styled.button`
  width: 250px;
  height: 35px;
  background: ${colors.blue};
  border-radius: 5px;
  color: ${colors.white};
  margin: 0 auto;
  margin-top: 10px;
  font-size: 18px;

  &:disabled {
    background: ${colors.grey};
  }
`;
