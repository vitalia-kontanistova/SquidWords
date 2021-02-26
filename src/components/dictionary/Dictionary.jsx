import React from "react";
import { Summary, Title } from "../styledComponents/StyledComponents.styled";
import {
  Body,
  CoverStyled,
  DictionaryStyled,
  WordsStyled,
  WordsList,
  Cell,
} from "./DictionaryStyled.styled";

const Dictionary = (props) => {
  let { cover, summary, title, words } = props.dictionary;
  let wordsToStudy = props.wordsToStudy;

  let wordsList = words.map((w) => {
    return (
      <WordsStyled key={w.id}>
        {/*         <Cell center>
          <input
            type="checkbox"
            checked={wordsToStudy.some((word) => word.id === w.id)}
            onClick={() => props.setWordToStudy(w)}
          />
        </Cell>
 */}
        <Cell center>{w.position}</Cell>
        <Cell>{w.wordOrigin}</Cell>
        <Cell>{w.wordTranscription}</Cell>
        <Cell>{w.wordTranslate}</Cell>
      </WordsStyled>
    );
  });

  return (
    <DictionaryStyled>
      <CoverStyled>
        <img src={cover} alt="" />
        <div>Слов: {words.length}</div>
      </CoverStyled>
      <Body>
        <Title left>{title}</Title>
        <Summary>{summary}</Summary>
        <WordsList>{wordsList}</WordsList>
      </Body>
    </DictionaryStyled>
  );
};

export default Dictionary;
