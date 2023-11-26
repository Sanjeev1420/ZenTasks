const pricingPlans = {
    plans : [
        {
            planName : "Free",
            currency : "$",
            price : 0,
            interval : "month",
            isActivePlan : false, 
        },
        {
            planName : "Plus",
            currency : "$",
            price : 9,
            interval : "month",
            isActivePlan : false,  
        },
        {
            planName : "Pro",
            currency : "$",
            price : 49,
            interval : "month",
            isActivePlan : true, 
        }
    ],

    features : [
        {
            planName : "Free",
            avilableFeatures : ["Single User","50GB Storage","Unlimited Public Projects","Community Access"],
            deniedFeatures : ["Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]
        },
        {
            planName : "Plus",
            avilableFeatures : ["5 Users","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain"],
            deniedFeatures : ["Monthly Status Reports"]
        },
        {
            planName : "Pro",
            avilableFeatures : ["5 Users","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"],
            deniedFeatures : []
        }

    ]
       
};
   
export function getPlanPricing() {
    return pricingPlans;
}