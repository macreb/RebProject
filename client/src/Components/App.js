import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useContext, useState, useEffect, useParams } from "react";

import Header from "./Header";
import Nav from "./NavBar";
import Quiz from "./Quiz";
import QuizResult from "./QuizResult";
import SavedResults from "./SavedResults";
import Footer from "./Footer";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Success from "./Success"

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Main>
    <BrowserRouter>
      <Header />
      <Switch>
          <Route exact path="/">
            <Quiz/>
          </Route>
          <Route exact path="/result">
            <QuizResult/>
          </Route>
          <Route exact path="/saved">
            <SavedResults/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/signin">
            <SignIn/>
          </Route>
          <Route exact path="/success">
            <Success/>
          </Route>
          <Route exact path="">404: Hmmm... it seems like there's nothing here</Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </Main>
    </>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);
`;

export default App;
