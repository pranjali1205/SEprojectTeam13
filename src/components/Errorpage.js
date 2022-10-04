import React from "react";
import { NavLink } from "react-router-dom";
import "../App0.css"

const Errorpage=()=>{
    return(
        <>
            <div id="not found">
                <div className="not found">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2> we are sorry, page not found</h2>
                    <p className="mb-5">
                        The page your looking for might have been removed had 
                        had its name changed or is temporarily unavailable.
                    </p>
                    <NavLink to ="/"> Back to Hoomepage</NavLink>
                </div>
            </div>
        </>
    )
}
export default Errorpage