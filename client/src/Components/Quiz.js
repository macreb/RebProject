    import styled from "styled-components";
    import GlobalStyles from "./GlobalStyles";
    import { useContext, useState, useEffect } from "react";
    import { useHistory } from "react-router-dom";
    import { QuizContext } from "./QuizContext";
    
    const Quiz = () => {
        const [ destinationCountry, setDestinationCountry ] = useState(null); 
        const [ randomCountry, setRandomCountry ] = useState(null); 
        const { fetchResult, setFetchResult } = useContext(QuizContext); 

        let history = useHistory();

        const handlePlay = () => {
            console.log("Searching for your destiny...")

            const requestOptions = {
                method: 'GET',
                redirect: 'follow'
                };

            fetch("https://countriesnow.space/api/v0.1/countries", requestOptions)
                .then(response => response.text())
                .then(result => {
                    // added this if condition...
                    if (result) {
                        // console.log(result)
                        setFetchResult(result)
                    }  else {
                        window.alert("Uh oh... something's wrong. Please try again.");
                    }              
                })
                .catch(error => console.log('error', error))
            };
            
            useEffect(() => {

                if (fetchResult) {
                    console.log(JSON.parse(fetchResult));
                    
                    const listOfCountries = JSON.parse(fetchResult).data;
                    // console.log(listOfCountries)
                    
                    // console.log(Object.keys(listOfCountries).length)
                    console.log(listOfCountries.length)
                    
                    const randomCountryNum = Math.floor(Math.random() * (listOfCountries.length));
                    console.log(randomCountryNum);
                    
                    const randomCountry = listOfCountries[randomCountryNum];
                    console.log(randomCountry);
                    
                    // const randomCountryName = Object.values(randomCountry);
                    // console.log(randomCountry);
                    
                    setDestinationCountry(randomCountry.country);

                    setTimeout(() => {
                        history.push("/result")
                    }, 2000);
            };
        }, [fetchResult])

        console.log(destinationCountry);

        return (
            <>
            <Wrapper>
                <>
            <Destiny> Click the button to find out your destiny!<Asterisk>*</Asterisk></Destiny>
                </>
            <Button onClick={handlePlay}>
                Let's goooooo!
            </Button>
                {/* { !destinationCountry
                ? <></>
                : <>
                <DestinationCountry>
                    { destinationCountry }
                </DestinationCountry>
                </>
                } */}
                </Wrapper>
                <Caveat>*It's actually more of a destina<i>tion</i> than a destin<i>y</i>... but hey, it's a start.</Caveat>
            </>
        );
    };

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 42px;
`
const Destiny = styled.div`
text-align: center;
font-size: 42px;
color: purple;
padding: 5px;
padding-left: 10px;
margin: 10px;
`
const Asterisk = styled.span`
color: lightgray;
font-size: 42px;
`
const Caveat = styled.div`
font-size: 14px;
padding: 5px;
margin: 10px;
color: gray;
text-align: right;
`

const Button = styled.button`
padding: 10px;
margin: 24px;
border-radius: 5px;
background-color: lightgray;
color: fuchsia;
    &:hover {
        cursor: pointer;
    }
`
const DestinationCountry = styled.div`

`

export default Quiz;



        
    //     const {
    //         givenName,
    //         setGivenName,
    //         email,
    //         setEmail
    //     } = useContext(EscapeContext);
    
    //     const history = useHistory();
    
    //     const userInfo = {
    //         givenName,
    //         email,
    //     };
    
    //     const handleSubmit = (e) => {
    //         e.preventDefault();
        
    //         fetch("/api/myPostFunction", {
    //             method: "POST",
    //             body: JSON.stringify(userInfo),
    //             headers: {
    //                 Accept: "application/json",
    //                 "Content-Type": "application/json",
    //             },
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 if (data.status === 201) {
    //                     sessionStorage.setItem("userInfo", JSON.stringify(data.data));
    //                     history.push("/confirmed");
    //                 } else {
    //                     window.alert("Uh oh... something's wrong. Please try again.");
    //                 }
    //             });
    //     };
        
    //     return (
    //         <FormWrapper>
    //             <form onSubmit={handleSubmit}>
    //                 <FormBody>
    //                 <input
    //                     type="text"
    //                     name="givenName"
    //                     placeholder="Name"
    //                     onChange={(e) => {
    //                         setGivenName(e.target.value);
    //                     }}
    //                 />
    //                 <input
    //                     type="text"
    //                     name="email"
    //                     placeholder="Email"
    //                     onChange={(e) => {
    //                         setEmail(e.target.value);
    //                     }}
    //                 />
    //                     {Object.values(userInfo).includes(" ") 
    //                         ? (<Button type="submit" disabled>missing info</Button>) 
    //                         : (<Button>Let's gooooo...</Button>)}
    //                 </FormBody>
    //             </form>
    //         </FormWrapper>
    //     );
    // };
    
    // const FormWrapper = styled.div`
    //     form {
    //         display: flex;
    //         flex-direction: column;
    //         justify-content: center;
    //         align-items: center;
    //     }
    // `;
    
    // const FormBody = styled.div`
    //     display: flex;
    //     flex-direction: column;
    //     padding: 10px;
    // `;
    
    // const Button = styled.button`
    //     border: 0;
    
    //     &:hover {
    //         cursor: pointer;
    //     }
    //     &:disabled {
    //         color: var(--color-gray);
    //         border: 0;
    //     }
    // `;
    



              // fetch("https://countriesnow.space/api/v0.1/countries", requestOptions)
            //     .then(response => response.text())
            //     .then(result => {
            //         // added this if condition...
            //         if (result) {
            //             sessionStorage.setItem("destination", JSON.stringify(result.data));
            //             history.push("/result");
            //             console.log(result)
            //             setFetchResult(result.data)
            //         }  else {
            //             window.alert("Uh oh... something's wrong. Please try again.");
            //         }              
            //     })
            //     .catch(error => console.log('error', error));