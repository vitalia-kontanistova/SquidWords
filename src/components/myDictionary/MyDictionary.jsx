import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import {
  Summary,
  Title,
  Button,
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
} from "./MyDictionaryStyled.styled";

const MyDictionary = (props) => {
  let [isRemoved, setRemovingStatus] = useState(false);
  if (isRemoved) {
    return <Redirect to="/my-dictionaries" />;
  }

  let { cover, summary, title, words } = props.dictionary;
  let wordsList = words.map((w) => {
    let { wordId, position, wordOrigin, wordTranscription, wordTranslate } = w;
    let wordsToStudy = props.wordsToStudy;

    return (
      <WordsStyled key={wordId}>
        <Cell center>
          <input
            type="checkbox"
            checked={wordsToStudy.some((word) => word.id === wordId)}
            onClick={() => props.setWordToStudy(w)}
          />
        </Cell>

        <Cell center>{position}</Cell>
        <Cell>{wordOrigin}</Cell>
        <Cell>{wordTranscription}</Cell>
        <Cell>{wordTranslate}</Cell>
      </WordsStyled>
    );
  });

  let onCLick = () => {
    props.deleteDictionary(props.dictionary.id);
    setRemovingStatus(true);
  };

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
          <Button onClick={onCLick}>Удалить словарь</Button>
        </LearnDictionaryButton>
        <LineDecor />
        <WordsList>{wordsList}</WordsList>
      </Body>
    </DictionaryStyled>
  );
};

export default MyDictionary;
