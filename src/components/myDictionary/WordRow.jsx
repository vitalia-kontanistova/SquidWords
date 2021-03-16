import React from "react";
import { KnowWordButton } from "../styledComponents/StyledComponents.styled";
import { WordStyled, Cell } from "./MyDictionaryStyled.styled";

const WordRow = (props) => {
  return (
    <WordStyled key={props.word.wordId}>
      <Cell center>
        <input
          type="checkbox"
          checked={props.selectedWords.some(
            (w) => w.wordId === props.word.wordId
          )}
          onClick={() => {
            props.toggleSelectedWord(props.word);
          }}
        />
      </Cell>
      <Cell center>{props.word.position}</Cell>
      <Cell>{props.word.wordOrigin}</Cell>
      <Cell>{props.word.wordTranscription}</Cell>
      <Cell>{props.word.wordTranslate}</Cell>
      <Cell center>{props.getScoreScale(props.word.score)}</Cell>
      <Cell center>
        {props.word.score === 5 ? (
          <KnowWordButton
            narrow
            red
            onClick={() => {
              props.dontKnow(props.word.wordId);
            }}
          >
            Не знаю
          </KnowWordButton>
        ) : (
          <KnowWordButton
            narrow
            onClick={() => {
              props.know(props.word.wordId);
            }}
          >
            Знаю
          </KnowWordButton>
        )}
      </Cell>
    </WordStyled>
  );
};

export default WordRow;
