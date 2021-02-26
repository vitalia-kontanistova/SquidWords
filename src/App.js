import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import RegistrationContainer from "./components/registration/RegistrationContainer";
import AuthorizationContainer from "./components/authorization/AuthorizationContainer";
import {
  Container,
  Wrapper,
  Content,
} from "./components/styledComponents/StyledComponents.styled";
import LoginContainer from "./components/login/LoginContainer";
import MainContainer from "./components/main/MainContainer";
import DictionaryContainer from "./components/dictionary/DictionaryContainer";
import HeaderContainer from "./components/header/HeaderContainer";

function App() {
  return (
    <Wrapper>
      <HeaderContainer />
      <Content>
        <Container>
          <Route exact path="/" render={() => <MainContainer />} />
          <Route path="/login" render={() => <LoginContainer />} />
          <Route path="/reg" render={() => <RegistrationContainer />} />
          <Route path="/auth" render={() => <AuthorizationContainer />} />
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

export default App;
