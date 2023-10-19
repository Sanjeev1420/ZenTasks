var jsonData = {};
var currentPage = 1;
var netPages = 0;


function createPaginationList(numItems) {
    const ul = document.createElement("ul");
    ul.classList.add("pagination", "justify-content-center");

    // DOM for Previous Button 
    const previousLi = document.createElement("li");
    previousLi.classList.add("page-item", "disabled");
    previousLi.setAttribute("id","prev");
    previousLi.setAttribute("onclick", "previousClick()");
    const previousLink = document.createElement("a");
    previousLink.classList.add("page-link");
    previousLink.href = "#";
    previousLink.tabIndex = -1;
    previousLink.setAttribute("aria-disabled", "true");
    previousLink.textContent = "Previous";
    previousLi.appendChild(previousLink);
    ul.appendChild(previousLi);

    // DOM for page list
    for (let i = 1; i <= numItems; i++) {
      const li = document.createElement("li");
      li.classList.add("page-item");
      li.setAttribute("id", i);
      li.setAttribute("onclick", `loadData(${i})`); // Use template literals
      const link = document.createElement("a");
      link.classList.add("page-link");
      link.href = "#";
      link.textContent = i;
      li.appendChild(link);
      ul.appendChild(li);
  }

    // DOM for Next Button
    const nextLi = document.createElement("li");
    nextLi.classList.add("page-item");
    nextLi.setAttribute("id","next");
    nextLi.setAttribute("onclick", "nextClick()");
    const nextLink = document.createElement("a");
    nextLink.classList.add("page-link");
    nextLink.href = "#";
    nextLink.textContent = "Next";
    nextLi.appendChild(nextLink);
    ul.appendChild(nextLi);
    return ul;
}


fetch('data.json')
  .then(response => response.json())
  .then(data => {
   
    const itemsPerPage = 10;
    const currentPage = 1;
    console.log(typeof(data));
    const totalPages = Math.ceil(data.length / itemsPerPage);
    netPages = totalPages;
    const paginationList = createPaginationList(totalPages);
    let pageIcons = document.getElementById("pagination-controls");
    pageIcons.appendChild(paginationList); 
    jsonData = data;
    loadData(currentPage); //Loading the 1st Page
   
});

function loadData(page){
   currentPage = page;
   let itemsPerPage = 10; 
   let selectedpage = document.getElementById(page);
   const pageElements = document.getElementsByClassName("page-item");
   for (const element of pageElements) {
       element.classList.remove("active");
   }
   selectedpage.classList.add("active");
   displayData(jsonData,page,itemsPerPage);
   
   let previous = document.getElementById("prev");
   let next = document.getElementById("next");

   if(currentPage!=1){
       previous.classList.remove("disabled");
   }
   if(currentPage==1){
    previous.classList.add("disabled");
   }
   if(currentPage==netPages){
    next.classList.add("disabled")
   }
   if(currentPage!=netPages){
    next.classList.remove("disabled");
   }

} 

// Function to display data for a specific page
function displayData(data, currentPage, itemsPerPage) {
  const dataContainer = document.getElementById('data-container');
  dataContainer.innerHTML = '';
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = data.slice(startIndex, endIndex);

  itemsToDisplay.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.style.borderBottom = '1px solid black';
    itemElement.style.padding = '17px';
    itemElement.textContent = `ID : ${item.id}    /    NAME : ${item.name}    /    EMAIL : ${item.email}`;
    dataContainer.appendChild(itemElement);
    
  });
}

function previousClick(){
  if(currentPage-1 >=1 && currentPage-1<=netPages){
    currentPage--;
    loadData(currentPage);
  } 
}

function nextClick(){
  if(currentPage+1 >=1 && currentPage+1<=netPages){
  currentPage++;
  loadData(currentPage);
  }
}
