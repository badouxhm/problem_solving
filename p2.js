
function square(number){
    if (number <= 0){
        console.log("size must be > 0")
        return;
    }

    const ligne = "* ".repeat(number)
    for(let i=0; i<number;i++){
        console.log(ligne)
    }
}

square(0)