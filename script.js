const whale = document.getElementById("Whale")

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

moveWhale()
