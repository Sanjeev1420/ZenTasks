/** @format */

import React, { Component } from "react";
import { getPlanPricing } from "./pricingDetails";
import "./applicationpricing.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';


class Pricing extends Component {
  state = {
    pricedet: getPlanPricing(),
  };

  render() {

    return (
      <div id='planContainer'>
        {this.state.pricedet.plans.map((item) => {
          return (
            <div class='applicationPlans'>
              <div class='planHeader'>
                <span>{item.planName}</span>
              </div>
              <div class='planPrice'>
                <span>{` ${item.currency}${item.price}/${item.interval}`}</span>
              </div>
              <div class='planHeaderClose'>
                <hr></hr>
              </div>
              <div class='planFeatures'>
                {this.state.pricedet.features.map((prop) => {
                  if(prop.planName == item.planName){
                    const allowedFeatures = prop.avilableFeatures.map(feature => {
                        return displayAllowedFeature(feature);
                    });
                    const deniedFeatures = prop.deniedFeatures.map(feature => {
                        return displayDeniedFeature(feature);
                    });
                    
                    return(
                        <div> 
                            <div>{allowedFeatures}</div>
                            <div>{deniedFeatures}</div>
                        </div> 
                    )
                  }
                })}
              </div>
              <div class="planButtonSec">{addButon(item.isActivePlan)}</div>
            </div>
          );

          function displayAllowedFeature(feature){
              return (<div className="featureItems allowedftr"> <FontAwesomeIcon  icon={faCheck} size="1x" />{`  ${feature}`}</div>);
          }

          function displayDeniedFeature(feature){
            return (<div className="featureItems deniedftr"> <FontAwesomeIcon  icon={faXmark} size="1x" />{`  ${feature}`}</div>);
          }

          function addButon(isplanactive){
             if(isplanactive){
                return (<button className="planbtn activebtn">Button</button>);
             }else{
                return (<button className="planbtn inactivebtn">Button</button>);
             }
          }
        })}
      </div>
    );
  }

  
}

export default Pricing;
