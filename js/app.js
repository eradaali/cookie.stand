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

let myArray = [];
function fun(storeName, minCustPerHour, maxCustPerHour, avgCustcookies, randomCustPerHour, salesPerHour, totalPerHour) {
  this.storeName = storeName;
  this.  minCustPerHour =minCustPerHour;
  this.maxCustPerHour =maxCustPerHour;
  this.avgCustcookies = avgCustcookies;
  this.randomCustPerHour = randomCustPerHour;
  this.salesPerHour = salesPerHour;
  this. totalPerHour = totalPerHour;
  this.totalDailyLocation=0;
}


fun.prototype.randomCustNumbe = function () {
  for (let hour = 0; hour < hours.length; hour++) {
    let y=Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)
    + this.maxCustPerHour)
    this.randomCustPerHour.push(y);
    this.totalDailyLocation+=y;

  }
}
fun.prototype.salesCookies = function () {
  for (let i = 0; i < Seattle.hours.length; i++) {
    this.salesPerHour.push(Math.ceil(this.randomCustPerHour[i] * this.avgCustcookies));
    this.totalPerHour += this.salesPerHour[i];
  }
}
//let countainer =document.getElementById('sales');


fun.prototype.render = function () {

  let divEl = document.getAnimations('sales');
  let tableEl = document.createElement('table');
  divEl.appendChild(tableEl);
  let trl2 = document.createElement('tr');
  tableEl.appendChild(trl2);
  let tdLoc = document.createElement('td');
  trl2.appendChild(tdLoc);
  tdLoc.textContent = this.location;
  for (let i = 0; i < this.salesPerHour.length; i++) {
    let tdEl = document.createElement('td');
    trl2.appendChild(tdEl);
    tdEl.textContent = (this.salesPerHour[i]);
    totalLi.push(this.salesPerHour[i]);
  }




}









let Seattle = new fun('First', 23, 65, 3.6, [], [], 0);
Seattle.randomCustNumbe();
myArray.push(Seattle);
let Tokyo = new fun('secound', 23, 24, 1.5, [], [], 0);
Tokyo.randomCustNumbe();

myArray.push(Tokyo);

let Dubai = new fun('Dubai', 11, 38, 3.7, [], [], 0);
Dubai.randomCustNumbe();

myArray.push(Dubai);
let Paris = new fun('Paris', 20, 38, 2.3, [], [], 0);
Paris.randomCustNumbe();

myArray.push(Paris);
let Lima = new fun('Lima', 2, 16, 4.6, [], [], 0);
Lima.randomCustNumbe();

myArray.push(Lima);
document.write("<table>");
document.write("<th></th>");

for (let j = 0; j < hours.length; j++) {
  document.write("<th >" + hours[j] + "</th>");
}
document.write("<th >" + "daily total location" +"</th>");

document.write("<tr id='tr1'></tr>")
document.write("<tr id='tr2'></tr>")
document.write("<tr id='tr3'></tr>")
document.write("<tr id='tr4'></tr>")
document.write("<tr id='tr5'></tr>")
document.write("<tr id='tr6'></tr>")


function createCol(rowNum,tdText,tdId){
  
  var row = document.getElementById(`tr${rowNum}`);
  var cell = document.createElement("td");
  cell.style.border = "thin solid red";
  var cellText = document.createTextNode(tdText);
  cell.appendChild(cellText);
  if(tdId)
  cell.id=`rowNum${rowNum}colNum${tdId}`
  row.appendChild(cell);
}

createCol(1,'Seattle')
createCol(2,'Tokyo')
createCol(3,'Dubai')
createCol(4,'Paris')
createCol(5,'Lima')
createCol(6,'Totals')
for(let i=1;i<=6;i++){
  for(let j=1;j<15;j++){
    

    myArray[i-1].randomCustNumbe();

  createCol(i,myArray[i-1].randomCustPerHour[Math.floor(Math.random() * 13) + 1    ],j)
  }
 createCol(i,myArray[i-1].totalDailyLocation) 

}






document.write("</table>");