import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../StyleSheets/header.css"


const Header = () => {
    return(
        <div id="headerCnt" className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">LandingPage.in</a>
    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex">
                        <button id="signupBtn" className="btn btn-primary" type="submit">Sign In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Header