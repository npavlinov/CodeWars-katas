function square_sums_row(n){
    let A = []
    
    for (let i = 1; i < n; i++) {
        for (let j = n - 1; j > 1; j--) {
            temp = i + j
            if(Math.sqrt(temp) % 1 == 0) { 
                A[i] = i
                A[i+1] = j
            }
        }
    }

    console.log(A)
    //return false
}

console.log(square_sums_row(15), false)
// console.log(square_sums_row(5), false)
// console.log(square_sums_row(14), false)


/* 

//14 + 15 = 29 - not square

int A = []
n = 15

for i = 1, i < n; i++ 
    temp = i + (i + 1)
    if Math.sqrt(temp) % 1 == 0
        A[i] = i
        A[i+1] = i + 1

*/