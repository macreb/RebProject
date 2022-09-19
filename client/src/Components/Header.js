import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import SignUp from "./SignUp";
import SignIn from "./SignIn";



const Header = () => {
    
    // const quizResult = sessionStorage.getItem("result");

    return (
        <>
        <Wrapper>
            
            <StyledLink to="/">
            <Title>So You Want to Escape Your Life</Title>
            </StyledLink>
            <Subtitle>A one-click game for dreamers, escapist thinkers, and folks on the lam</Subtitle>
            
            <UserNav>
            <Stack>
                <UserLink to="/signin">User sign-in</UserLink>
                {/* <UserLink to="/signup">Create account</UserLink> */}
                </Stack>
            </UserNav>
        </Wrapper>
        </>
    );
};

const UserNav = styled.div`
padding-top: 10px;
width: 100vw;
display: flex;
flex-direction: row;
justify-content: flex-end;

`
const Stack = styled.div`
    display: flex;
flex-direction: column;
`

const UserLink = styled(NavLink)`
font-size: 12px;
border-radius: 10px;
background-color: blue;
color: white;
padding: 5px;
margin: 3px;
`
const Wrapper = styled.header`
    display: flex;
    height: 110px;
    flex-direction: column;
    align-items: center;
    background-color: lightskyblue;
    padding: 15px;
`
const StyledLink = styled(NavLink)`
text-decoration: none;
`

const Title = styled.div`
font-size: 42px;
color: midnightblue;
padding: 10px;
`

const Subtitle = styled.div`
font-size: 16px;
color: gray;
padding: 5px;
font-style: italic;
`
export default Header;



// could add a link to the results or comments...

    //   <Nav>
    //         <>
    //         {(!result)
    //         ? <></>
    //         : <StyledNavLink to="/feelings">Reservation</StyledNavLink>
    //         }
    //         </>
    //     </Nav>