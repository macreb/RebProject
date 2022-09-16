// "use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
// const { v4: uuidv4 } = require("uuid");

const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//function to reduce repetitiveness in typing out JSON responses
const sendResponse = (res, status, data, message = "No message included") => {
    return res.status(status).json({ status, data, message });
};

// function to sign up a new user
const handleNewUser = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("finalProject");
    let user = null;
    
    try {
        await client.connect();
        user = await db.collection("users").findOne({ email: req.body.email });

        // check if they're already in the db
        if (!user) {
            req.body._id = uuidv4();
            req.body.givenName = givenName;
            req.body.password = password;

            // empty array to hold results after taking quiz
            req.body.previousResult = [];

            // add new user
        
        const userAdded = await db.collection("users").insertOne(req.body);
        
        if (userAdded) {
            res.status(200).json({
                status: 200,
                data: req.body,
                message: "Sign-up successful!"
                });
            } else {
                res.status(404).json({
                    status: 404,
                    data: req.body,
                    message: "Request failed",
                    });
            }   
        } else {
                res.status(404).json({
                    status: 404,
                    data: req.body,
                    message: "Error: email already exists in database",
                });
        }
    } catch (err) {
        res.status(500).json({
            status: 500,
            data: req.body,
            message: err.message,
        });
    }
    client.close();
};

// function to handle login of existing user
const handleLogin = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    const db = client.db("finalProject")
    let user = null;

    try {
        await client.connect();
        user = await db.collection("users").findOne({ email: req.body.email });
        if (user) {
            // check password is correct
            if (await compare(req.body.password, user.password)) {
                res.status(200).json({
                    status: 200,
                    data: user,
                    message: "You are now logged in",
            });
            } else {
                res.status(404).json({
                    status: 404,
                    data: req.body,
                    message: "Error: password is incorrect",
            });
            }
            } else {
                res.status(404).json({
                    status: 404,
                    data: req.body,
                    message: "User account not found",
            });
            }
        } catch (err) {
            res.status(500).json({
                status: 500,
                data: req.body,
                message: err.message,
            });
        }
        client.close();
};
    
    
// returns previous quiz results for logged in user
const myGetFunction = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("finalProject");
    
    const previousResults = await db.collection("results").find().toArray();

    (previousResults.length > 0)
    ? sendResponse(res, 200, previousResults)
    : sendResponse(res, 404, null, "No previous quiz results found");
    client.close();
};

// saves quiz results to database for logged in user
const myPostFunction = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);

    const resultBody = req.body;
    
    let newResult = {
        _id: uuidv4(),
        destination: resultBody.location,
        // occupation: resultBody.job,
        // relationshipStatus: resultBody.partner,
        // pets: resultBody.animal,
        // netWorth: resultBody.wealth,
        // happinessIndex: resultBody.likert
        };

    try{
        await client.connect();
        const db = client.db("finalProject");
        const result = await db
            .collection("results")
            .insertOne(newResult);
        res 
            .status(201)
            .json({ status: 201, data: newResult, message: "Results saved" });
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({
            status: 500,
            data: { newResult },
            message: err.message,
        });
    }
    client.close();
};

// edits an existing result for logged in user
const myPatchFunction = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);

    const _id = req.body._id;
    const destination = req.body.destination;
    const query = { _id }
    const newDestination = { $set: { ...req.body } };

    try {
        await client.connect();
        const db = client.db("finalProject");
        
        const retrievedResult = await db.collection("results").findOne({ _id });

        let destinationChanged = retrievedResult.destination != destination;

        // if the newly entered destination does not match the old one, update the database with new destination
        if (destinationChanged) {
            const updateDestination = await db.collection("results").updateOne({ _id }, { $set: { ...destination}});
        }
}
//     const updatedDestination = await db  
//         .collection("results")
//         .updateOne(reservationQuery, newDestination);
//     res
//         .status(201)
//         .json({ status: 201, data: { updatedReservation }, message: "Success!" });
// } catch (err) {
//     console.log(err.stack);
//     res
//         .status(500)
//         .json({ status: 500, data: { updatedReservation }, message: err.message });
// }
client.close();
};


    // const oldResult = {
    //     _id = _id,
    //     destination: resultBody.location,
    //     occupation: resultBody.job,
    //     relationshipStatus: resultBody.partner,
    //     pets: resultBody.animal,
    //     netWorth: resultBody.wealth,
    //     };




//     const flight = req.body.flight;
//     const seatID = req.body.seat;
//     const query = { _id: flight };
//     const _id = req.body._id;
//     const reservationQuery = { _id };
//     const reservationNewValues = { $set: { ...req.body } };


// deletes a specified reservation by ID
const myDeleteFunction = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    // const _id = req.params.reservation;

    // try {
    //     await client.connect();
    //     const db = client.db("slingair");

    //     //find the reservation to be deleted in the database
    //     const reservationData = await db
    //     .collection("reservations")
    //     .findOne({ _id });

    //     const flightID = reservationData.flight;
    //     const seatID = reservationData.seat;
    //     const query = { _id: flightID, "seats.id": seatID};
    //     const newValues = { $set: { "seats.$.isAvailable": true } };
    //     const updateFlightSeat = await db
    //         .collection("flights")
    //         .updateOne(query, newValues);

    //     const result = await db.collection("reservations").deleteOne({ _id });
        
    //     if (result) {
    //         res.status(200).json({
    //             status: 200,
    //             data: result,
    //             message: "Successfully deleted booking.",
    //         });
    //     } else {
    //         res.status(404).json({ status: 404, message: "Booking not found." });
    //     }
    // } catch (err) {
    //     console.log(err.stack);
    //     res.status(500).json({ status: 500, message: err.message });
    // }
    client.close();
};

module.exports = {
    handleNewUser,
    handleLogin,
    myGetFunction,
    myPostFunction,
    myPatchFunction,
    myDeleteFunction
};


