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

var game = document.createElement("canvas");
var ctx = canvas.getConttext("2d");
var background = document.getElementById("background_img")
