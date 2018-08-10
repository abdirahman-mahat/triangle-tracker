
function getTriangleType(){
var a = parseFloat(prompt("side a"));
var b = parseFloat(prompt("side b"));
var c = parseFloat(prompt("side c"));
  if (a === b && b === c) {
    alert("This triangle is equilateral");
  }
  else if(a === b || a === c || b === c) {
    alert("This triangle is isosceles");
  }
  else if((a+b)<= c || (a+c)<=b || (b+c)<=a) {
alert("This is No triangle formed");
}
  else {
  alert("This triangle is scalene");
}
}
getTriangleType();
