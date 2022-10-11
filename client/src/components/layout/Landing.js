import React, { Fragment, useState } from 'react'
import { Link, Redirect,NavLink,useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchBuses } from '../../actions/profile'

const Landing = () => {



    const history = useHistory();
    const [booking,setBooking] = useState({
      bookingOption:"",Destination:"",time:"",date:"",
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
       const{bookingOption,Destination, time, date} = booking;
       const res = await fetch("/transport",{
           method: "POST",
           headers: {
               "Content-Type" : "application/json"
           },
           body: JSON.stringify({
            bookingOption,Destination, time, date
           })
       });
   
       const data = await res.json();
       if(data.status === 422|| !data){
           window.alert("Invalid Booking");
           console.log("Invalid Booking");
       } else{
           window.alert("Booking Sucessful");
           console.log("Booking Sucessful");
   
           // history.pushState("/login");
           history.push('/');
       }




    // const [user, exp1] = useState('Tickets here')
    // const [formData, setFormData] = useState({
    //     start: '',
    //     end: '',
    //     date: ''

    // });
    // const { start, end, date } = formData;
    // const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    // const handleToCity = e => {
    //     e.preventDefault()
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    //     localStorage.setItem("destination", e.target.value)
    // }
    // const handleFromCity = e => {
    //     e.preventDefault()
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    //     localStorage.setItem("start", e.target.value)
    //     // console.log(startCity)
    // }
    // const handleDate = e => {
    //     e.preventDefault()
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    //     //    console.log(e.target.value)
    //     localStorage.setItem("date", e.target.value)
    // }
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     const handleSubmit = bId => {
    //         localStorage.setItem("selectedBusId", bId)
    //     }
    //     searchBuses({ start, end }).then((busData) => {
           // // const func1 = (item) => {
           // //     console.log(item)
           // //     // exp1(<p>Hello jiii yaraaa</p>)
           // // }
            // // user.forEach(func1)
            // exp1(<div className="profile-exp bg-white p-2">
            //     <h2 className="text-primary">Buses</h2>
            //     <ul>
            //         {busData && busData.length > 0 ? (<Fragment>
            //             {busData.map(bus => (
            //                 <li key={bus._id}>

            //                     <div className="container1">
            //                         <div className="card">
            //                             <div className="box">
            //                                 <div className="content">
            //                                     <h2>01</h2>
            //                                     <h3>{bus.name}</h3>
            //                                     <h3>{bus.company}</h3>
            //                                     <span> <h1>Stops:- </h1> <strong> [{bus.stops}] </strong> </span>
        //                                         {/* <span><h1>Bus Id:- </h1>{bus._id}</span>
        //                                         <Link to="/book/menu1" className="btn btn-primary" onClick={(bId) => { handleSubmit(bus._id) }} >Book Bus</Link>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div></li>
        //                 ))}
        //             </Fragment>) : (<h4>No Buses Found.</h4>)}</ul>
        //     </div>)
        //     // console.log(busData.length)


        //     // console.log(user)
        //     // return (
        //     //     <div>h</div>
        //     // )
        // }) */}
    }


    return (
        <div>

            <div className="landing-inner">
                <h1 className="large">Welcome to SE Project by TEAM 13 </h1>


            </div>
            {/* <p className="lead">
                <strong>" Tomorrow's destination arrive today "</strong>
            </p> */}

            <div className="rdc">
                <div className="main-container">
                    <form method="POST" className="form-inline" id='register-form' >
                        <input type="text" placeholder="Mode of Transport" name="bookingOption" data-style="btn-new" className="selectpicker" value={booking.bookingOption} onChange={e => { handleInputs(e) }} />

                        <input type="text" name="Destination" placeholder="Destination" data-style="btn-new" className="selectpicker" value={booking.Destination} onChange={e => { handleInputs(e) }} />

                        <input type="date" name="date" value={booking.date} onChange={e => { handleInputs(e) }} />
                        <input type="time" name="time" value={booking.time} onChange={e => { handleInputs(e) }}/>
                        <input type="submit" className=" btn btn-success" value="Book" name="booking" id="booking" onSubmit={e => PostData(e)}/>
                    </form>
                    <div className="temp1">
                        Are you a New User ?
                        <Link to="/register"> Sign-In</Link>
                    </div>

                    {/* <div className="profile-exp bg-white p-2">
                        <h2 className="text-primary">Buses</h2>
                        <ul>
                            {user && user.length > 0 ? (<Fragment>
                                {user.map(bus => (
                                    <li key={bus._id}>

                                        <div className="container1">
                                            <div className="card">
                                                <div className="box">
                                                    <div className="content">
                                                        <h2>01</h2>
                                                        <h3>{bus.name}</h3>
                                                        <h3>{bus.company}</h3>
                                                        <span> <h1>Stops:- </h1> <strong> [{bus.stops}] </strong> </span>
                                                        <span><h1>Bus Id:- </h1>{bus._id}</span>
                                                        <button className="btn btn-primary">Book Bus</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></li>
                                ))}
                            </Fragment>) : (<h4>No Buses Found.</h4>)}</ul>
                    </div> */}

                    {/* <button type="button" className="btn btn-link">Link</button>
                    <button type="button" className="btn btn-link">Link</button> */}

                    {/* <div>
                    {renderBusList(dataInp)}
                </div> */}
                </div>
            </div>
            {/* <div className="tickets">{user}</div> */}
        </div>
    )
}

Landing.propTypes = {
    isAuthenticated: PropTypes.bool,
    searchBuses: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { searchBuses })(Landing)
