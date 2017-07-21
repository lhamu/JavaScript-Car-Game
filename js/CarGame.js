function CarGame(elementId) {
  var element = document.getElementById(elementId);
  this.init = function () {
	  
	var container=new Container();
	container.create();

	var background=new Background();
	background.create();

	var car=new Car();
	car.create();

	var score=new Score();
	score.create();

	// var obstacles=[];
	// var obstacle=new Obstacle();
	// obstacle.create();
	// obstacles.push(obstacle);

	
	
	
	/*var obstacles=[];
	var obstacle=new Obstacle();
	obstacle.create();
	obstacles.push(obstacle);*/
	
	container.append(background.element);
	container.append(car.element);
	container.append(score.element);

    element.appendChild(container.element);
	
	
	//container.append(car.element);
	//container.append(obstacle.element);
	
	var animator=new Animator(car, background, container,score);
	animator.animate();
  } 
	  
}
var carGame = new CarGame('car-game');

carGame.init();
