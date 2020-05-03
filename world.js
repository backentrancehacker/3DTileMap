let mapSize = 30,
	tileSize = 10,
	materials = {
		mountain: 7,
		grass: 6,
		sand: 5,
		water: 4
	},
	angle = 0

class World{
	constructor(){
		this.x = 0
		this.y = 0
		this.speed = 0.1
	}
	render(){
		let noiseValue = 0
		let offset = -(mapSize * tileSize)/2
		translate(offset, offset, 0)
		noStroke()

		let xNoise = this.x
		for(let x = 0; x < mapSize; x++){
			let yNoise = this.y
			for(let y = 0; y < mapSize; y++){
				let height = Math.floor(10 * noise(xNoise, yNoise))
				if(height <= materials.water)
					fill('dodgerblue')
				else if(height == materials.sand)
					fill('yellow')
				else if(height >= materials.mountain)
					fill('grey')
				else
					fill('lightgreen')
				translate(tileSize, 0, height/2);
      			box(tileSize, tileSize, height);
       			translate(0, 0, -height/2);
				yNoise += 0.15;
			}
			xNoise +=  0.15;
			translate(-tileSize*mapSize, tileSize, 0); 
		}
	}
	move(){
		if(keyIsDown(UP_ARROW)){
			this.x -= this.speed;
		}
		if(keyIsDown(DOWN_ARROW)){
			this.x += this.speed;
		}
		if(keyIsDown(LEFT_ARROW)){
			this.y -= this.speed;
		}
		if(keyIsDown(RIGHT_ARROW)){
			this.y += this.speed;
		}
	}
	rotate(){
		if(mouseX > width / 2)
			angle += 0.01
		if(mouseX < width /2)
			angle -= 0.01
	}
}