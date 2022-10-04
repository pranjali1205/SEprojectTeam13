import React from 'react'
import thapapic from'../images/green.png'
import "../App0.css"

const About=()=>{
    return(
        <>
            <div className='container emp-profile'>
                <form method="">
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={thapapic} alt="thapa"/>
                        </div>
                        <div className='col-md-6'>
                            <div className='profile-head'>
                                <h5>cinod thapa</h5>
                                <h6>web developer</h6>
                                <p className='profile-rating mt-3 mb-5'>Rankings: <span > 1/10</span></p>


                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab"  href="#home" role="tab" aria-controls='home'>About</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link active" id="profile-tab" data-toggle="tab"  href="#profile" role="tab" aria-condtrols>Timeline</a>
                                    </li>
                                    
                                </ul>

                            </div>
                        </div>
                        {/* <div className='col-md-4'>
                            <img src={thapapic} alt="thapa"/>
                        </div> */}
                        <div className='col-md-2'>
                            <input type="submit" className='profile-edit-btn' name ="btnAddMore" value="Edit Profile"/>
                        </div>
                    </div>
                        {/* left side url */}

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='profile-work'>
                                <p> Work</p>
                                <a href='https://www.youtube.com' target='_thapa'>Youtube</a><br/>
                                <a href='https://www.youtube.com' target='_thapa'>Instagram</a><br/>
                                <a href='https://www.youtube.com' target='_thapa'>Thapa technical</a><br/>
                                <a href='https://www.youtube.com' target='_thapa'>website developer</a><br/>
                                <a href='https://www.youtube.com' target='_thapa'>figma</a><br/>
                                <a href='https://www.youtube.com' target='_thapa'>Software Engineer</a><br/>
                            </div>
                        </div>

                        {/* right side data toogle */}
                        <div className='col-md-8 pl-5 about-info'>
                            <div className='tab-content profile-tab' id='myTabContent'>
                                <div className='tab-pane fade show active' id='home' role='tabpanel'aria-labelledby='home-tab'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <label > User ID</label>
                                        </div>
                                        <div className='col-md-6'>                                                                                                                               
                                            <p> 99597197</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label > Name</label>
                                        </div>
                                        <div className='col-md-6'>                                                                                                                               
                                            <p> ainash N</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label > Email</label>
                                        </div>
                                        <div className='col-md-6'>                                                                                                                               
                                            <p> CS20B024@iittp.ac.in</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label > Phone</label>
                                        </div>
                                        <div className='col-md-6'>                                                                                                                               
                                            <p> 9959219715</p>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-6'>
                                            <label > Profession</label>
                                        </div>
                                        <div className='col-md-6'>                                                                                                                               
                                            <p> Web Developer</p>
                                        </div>
                                    </div>                                                                                                                                                                                                                                                                                                                                                                                  
                                     
                        </div>
                        <div className='tab-pan fade' id="profile" role="tabpanel" aria-aria-labelledby='profile-tab'>
                                    <div class ='row'>
                                        <div class='col-md-6'>
                                            <label>Experience</label>
                                        </div>
                                        <div class='col-md-6'>
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div class ='row mt-3'>
                                        <div class='col-md-6'>
                                            <label>Hourly Rate</label>
                                        </div>
                                        <div class='col-md-6'>
                                            <p>10$/hr</p>
                                        </div>
                                    </div>
                                    <div class ='row mt-3'>
                                        <div class='col-md-6'>
                                            <label>Total Projects</label>
                                        </div>
                                        <div class='col-md-6'>
                                            <p>230</p>
                                        </div>
                                    </div>
                                    <div class ='row mt-3'>
                                        <div class='col-md-6'>
                                            <label>English leveL</label>
                                        </div>
                                        <div class='col-md-6'>
                                            <p>Expert</p>
                                        </div>
                                    </div>
                                    <div class ='row mt-3'>
                                        <div class='col-md-6'>
                                            <label>Availablity</label>
                                        </div>
                                        <div class='col-md-6'>
                                            <p>6 moths</p>
                                        </div>
                                    </div>

                        </div>

                            </div>
                        </div> 

                    </div>
                </form>
            </div>
        </>
    )
}
export default About