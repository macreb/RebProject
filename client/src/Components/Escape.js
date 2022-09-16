    // <h1>So You Want to Escape Your Life</h1>
    import styled from "styled-components";
    import GlobalStyles from "./GlobalStyles";
    
    import { useContext, useState } from "react";
    import { useHistory } from "react-router-dom";
    import { FlightContext } from "./FlightContext";
    
    const Escape = () => {
        const {
            givenName,
            setGivenName,
            email,
            setEmail
        } = useContext(FlightContext);
    
        const history = useHistory();
    
        const userInfo = {
            givenName,
            email,
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
        
            fetch("/api/myPostFunction", {
                method: "POST",
                body: JSON.stringify(userInfo),
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === 201) {
                        sessionStorage.setItem("userInfo", JSON.stringify(data.data));
                        history.push("/confirmed");
                    } else {
                        window.alert("Uh oh... something's wrong. Please try again.");
                    }
                });
        };
        
        return (
            <FormWrapper>
                <form onSubmit={handleSubmit}>
                    <FormBody>
                    <input
                        type="text"
                        name="givenName"
                        placeholder="Name"
                        onChange={(e) => {
                            setGivenName(e.target.value);
                        }}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                        {Object.values(userInfo).includes(" ") 
                            ? (<Button type="submit" disabled>missing info</Button>) 
                            : (<Button>Let's gooooo...</Button>)}
                    </FormBody>
                </form>
            </FormWrapper>
        );
    };
    
    const FormWrapper = styled.div`
        form {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    `;
    
    const FormBody = styled.div`
        display: flex;
        flex-direction: column;
        padding: 10px;
    `;
    
    const Button = styled.button`
        border: 0;
    
        &:hover {
            cursor: pointer;
        }
        &:disabled {
            color: var(--color-gray);
            border: 0;
        }
    `;
    
    export default Escape;