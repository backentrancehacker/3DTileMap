let world;
function setup() {
  	createCanvas(windowWidth, windowHeight, WEBGL)
	world = new World()
	angle = PI/4
}
function draw() {
	background('#fff');
  	directionalLight(255, 255, 255, 0,1, -1);
	rotateX(PI/6);
  	rotateZ(angle);
	world.move()
	// world.rotate()
	world.render()
}
function windowResized() {
  	resizeCanvas(windowWidth, windowHeight);
}