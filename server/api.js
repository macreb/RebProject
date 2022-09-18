import { request } from "express";
import { ConnectionClosedEvent } from "mongodb";

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
    };

    fetch("https://countriesnow.space/api/v0.1/countries", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
    
    
