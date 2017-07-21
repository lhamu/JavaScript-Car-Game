function Car(){
	this.height=153;
	this.width=85;
	this.speed=10;
	this.x=265;
	this.y=420;
	this.element;
	this.directionX=1;
	this.directionY=1;
	var that=this;
	
	 this.create = function () {
		this.element = document.createElement('div');
		this.element.style.width = this.width+'px';
		this.element.style.height = this.height+'px';
		this.element.style.speed = this.speed;
		this.element.style.position = 'absolute';
		this.element.style.background = 'url("images/mainCar1.png")';
		this.element.style.background.repeat='none';
		this.setPosition();
		this.addEvent();
	}
	
	this.addEvent=function(){
		window.addEventListener("keydown", function(e){
			if(e.keyCode == '37'){
				//left arrow
				console.log('Left Key');
				that.move();
			}
			else if(e.keyCode =='39'){
				//right arrow
				that.moveRight();
			}
			// else if(e.keyCode == '38'){
			// 	//up arrow
			// 	that.moveUp();
			// }
		});
	}
	this.setPosition=function(){
		this.element.style.top=this.y+'px';
		this.element.style.left=this.x+'px';
	}

	this.move=function(){
		console.log("Enter move");
		if(this.x>=265){
			this.x=this.x-150;
			this.element.style.left=this.x+'px';
		}

	}
	this.moveRight=function(){
		if(this.x<=265){
			this.x=this.x+150;
			this.element.style.left=this.x+'px';
		}
	}
	// this.moveUp=function(){
	// 	console.log('Up');
	// 	if(this.y>=50){
	// 		this.y=this.y-this.speed;
	// 		this.element.style.top=this.y+'px';
	// 	}
	// }

	
}
