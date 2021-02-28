import React from "react";
import DictionaryList from "../dictionaryList/DictionaryList";
import { Title } from "../styledComponents/StyledComponents.styled";
import { Body } from "./MyDictionariesStyled.styled";

const MyDictionaries = (props) => {
  return (
    <div>
      <Title left>Мои словари:</Title>
      <Body>
        <DictionaryList {...props} />
      </Body>
    </div>
  );
};

export default MyDictionaries;
