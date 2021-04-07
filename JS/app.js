
/* // Create array to include hours of operation.
let salesHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Create random num
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min +1 ) + min);
}

//Seattle
let Seattle = {

  location: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  total:0,

  calcCustomersEachHour: function () {
      for (let i = 0; i < salesHours.length; i++){
          this.customersEachHour.push(randomNumber(this.minCustomers, this.maxCustomers));
      }
        },
  calCookiesEachHour: function () {
      for (let i = 0; i < salesHours.length; i++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
      this.total+=this.cookiesEachHour[i];
      }
  },

  render:function(){
    //get the parent by its ID:
    let parent= document.getElementById('parent');
    console.log(parent);

    let h2Element=document.createElement('h2');
    parent.appendChild(h2Element);
    h2Element.textContent=this.location;

    let ulElement=document.createElement('ul');
    parent.appendChild(ulElement);

    for(let i =0; i < salesHours.length;i++){
      let liElement=document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent=`${salesHours[i]}  : ${this.cookiesEachHour[i]}`;
    
    }

    let totalElement=document.createElement("li");
    ulElement.appendChild(totalElement);
    totalElement.textContent= `total = ${this.total} cookies`;

  }
}

Seattle.calcCustomersEachHour();
Seattle.calCookiesEachHour();
Seattle.render();
console.log(Seattle); 

//Tokyo
let tokyo = {
  location: 'Tokyo',
  customersEachHour: [],
  cookiesEachHour: [],
  minCustomers: 3,
  maxCustomers: 24 ,
  avgCookies: 1.2,
  total:0,

calcCustomersEachHour: function () {
    for (let i = 0; i < salesHours.length; i++){
        this.customersEachHour.push(randomNumber(this.minCustomers, this.maxCustomers))
    }
      },
calCookiesEachHour: function () {
    for (let i = 0; i < salesHours.length; i++) {
    this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
    this.total+=this.cookiesEachHour[i];
    }
},

render:function(){
  //get the parent by its ID:
  let parent2= document.getElementById('parent2');
  console.log(parent2);

  let h2Element=document.createElement('h2');
  parent2.appendChild(h2Element);
  h2Element.textContent=this.location;

  let ulElement=document.createElement('ul');
  parent2.appendChild(ulElement);

  for(let i =0; i < salesHours.length;i++){
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`${salesHours[i]}  : ${this.cookiesEachHour[i]}`;
  
  }

  let totalElement=document.createElement("li");
  ulElement.appendChild(totalElement);
  totalElement.textContent= `total = ${this.total} cookies`;

}
}

tokyo.calcCustomersEachHour();
tokyo.calCookiesEachHour();
tokyo.render();
console.log(tokyo);

//Dubai

let Dubai= {
  location: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  customersEachHour: [],
  cookiesEachHour: [],
  total:0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < salesHours.length; i++){
        this.customersEachHour.push(randomNumber(this.minCustomers, this.maxCustomers));
    }
      },
calCookiesEachHour: function () {
    for (let i = 0; i < salesHours.length; i++) {
    this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
    this.total+=this.cookiesEachHour[i];
    }
},

render:function(){
  //get the parent by its ID:
  let parent3= document.getElementById('parent3');
  console.log(parent3);

  let h2Element=document.createElement('h2');
  parent3.appendChild(h2Element);
  h2Element.textContent=this.location;

  let ulElement=document.createElement('ul');
  parent3.appendChild(ulElement);

  for(let i =0; i < salesHours.length;i++){
    let liElement         = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent =`${salesHours[i]}  : ${this.cookiesEachHour[i]}`;
  
  }

  let totalElement = document.createElement("li");
  ulElement.appendChild(totalElement);
  totalElement.textContent= `total = ${this.total} cookies`;

}
}

Dubai.calcCustomersEachHour();
Dubai.calCookiesEachHour();
Dubai.render();
console.log(Dubai);


//Paris

let paris= {
  location : 'Paris',
  customersEachHour: [],
  cookiesEachHour: [],
  avgCookies:2.3 ,
  minCustomers:20 ,
  maxCustomers: 38,
  total:0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < salesHours.length; i++){
        this.customersEachHour.push(randomNumber(this.minCustomers, this.maxCustomers));
    }
      },
calCookiesEachHour: function () {
    for (let i = 0; i < salesHours.length; i++) {
    this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
    this.total+=this.cookiesEachHour[i];
    }
},

render:function(){
  //get the parent by its ID:
  let parent4= document.getElementById('parent4');
  console.log(parent4);

  let h2Element=document.createElement('h2');
  parent4.appendChild(h2Element);
  h2Element.textContent=this.location;

  let ulElement=document.createElement('ul');
  parent4.appendChild(ulElement);

  for(let i =0; i < salesHours.length;i++){
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`${salesHours[i]}  : ${this.cookiesEachHour[i]}`;
  
  }

  let totalElement=document.createElement("li");
  ulElement.appendChild(totalElement);
  totalElement.textContent= `total = ${this.total} cookies`;

}
}

paris.calcCustomersEachHour();
paris.calCookiesEachHour();
paris.render();
console.log(paris);


//Lima
let lima= {
  location: 'Lima',
  customersEachHour: [],
  cookiesEachHour: [],
  avgCookies: 4.6 ,
  minCustomers: 2,
  maxCustomers:16 ,
  total:0,

  calcCustomersEachHour: function () {
    for (let i = 0; i < salesHours.length; i++){
      this.customersEachHour.push(randomNumber(this.minCustomers, this.maxCustomers));
  }
    },
calCookiesEachHour: function () {
    for (let i = 0; i < salesHours.length; i++) {
    this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
    this.total+=this.cookiesEachHour[i];
    }
},

render:function(){
  //get the parent by its ID:
  let parent5= document.getElementById('parent5');
  console.log(parent5);

  let h2Element=document.createElement('h2');
  parent5.appendChild(h2Element);
  h2Element.textContent=this.location;

  let ulElement=document.createElement('ul');
  parent5.appendChild(ulElement);

  for(let i =0; i < salesHours.length;i++){
    let liElement=document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent=`${salesHours[i]}  : ${this.cookiesEachHour[i]}`;
  
  }

  let totalElement=document.createElement("li");
  ulElement.appendChild(totalElement);
  totalElement.textContent= `total = ${this.total} cookies`;

}
}

lima.calcCustomersEachHour();
lima.calCookiesEachHour();
lima.render();
console.log(lima); */


let salesHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Create random num
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min +1 ) + min);
}

function Location(
  locationName,
  minCustomers,
  maxCustomers,
  avgCookies,
  //customersEachHour[],
  //cookiesEachHour[],
) {
  this.locationName      = locationName;
  this.minCustomers      = minCustomers;
  this.maxCustomers      = maxCustomers;
  this.avgCookies        = avgCookies;
  this.cookiesEachHour   = [];
  this.customersEachHour = [];
}

//Cu Per Hour
Location.prototype.cookiesPerHour = function() {
  for (let i = 0; i < salesHours.length; i++) {
    this.cookiesEachHour.push(randomNumber(this.minCustomers, this.maxCustomers));
  }
  return this.cookiesEachHour;
};

  Location.prototype.cookiesPerDay = function() {
    let totalCookies = 0;
    for (let i = 0; i < salesHours.length; i++) {
      this.cookiesEachHour.push(Math.floor(this.customersEachHour[i]*this.avgCookies));
      totalCookies += this.cookiesEachHour[i];
    }
    //this.cookiesEachHour.push(totalCookies);
    return this.cookiesEachHour;
  };
  
  //  render 
  Location.prototype.render = function() {
    let table               = document.getElementById('table');
    let tableRow            = document.createElement('tr');
    let tableData           = document.createElement('td');
    tableData.textContent   = this.locationName;
    table.appendChild(tableRow);
    tableRow.appendChild(tableData);
    for (let i = 0; i < salesHours.length; i++) {
      let tableDataCookies = document.createElement('td');
      tableDataCookies.textContent = this.cookiesEachHour[i];
      tableRow.appendChild(tableDataCookies);
    }
  // table.appendChild(tableRow);
  };

   let seattle = new Location('Seattle', 23, 65, 6.3, []);
   let tokyo   = new Location('Tokyo', 3, 24, 1.2, []);
   let dubai   = new Location('Dubai', 11, 38, 3.7, []);
   let paris   = new Location('Paris', 20, 38, 2.3, []);
   let lima    = new Location('Lima', 2, 16, 4.6, []); 

