let picWidth = 640;

for(let i = 0; i < 3; i++){
    document.getElementById("pic" + i).style.left = (picWidth * i) + "px";
}

document.getElementById("prev_btn").onclick = function(){
    if(moveNum > 0){
        moveNum--;
    }
    else if(moveNum == 0){
        moveNum = 2;
    }
    for(let i = 0; i < 3; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i - moveNum)) + "px";
    }
}

let moveNum = 0;

document.getElementById("next_btn").onclick = function(){

    if(moveNum < 2){
        moveNum++;
    }
    else if(moveNum == 2){
        moveNum = 0;
    }
    for(let i = 0; i < 3; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i - moveNum)) + "px";
    }
}