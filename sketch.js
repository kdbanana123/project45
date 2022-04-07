var track, trackImg, manImg, man, hurdleImg, hurdle


function preload (){
  trackImg = loadImage("assets/track.jpeg");
  manImg = loadAnimation("assets/man1.png", "assets/man2.png");
  hurdleImg = loadImage("assets/hurdle.png");
}

function setup (){
  createCanvas(1200,700);
  track = createSprite(275,300,250,500);
  track.addImage(trackImg, 500, 250);
  track.scale= 1.3;
  man = createSprite (20,400,500,450);
  man.addAnimation("man_running", manImg);
  man.scale = 0.2;
  hurdle = createSprite(300,400,500,250);
  hurdle.addImage(hurdleImg);
  hurdle.scale =0.2;
}

function draw(){
  track.velocity.X = -3;
//if (track.x < 0){
 // track.x = track.width/2
//}




drawSprites();
}