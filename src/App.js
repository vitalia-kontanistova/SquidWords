import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import RegistrationContainer from "./components/registration/RegistrationContainer";
import {
  Container,
  Wrapper,
  Content,
} from "./components/styledComponents/StyledComponents.styled";
import LoginContainer from "./components/login/LoginContainer";
import MainContainer from "./components/main/MainContainer";
import DictionaryContainer from "./components/dictionary/DictionaryContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import { connect } from "react-redux";
import { toggleUserMenu } from "./redux/header_reducer";
import { useEffect } from "react";

function App() {
  useEffect(() => {}, []);

  return (
    <Wrapper>
      <HeaderContainer />
      <Content>
        <Container>
          <Route exact path="/" render={() => <MainContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
          <Route path="/reg" render={() => <RegistrationContainer />} />
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

let mapState = (state) => ({});

export default connect(mapState, { toggleUserMenu })(App);
