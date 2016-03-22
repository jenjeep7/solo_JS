var stringList = ["March", "April", "May"];
var months = '';
for(var x=0; x<stringList.length; x++){

 months = months + " " + stringList[x];

}
console.log("Months listed are" + months);

var x = stringList.length - 1;

console.log(stringList[x]);


var numList = [13, 78, 34];

var numString = '';
for(var n = 0; n<numList.length; n++){
numString = numString  + numList[n] + " ";

}
console.log(numString);
var totalNums = 0;
for(var i = 0; i<numList.length; i++) {

totalNums +=numList[i];
}
console.log(totalNums);


var boolList = [false, true, false];

var booNums = 0;
if(boolList[1]==true) {
  booNums = numList[0] * numList[2];
}
else {
  booNums = numList[1] * numList[1];
}
console.log(booNums);

for(var y=0; y<boolList.length;y++) {
  if(boolList[y] == true) {
    console.log('index', y);
  }
}
