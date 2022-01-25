var enginesOn = false;
var throttle = 0;
var throttlePercent;
var RCS = {thrust:1.5, weight:0.5, atmosDrag:10};
var Ion = {thrust:0.5, weight:0.5, atmosDrag:10};
var Valliant = {thrust:50, weight:5, atmosDrag:50};
var Frontier = {thrust:150, weight:25, atmosDrag:65};
var Hawk = {thrust:300, weight:25, atmosDrag:80};
var Titan = {thrust:450, weight:50, atmosDrag:100};
var Raptor = {thrust:500, weight:55, atmosDrag:110};
var initialSpeed;
var speed;
var fuelTank = {fuel:1000, weight: 100};
var seperator = {strength:10, weight:5}
var Capsule = {weight:10, capacity:2}
var a;
var liquidEngines = {
RCS:RCS,
Ion:Ion,
Valliant:Valliant,
Frontier:Frontier,
Hawk:Hawk,
Titan:Titan,
Raptor:Raptor 
};
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;
    this.gravity = 0;
    this.gravitySpeed = 0;
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.gravitySpeed += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY + this.gravitySpeed;
        this.hitBottom();
    }
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height;
        if (this.y > rockbottom) {
            this.y = rockbottom;
            this.gravitySpeed = 0;
        }
    }
}
var defaultRocket = {
  stg1engine:Raptor,
  fueltank1:fuelTank,
  stg1seperator:seperator,
  fueltank2:fuelTank,
  stg2engine:Frontier,
  stg2seperator:seperator,
  fueltank3:fuelTank,
  stg3engine:Valliant,
  stg3seperator:seperator,
  capsule:Capsule};
var maxStage = 3;
var currentStage;
var stage1thrust = defaultRocket.stg1engine;
var stage1On;
var stage2On;
var stage3On;
game.addEventListener('keydown', function (no){
 if (event.key === '32') {
    activateStage();  
 };
});
function activateStage() {
  if (currentStage < maxStage);
    currentStage = currentStage + 1;
    if (currentStage == 1) {
      stage1On = true;
    };
  
    if (currentStage == 2) {
      stage2On = true;
      stage1On = false;
    };
  
    if (currentStage == 3) {
      stage3On = true;
      stage2On = false;
    };
};
 
function updater() {
  throttlePercent = percentage(throttle, 0);
  function percentage(throttle, totalValue) {
   return (100 * throttle) / 100;
};
  totalWeight = Raptor.weight + fuelTank.weight + seperator.weight + Frontier.weight + fuelTank.weight + seperator.weight + Valliant.weight + fuelTank.weight + seperator.weight + capsule.weight
  
};
if (enginesOn == true && throttle >0) {
  if (stage1On == true) {
    a = stg1engine.thrust / totalWeight;
  };
  
};

function no() {
 return;
};
   setSpeed();
setInterval(updateSpeed, 1)
function setSpeed() {
  initialSpeed = a/1000;
  speed = initialSpeed
}
function updateSpeed() {
  speed = speed + initialSpeed
}
function updateGameArea() {
  myGameArea.clear();
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
  if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
  if (throttle > 0) {myGamePiece.speedY = speed; }
  myGamePiece.newPos();
  myGamePiece.update();
}
