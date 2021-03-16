import React from "react";
import WordRow from "./WordRow";
import { ScoreItem, ScoreScaleStyled } from "./MyDictionaryStyled.styled";
import {
  setDontKnowWordThunkCreator,
  setKnowWordThunkCreator,
  toggleSelectedWord,
} from "../../redux/words_reducer";
import { connect } from "react-redux";

const WordRowContainer = (props) => {
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

  return (
    <WordRow
      word={props.word}
      know={props.know}
      dontKnow={props.dontKnow}
      selectedWords={props.selectedWords}
      getScoreScale={getScoreScale}
    />
  );
};

const mapState = (state) => ({
  selectedWords: state.words.selectedWords,
});

export default connect(mapState, {
  know: setKnowWordThunkCreator,
  dontKnow: setDontKnowWordThunkCreator,
  toggleSelectedWord: toggleSelectedWord,
})(WordRowContainer);
