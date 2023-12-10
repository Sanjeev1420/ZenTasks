import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import scimg from '../assets/img/showcase1.png'
import '../StyleSheets/featureDes.css'

const FeatureDes = (props) => {
    return (
      <section className='fetDesCnt'>
        <div className="container-fluid p-0">
          {props.data.map((item, index) => (
            <div id="rowcnt" className="row g-0" key={index}>
              <div className={`col-lg-6 ${(index % 2 === 0) ? 'order-lg-2' : 'order-lg-1'} text-white showcase-img`} style={{ backgroundImage: `url('${item.img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center', }}></div>
              <div className={`col-lg-6 ${(index % 2 === 0) ? 'order-lg-1' : 'order-lg-2'} my-auto showcase-text`}>
                <h2>{item.head}</h2>
                <p className="lead mb-0">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default FeatureDes;