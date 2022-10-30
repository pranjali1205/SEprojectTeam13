
### SE PROJECT BY TEAM 10 
{ using MERN Stack (MongoDB, Express js, React js, Node js) }

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




### Steps to run



* Clone this repo

* Install node modules
 * cd {your directory name}
 * cd frontend
 *  npm install
 * cd..
 * cd backend
 *  npm install


### Then start both frontend and backend in terminal

 * cd frontend
 * npm start
 * cd..
 * cd backend
 * npm run devStart



