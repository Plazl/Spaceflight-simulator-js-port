var enginesOn = false;
var throttle = 0;
var throttlePercent;
var RCS = {thrust:1.5, weight:0.5, atmosDrag:10}
var Ion = {thrust:0.5, weight:0.5, atmosDrag:10}
var Valliant = {thrust:50, weight:5, atmosDrag:50}
var Frontier = {thrust:150, weight:25, atmosDrag:65}
var Hawk = {thrust:300, weight:25, atmosDrag:80}
var Titan = {thrust:450, weight:50, atmosDrag:100}
var Raptor = {thrust:500, weight:55, atmosDrag:110}
var liquidEngines = {
RCS:RCS,
Ion:Ion,
Valliant:Valliant,
Frontier:Frontier,
Hawk:Hawk,
Titan:Titan,
Raptor:Raptor 
}
var totalWeight;
var fuelTank = {height:10, width:5, weight:10}
var a
var Capsule; 
var seperator = {power:15, weight:1, atmosDrag:2}

var game = document.createElement("canvas");
var ctx = game.getContext("2d");
var background = document.getElementById("background_img")
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
  capsule:Capsule}
var maxStage = 3;
var currentStage;
var stage1thrust = defaultRocket.stg1engine;
var stage1On;
var stage2On;
var stage3On;
game.addEventListener('keydown', function (no){
 if (event.key === '32') {
    activateStage();  
 }
});
function activateStage() {
  if (currentStage < maxStage)
    currentStage = currentStage + 1
    if (currentStage == 1) {
      stage1On = true
    }
  
    if (currentStage == 2) {
      stage2On = true
      stage1On = false
    }
  
    if (currentStage == 3) {
      stage3On = true
      stage2On = false
    }
}
 
function updater() {
  throttlePercent = percentage(throttle, 0)
  function percentage(throttle, totalValue) {
   return (100 * throttle) / 100;
} 
  totalWeight = defaultRocket.stg1engine.weight + defaultRocket.stg1fuelTank.weight + defaultRocket.stg1seperator.weight + defaultRocket.stg2engine.weight + defaultRocket.stg2fuelTank.weight + defaultRocket.stg2seperator.weight + defaultRocket.stg3engine.weight + defaultRocket.stg3fuelTank.weight + defaultRocket.stg3seperator.weight + defaultRocket.capsule.weight
}
if (enginesOn == true && throttle >0) {
  if (stage1On == true) {
    a = stg1engine.thrust / totalWeight 
  }
}

function no() {
 return
}
