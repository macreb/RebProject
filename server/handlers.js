"use strict";

const { MongoClient } = require("mongodb");

const ObjectId = require("mongodb").ObjectId;
const { v4: uuidv4 } = require("uuid");

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

//WORKS
// GET previously saved result
const getSavedResults = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    const db = client.db("finalProject");
    
    const savedResults = await db.collection("results").find().toArray();

    (savedResults.length > 0)
    ? sendResponse(res, 200, savedResults, "Showing saved results")
    : sendResponse(res, 404, null, "No previous quiz results found");
    client.close();
};

//WORKS
// POST save new quiz result to server
const postSavedResult = async (req, res) => {
    const client = new MongoClient(MONGO_URI, options);

    // will display in FE as <Name>, your destination is <City>, <Country>!

    const newResultBody = req.body;

    let newResult = {
        _id: uuidv4(),
        givenName: newResultBody.givenName,
        destinationCountry: newResultBody.destinationCountry
    };

    try{
        await client.connect();
        const db = client.db("finalProject");
        await db.collection("results").insertOne(newResult);

        res.status(201).json({
            status: 201, data: newResult, message: "Destination saved" 
        });
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


// SOMETHING WRONG WITH THIS
// edits an existing result for logged in user
const patchSavedResult = async (req, res) => {
        const client = new MongoClient(MONGO_URI, options);
    
        const _id = req.body._id;
        const destination = req.body.destination;
        const query = { _id }
        const newDestination = { $set: { ...req.body } };
    
        try {
            await client.connect();
            const db = client.db("finalProject");
            
            const oldDestination = await db.collection("results").findOne({ _id });
    
            let destinationChanged = oldDestination.destination != destination;
    
            // if the newly entered destination does not match the old one, update the database with new destination
            if (!destinationChanged) {
                res.status(404).json({ status: 404, data: destination, message: "Error: new destination is the same as old destination" });

            } else {
                const updateDestination = await db.collection("results").updateOne({ _id }, { $set: { ...destination}});
                res
                    .status(201)
                    .json({ status: 201, data: { updatedReservation }, message: "Successfully updated reservation" });
            }

    } catch (err) {
        console.log(err.stack);
        res
            .status(500)
            .json({ status: 500, data: { updatedReservation }, message: err.message });
    }
    client.close();
    };
    
    
    //WORKS
    // deletes a specified reservation by ID
    const deleteSavedResult = async (req, res) => {
        const client = new MongoClient(MONGO_URI, options);
        const _id = req.params.result;
    
        try {
            await client.connect();
            const db = client.db("finalProject");
    
            //find the destination to be deleted in the database
            const resultToDelete = await db.collection("results").findOne({ _id });
    
            if (resultToDelete) {
                const deleted = await db.collection("results").deleteOne({ _id });
                
                if (deleted) {
                    res.status(200).json({
                        status: 200,
                        data: deleted,
                        message: "Successfully deleted saved destination",
                    });
                }
            } else {
                res.status(404).json({ status: 404, message: "Result not found in database" });
            }
        } catch (err) {
            console.log(err.stack);
            res.status(500).json({ status: 500, message: err.message });
        }
        client.close();
    };

// CURRENTLY BROKEN
// function to sign up a new user
const handleSignup = async (req, res) => {
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
            req.body.email = email;
            req.body.password = password;

            // empty array to hold results after taking quiz
            req.body.previousResults = [];

        // add new user
        const newUser = await db.collection("users").insertOne(req.body);
        
        let newUserData = req.body;

        if (newUser) {
            res.status(200).json({
                status: 200,
                data: newUserData,
                message: "Sign-up successful!"
                });
            } else {
                res.status(404).json({
                    status: 404,
                    data: newUserData,
                    message: "Sign-up request failed",
                    });
            }   
        } else {
                res.status(404).json({
                    status: 404,
                    data: newUserData,
                    message: "Error: email already exists in database",
                });
        }
    } catch (err) {
        res.status(500).json({
            status: 500,
            data: newUserData,
            message: err.message,
        });
    }
    client.close();
};


// REALLY PROBABLY ALSO BROKEN
// function to handle login of existing user
const handleSignin = async (req, res) => {
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




module.exports = {
    getSavedResults,
    postSavedResult,
    patchSavedResult,
    deleteSavedResult,
    handleSignin,
    handleSignup
};


    // let newResult = {
    //     _id: uuidv4(),
    //     destination: resultBody.location,
        // occupation: resultBody.job,
        // relationshipStatus: resultBody.partner,
        // pets: resultBody.animal,
        // netWorth: resultBody.wealth,
        // happinessIndex: resultBody.likert
        // };