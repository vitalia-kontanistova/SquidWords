import React from "react";
import {
  DictionaryTileStyled,
  Cover,
  Body,
  Text,
} from "./DictionaryTileStyled.styled";

const DictionaryTile = (props) => {
  let { id, cover, title, descr, info } = props;

  return (
    <DictionaryTileStyled to={"/dictionary/" + id}>
      <Cover src={cover} alt="" />
      <Body>
        <Text title="true">{title}</Text>
        <Text descr="true">{descr}</Text>
        <Text info="true">{info}</Text>
      </Body>
    </DictionaryTileStyled>
  );
};

export default DictionaryTile;
