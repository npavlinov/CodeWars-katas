function smallest(n) {
  
  let arr = []
  let m = n.toString()
  let temp = n
  let num = [...m]
  // console.log(num);
  

  for(let i = 0; i <= num.length; i++) {
    for(let j = 0; j <= num.length; j++) {
      let t = num[i]
      num[i] = num[j]
      num[j] = t
      if(parseInt(num.join('')) < temp) {
        console.log(parseInt(num.join('')))
        arr[0] = parseInt(num.join(''))
      }
    }
  }
  
  return arr
}


let s = "12345"

console.log(smallest(285365));
