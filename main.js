function preload(){

}

function setup(){
    var canvas=createCanvas(600,400);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    filter_color="";
}

function draw(){
    image(video,0,0,600,400);
    tint(filter_color);
}

function take_snapshot(){
    save('Joshua.png');
}

function filter_apply(){
    filter_color=document.getElementById("Color_name").value;
}