import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../StyleSheets/mainCmp.css"


const Main = () => {
    return(
        <div className="mainFront">
            
            <div className="mainFrontCnt">
              <p>Generate more leads with a </p>
              <p>professional landing page!</p>
              <label htmlFor="usremail"></label>
                <div className="mainCnt">
                  <input type='email' className='userEmail' placeholder='Email Address'/>
                  <button id="submitBtn" className="btn btn-primary" type="submit">Submit</button>
                </div>
            </div>
          
        </div>
    )
}

export default Main