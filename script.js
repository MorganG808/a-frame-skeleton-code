const whale = document.getElementById("Whale")

let xPos = 4;
let yPos = 0;

function moveWhale(){
    if (xPos > 4){
        xPos += -0.03
    }
    
    else {
        xPos = 4
    }

    whale.setAttribute('position', `${xPos} 3 -5`)
    requestAnimationFrame(moveWhale)
}

moveWhale()

function switchScene(){
    const scene1 = document.getElementById("scene1")
    const scene2 = document.getElementById("scene2")

    if (scene1.style.display !== 'none'){
       scene1.style.display = 'none';
       scene2.style.display = 'block';
    }
    else{
        scene1.style.display = 'block';
        scene2.style.display = 'none'; 
    }
}