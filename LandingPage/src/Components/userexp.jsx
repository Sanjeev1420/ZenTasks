import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import '../StyleSheets/userexp.css';

const UserReview = (props) => {
    return ( 
        <section className="uralign text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What People are saying...</h2>
                <div id="userReviewArea" className="row">
                    {props.data.map((item) => (
                        <div id="userItem">
                            <img className="img-fluid rounded-circle mb-3" src={item.img} alt={item.name} />
                            <h4>{item.name}</h4>
                            <p className="font-weight-light mb-0">{item.usrReview}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
};

export default UserReview;
