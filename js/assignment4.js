function temperature(person){
     switch(person.temperature){
      case 33:
      console.log("Normal");
        break;
      case 35:
      console.log("Watch your temperature");
         break;

         default:
           console.log("Kindly go for a COVID 19 test");
          break;

     }     
     }

     temperature({temperature:33});
     temperature({temperature:35});
     temperature({temperature:37});


const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].reverse();
//let third =number[2];

console.log(number);
number.splice(8, 1,'Armstrong');
console.log(number);