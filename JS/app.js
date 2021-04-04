
// Create array to include hours of operation.
let salesHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//Create random num
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//Seattle
let Seattle = {

  location: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  customers: [],
  cookies: [],
  total:0,

  getcustomers: function () {
      for (let i = 0; i < salesHours.length; i++)

          this.customers[i]=randomNumber(this.minCustomers, this.maxCustomers);

  },
  getcookies: function () {
      for (let i = 0; i < Seattle.customers.length; i++) {
      let  num = this.customers[i] * this.avgCookies;
           num = Math.floor(num)
      this.cookies.push(`${num} cookies`);
      this.total+=num
      }
  },
}

Seattle.getcustomers();
console.log(Seattle.customers);

Seattle.getcookies();
console.log(Seattle.cookies);

console.log(Seattle.total)

let parent = document.getElementById('parent');
console.log(parent);

// creating element
let h2Element=document.createElement('h2');
parent.appendChild(h2Element);
h2Element.textContent=Seattle.location;
let ulElement=document.createElement('ul');
parent.appendChild(ulElement);

for(let i =0;i<Seattle.salesHours.length;i++){
  let liElement=document.createElement('li');
  ulElement.appendChild(liElement);
  liElement.textContent=`${Seattle.salesHours[i]}  : ${Seattle.cookies[i]}`;

}

let totalElement=document.createElement("li");
ulElement.appendChild(totalElement);
totalElement.textContent= `total = ${Seattle.total} cookies`;

//Tokyo
let tokyo = {
  location: 'Tokyo',
  customers: [],
  cookies: [],
  minCustomers: 3,
  maxCustomers: 24 ,
  avgCookies: 1.2,
  total:0,

  getcustomers: function () {
      for (let i = 0; i < salesHours.length; i++)

      this.customers[i]=randomNumber(this.minCustomers, this.maxCustomers);
  },

  getcookies: function () {
      for (let i = 0; i < tokyo.customers.length; i++) {
      let  num = this.customers[i] * this.avgcookies;
             num = Math.floor(num)
      this.cookies.push(`${num} cookies`);
      this.total+=num
      }
  },
}
tokyo.getcustomers();
console.log(tokyo.customers);

tokyo.getcookies();
console.log(tokyo.cookies);

tokyo.getcookies();
console.log(tokyo.cookies);

console.log(tokyo.total)

let parent2=document.getElementById('parent2');
console.log(parent2);
// creating element
let Th2Element=document.createElement('h2');
parent2.appendChild(Th2Element);
Th2Element.textContent=tokyo.location;
let TulElement=document.createElement('ul');
parent2.appendChild(TulElement);

for(let i =0;i<tokyo.salesHours.length;i++){
  let liElement=document.createElement('li');
  TulElement.appendChild(liElement);
  liElement.textContent=`${tokyo.salesHours[i]}  : ${tokyo.cookies[i]}`;

}

let TtotalElement=document.createElement("li");
TulElement.appendChild(TtotalElement);
TtotalElement.textContent= `total = ${tokyo.total} cookies`;

//Dubai

let Dubai= {
  location: 'Seattle',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  customers: [],
  cookies: [],
  total:0,

  getcustomers: function () {
      for (let i = 0; i < salesHours.length; i++)

          this.customers[i]=randomNumber(this.minCustomers, this.maxCustomers);

  },
  getcookies: function () {
      for (let i = 0; i < Dubai.customers.length; i++) {
      let  num = this.customers[i] * this.avgCookies;
           num = Math.floor(num)
      this.cookies.push(`${num} cookies`);
      this.total+=num
      }
  },
}

Seattle.getcustomers();
console.log(Dubai.customers);

Seattle.getcookies();
console.log(Dubai.cookies);

console.log(Dubai.total)

let parent3 = document.getElementById('parent3');
console.log(parent);

// creating element
let Duh2Element=document.createElement('h2');
parent3.appendChild(Duh2Element);
Duh2Element.textContent=Dubai.location;
let DuulElement=document.createElement('ul');
parent.appendChild(DuulElement);

for(let i =0;i<Dubai.salesHours.length;i++){
  let DuliElement=document.createElement('li');
  DuulElement.appendChild(DuliElement);
  DuliElement.textContent=`${Dubai.salesHours[i]}  : ${Dubai.cookies[i]}`;

}

let DutotalElement=document.createElement("li");
DuulElement.appendChild(DutotalElement);
DutotalElement.textContent= `total = ${Dubai.total} cookies`;


//Paris

let paris= {
  location : 'Paris',
  customers: [],
  cookies: [],
  avgCookies:2.3 ,
  minCustomers:20 ,
  maxCustomers: 38,
  total:0,

  getcustomers: function () {
    for (let i = 0; i < salesHours.length; i++)

        this.customers[i]=randomNumber(this.minCustomers, this.maxCustomers);

},
  getcookies: function () {
      for (let i = 0; i < paris.customers.length; i++) {
        let  num = this.customers[i] * this.avgCookies;
             num = Math.floor(num)
      this.cookies.push(`${num} cookies`);
      this.total+=num
      }
  }, 

}

paris.getcustomers();
console.log(paris.customers);

paris.getcookies();
console.log(paris.cookies);

paris.getcookies();
console.log(paris.cookies);

console.log(paris.total)


let parent4=document.getElementById('parent4');
console.log(parent4);
// creating element
let Ph2Element=document.createElement('h2');
parent4.appendChild(Ph2Element);
Ph2Element.textContent=paris.location;
let PulElement=document.createElement('ul');
parent4.appendChild(PulElement);

for(let i =0;i<paris.openningHours.length;i++){
  let liElement=document.createElement('li');
  PulElement.appendChild(liElement);
  liElement.textContent=`${paris.salesHours[i]}  : ${paris.cookies[i]}`;

}

let PtotalElement=document.createElement("li");
PulElement.appendChild(PtotalElement);
PtotalElement.textContent= `total = ${paris.total} cookies`;


//Lima
let lima= {
  location: 'Lima',
  customers: [],
  cookies: [],
  avgCookies: 4.6 ,
  minCustomers: 2,
  maxCustomers:16 ,
  total:0,

  getcustomers: function () {
    for (let i = 0; i < salesHours.length; i++)

        this.customers[i]=randomNumber(this.minCustomers, this.maxCustomers);

},
  getcookies: function () {
      for (let i = 0; i < lima.customers.length; i++) {
        let  num =this.customers[i] * this.avgCookies;
        num=Math.floor(num)
      this.cookies.push(`${num} cookies`);
      this.total+=num
      }
  },
}

lima.getcustomers();
console.log(lima.customers);

lima.getcookies();
console.log(lima.cookies);

lima.getcookies();
console.log(lima.cookies);

console.log(lima.total)


let parent5=document.getElementById('parent5');
console.log(parent5);
// creating element
let Lh2Element=document.createElement('h2');
parent5.appendChild(Lh2Element);
Lh2Element.textContent=lima.location;
let LulElement=document.createElement('ul');
parent5.appendChild(LulElement);

for(let i =0;i<lima.openningHours.length;i++){
  let liElement=document.createElement('li');
  LulElement.appendChild(liElement);
  liElement.textContent=`${lima.salesHours[i]}  : ${lima.cookies[i]}`;

}

let LtotalElement=document.createElement("li");
LulElement.appendChild(LtotalElement);
LtotalElement.textContent= `total = ${lima.total} cookies`;


