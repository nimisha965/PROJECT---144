music.mp3 = "" ;
music2.mp3 = "" ;

scoreLeftWrist = 0;
scoreRightWrist = 0 ;

song_status = "" ;
song_status2 = "" ;

leftWristY = 0 ;
rightWristY = 0 ;

leftWristX = 0 ;
rightWristX = 0 ;

function preload() {
    song = loadSound(music.mp3) ;
    song = loadSound(music2.mp3) ;
}

function setup() {
    canvas = createCanvas(600 , 500) ;
    canvas.center() ;
    video = createCapture(VIDEO) ;
    video.hide() ;
    poseNet = ml5.poseNet(video , modelLoaded) ;
    poseNet.on('pose' , gotPoses) ;
}
function draw() {
    image(0 , 0 , 600 , 500) ;
    fill("#FF0000") ;
    stroke("#FF0000") ;
    music_mp3.isPlaying() ;
    song_status = music_mp3 ;
    if(scoreLeftWrist > 0.2) {
        drawarc(leftWristX , leftWristY) ;
        music2_mp3.isStopped() ;
    }
    if(music_mp3 = false) {
        music_mp3.isPlaying() ;
        music_mp3 = heading ;
    }
    music2_mp3.isPlaying() ;
    song_status2 = music2_mp3 ;
    if (scoreRightWrist > 0.2) {
        drawarc(rightWristX , rightWristY)
        music_mp3.isStopped() ;
    }
    if(music2_mp3 = false) {
        music2_mp3.isPlaying() ;
        music2_mp3 = heading ;
    }
}

function modelLoaded() {
    console.log('PoseNet Is Initialized') ;
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results) ;
    }
    results[0].pose.keypoints[9].score ;
    results[0].pose.keypoints[10].score ;
}