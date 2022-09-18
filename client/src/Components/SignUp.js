import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { useContext, useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { QuizContext } from "./QuizContext";


const SignUp = () => {

    const {
        setCurrentUser,
        isLoggedIn,
        setIsLoggedIn
    } = useContext(QuizContext);

  // states for storage user input from form
  const [userFirstName, setUserFirstName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  // const [inputType, setInputType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Pass the data from the form into an object that we can pass to the backend
      const newUserData = {
          name: userFirstName,
          email: userEmail,
          password: passwordInput,
      };

    // options for the post method incl stringifying our object to post to mongoDB
    const options = {
      method: "POST",
      body: JSON.stringify(newUserData),
      headers: { 
        Accept: "application/json",
        "Content-Type": "application/json" 
      },
    };

    console.log(newUserData);
  };

  // function that will send a .post request containing the user data if the user passes the input handling below
  const addUser = (options) => {
    fetch("/api/signup", options)
      .then((res) => res.json())
      .then((json) => {
        const {status, message, error} = json;
        if (status >= 400) {
          setErrorMsg(message);
        } else if(status === 200){
          setIsLoggedIn(true);
          setCurrentUser(json.data);
        }
      })
      .catch((err) => console.log(err))
    };

    // check passwords match
    if(passwordInput !== confirmPasswordInput){
      window.alert("Passwords do not match")
    };
  
  // different things happen depending on whether user is logged in or not
  return (
    <> 
      {isLoggedIn 
      ? (
        <Wrapper>
          <h1>Signup successful!</h1>
          {/* <div>
            <QuizLink to = {"/"}>Return home to find your destiny!</QuizLink>
          </div> */}
          </Wrapper>
        ) 
      : (
          <Wrapper>
            <SignUpForm 
              onSubmit={handleSubmit}>
              <h1>Create an account</h1>
              <Row>
              <Label htmlFor="name">Name: </Label>
                <Input
                  autoFocus
                  type="text"
                  placeholder="Enter your preferred name"
                  value={userFirstName}
                  required={true}
                  onChange={(e) => setUserFirstName(e.target.value)}
                /></Row>
                <Row>
                  <Label htmlFor='email'>Email:</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  value={userEmail}
                  required={true}
                  onChange={(e) => setUserEmail(e.target.value)}
                /></Row>
                <Row>
                  <Label htmlFor='password'>Password:</Label>
                <Input 
                  type="password"
                  placeholder="Password"
                  value={passwordInput} 
                  required = {true}
                  onChange={(e) => setPasswordInput(e.target.value)} 
                /></Row>
              <Row><Label htmlFor='confirm-password'>Confirm password:</Label>
                <Input 
                  type="password"
                  placeholder="Re-enter password"
                  value={confirmPasswordInput} 
                  required = {true}  
                  onChange={(e)=>setConfirmPasswordInput(e.target.value)} 
                  /></Row>
              <ButtonDiv>
              <SignUpSubmit type="submit">Create account</SignUpSubmit>
              </ButtonDiv>
            </SignUpForm>
          </Wrapper>
      )
}
    </>
  );

}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 42px;
`
const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 5px;
`
const Input = styled.input`
font-size: 20px;
width: 250px;
`
const Label = styled.span`
padding: 5px;
margin-top: 5px;
font-size: 16px;
`
const SignUpSubmit = styled.button`
font-size: 24px;
width: 200px;
padding: 10px;
border-radius: 5px;
margin: 42px;
color: fuchsia;
  &:hover {
    cursor: pointer;
  }
`

const ButtonDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
// QuizLink = styled(NavLink)`
// `

export default SignUp;

