import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

import { useContext, useState, useEffect } from "react";
import { useHistory, Link, NavLink } from "react-router-dom";
import { QuizContext } from "./QuizContext";


const QuizResult = () => {
    
    const { destinationCountry } = useContext(QuizContext); 
    const { isLoggedIn } = useContext(QuizContext);
    
    let history = useHistory();

    const placeholderResult = "Iran";

    // const result = JSON.parse(sessionStorage.getItem("destination"));
    // console.log(result);

    useEffect(() => {
        if (placeholderResult) {
            console.log(placeholderResult);
            }
        }, []);
        
    const handleSave = () => {
        console.log("Attempting to save result...")
    
        // const [ saveResult, setSaveResult ] = useState(null);

        const newResultData = {
            givenName: "Current user",
            destinationCountry: placeholderResult
        }

        const options = {
            method: "POST",
            body: JSON.stringify(newResultData),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json" 
            },
        };

        console.log(newResultData);

        fetch("/api/save-result", options) 
            .then((res) => res.json())
            .then((json) => {
                const {status, error} = json;

                if (status >= 400) {
                    console.log("error is > 400")

                } else if (status === 201) {
                    console.log("status is 201")
                    console.log("Result saved")
                    history.push("/success");
                // } else {
                //     window.alert("Could not save result.");
            }
        })
        .catch((err) => console.log(err))
    };
        
    return (
        <>
        <Wrapper>
            <ResultWrapper>
        <Result><p>Congratulations, you're going to <Destination>Iran</Destination>!!!</p>
        </Result>
        {isLoggedIn
        ? ( <><Button onClick={handleSave}>
        Save result
    </Button></>)
        : (<><MustSign>You must be logged in to save results. </MustSign><Link to="/signin">User sign-in</Link></>)
        }
        
            </ResultWrapper>
    <Godspeed>Wishing you the best of luck with your future endeavors</Godspeed>
    </Wrapper>
    </>
    )
};

const MustSign = styled.div`
padding: 42px;
`

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


//     <div>
//     <br></br>
// <p>"Placeholder-destination" will be a random country from the api - it only displays in console.log on the previous page though, so it's a mystery to you for now unless you have console open :P</p>
//         <br></br><p>Because the random country from API is not coming through in the FE yet, some fake destination data is included to demonstrate that the fetch successfully saves to MongoDB</p>
// </div>