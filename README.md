# RebProject

This project is a one-click game where the user can click a button to find out where they can go in the world to escape their current life and start again. 

Clicking the "let's go" button on the home page will fetch a random country from the Countries & Cities API (https://documenter.getpostman.com/view/1134062/T1LJjU52#dd5bd0d9-2602-4161-8c77-3af30cd2f41a). 

Server endpoints are set up to save the user's results to MongoDB if they wish (POST), access previously saved destinations (GET), delete a previously saved result by ID (DELETE), and update a previously saved destination by ID to a country they'd rather visit (PATCH).

All server endpoints and handlers are functioning properly (tested in insomnia) and API data are being retrieved successfully. 

A user sign-up page is set up that connects to a backend POST handler that saves new users to MongoDB. 

A user sign-in page is set up for existing users. This sends a POST to the server to check if the user exists, and if their passwords match, isLoggedIn is switched to TRUE, enabling access to the saved results page and edit/delete capability for previously saved results.

There are a few issues with the fetches on the /saved page. The plan for that is to take the returned results from the GET and populate a new array with just a resultID and destination for each entry for that logged-in user. I then want to make a loop to iterate through each element and create a ul for each one to render the results on the page. The user can then edit or delete specific entries using the buttons (accessible by object key using PATCH and/or DELETE).

The styling in this website is an homage to GeoCities and the late-90s web - the same time period during which I was playing M.A.S.H. and other such childhood fortune-telling games that inspired this project. 

If time is a round donut, what is our place in this world?

