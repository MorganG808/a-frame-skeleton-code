const sharks = document.getElementById("sharks")

let xPos = -5;
let yPos = 0;

function moveSharks(){
    if (xPos < 5){
        xPos += 0.07
        yPos += 0.07
    }
    
    else {
        xPos = -5
        yPos = 0
    }

    xPos += 0.07
    sharks.setAttribute('position', `${xPos} ${yPos} -5`)
    requestAnimationFrame(moveSharks)
}

moveSharks()

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