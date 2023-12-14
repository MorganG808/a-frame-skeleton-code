const whale = document.getElementById("Whale")
const jellyfish = document.getElementById("Jellyfish")

let xPos = 4;
let yPos = 0;

function moveWhale(){
    if (xPos < 5 && xPos > -5){
        xPos += -0.007
    }
    
    else {
        xPos = 4
    }

    whale.setAttribute('position', `${xPos} 0 -4`)
    requestAnimationFrame(moveWhale)
}

function moveJellyfish(){
    if (yPos < 3 && yPos > -1){
        yPos += 0.003
    }
    
    else if (yPos == 3 && yPos == -1){
        yPos += -0.003
    }

    else {
        yPos = 0
    }

    jellyfish.setAttribute('position', `0 ${yPos} -4`)
    requestAnimationFrame(moveJellyfish)
}

moveWhale()
moveJellyfish()
