import "../styles/transport.css";
import "../App0.css"
import React, { useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
// import React from "react";
// import { useEffect,useState } from "react"


//components
const Transport = () => {


    const navigate = useNavigate();
    const [booking,setBooking] = useState({
      name:"",email:"",noofPeople:"",time:"",date:"",mobileNumber:"",bookingOption:"",
    });
    let name,value;
    const handleInputs=(e)=>{
       console.log(e);
       name=e.target.name;
       value=e.target.value;
   
       setBooking({...booking,[name]:value});
    }
    
    const PostData = async(e) => {
       e.preventDefault();
       const{name, email, noofPeople, time, date, mobileNumber,bookingOption} = booking;
       const res = await fetch("/transport",{
           method: "POST",
           headers: {
               "Content-Type" : "application/json"
           },
           body: JSON.stringify({
            name, email, noofPeople, time, date, mobileNumber,bookingOption
           })
       });
   
       const data = await res.json();
       if(data.status == 422|| !data){
           window.alert("Invalid Booking");
           console.log("Invalid Booking");
       } else{
           window.alert("Booking Sucessful");
           console.log("Booking Sucessful");
   
           // history.pushState("/login");
           navigate('/');
       }
    }
   
       return(
           <>
               <section className="signup">
                   <div className="container mt-5">
                       <div className='signup-content'>
                           <div className='signup-form'>
                               <h2 className="form-title">Booking</h2>
                               <form method="POST" className='register-form' id='register-form'>
                                   <div className='form-group'>
                                       <label htmlFor='name'>
                                           <i class="zmdi zmdi-account material-icons-name"></i>
                                       </label>
                                       <input type='text' name='name' id='name' autoComplete='off'
                                          value={booking.name}
                                          onChange={handleInputs}
                                          placeholder='Your Name'
                                       />
                                   </div>
   
                                   <div className='form-group'>
                                       <label htmlFor='email'>
                                           <i class="zmdi zmdi-email material-icons-name"></i>
                                       </label>
                                       <input type='text' name='email' id='email' autoComplete='off'
                                           value={booking.email}
                                           onChange={handleInputs}
                                           placeholder='Your Email'
                                       />
                                   </div>
   
                                   <div className='form-group'>
                                       <label >
                                           No of People
                                       </label>
                                       <input type='number' name='noofPeople' id='noofPeople' autoComplete='off'
                                           value={booking.noofPeople}
                                           onChange={handleInputs}
                                           placeholder='no_of_people'
                                       />
                                   </div>
   
                                   <div className='form-group'>
                                       <label >
                                           time
                                       </label>
                                       <input type='time' name='time' id='time' autoComplete='off'
                                           value={booking.time}
                                           onChange={handleInputs}
                                           placeholder='time'
                                       />
                                   </div>
   
                                   <div className='form-group'>
                                       <label >
                                           date
                                       </label>
                                       <input type='date' name='date' id='date' autoComplete='off'
                                           value={booking.date}
                                           onChange={handleInputs}
                                           placeholder='date'
                                       />
                                   </div>
   
                                   <div className='form-group'>
                                       <label >
                                           Mobile number :
                                       </label>
                                       <input type='number' name='mobileNumber' id='mobileNumber' autoComplete='off'
                                           value={booking.mobileNumber}
                                           onChange={handleInputs}
                                           placeholder='mobile_number'
                                       />
                                   </div>

                                   <div className='form-group'>
                                       <label >
                                           Mode of Transport
                                       </label>
                                       <input type='text' name='bookingOption' id='bookingOption' autoComplete='off'
                                           value={booking.bookingOption}
                                           onChange={handleInputs}
                                           placeholder='mode_of_transport'
                                       />
                                   </div>
   
                                   <div className='form-group form-button'>
                                       <input type="submit" name="booking" id="booking" className="form-submit"
                                           value="book" onClick={PostData}
                                       />
                                   </div>
                               
                               </form>
                           </div>
                               <div className='signup-image'>
                                   {/* <figure>
                                       <img src={signpic} alt="registation pic"/>
                                   </figure> */}
                                   <NavLink to="/" className="signup-image-link"> Don't want to book ?</NavLink>
                               </div>
                           
                       </div>
   
                   </div>
   
               </section>
   
           </>
       )
   }



//     return (
//       <>
//         <div classs="form">
//           <div class="form-text">
//             <h1>
//               {/* <span>
//                 <img src=" " alt="" />
//               </span> */}
//                 Booking now 
//               {/* <span>
//                 <img src=" " alt="" />
//               </span> */}
//             </h1>
//             <br></br>
//             <p> seats Available </p>
//           </div>
//           <br></br>
//           <div class="main-form">
//             <form action=" " method="get">
//               <div>
//                 <span>Your Full Name</span>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   placeholder="enter your name"
//                   required
//                 />
//               </div>
//               <br></br>
//               <div>
//                 <span>your email address?</span>
//                 <input
//                   type="email"
//                   name="name"
//                   id="name"
//                   placeholder="write your email"
//                   required
//                 />
//               </div>
//               <br></br>
//               <div>
//                 <span>How many people?</span>
//                 <select name="people" id="people" required>
//                   <option value="">---people-</option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                 </select>
//               </div>
//               <br></br>
//               <div>
//                 <span>what is Time</span>
//                 <input
//                   type="time"
//                   name="time"
//                   id="time"
//                   placeholder="time"
//                   required
//                 />
//               </div>
//               <br></br>
//               <div>
//                 <span>what is the date</span>
//                 <input
//                   type="date"
//                   name="date"
//                   id="date"
//                   placeholder="date"
//                   required
//                 />
//               </div>

//               <br></br>
//               <div>
//                 <span>your phone number ?</span>
//                 <input
//                   type="number"
//                   name="number"
//                   id="number"
//                   placeholder="write your number here ..."
//                   required
//                 />
//               </div>
//               <br></br>
//               <div>
//                 <span>choice option</span>
//                 <select name="item" id="item" required>
//                   <option name="">---Mode of transport---</option>
//                   <option name="Bus">Bus</option>
//                   <option name="Cab">Cab</option>
//                   <option name="tempo">Tempo</option>
//                   <option name="tempo">Bicycle</option>
//                   <option name="tempo">bike</option>
//                 </select>
//               </div>
//               <br></br>
//               <div id="submit">
//                 <input type="submit" value="SUBMIT" name="name" id="submit" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </>
//     );
//   };
  
  export default Transport;
  