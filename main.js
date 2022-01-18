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
var liquidEngines = {
RCS:RCS,
Ion:Ion,
Valliant:Valliant,
Frontier:Frontier,
Hawk:Hawk,
Titan:Titan,
Raptor:Raptor 
};
 window.addEventListener('keydown', function (e) {
      myGameArea.key = e.keyCode;
    })
    window.addEventListener('keyup', function (e) {
      myGameArea.key = false;
    })
var totalWeight;
var fuelTank = {height:10, width:5, weight:10};
var a;
var Capsule = {weight:4}; 
var seperator = {power:15, weight:1, atmosDrag:2};

var game = document.getElementById("game");
var ctx = game.getContext("2d");
ctx.fillStyle = "FF0000";
ctx.fillRect(0, 0, 10, 10);
document.body.appendChild(game);
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

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = -1; }
  if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = 1; }
  if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
  if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }
  myGamePiece.newPos();
  myGamePiece.update();
}
