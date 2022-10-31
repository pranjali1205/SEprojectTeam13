
### SE PROJECT BY TEAM 13 
{ using MERN Stack (MongoDB, Express js, React js, Node js) } <br>
github link - https://github.com/pranjali1205/SEprojectTeam13

## We have developed a web application using mern stack for the following modules :

 <b><u>1. Login for student and teacher:</u></b><br>
  This is for user to login to his/her account. this module also ensures security.
  
 <b><u>2. Reimbursement Claim:</u></b><br>
  Provides facility for user to
  - see their reimbursement claim details (i.e. expenses for items like     stationary, chemicals, and other consumables)
  - buy available products under this category.

 <b><u>3. Payments of all modes :</u></b><br>
  Provides facility for user to 
  - make payments in different modes which includes cash, upi payments and card payments.
  - see their history of payments in respective modes.
  
 <b><u>4. Transport expenses :</u></b><br>
  Provides facility for user to
  - see their travel expenses.
  - book a cab, tempo, cycle, bike, scooty if they need.
  
 <b><u>5. Communication claim :</u></b><br> 
  Provides facility for user to
  - see their charges for Wifi
  - make payment for the same
  
 <b><u>6. Maintaining database :</u></b><br>
  This module is used to store the information of user (student / staff)in their respective database.
  <br>
  <br>

## Front-End

* Sign-In & Sign-Up Pages.

* Uses Token based system, so only registered users can access the website  passport js.

* Password hashing using passport js.

* Has a profile page, which will display all information about the signed in user.

* List of cities for users to choose from (starting city & destination city). 

* Getting list of different tranportation service available.

* has Seat selection page .

* booking confirmation is done using payment process . This uses react-credit-cards. 

* Final page has a ticket displaying component.

### Back-End

* Uses Express js based application for the backend process.

* Uses MongoDB atlas for storing the collections.

* Uses passport js for authenticating user and token based system.

* Uses passport js for hashing the password before sending the data to the cloud.

* This version does not support dynamic seat data being stored from cloud.


This project also demonstrates:

* a typcial React project layout structure




### Steps to run :-

<br>
1 ) Clone this repo into a folder
<br>
2) Then install node modules, steps for this :
 * cd {your directory name}
 * cd frontend
 *  npm install
 * cd..
 * cd backend
 *  npm install
<br>
3) Then start both frontend and backend in terminal , steps for this :
 * cd frontend
 * npm start
 * cd..
 * cd backend
 * npm run devStart
 

### All dependencies of our project:- 
<br>

*  Frontend::
  {<br>
  "@testing-library/jest-dom": "^4.2.4",<br>
  "@testing-library/react": "^9.3.2",<br>
  "@testing-library/user-event": "^7.1.2"<br>,
  "@types/date-fns": "^2.6.0",<br>
  "axios": "^0.19.2",<br>
  "bootstrap": "^4.5.0",<br>
  "jwt-decode": "^2.2.0",<br>
  "react": "^16.13.1",<br>
  "react-credit-cards": "^0.8.2",<br>
  "react-datepicker": "^2.16.0",<br>
  "react-dom": "^16.13.1",<br>
  "react-icons": "^3.10.0",<br>
  "react-router-dom": "^5.2.0",<br>
  "react-scripts": "^3.4.4",<br>
  "react-transition-group": "^4.4.1",<br>
  "redux": "^4.0.5"<br>
  }<br>
*  Backend::
  {
  "bcrypt": "^4.0.1",<br>
  "bcryptjs": "^2.4.3",<br>
  "body-parser": "^1.19.0",<br>
  "cookie-parser": "~1.4.4",<br>
  "cors": "^2.8.5",<br>
  "debug": "~2.6.9",<br>
  "express": "~4.16.1",<br>
  "express-session": "^1.17.1",<br>
  "jsonwebtoken": "^8.5.1",<br>
  "moment": "^2.26.0",<br>
  "mongoose": "^5.9.16",<br>
  "morgan": "~1.9.1",<br>
  "passport": "^0.4.1",<br>
  "passport-jwt": "^4.0.0",<br>
  "passport-local": "^1.0.0"<br>
  }

