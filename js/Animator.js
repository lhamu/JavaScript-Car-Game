function Animator(car,background,container,score){
	var that = this;
	this.intervalId;
	this.car = car;
	this.background=background;
	this.container = container;
	this.score=score;

	this.bottom=0;
	this.top=0;
  	this.scoreValue=0;
	this.obstacles=[];

	this.positionArray=[115, 265, 415];
	
	this.animate = function () {
		this.intervalId = setInterval(function (){
				that.bottom-=2;
				//console.log(that.background);
				that.container.element.firstElementChild.style.bottom = that.bottom+ 'px';
				//that.background.style.bottom=that.bottom +'px';
				if(-that.bottom>=that.background.image.naturalWidth/3){
					that.bottom=0;
				}
				that.checkWallCollision(car);
				that.generateObstacle();
				that.updateObstacle();
				that.checkCollision();
				that.scoreDisplay();
		  }
		, 1000 / 60);
	}

	// this.randomPosition=function(){
		
	// 	var index=Math.floor((Math.random()*3)+1);

	// 	if(index==1){
	// 		return 0;
	// 	}
	// 	else if(index==2){
	// 		return 1;
	// 	}
	// 	else{
	// 		return 2;
	// 	}
	// };

	this.generateObstacle=function(){
		if(that.bottom%900==0){
			var index=Math.floor((Math.random()*3));
			obstacle=new Obstacle(that.positionArray[index],0);
			obstacle.create();
		
			this.container.append(obstacle.element);
			this.obstacles.push(obstacle);
		}
	};

	

	this.updateObstacle=function(){
		that.obstacles.forEach(function(obstacle, index){
			obstacle.update();

			if(obstacle.top>=550){
				that.container.remove(obstacle.element);
				that.obstacles.splice(index,1);
			}
		});
	};

	this.checkWallCollision = function (car) {
		if ((car.x + car.width) >=(container.width-50) || (car.x <= 0)) {
			car.directionX *= -1;
		}	
	};

	this.checkCollision=function(){
		var len=that.obstacles.length;
		var carX=this.car.x;
		var carY=this.car.y;
		var carW=this.car.width;
		var carH=this.car.height;
		for(i=0;i<len;i++){
			// console.log(that.obstacles[i].left+that.obstacles[i].width);
			// console.log(this.car.x);
			if(((that.obstacles[i].left+that.obstacles[i].width)>=carX) && (that.obstacles[i].left<=(carX+carW)) && (that.obstacles[i].top<=(carY+carH)) && ((that.obstacles[i].top+that.obstacles[i].height)>=carY)){
				//console.log("Collision condition");
				console.log(this.intervalId)
				clearInterval(this.intervalId);
				window.alert("Game over!");
        document.location.reload();
			}
			
		}
	};
  
  this.scoreDisplay=function(){
    var len=that.obstacles.length;
    var carY=this.car.y;
    for(i=0;i<len;i++){
    	console.log('Enter');
      if(that.obstacles[i].top==carY){
        that.scoreValue+=2;
      }
      that.score.element.innerHTML="Your score:"+that.scoreValue;
    }
  };
  
	
}
