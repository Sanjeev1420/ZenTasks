document.getElementById("tableBody").style.visibility = "hidden";

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let addRow = validateFood();
    let tableVisibility = document.getElementById("tableBody");
    if(addRow){
        if(tableVisibility.style.visibility == "hidden"){
            tableVisibility.style.visibility = "visible";
        }
        document.getElementById("erMsg").innerHTML = "";
        addTablerow();
        this.reset();
    }else{
        document.getElementById("erMsg").innerHTML = "*Plese select any 2 food";
    }
});


function validateFood(){
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="food"]');
    let checkedCount = 0;

    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    return checkedCount >= 2;
}


function addTablerow(){
    let values = getValues();
    let row = document.createElement("tr");
    Object.entries(values).forEach(val => {
        let col = document.createElement("td");
        col.textContent = val[1]; 
        row.appendChild(col);
    });
    row.setAttribute("class" ,"table-striped"); 
    let table = document.getElementById("tableBody");
    table.appendChild(row);
}


function getValues(){
    let val = {};
    val.fname = document.getElementById("usrFname").value;
    val.lname = document.getElementById("usrLname").value;
    val.address = document.getElementById("usrAddress").value;
    val.pincode = document.getElementById("pincode").value;
    val.gender =  document.querySelector('input[name="gender"]:checked').value;
    
    let foods = [];
    let selectedFoods = document.querySelectorAll('input[name="food"]:checked');
    selectedFoods.forEach((food) => {
        foods.push(food.value);
    });
    val.food = foods.join(",");

    val.state = document.getElementById("usrState").value;
    val.country = document.getElementById("usrCountry").value;
    return(val);
}