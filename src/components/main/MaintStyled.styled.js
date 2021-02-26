import styled from "styled-components";
import { colors } from "../../global";

/* border: 1px solid plum; */

export const Intro = styled.div`
  display: flex;
`;

export const Block = styled.div`
  border: 1px solid ${colors.grey};
  border-radius: 10px;
  padding: 25px 30px;
  font-size: 20px;
  line-height: 23px;
  margin-right: ${(props) => (props.small ? "20px" : "")};
  margin-bottom: 25px;
  width: ${(props) => (props.small ? "40%" : "100%")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Body = styled.div`
  margin-top: 25px;
`;
