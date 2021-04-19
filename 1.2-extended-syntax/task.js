function getResult(a,b,c){
    "use strict";
 
    let d;
    d = (b * b) - (4 * (a * c));

    if (d > 0) {
        let x1 = (((-b + (Math.sqrt(d)))) / (2 * a)),
            x2 = (((-b - (Math.sqrt(d)))) / (2 * a));
        
        return [x1, x2];

    } else if (d === 0) {
        let x3 = (((-b + (Math.sqrt(d)))) / (2 * a));
        return [x3];
    
    } else if (d < 0) {
        return [];
    }

}

function getAverageMark(marks){

    let sumResult = 0;
    let averageMark = '';
    const numberMarks = 5;
    
    if (marks.length === 0) {
        return marks.length;
    }

    for (let i = 0; i < marks.length; i++) {
      sumResult = sumResult + marks[i];
      if (marks.length > numberMarks) {
          marks.splice(numberMarks);
      } 
    }

    averageMark = sumResult / marks.length;
    console.log(averageMark);
    
    return averageMark;
}


function askDrink(name,dateOfBirthday){

   let currentDate  = new Date();
   let personAge = currentDate.getFullYear() - dateOfBirthday.getFullYear();
   
   let result = "";

   if (personAge >= 18) {
     result = `Не желаете ли олд-фэшн, ${name}?`;
     console.log(result);
     return result;
   } else {
     result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
     console.log(result);
     return result;
   }
    
}