import React from "react";
import {
  Summary,
  Title,
  Button,
} from "../styledComponents/StyledComponents.styled";
import {
  Body,
  CoverStyled,
  DictionaryStyled,
  WordsListStyled,
  LineDecor,
} from "./MyDictionaryStyled.styled";
import WordRowContainer from "./WordRowContainer";

const MyDictionary = (props) => {
  let { cover, summary, title, words } = props.dictionary;

  return (
    <DictionaryStyled>
      <CoverStyled>
        <img src={cover} alt="" />
        <div>Слов: {words.length}</div>
      </CoverStyled>
      <Body>
        <Title left>{title}</Title>
        <Summary>{summary}</Summary>
        <div>
          <Button onClick={props.deleteDictionary}>
            Удалить из "Моих словарей"
          </Button>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={props.selectedWords.length === words.length}
              onChange={props.toggleSelectAll}
            />
            Выбрать все
          </label>
        </div>
        <div>
          <Button
            onClick={() => {
              props.knowWords(props.selectedWords);
            }}
            disabled={props.selectedWords.length === 0}
          >
            Знаю выделенные слова
          </Button>
          <Button
            onClick={() => {
              props.dontKnowWords(props.selectedWords);
            }}
            disabled={props.selectedWords.length === 0}
          >
            Не знаю выделенные слова
          </Button>
        </div>
        <LineDecor />
        <WordsList words={props.dictionary.words} />
      </Body>
    </DictionaryStyled>
  );
};

const WordsList = (props) => {
  let wordsList = props.words.map((w) => {
    return <WordRowContainer word={w} />;
  });

  return <WordsListStyled>{wordsList}</WordsListStyled>;
};

export default MyDictionary;
