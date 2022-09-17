import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useContext } from "react";

import Header from "./Header";
import Quiz from "./Quiz";
import QuizResult from "./QuizResult";
import SavedResults from "./SavedResults";
import Footer from "./Footer";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Main>
        <Switch>
          <Route exact path="/">
            <Quiz />
          </Route>
          <Route exact path="/result">
            <QuizResult />
          </Route>
          <Route exact path="/feelings">
            <SavedResults />
          </Route>
          <Route path="">404: Hmmm... it seems like there's nothing here</Route>
        </Switch>
        <Footer />
      </Main>
    </BrowserRouter>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export default App;
