song1=""
song2=""
function preload(){
    song1=loadSound("finally_me.mp3")
    song2=loadSound("who_i_am.mp3")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,0,0,600,500)
}
function play(){
    song.play();
}
function stop(){
    song.stop();
}