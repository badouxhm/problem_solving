

function triangle(number){
    if (number <= 0){
        console.log("size must be > 0")
        return;
    }
    let ligne = "* "
    for (let i=1;i<number+1;i++){
        console.log(ligne.repeat(i))
    }
}

triangle(6)