import React from "react";
import DictionaryList from "../dictionaryList/DictionaryList";
import { Title } from "../styledComponents/StyledComponents.styled";
import { Block, Intro, Body } from "./MaintStyled.styled";

const Main = (props) => {
  return (
    <div>
      <Intro>
        {props.isAuth ? (
          <Block small>
            <div>На сегодня: 125</div>
            <div>На сегодня: 125</div>
            <div>На сегодня: 125</div>
          </Block>
        ) : (
          ""
        )}
        <Block>
          SquidWords - это приложения для изучения английских слов интервальным
          методом. Основня особенность этого приложения это наличие частотного
          словаря с 10000 самых употребляемых слов. А также различные
          тематические словари. И все это бесплатно и без ограничений.
        </Block>
      </Intro>
      <Title left>Список словарей:</Title>
      <Body>
        <DictionaryList {...props} />
      </Body>
    </div>
  );
};

export default Main;
