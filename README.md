# RebProject

This project is a one-click game where the user can click a button to find out where they can go in the world to start their new life. 

Clicking the "let's go" button on the home page will fetch a random country from the Countries & Cities API (https://documenter.getpostman.com/view/1134062/T1LJjU52#dd5bd0d9-2602-4161-8c77-3af30cd2f41a). 

Server endpoints are set up to save the user's results to MongoDB if they wish (POST), access previously saved destinations (GET), delete a previously saved result by ID (DELETE), and update a previously saved destination by ID to a country they'd rather visit (PATCH).

A user sign-up page is set up that connects to a backend POST handler that saves new users to MongoDB. 

A user sign-in page is set up for existing users. This sends a POST to the server to check if the user exists, and if their passwords math, isLoggedIn is switched to TRUE.

Additional functionality to be added, but all server endpoints and handlers are functioning properly (tested in insomnia) and API data is being retrieved successfully. 

