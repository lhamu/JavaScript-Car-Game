function Obstacle(x,y){
	this.height=111;
	this.width=50;
	this.x=x;
	this.y=y;
	this.top=y;
	this.left=x;
	var positionArray=[115, 265, 415];
	this.element;
	
	this.create = function () {
		this.element = document.createElement('div');
		this.element.style.width = this.width+'px';
		this.element.style.height = this.height+'px';
		this.element.style.position = 'absolute';
		this.element.style.background = 'url("images/obstacle.png")';
		this.element.style.background.repeat='no-repeat';
		this.element.style.left=this.left+'px';
		this.element.style.top=this.top+'px';
		//this.setPosition();
	}


	// this.setPosition=function(){
	// 	this.x=this.randomPosition();
	// 	this.y=0;
	// 	this.element.style.top=this.y+'px';
	// 	this.element.style.left=this.x+'px';
	// };

	// this.randomPosition=function(){
		
	// 	var index=Math.floor((Math.random()*3)+1);

	// 	if(index==1){
	// 		return positionArray[0];
	// 	}
	// 	else if(index==2){
	// 		return positionArray[1];
	// 	}
	// 	else{
	// 		return positionArray[2];
	// 	}
	// };

	this.update=function(){
		this.top+=3;
		this.element.style.top=this.top+'px';
	};
}
