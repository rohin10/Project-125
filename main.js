
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}
function draw(){
    background('blue');
    textSize(difference);
    fill("white");
    text("Rohin",100,100);
    document.getElementById("updateText").innerHTML = "Font size of the text will be - "+difference+"px";
    
}