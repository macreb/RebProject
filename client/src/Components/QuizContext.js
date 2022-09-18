import { createContext, useContext, useState } from "react";

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
    
    const [givenName, setGivenName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [isLoggedIn, setIsLoggedIn] = useState(null); 
    const [destinationCountry, setDestinationCountry] = useState([]); 
    const [ fetchResult, setFetchResult ] = useState(null); 

    
    // const [selectedFlight, setSelectedFlight] = useState("");
    // const [seat, setSeat] = useState("");
    // const [surname, setSurname] = useState("");

    return (
        <QuizContext.Provider
            value={{
                givenName,
                setGivenName,
                email,
                setEmail,
                isLoggedIn,
                setIsLoggedIn,
                destinationCountry,
                setDestinationCountry,
                fetchResult,
                setFetchResult
            }}
        >
        {children}
        </QuizContext.Provider>
    );
};
