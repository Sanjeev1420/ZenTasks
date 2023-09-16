var req = new XMLHttpRequest();
          
req.open('GET','https://restcountries.com/v3.1/all'); 
        
req.send();

var countries;
req.onload = function(){
    countries = JSON.parse(req.response);
    console.log(countries);

    asianCountries();
    populationLtwo();
    details();
    totalPopulation();
    currenciesUsd();

}

//1) Get all the countries from Asia continent /region using Filter function

var asianCountries = () => {
    console.log("Countries from Asia continent /region!");
    let res = [];
    let asiaCountries = countries.filter(country => country.continents.includes("Asia"));
    asiaCountries.forEach((con,idx) =>{ res.push(con.name.common); }); 
    console.log(res); 
};


//2)Get all the countries with a population of less than 2 lakhs using Filter function

var populationLtwo = () => {
    console.log("Countries with a population of less than 2 lakhs!");
    let res = [];
    let popLtwo = countries.filter(country => country.population < 200000);
    popLtwo.forEach((con,idx) =>{ res.push(con.name.common); });  
    console.log(res);
}

//3)Print the following details name, capital, flag using forEach function

var details = () => {
    console.log("Countries details like name, capital, flag!");
    countries.forEach(con => console.log(`${con.name.common} : ${con.capital} : ${con.flag}`));
} 

//4)Print the total population of countries using reduce function
var totalPopulation = () => {
    let tp = countries.reduce((sum,con) => sum + con.population , 0);
    console.log(`Total population : ${tp}`);
}


//5)Print the country which uses US Dollars as currency.
var currenciesUsd = () => {
    console.log("Country which uses US Dollars as currency!");
    let res = [];
    let usd = countries.filter((country) => { if(country.currencies != undefined ) { if(country.currencies.hasOwnProperty("USD")) return true; } }) ;
    usd.forEach((con,idx) =>{ res.push(con.name.common); });  
    console.log(res);
}

