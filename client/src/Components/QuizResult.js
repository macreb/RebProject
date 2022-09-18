import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { QuizContext } from "./QuizContext";


const QuizResult = () => {
    
    const { destinationCountry } = useContext(QuizContext); 
    
    let history = useHistory();

    const fakeResult = {
        country: "Pangea"
    };

    // const result = JSON.parse(sessionStorage.getItem("destination"));
    // console.log(result);

    useEffect(() => {
        if (fakeResult) {
            console.log(fakeResult);
            }
        }, []);
        
    const handleSave = () => {
        console.log("Attempting to save result...")
    
        // const [ saveResult, setSaveResult ] = useState(null);

        fetch("/api/save-result", {
            method: "POST",
            body: JSON.stringify(fakeResult),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 201) {
                    // sessionStorage.setItem("result", JSON.stringify(data.data));
                    // setSaveResult
                    history.push("/success");
                } else {
                    window.alert("Could not save result.");
            }
        }
            );
                }
        
    

    return (
        <>
        <Wrapper>
            <ResultWrapper>
        <Result>Congratulations, you're going to <Destination>Random country from api - it only displays in console.log on the previous page though, so it's a mystery to you{destinationCountry}</Destination>!!!
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
width: 180px;
font-size: 24px;
padding: 10px;
border-radius: 5px;
background-color: lightgray;
color: fuchsia;
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