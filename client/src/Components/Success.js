import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { useContext, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { QuizContext } from "./QuizContext";

const Success = () => {

    return (
<>
<Wrapper>
        <Heading>Success!</Heading>
        <ButtonWrapper>
            <StyledLink to="/">Return home to find your destiny all over again!</StyledLink>
            <StyledLink to="/saved">View saved destinations</StyledLink>
            </ButtonWrapper>
            </Wrapper>
            </>
    )
    };

    export default Success;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 42px;
`
const ButtonWrapper = styled.div`
display: flex;
justify-content: space-evenly;
`

const StyledLink = styled(NavLink)`
margin: 42px;
width: 180px;
height: 100px;
font-size: 20px;
padding: 10px;
border-radius: 5px;
text-align: center;
background-color: lightgray;
color: fuchsia;
&:hover {
        cursor: pointer;
    }
`

const Heading = styled.span`
font-size: 24px;
padding: 5px;
color: red;
`