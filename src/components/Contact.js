import React from "react";
import "../App0.css"

const Contact =()=>{
    return (
        <>
            <div className="contact_info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                            <div className="contact_info_item d-flex justify-content-start allign-items-center">
                                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        +91 9959219715
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_item d-flex justify-content-start allign-items-center">
                                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Email
                                    </div>
                                    <div className="contact_info_text">
                                        CS20B024@iittp.ac.in
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_item d-flex justify-content-start allign-items-center">
                                <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone"/>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Address
                                    </div>
                                    <div className="contact_info_text">
                                        IIT Tirupathi
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="contact_form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="contact_form_container py-5">
                                    <div className="contact_form_title">
                                        Get in touch
                                    </div>
                                    <form id="contact_form">
                                        <div className="contact_form_name d-flex justify-content-between align-items-between">
                                            <input type="text" id="contact_form_name"
                                                className="contact_form_name input_field"
                                            placeholder="Your name" required ="true"/>
                                            <input type="email" id="contact_form_email"
                                                className="contact_form_email input_field"
                                            placeholder="Your Email" required ="true"/>
                                            <input type="number" id="contact_form_phone"
                                                className="contact_form_phone input_field"
                                            placeholder="Your Phone Number" required ="true"/>
                                        </div>
                                        <div className="contact_form_text mt-5">
                                            <textarea className="text_field contact_form_message" 
                                            placeholder="Message" cols="30" rows="10"></textarea>

                                        </div>
                                        <div className="contact_form_button">
                                            <button type="submit" className="button contact_submit_button">
                                                Send Message
                                            </button>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Contact