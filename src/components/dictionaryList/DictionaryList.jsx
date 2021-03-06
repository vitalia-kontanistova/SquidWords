import React from "react";
import {
  DictionaryListStyled,
  DictionaryTileStyled,
  Cover,
  Body,
  Text,
} from "./DictionaryListStyled.styled";

const DictionaryList = (props) => {
  let dictionaryList = props.dictionaries.map((dict) => (
    <DictionaryTile
      key={dict.id}
      id={dict.id}
      cover={dict.cover}
      title={dict.title}
      descr={dict.descr}
      info={dict.info}
      personal={props.personal}
    />
  ));
  return <DictionaryListStyled>{dictionaryList}</DictionaryListStyled>;
};

const DictionaryTile = (props) => {
  let { id, cover, title, descr, info } = props;
  let path = props.personal ? "/my-dictionary/" : "/dictionary/";
  return (
    <DictionaryTileStyled to={path + id}>
      <Cover src={cover} alt="" />
      <Body>
        <Text title="true">{title}</Text>
        <Text descr="true">{descr}</Text>
        <Text info="true">{info}</Text>
      </Body>
    </DictionaryTileStyled>
  );
};

export default DictionaryList;
