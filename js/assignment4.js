function temperature(a) {
  let result;
if (a < 33) {
result = 'Normal temperature';
} else {
result = 'Go for a covid test';
  
 }
 return result;
}

console.log(temperature(35));

//if (a = 35) {
 //result ="Watch your temperature"

//} else if (a = 33) {
  //result ="Positive"
//} else if (a > 37){
 // result="Go for Covid test"
  
//}else{
//return result;
//}
//console.log(temperature(37))