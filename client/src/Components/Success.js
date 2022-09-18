import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { QuizContext } from "./QuizContext";

const Success = () => {

    return (
<>
<Wrapper>
        <Heading>Success!</Heading>
        <ButtonWrapper>
            <Link to="/">Return home to find your destiny!</Link>
            <Link to="/saved">View saved destinations</Link>
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

const Link = styled.button`
margin: 42px;
width: 180px;
height: 100px;
font-size: 24px;
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