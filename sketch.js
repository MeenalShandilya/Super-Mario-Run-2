var mario, marioImg, marioHappy, marioAni, screen, invisibleGround, startButton, startImage;
var spike1, spike2, spikeImg1, spikeImg2;
var OrangeSpikeGroup,GreenSpikeGroup;
var life1, life2, life3, lifeImg;
var lives;
lives=3;
var score;
score=0;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10, coin11, coin12, coin13, coin14, 
coin15, coinImg;

// mush means mushroom
var mush1, mush2, mush3, mush4, mush5, mush6, mush7, mush8, mush9, mush10, mush11, mush12, mush13, mush14,
mushImg, mushroomGroup;
// q means question mark
var q1, q2, q3, qImage;

var gameState;
gameState="START";

function preload() {
    marioImg=loadImage("images/mario.png");
    screen=loadImage("images/screen.png");
    spikeImg1=loadImage("images/spike1.png");
    spikeImg2=loadImage("images/spike2.png");
    lifeImg=loadImage("images/life.png");
    coinImg=loadImage("images/coin.png");
    marioAni=loadAnimation("images/mario1.png","images/mario2.png","images/mario3.png","images/mario4.png",
    "images/mario5.png","images/mario6.png");
    mushImg=loadImage("images/mushroom.png");
    qImage=loadImage("images/mark.png");
    startImage=loadImage("images/start.png");
}
function setup() {
    canvas = createCanvas(1500,670);

    mario=createSprite(50,680);
    mario.addAnimation("running",marioAni);
    mario.scale=0.15;

    invisibleGround=createSprite(3250,725,6500,20);
    invisibleGround.visible=false;    

    OrangeSpikeGroup=createGroup();
    GreenSpikeGroup=createGroup();
    mushroomGroup=createGroup();

    life1=createSprite(1000,random(500,680));
    life1.addImage(lifeImg);
    life1.scale=0.3;

    life2=createSprite(random(2500,3000),random(500,600));
    life2.addImage(lifeImg);
    life2.scale=0.3;

    life3=createSprite(random(4000,4500),random(480,510));
    life3.addImage(lifeImg);
    life3.scale=0.3;

    q1=createSprite(random(2000,2500),random(400,450));
    q1.addImage(qImage);

    q2=createSprite(random(3000,3500),random(450,470));
    q2.addImage(qImage);

    q3=createSprite(random(4000,4500),random(430,450));
    q3.addImage(qImage);

    coin1=createSprite(random(400,500),random(500,600));
    coin1.addImage(coinImg);
    coin1.scale=0.2;
    coin2=createSprite(random(650,800),random(400,500));
    coin2.addImage(coinImg);
    coin2.scale=0.2;
    coin3=createSprite(random(1000,1500),random(500,600));
    coin3.addImage(coinImg);
    coin3.scale=0.2;
    coin4=createSprite(random(1600,2100),random(480,550));
    coin4.addImage(coinImg);
    coin4.scale=0.2;
    coin5=createSprite(random(2500,3000),random(450,500));
    coin5.addImage(coinImg);
    coin5.scale=0.2;
    coin6=createSprite(random(3100,3400),random(500,550));
    coin6.addImage(coinImg);
    coin6.scale=0.2;
    coin7=createSprite(random(3500,4000),random(500,600));
    coin7.addImage(coinImg);
    coin7.scale=0.2;
    coin8=createSprite(random(4100,4500),random(400,450));
    coin8.addImage(coinImg);
    coin8.scale=0.2;
    coin9=createSprite(random(4600,5000),random(500,600));
    coin9.addImage(coinImg);
    coin9.scale=0.2;
    coin10=createSprite(random(5000,5300),random(530,630));
    coin10.addImage(coinImg);
    coin10.scale=0.2;
    coin11=createSprite(random(1000,5100),random(400,430));
    coin11.addImage(coinImg);
    coin11.scale=0.2;
    coin12=createSprite(random(2300,3300),random(530,630));
    coin12.addImage(coinImg);
    coin12.scale=0.2;
    coin13=createSprite(random(4500,5000),random(450,550));
    coin13.addImage(coinImg);
    coin13.scale=0.2;
    coin14=createSprite(random(3100,3400),random(500,600));
    coin14.addImage(coinImg);
    coin14.scale=0.2;
    coin15=createSprite(random(2000,5000),random(490,590));
    coin15.addImage(coinImg);
    coin15.scale=0.2;

    mush1=createSprite(random(1000,1500),685);
    mush1.addImage(mushImg);
    
    mush2=createSprite(random(1500,2000),685);
    mush2.addImage(mushImg);
    
    mush3=createSprite(random(2100,2500),685);
    mush3.addImage(mushImg);
    
    mush4=createSprite(random(2600,3000),685);
    mush4.addImage(mushImg);
    
    mush5=createSprite(random(3100,3500),685);
    mush5.addImage(mushImg);
    
    mush6=createSprite(random(3600,4000),685);
    mush6.addImage(mushImg);
    
    mush7=createSprite(random(4100,4500),685);
    mush7.addImage(mushImg);
    
    mush8=createSprite(random(4600,5000),685);
    mush8.addImage(mushImg);
    
    mush9=createSprite(random(1000,5200),685);
    mush9.addImage(mushImg);
    
    mush10=createSprite(random(3500,4500),685);
    mush10.addImage(mushImg);
    
    mush11=createSprite(random(5000,5200),685);
    mush11.addImage(mushImg);
    
    mush12=createSprite(5150,685);
    mush12.addImage(mushImg);
    
    mush13=createSprite(random(200,500),685);
    mush13.addImage(mushImg);
    
    mush14=createSprite(random(5100,5150),685);
    mush14.addImage(mushImg);
    
    mushroomGroup.add(mush1);
    mushroomGroup.add(mush2);
    mushroomGroup.add(mush3);
    mushroomGroup.add(mush4);
    mushroomGroup.add(mush5);
    mushroomGroup.add(mush6);
    mushroomGroup.add(mush7);
    mushroomGroup.add(mush8);
    mushroomGroup.add(mush9);
    mushroomGroup.add(mush10);
    mushroomGroup.add(mush11);
    mushroomGroup.add(mush12);
    mushroomGroup.add(mush13);
    mushroomGroup.add(mush14);
}
function draw() {
    background("skyblue");
    image(screen,-600,0,6500,800);
    camera.position.x=mario.x+100;
    camera.position.y=displayHeight-305;

  if (gameState==="START") {
      mario.visible=false;
      startButton=createSprite(-350,670);
      startButton.addImage(startImage);
      mushroomGroup.setVelocityXEach(0);
      if (mousePressedOver(startButton)) {
          gameState="PLAY";
      }
  }
  if (gameState==="PLAY") {
    mario.visible=true;
    startButton.visible=false;
    
    mush1.velocityX=-2;
    mush2.velocityX=-3;
    mush3.velocityX=-4;
    mush4.velocityX=-2;
    mush5.velocityX=-3;
    mush6.velocityX=-4;
    mush7.velocityX=-2;
    mush8.velocityX=-3;
    mush9.velocityX=-4;
    mush10.velocityX=-3.5;
    mush11.velocityX=-1;
    mush12.velocityX=-0.5;
    mush13.velocityX=-1;
    mush14.velocityX=-2;

    if (keyDown(RIGHT_ARROW)) {
        mario.x=mario.x+10;
    }
    mario.velocityY=mario.velocityY+5;
    mario.collide(invisibleGround);

    if (mario.y>520) {
       if (keyDown(32)) {
        mario.velocityY=-20;
       }
    }
    if (mario.isTouching(life1)) {
        life1.destroy();
        lives++;
    } else if (mario.isTouching(life2)) {
        life2.destroy();
        lives++;
    } else if (mario.isTouching(life3)) {
        life3.destroy();
        lives++;
    }
    if (mario.isTouching(coin1)) {coin1.destroy(); score+=10;}
    if (mario.isTouching(coin2)) {coin2.destroy(); score+=10;}
    if (mario.isTouching(coin3)) {coin3.destroy(); score+=10;}
    if (mario.isTouching(coin4)) {coin4.destroy(); score+=10;}
    if (mario.isTouching(coin5)) {coin5.destroy(); score+=10;}
    if (mario.isTouching(coin6)) {coin6.destroy(); score+=10;}
    if (mario.isTouching(coin7)) {coin7.destroy(); score+=10;}
    if (mario.isTouching(coin8)) {coin8.destroy(); score+=10;}
    if (mario.isTouching(coin9)) {coin9.destroy(); score+=10;}
    if (mario.isTouching(coin10)) {coin10.destroy(); score+=10;}
    if (mario.isTouching(coin11)) {coin11.destroy(); score+=10;}
    if (mario.isTouching(coin12)) {coin12.destroy(); score+=10;}
    if (mario.isTouching(coin13)) {coin13.destroy(); score+=10;}
    if (mario.isTouching(coin14)) {coin14.destroy(); score+=10;}
    if (mario.isTouching(coin15)) {coin15.destroy(); score+=10;}

    if (mario.isTouching(mush1)) {mush1.destroy(); lives--;}
    if (mario.isTouching(mush2)) {mush2.destroy(); lives--;}
    if (mario.isTouching(mush3)) {mush3.destroy(); lives--;}
    if (mario.isTouching(mush4)) {mush4.destroy(); lives--;}
    if (mario.isTouching(mush5)) {mush5.destroy(); lives--;}
    if (mario.isTouching(mush6)) {mush6.destroy(); lives--;}
    if (mario.isTouching(mush7)) {mush7.destroy(); lives--;}
    if (mario.isTouching(mush8)) {mush8.destroy(); lives--;}
    if (mario.isTouching(mush9)) {mush9.destroy(); lives--;}
    if (mario.isTouching(mush10)) {mush10.destroy(); lives--;}
    if (mario.isTouching(mush11)) {mush11.destroy(); lives--;}
    if (mario.isTouching(mush12)) {mush12.destroy(); lives--;}
    if (mario.isTouching(mush13)) {mush13.destroy(); lives--;}
    if (mario.isTouching(mush14)) {mush14.destroy(); lives--;}

    if (mario.isTouching(q1)) {q1.destroy(); mush7.destroy(); mush8.destroy(); mush9.destroy(); mush10.destroy();
    mush11.destroy(); mush12.destroy(); mush13.destroy(); mush14.destroy();}
    if (mario.isTouching(q2)) {q2.destroy(); textSize(30); text("Your score increased by 50",mario.x,200); score+=50;}
    if (mario.isTouching(q3)) {q3.destroy(); mario.x=5000;}

    spikes();
    orangeSpike();
    if (GreenSpikeGroup.isTouching(mario)) {
        GreenSpikeGroup.destroyEach();
        lives--;
    }
    if (OrangeSpikeGroup.isTouching(mario)) {
        OrangeSpikeGroup.destroyEach();
        lives--;
    }
    if (lives===0) {
        gameState="LOST";
    }

    textFont("Times New Roman");
    fill("red");
    textSize(30);
    text("Lives: ",mario.x-50,200);
    fill(0);
    text(lives, mario.x+30,200);
    fill("red");
    text("Score: ",mario.x+60,200);
    fill(0);
    text(score,mario.x+140,200);

    if (mario.x>=5160) {
        gameState="WIN";
    }
  }
  if (gameState==="WIN") {
        OrangeSpikeGroup.setVelocityYEach(0);
        GreenSpikeGroup.setVelocityYEach(0);
        OrangeSpikeGroup.setLifetimeEach(-1);
        GreenSpikeGroup.setLifetimeEach(-1);
        mushroomGroup.setVelocityXEach(0);
        mario.visible=false;
        marioHappy=createSprite(5520,640);
        marioHappy.addImage(marioImg);
        marioHappy.scale=0.5;
        textFont("Comic Sans MS");
        textSize(50);
        fill(0);
        text("VICTORY!!!",5390,200);
  }
  if (gameState==="LOST") {
      textFont("Comic Sans MS");
      textSize(50);
      fill(0);
      text("YOU LOSE.",mario.x-100,240);
      mario.visible=false;
      mario.velocityY=0;
      mario.velocityX=0;
      OrangeSpikeGroup.setVelocityYEach(0);
      GreenSpikeGroup.setVelocityYEach(0);
      OrangeSpikeGroup.setLifetimeEach(-1);
      GreenSpikeGroup.setLifetimeEach(-1);
      mushroomGroup.setVelocityXEach(0);
  }
    drawSprites();
    
}
function spikes() {
    if (frameCount%40===0) {
            spike1=createSprite(random(80,5000),100);
            spike1.addImage(spikeImg1);
            spike1.velocityY=3;
            spike1.scale=0.2;
            spike1.lifetime=200;
            OrangeSpikeGroup.add(spike1);
        }      
}
function orangeSpike() {
    if (frameCount%40===0) {
        spike2=createSprite(random(80,5000),100);
        spike2.addImage(spikeImg2);
        spike2.velocityY=3;
        spike2.scale=0.2;
        spike2.lifetime=200;
        GreenSpikeGroup.add(spike2);
    }
}