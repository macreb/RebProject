import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

import SignUp from "./SignUp";
import SignIn from "./SignIn";



const Header = () => {
    
    // const quizResult = sessionStorage.getItem("result");

    return (
        <>
        <Wrapper>
            <Title>So You Want to Escape Your Life</Title>
            <Subtitle>A one-click game for dreamers, escapist thinkers, and folks on the lam</Subtitle>
        </Wrapper>
        </>
    );
};

const Wrapper = styled.header`
    display: flex;
    height: 110px;
    flex-direction: column;
    align-items: center;
    background-color: lightskyblue;
    padding: 15px;
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