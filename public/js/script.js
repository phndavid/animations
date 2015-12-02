var animation;
var centerX = 125;
var centerY = 125;
var radius = 20;
var boardX = 1000;
var boardY = 500;
var ballDx = 2;
var ballDy = 2;
var theta = 0;
var thetaInc = 0.08;
function drawBall() {
	// body...
	 var content = document.getElementById("bouncyBall");
	 var me = content.getContext("2d");
	 me.clearRect(0,0,content.width,content.height);
	 centerX = centerX +ballDx;
	 centerY = centerY +ballDy;
	 me.beginPath();
	 me.arc(centerX,centerY,radius,0,Math.PI*2,false);
	 me.stroke();
	 me.fillStyle ="orange";
	 me.fill();
	 theta = theta +thetaInc;
	 me.moveTo(centerX - radius*Math.cos(theta), centerY-radius*Math.sin(theta));
	 me.lineTo(centerX + radius*Math.cos(theta),centerY +radius*Math.sin(theta));
	 me.lineWidth = "2";
	 me.lineCap = "round";
	 me.strokeStyle = "black";
	 me.stroke();
	 if(centerY > boardY -radius || centerY - radius < 0)
	 {
	 	ballDy = -1*ballDy;
	 	if((ballDx<0 && ballDy > 0) && thetaInc < 0)
	 		{thetaInc = -1*thetaInc}
	 	else if((ballDx<0 && ballDy>0) && thetaInc > 0)
	 		{thetaInc = -1*thetaInc}
	 	else if((ballDx>0 && ballDy>0) && thetaInc > 0)
	 		{thetaInc = -1*thetaInc}
	 	else if((ballDx>0 && ballDy<0) && thetaInc < 0)
	 			{thetaInc = -1*thetaInc}
	 	
	 }
	 if(centerX > boardX-radius || centerX < radius){
	 	ballDx = -1*ballDx;
	 }
}
function  animate () {
	// body...
	clearInterval(animation);
	setInterval(drawBall,25);
}

function loading(){
	console.log("Loading Onclick")
	for (var i = 1; i <= 100; i++) {
		$("#loading").css("width",i+"%");
		document.getElementById("loading").innerHTML = i+"%";
	};
}
