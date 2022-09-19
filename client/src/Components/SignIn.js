import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { useContext, useState } from "react";
import { useHistory, NavLink, Link } from "react-router-dom";
import { QuizContext } from "./QuizContext";


const SignIn = () => {

    const {  
        setCurrentUser, 
        isLoggedIn, 
        setIsLoggedIn } =
        useContext(QuizContext);
    
        let history = useHistory();
    
        const [userEmail, setUserEmail] = useState("");
        const [passwordInput, setPasswordInput] = useState("");
        const [inputType, setInputType] = useState("password");

        const handleSubmit = (e) => {
            e.preventDefault();

            const userLogin = { 
                email: userEmail, 
                password: passwordInput 
                };
            
            const options = {
                method: "POST",
                body: JSON.stringify(userLogin),
                headers: { 
                Accept: "application/json",
                "Content-Type": "application/json" 
            },
            };

            fetch("/api/sign-in", options)
            .then((res) => res.json())
            .then((json) => {
                const {status, error} = json;
                
                if (status >= 400) {

                  console.log("error is > 400")
                
                } else if (status === 200) {
                
                  const isLoggedIn = true;

                  console.log("status is 200")
                  console.log("User logged in")
                
                  // setIsLoggedIn(true);
                  // console.log(isLoggedIn);
                
                  // setCurrentUser(json.data);
                  history.push("/success");  
                } 
            })
            .catch((err) => console.log(err));
            };
        
            return (
                <> 
                {isLoggedIn 
                ? (<>
                <Wrapper>
                    <h1>Login successful!</h1>
                    {/* <div>
                    <Link to= "/">Return home to find your destiny!</Link>
                    </div> */}
                    </Wrapper></>
                ) 
                : (<>
                <Wrapper>
                <h1>Enter user credentials</h1>
                <SignInForm onSubmit={handleSubmit}>
                    <Row>
                    <Label htmlFor="email">Email:</Label>
                    <Input
                        type="email"
                        placeholder="Enter email address"
                        value={userEmail}
                        required={true}
                        onChange={(e) => setUserEmail(e.target.value)}
                    /></Row>
                    <Row>
                    <Label htmlFor="password">Password:</Label>
                        <Input 
                        type={inputType} 
                        placeholder="Enter password"
                        value={passwordInput} 
                        required = {true}
                        onChange={(e) => setPasswordInput(e.target.value)} 
                        />
                        </Row>
                        <ButtonDiv>
                    <Button type="submit">Log in</Button>
                    </ButtonDiv>
                </SignInForm>
                    <NoAccountRow>
                    <p>If you do not have an account, click here to create one:</p>
                    <SignUpLink to="/signup">Sign Up!</SignUpLink>
                </NoAccountRow>
                </Wrapper>
                </>
                )}
</>
);
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SignInForm = styled.form`
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
const Button = styled.button`
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

const NoAccountRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`
const SignUpLink = styled(NavLink)`
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

export default SignIn;

