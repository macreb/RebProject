import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { QuizContext } from "./QuizContext";

const resultArray = [];

const SavedResults = () => {

// GET previously saved results from MongoDB
    const showSaved = () => {;

    const options = {
        method: 'GET',
        redirect: 'follow'
        };

    fetch("/api/saved-results", options)
        .then((response) => response.text())
        .then(result => {
            // added this if condition...
            if (result) {
                // console.log(result)
                // setFetchResult(result)

                console.log("Showing array of previously saved results:")
                // console.log(result)

                // Will eventually make a loop to iterate through
                // each array element and display it in a list
                let resultArray = Array.map[result];
                console.log(resultArray);

            }  else {
                window.alert("Uh oh... something's wrong. Please try again.");
            }              
        })
        .catch(error => console.log('error', error))
    };

    showSaved();

    
//PATCH new destination name to existing mongoDB entry
//The fetch is not working correctly in component, but PATCH functions properly in insomnia
    const handleEdit = () => {
        const options = {
            method: 'PATCH',
            redirect: 'follow'
            };

        const { resultId } = useParams;

        const editedDestination = {...resultArray, _id: resultId}

        fetch(`/api/edit-destination`, {
            headers: { "Content-Type": "application/json" },
            method: "PATCH",
            body: JSON.stringify(editedDestination),
        })
            .then((res) => res.json())
            .then((data) => {
            if (data.status === 200) {
                console.log("Updated destination in database - reload to view changes")
            }
            });
    };


//DELETE previously saved result from mongoDB
//The fetch is not working correctly in component, but DELETE functions properly in insomnia
    const handleDelete = () => {
        const options = {
            method: 'DELETE',
            redirect: 'follow'
            };

        const { resultId } = useParams;

        const deletedDestination = { ...resultArray, _id: resultId}

        fetch(`/api/edit-destination`, {
            headers: { "Content-Type": "application/json" },
            method: "DELETE",
            body: JSON.stringify(deletedDestination),
        })
            .then((res) => res.json())
            .then((data) => {
            if (data.status === 200) {
                console.log("Deleted destination from database - reload to view changes")
            }
            });
    };

    return (
        <>
    <Wrapper>
        <ResultWrapper>
        <Heading>Your last saved destination:</Heading>
        <ListResults>
            <Row>Placeholder for previously saved destination
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
        <br></br>
        <div>WIP - See console for output of GET for previously saved results</div>
        <br></br>
        <div>Note: server endpoints are set up (and functioning correctly in insomnia) to get saved resuls, edit a specific result by ID, and delete a specific saved result by ID - work in progress to connect these to the component 🐞</div>
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