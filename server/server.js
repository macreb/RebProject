"use strict";

const express = require("express");
const morgan = require("morgan")
const bp = require('body-parser')
const app = express()


const PORT = 8000

const {
    getSavedResults,
    postSavedResult,
    patchSavedResult,
    deleteSavedResult,
    handleSignin,
    handleSignup
} = require("./handlers");

express()
    .use(bp.json())
    .use(bp.urlencoded({extended:true}))

    // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
    .use(morgan("tiny"))
    .use(express.json())

    // Any requests for static files will go into the public folder
    .use(express.static("public"))


    .get('/api/saved-results', getSavedResults)

    .post("/api/save-result", postSavedResult)

    .patch("/api/edit-result/:result", patchSavedResult)

    .delete("/api/delete-result/:result", deleteSavedResult)
    
    .post("/api/sign-in", handleSignin)

    .post("/api/sign-up", handleSignup)



    // catch-all endpoint...
    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "Everyone knows this is nowhere", //private ode to SappyFest
        });
    })

    // set server to listen on port 8000
    .listen(8000, () => console.log(`Listening on port 8000`));
