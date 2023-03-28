function getImage(roll)
{
    let link;
    switch (roll) {
        case 1:
            link = "dice/dice_1.png"
            break;
        case 2:
            link = "dice/dice_2.png"
            break;
        case 3:
            link = "dice/dice_3.png"
            break;
        case 4:
            link = "dice/dice_4.png"
            break;
        case 5:
            link = "dice/dice_5.png"
            break;
        case 6:
            link = "dice/dice_6.png"
            break;
    
        default:
            link = "dice/forbiden_img.png"
            break;
    }
    return link
}
function changeImage(d1,d2)
{
    let p1HTML = "<img src=\""+getImage(d1)+"\" alt=\""+getImage(d1)+"\">"
    let p2HTML = "<img src=\""+getImage(d2)+"\" alt=\""+getImage(d2)+"\">"
    document.getElementById("p1-dice").innerHTML = p1HTML
    document.getElementById("p2-dice").innerHTML = p2HTML
}
function changeResults(d1,d2){
    if(d1 == d2){
        document.getElementById("result").innerHTML = "Tie"
    }
    else if(d1 > d2){
        document.getElementById("result").innerHTML = "Player 1 Wins"
    }
    else{
        document.getElementById("result").innerHTML = "Player 2 Wins"
    }
}
function reroll(){
    const sound = document.getElementById("roll-sound")
    sound.play()
    let d1 = Math.floor(Math.random()*6) + 1 
    let d2 = Math.floor(Math.random()*6) + 1
    setTimeout(() => {
        changeImage(d1,d2)
        changeResults(d1,d2)
        document.getElementById("player-1").innerHTML = "player 1"
        document.getElementById("player-2").innerHTML = "player 2"
        document.getElementById("button-text").innerHTML = "Re-Roll"
    }, 500);
}