import React from "react";
import {
  Summary,
  Title,
  Button,
  KnowWordButton,
} from "../styledComponents/StyledComponents.styled";
import {
  Body,
  CoverStyled,
  DictionaryStyled,
  WordsStyled,
  WordsListStyled,
  Cell,
  ScoreItem,
  LineDecor,
  ScoreScaleStyled,
} from "./MyDictionaryStyled.styled";

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
            onClick={props.knowSelectedWords}
            disabled={props.selectedWords.length === 0}
          >
            Знаю выделенные слова
          </Button>
          <Button
            onClick={props.dontKnowSelectedWords}
            disabled={props.selectedWords.length === 0}
          >
            Не знаю выделенные слова
          </Button>
          {/*           
          <Button
            onClick={() => {}}
            disabled={props.selectedWords.length === 0}
          >
            Учить выделенные слова
          </Button>
          */}
        </div>
        <LineDecor />
        <WordsList {...props} />
      </Body>
    </DictionaryStyled>
  );
};

const WordsList = (props) => {
  let { words } = props.dictionary;

  let wordsList = words.map((w) => {
    let {
      wordId,
      position,
      score,
      wordOrigin,
      wordTranscription,
      wordTranslate,
    } = w;
    let selectedWords = props.selectedWords;

    let getScoreScale = (score) => {
      let scoreScale = [];

      for (let i = 0; i < score; i++) {
        scoreScale.push(<ScoreItem blue />);
      }
      for (let i = 0; i < 5 - score; i++) {
        scoreScale.push(<ScoreItem />);
      }
      return <ScoreScaleStyled>{scoreScale}</ScoreScaleStyled>;
    };

    let check = () => {
      props.toggleSelectedWord(w);
    };

    return (
      <WordsStyled key={wordId}>
        <Cell center>
          <input
            type="checkbox"
            checked={selectedWords.some((word) => word.wordId === wordId)}
            onClick={check}
          />
        </Cell>
        <Cell center>{position}</Cell>
        <Cell>{wordOrigin}</Cell>
        <Cell>{wordTranscription}</Cell>
        <Cell>{wordTranslate}</Cell>
        <Cell center>{getScoreScale(score)}</Cell>
        <Cell center>
          {score === 5 ? (
            <KnowWordButton
              narrow
              red
              onClick={() => {
                props.dontKnow(wordId);
              }}
            >
              Не знаю
            </KnowWordButton>
          ) : (
            <KnowWordButton
              narrow
              onClick={() => {
                props.know(wordId);
              }}
            >
              Знаю
            </KnowWordButton>
          )}
        </Cell>
      </WordsStyled>
    );
  });

  return <WordsListStyled>{wordsList}</WordsListStyled>;
};

export default MyDictionary;
