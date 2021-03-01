import { Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { initializeAppThunkCreator } from "./redux/app_reducer";
import HeaderContainer from "./components/header/HeaderContainer";
import Footer from "./components/footer/Footer";
import RegistrationContainer from "./components/registration/RegistrationContainer";
import LoginContainer from "./components/login/LoginContainer";
import MainContainer from "./components/main/MainContainer";
import DictionaryContainer from "./components/dictionary/DictionaryContainer";
import MyDictionariesContainer from "./components/myDictionaries/MyDictionariesContainer";
import {
  Container,
  Wrapper,
  Content,
} from "./components/styledComponents/StyledComponents.styled";
import { isAuth } from "./redux/auth_selectors";
import Preloader from "./components/preloader/Preloader";

function App(props) {
  useEffect(() => {
    props.initializeApp();
  }, []);

  if (!props.isInitialized) {
    debugger;

    return <Preloader />;
  } else {
    debugger;

    return (
      <Wrapper>
        <HeaderContainer isAuth={props.isAuth} />
        <Content>
          <Container>
            <Route
              exact
              path="/"
              render={() => <MainContainer isAuth={props.isAuth} />}
            />
            <Route
              path="/login"
              render={() => <LoginContainer isAuth={props.isAuth} />}
            />
            <Route path="/reg" render={() => <RegistrationContainer />} />
            <Route
              path="/my-dictionaries"
              render={() => <MyDictionariesContainer isAuth={props.isAuth} />}
            />
            <Route
              path="/dictionary/:dictionaryId"
              render={() => <DictionaryContainer />}
            />
          </Container>
        </Content>
        <Footer />
      </Wrapper>
    );
  }
}

let mapState = (state) => ({
  isAuth: isAuth(state),
  isInitialized: state.app.isInitialized,
});

export default connect(mapState, {
  initializeApp: initializeAppThunkCreator,
})(App);
