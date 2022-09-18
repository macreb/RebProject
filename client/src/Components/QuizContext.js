import { createContext, useState } from "react";

export const QuizContext = createContext(null);

export const QuizProvider = ({ children }) => {
    
    const [allFlights, setAllFlights] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState("");
    const [seat, setSeat] = useState("");
    const [givenName, setGivenName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");

    return (
        <QuizContext.Provider
            value={{
                seat,
                setSeat,
                givenName,
                setGivenName,
                surname,
                setSurname,
                email,
                setEmail,
                allFlights,
                setAllFlights,
                selectedFlight,
                setSelectedFlight,
            }}
        >
        {children}
        </QuizContext.Provider>
    );
};
