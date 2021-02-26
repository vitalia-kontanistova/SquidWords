import React from "react";
import DictionaryTile from "../dictionaryTile/DictionaryTile";
import { DictionaryListStyled } from "./DictionaryListStyled.styled";

const DictionaryList = (props) => {
  let dictionaryList = props.dictionaries.map((dict) => (
    <DictionaryTile
      key={dict.id}
      id={dict.id}
      cover={dict.cover}
      title={dict.title}
      descr={dict.descr}
      info={dict.info}
    />
  ));
  return <DictionaryListStyled>{dictionaryList}</DictionaryListStyled>;
};

export default DictionaryList;
