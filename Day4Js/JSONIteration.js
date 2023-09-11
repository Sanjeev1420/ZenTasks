// 1) For the given JSON iterate over all for loops(for, for in,for of,forEach)

var data ="{\"districts\":[{\"name\":\"Chennai\",\"population\":4681087,\"pincode\":[\"600001\",\"600002\",\"600003\"]},{\"name\":\"Coimbatore\",\r\n\"population\":3472578,\"pincode\":[\"641001\",\"641002\",\"641003\"]},{\"name\":\"Madurai\",\"population\":1566914,\"pincode\":[\"625001\",\"625002\",\"625003\"]},\r\n{\"name\":\"Tiruchirappalli\",\"population\":1001954,\"pincode\":[\"620001\",\"620002\",\"620003\"]},{\"name\":\"Salem\",\"population\":921913,\"pincode\":\r\n[\"636001\",\"636002\",\"636003\"]}]}";

var obj = JSON.parse(data);

// i) Simple for loop

var entries = Object.entries(obj);


for(let i=0;i<entries[0][1].length;i++){
    console.log(`Simple For ~~ District : ${entries[0][1][i].name} / Population : ${entries[0][1][i].population} / Pincode : ${entries[0][1][i].pincode}`);
}


// ii) for in

for (let i in entries[0][1]){
    console.log(`For in ~~ District : ${entries[0][1][i].name} / Population : ${entries[0][1][i].population} / Pincode : ${entries[0][1][i].pincode}`);
}

// iii) for of

const district = entries[0][1];

for (const entry of Object.values(district)) {
  console.log(`For of ~~ District: ${entry.name} / Population: ${entry.population} / Pincode: ${entry.pincode}`);
}

// iv) for each

district.forEach(element => {
    console.log(`For each ~ District: ${element.name} / Population: ${element.population} / Pincode: ${element.pincode}`);
});

