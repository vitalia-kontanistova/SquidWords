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
  let pathLearn = props.isAuth ? "/my-dictionaries" : "/login";
  // let path = props.isAuth ? "/my-dictionary/" + id : "/login";

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
