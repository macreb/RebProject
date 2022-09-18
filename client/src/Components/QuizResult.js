import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { QuizContext } from "./QuizContext";

const QuizResult = () => {

    const result = JSON.parse(sessionStorage.getItem("result"));
    console.log(result);

    const handleSave = () => {
        console.log("Attempting to save result...")
    
        // fetch("/api/save-result", {
        //     method: "POST",
        //     body: JSON.stringify(result),
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        // })
        //     .then((res) => res.json())
        //     .then((data) => {
        //         if (data.status === 201) {
        //             sessionStorage.setItem("result", JSON.stringify(data.data));
        //             history.push("/confirmed");
        //         } else {
        //             window.alert("Uh oh... something's wrong. Please try again.");
        //         }
        //     });
    };

    return (
        <>
        <Wrapper>
            <ResultWrapper>
        {/* <Result>Congratulations, <Name>{result.name}</Name>! You're going to <Destination>{result.destinationCountry}</Destination>!!!
    </Result> */}
    <Result>Congratulations, <Name>NAME</Name>! You're going to <Destination>DESTINATION</Destination>!!!
    </Result>

        <Button onClick={handleSave}>
                Save result
            </Button>
            </ResultWrapper>
    <Godspeed>Wishing you the best of luck with your future endeavors</Godspeed>
    </Wrapper>
    </>
    )
};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 42px;
`

const ResultWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 100px;
`

const Result = styled.span`
font-size: 24px;
color: black;
padding: 5px;
margin-top: 42px;
text-align: center;
`

const Button = styled.button`
margin: 42px;
&:hover {
        cursor: pointer;
    }
`

const Name = styled.span`
font-size: 24px;
color: black;
font-weight: bold;
`

const Destination = styled.span`
font-size: 24px;
color: black;
font-weight: bold;
`

const Godspeed = styled.div`
font-size: 16px;
color: gray;
padding: 5px;
/* margin: 10px; */
`

export default QuizResult;




    // const [ destination, setDestination ] = useState("");

    // const getDestination = () => {
    //     fetch()