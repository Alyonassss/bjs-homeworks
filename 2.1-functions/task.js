"use strict";

function getSolutions(a,b,c) { 
    let D;
    D = (b * b) - (4 * (a * c));

    if (D > 0) {
        let x1 = (((-b + (Math.sqrt(D)))) / (2 * a)),
            x2 = (((-b - (Math.sqrt(D)))) / (2 * a));
        
        return { 
			D: [D], 
			roots: [x1, x2] 
		}

    } else if (D === 0) {
        let x1 = (((-b) / (2 * a)));

        return { 
			D: [D], 
			roots: [x1] 
		}
   
    } else if (D < 0) {
        return {
			D: [D], 
			roots: []
		}
    }
}

function showSolutionsMessage(a,b,c) {
	let result = getSolutions (a,b,c);
	console.log (`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
	console.log (`Значение дискриминанта: ${result.D}`);
	
	if (result.roots.length === 0) {
		return 'Уравнение не имеет вещественных корней';
	} else if (result.roots.length === 1) {
		return `Уравнение имеет один корень X1 = ${result.roots}`;
	} else if (result.roots.length === 2) {
		return `Уравнение имеет два корня. X1 = ${result.roots[0]}, X2 = ${result.roots[1]}`;
	}

	
}



 
function getAverageScore(data) { 
	     let dataNumber = []; 
	     let property; 
	     let result = new Object(); 
	     
		 for (property in data) { 
	         result[property] = getAverageMark(data[property]); 
	         dataNumber.push(result[property]); 
	 
	     } 
	     result.average = getAverageMark(dataNumber); 
	     return result; 
} 
	 
	 
function getAverageMark(marks) { 
	     if (marks.length === 0) { 
	         return 0; 
	     } 
	     let sum = marks.reduce((initial, next) => initial + next); 
	     let result = sum / marks.length; 
	     return result 
}  