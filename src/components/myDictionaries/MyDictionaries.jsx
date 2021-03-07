import React from "react";
import DictionaryList from "../dictionaryList/DictionaryList";
import { Title } from "../styledComponents/StyledComponents.styled";
import { Body, NoDictionaries } from "./MyDictionariesStyled.styled";

const MyDictionaries = (props) => {
  return (
    <div>
      <Title left>Мои словари:</Title>
      <Body>
        {props.dictionaries.length === 0 ? (
          <NoDictionaries>У Вас пока нет ни одного словаря!</NoDictionaries>
        ) : (
          <DictionaryList {...props} />
        )}
      </Body>
    </div>
  );
};

export default MyDictionaries;
