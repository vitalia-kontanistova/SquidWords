import React from "react";
import {
  Summary,
  Title,
  RecurrentButton,
} from "../styledComponents/StyledComponents.styled";
import {
  Body,
  CoverStyled,
  DictionaryStyled,
  WordsStyled,
  WordsList,
  Cell,
  LearnDictionaryButton,
  LineDecor,
} from "./DictionaryStyled.styled";

const Dictionary = (props) => {
  let { cover, summary, title, words } = props.dictionary;

  let wordsList = words.map((w) => {
    return (
      <WordsStyled key={w.id}>
        <Cell center>{w.position}</Cell>
        <Cell>{w.wordOrigin}</Cell>
        <Cell>{w.wordTranscription}</Cell>
        <Cell>{w.wordTranslate}</Cell>
      </WordsStyled>
    );
  });
  let pathLearn = props.isAuth
    ? "/my-dictionary/" + props.dictionary.id
    : "/login";

  return (
    <DictionaryStyled>
      <CoverStyled>
        <img src={cover} alt="" />
        <div>Слов: {words.length}</div>
      </CoverStyled>
      <Body>
        <Title left>{title}</Title>
        <Summary>{summary}</Summary>
        <LearnDictionaryButton>
          <RecurrentButton href={pathLearn}>Учить словарь</RecurrentButton>
        </LearnDictionaryButton>
        <LineDecor />
        <WordsList>{wordsList}</WordsList>
      </Body>
    </DictionaryStyled>
  );
};

export default Dictionary;
