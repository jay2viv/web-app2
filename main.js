function preload()
{

}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    image(video,0,0,500,500);
    posenet = ml5.poseNet(video,modelready);
    posenet.on('pose',gotposes);
    
}

function draw()
{

}

function modelReady()
{
    console.log("yay it worked")
}
function gotposes(result)
{
    if(result.length > 0)
    {
        console.log(result);
        console.log("")
    }
}