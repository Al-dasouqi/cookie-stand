
// Create array to include hours of operation.
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
console.log(lima);


