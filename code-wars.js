// Adding two numbers and converting them to Binary

function addBinary(a,b) {
var binary = a + b;
return (binary >>> 0).toString(2)
}
