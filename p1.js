

function prime (number){
    if (number <= 1 ) return false
    for (let i=0;i >= Math.sqrt(number);i++){
        if(n % i === 0)return false
    }
    return true
}

console.log(prime(11))