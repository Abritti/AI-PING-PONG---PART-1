function preload() {
	world_start = loadSound("world_start.wav");
}



function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
}

function draw() {
	game()
}