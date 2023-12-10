/** @format */

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../StyleSheets/featureHead.css'
import 'bootstrap-icons/font/bootstrap-icons.css';


const FeatureHeader = (props) => {
    return (
      <div id="featureheadstart" className='container text-center'>
        <div className='row d-flex justify-content-center ml-5 pd-5'>
          {props.data.map((item, index) => (
            <div className='col-lg-4' key={index}>
              <div className='features-icons-item' style={{ maxWidth: '20rem' }}>
                <div className='features-icons-icon d-flex'>
                <i className={`bi-${item.img} m-auto text-primary`}></i>
                </div>
                <h2>{item.headName}</h2>
                <p className='lead mb-0'>{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default FeatureHeader;
