'use strict';
let hours = ["6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
]
function randomNumber(min,max){
  return Math.floor(Math.random() * (max - min + 1)
  + max)
}
let myArray = [];
function fun(storeName, minCustPerHour, maxCustPerHour, avgCustcookies, randomCustPerHour, salesPerHour, totalPerHour) {
  this.storeName = storeName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCustcookies = avgCustcookies;
  this.randomCustPerHour = [];
  this.salesPerHour = [];
  this.totalPerHour = 0;
  this.totalDailyLocation = 0;
  myArray.push(this);
}


fun.prototype.randomCustNumbe = function () {
  for (let hour = 0; hour < hours.length; hour++) {
    this.randomCustPerHour.push( randomNumber(this.minCustPerHour,this.maxCustPerHour));}
  }
 
fun.prototype.salesCookies = function () {
  for (let i = 0; i < Seattle.hours.length; i++) {
    this.salesPerHour.push(Math.floor(this.randomCustPerHour[i]* this.avgCustcookies));
    this.totalPerHour += this.salesPerHour[i];
  }
}

let Seattle = new fun('Seattle', 23, 65, 3.6);
let Tokyo = new fun('Tokyo', 23, 24, 1.5);
let Dubai = new fun('Dubai', 11, 38, 3.7);
let Paris = new fun('Paris', 20, 38, 2.3);
let Lima = new fun('Lima', 2, 16, 4.6);

let parent=document.getElementById('parent');
let table=document.getElementById('table');
parent.appendChild(table);

function myhader(){
  let hrow =document.createElement('tr');
  table.appendChild(hrow);
  let thead =document.createElement('th');
  hrow.appendChild(thead);
  thead.textContent='name';
  for(let i=0;i<hours.length;i++){
    let thElement =document.createElement('th');
    hrow.appendChild(thElement);
    thElement.textContent=hours[i];
  }
  let thLast =document.createElement('th');
  hrow.appendChild(thLast);
  thLast.textContent='Daily Location Total';
}
myhader();

fun.prototype.render = function () {
let datarow=document.createElement('tr');
table.appendChild(datarrow);

let dataName=document.createElement('td');
datarow.appendChild(dataName);
dataName.textContent=this.storeName;
for(let i=0;i<hours.length;i++){
  let tdElement=document.createElement('td');
  datarow.appendChild(tdElement);
  tdElement.textContent=this.salesPerHour[i];
}
let totalData =document.createElement('td');
datarow.appendChild(totalData);
totalData=textContent.totalPerHour;

}

function myfooter(){
  let footerTable =document.createElement('tr');
  table.appendChild(footerTable);
  let fotterth =document.createElement('th');
  footerTable.appendChild(fotterth);
  fotterth.textContent='total';
  for (let i=0;i<hours.length;i++){
    let totaleachhour=0;
    for(let j=0;j<myArray.length;j++){
      totaleachhour+=myArray[j].salesPerHour[i];
    }
    let footertotal=document.createElement('th');
    footerTable.appendChild(footertotal);
    footertotal.textContent=totaleachhour;
  }
}

for(let i=0;i<myArray.length;i++){
  myArray[i].randomCustNumbe();
  myArray[i].salesCookies();
  myArray.render();
}
myfooter();

let shopForm =document.getElementById('forms');
shopForm.addEventListener('submit',mysubmiter);
function mysubmiter (event){
  event.preventDefault();
  table.deleteRow(table.rows.length-1);
  let storeName=event.target.shopinput.value;
  let minCustPerHour=event.target.mininput.value;
  let maxCustPerHour=event.target.maxinput.value;
  let avgCustcookies=event.target.avginput.value;

  let newfun = new fun (storeName,minCustPerHour,maxCustPerHour,avgCustcookies,[],[],0);
  newfun.randomCustNumbe();
  newfun.salesCookies();
  newfun.render();
  myfooter();
  document.getElementById('forms').reset();
  console.log(newfun);
}
myfooter();