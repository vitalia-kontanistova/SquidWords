import styled from "styled-components";
import { colors } from "../../global";
import { Button } from "../styledComponents/StyledComponents.styled";

/* border: 1px solid plum; */

export const IntroductionBlockStyled = styled.div`
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BodyStyled = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledLesson = styled.div`
  width: 60%;
  min-width: 340px;
  margin: 0 auto;
`;

export const StyledMainBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  font-size: 18px;
  line-height: 21px;
  border-radius: 5px;
  background: ${colors.blue};
`;

export const StyledAdditionalBlock = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 5px 0;
  font-size: 16px;
  line-height: 19px;
  border-radius: 5px;
  background: ${colors.grey};
`;

export const StyledButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledNextButton = styled(Button)`
  width: fit-content;
  font-size: 16px;
  padding: 7px 14px;
  margin: 0;
  margin-top: 30px;
`;
