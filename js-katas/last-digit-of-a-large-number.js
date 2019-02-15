function lastDigit(str1, str2) {
    
    let lastA = parseInt(str1.slice(-1))
    let ldigit = 0 

    let isDiv = Modulo(str2, "4")
    if(isDiv == 0) {
        ldigit = Math.pow(lastA, 4)%10
    } else {
        ldigit = Math.pow(lastA, isDiv)%10
    }

    return ldigit
}

function Modulo(a, b) 
{ 
	let mod = 0; 

    for (let i = 0; i < a.length; i++) { 
        mod = (mod * 10 + a.charCodeAt(i)) % b; 
    }
    return mod
} 

/* 
var lastDigit = function(str1, str2){  
  return +!+str2 || Math.pow(str1.slice(-1) % 10, str2.slice(-2) % 4 || 4) % 10
}
*/