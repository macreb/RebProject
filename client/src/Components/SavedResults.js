import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { QuizContext } from "./QuizContext";

const SavedResults = () => {

    const handleEdit = () => {
        //stuff about posting a change to the server
    };
    const handleDelete = () => {
        //stuff about posting a change to the server
    };

    return (
        <>
    <Wrapper>
        <ResultWrapper>
        <Heading>Your last saved destination:</Heading>
        <ListResults>
            <Row>LAST SAVED PLACE
                <ButtonDiv>
    <Button onClick={handleEdit}>
            Edit
        </Button>
        <Button onClick={handleDelete}>
            Delete
        </Button>
        </ButtonDiv>
        </Row>
        </ListResults>
        </ResultWrapper>
    </Wrapper>
</>
    )
};


const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 42px;
`
const ResultWrapper = styled.div`
justify-content: flex-start;
width: 69vw;
`
const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const Heading = styled.span`
font-size: 24px;
padding: 5px;
color: red;
`
const ListResults = styled.ul`
padding: 5px;
margin: 42px;
font-size: 20px;
`

const ButtonDiv = styled.div`

`

const Button = styled.button`
font-size: 16px;
width: 80px;
padding: 5px;
/* border-radius: 5px; */
/* background-color: lightgray; */
color: red;
&:hover {
        cursor: pointer;
    }

`

export default SavedResults;