let cityArray = [seattle, tokyo, dubai, paris, lima];

//  render sales hours information in table.
function renderSalesHours() {
  let tableHead     = document.getElementById('hours-table');
  let hTableRow     = document.createElement('tr');
  let hTable        = document.createElement('th');
  hTableRow.appendChild(hTable);
  for (let i = 0; i < salesHours.length; i++) {
    let hTableData  = document.createElement('th');
    hTableData.textContent = salesHours[i];
    hTableRow.appendChild(hTableData);
  }
  let tableTotal         = document.createElement('th');
  tableTotal.textContent = 'Daily Location Total';
  hTableRow.appendChild(tableTotal);
  tableHead.appendChild(hTableRow);
}

// daily sales totals on table row.
function renderGlobalSalesTotals() {
  let totalTable1     = document.getElementById('daily-total');
  let totalTableRow   = document.createElement('tr');
  let totalTableName  = document.createElement('td');
  totalTableName.textContent = 'Totals';
  totalTableRow.appendChild(totalTableName);
  let globalTotal = 0;
  for (let i = 0; i < salesHours.length; i++) {
    var hourlyTotal = 0;
    for (let j = 0; j < cityArray.length; j++) {
      hourlyTotal += cityArray[j].cookiesEachHour[i];
    }
    let totalTableData = document.createElement('td');
    totalTableData.textContent = hourlyTotal;
    totalTableRow.appendChild(totalTableData);
    globalTotal += hourlyTotal;
  }
  let grandTotalTableData = document.createElement('td');
  grandTotalTableData.textContent = globalTotal;
  totalTableRow.appendChild(grandTotalTableData);
  totalTable1.appendChild(totalTableRow);
}

// Create function to loop through each City object to perform methods.
function calcAndRenderSales() {
  for (let i = 0; i < cityArray.length; i++) {
    cityArray[i].cookiesPerHour();
    cityArray[i].cookiesPerDay();
    cityArray[i].render();
  }
}

// renderSalesHours();
// calcAndRenderSales();
// renderGlobalSalesTotals();



function newCityData(e) {
  // Prevent default "submit" event propagation.
  e.preventDefault();

  // Pull values from form input fields.
  let nameValue      = document.getElementById('input-name').value;
  let minCustValue   = document.getElementById('input-min-cust').value;
  let maxCustValue   = document.getElementById('input-max-cust').value;
  let avgCookieValue = document.getElementById('input-avg-cookies').value;

  let newCity = new Location(nameValue, minCustValue, maxCustValue, avgCookieValue);

  newCity.cookiesPerHour();
  newCity.cookiesPerDay();
  newCity.render();
  cityArray.push(newCity);

  // Render
  let totalTable = document.getElementById('daily-total');
  totalTable.removeChild(totalTable.childNodes[0]);
  renderGlobalSalesTotals();

 
}

let cityForm = document.getElementById('add-city');

// Create event listener on form element "submit" event.
cityForm.addEventListener('submit', newCityData);

renderSalesHours();
calcAndRenderSales();
renderGlobalSalesTotals();
