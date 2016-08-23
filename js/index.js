var c;
var $;
var w = 600;
var h = 600;
constant = 90;
var rad = 300;
var timeout = 0;
var num = 100;

	c = document.getElementById("canv");
	$ = c.getContext("2d");
	drawLines();

function drawLines() {
	$.fillRect(0,0,w,h);
	$.translate(w/2,h/2);
	drawnum();
}

function drawnum(){
	for (var i = 0; i < num; i++) {
		for (var n = 0; n <= 90; n+=constant) {
			setTimeout("draw("+n+");",100 * timeout);
			timeout = timeout+4;
		}
	}
	//setTimeout("drawnum("+");",8);
};
function draw(n){
	$.beginPath();
	$.moveTo(0,0);
	var radians = Math.PI/180*n;
	$.lineTo(400,0);

	if (Math.abs(n) == 90) {
		$.strokeStyle=rndColor();
		$.lineWidth=2;
	} else if (n == 0) {
		$.strokeStyle="rgb(200,200,200)";
		$.lineWidth=.5;
	} else {
		$.strokeStyle="rgb(110,110,110)";
		$.lineWidth=.5;
	}
	$.stroke();
	$.rotate((Math.PI/180)*15);
}

function rndColor() {
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}