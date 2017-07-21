function Background(){
	this.width = 618;
	this.height = 1950;
	this.position = 'absolute';
	this.image = document.createElement('img');
	this.image.src = 'images/road-long.png';

	this.create = function (){
		this.element = document.createElement('div');
		this.element.style.width = this.width + 'px';
		this.element.style.height = this.height + 'px';
		this.element.style.position = this.position;
		this.append(this.image);
	}	

	this.append = function (childElement){

		this.element.appendChild(childElement);
	};
}