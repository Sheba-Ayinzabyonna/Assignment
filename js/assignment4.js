//function temperature(a) {
//  let result;
//if (a < 33) {
//result = 'Normal temperature';
//} else if (a = 35) {

 // result='Watch your temperature';
//}else(){
  
//}
//result = 'Go for a covid test';
  
 //}
 //return result;
//}

//console.log(temperature(35));

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

     //temperature({temperature:33});
     //temperature({temperature:35});
     temperature({temperature:37});