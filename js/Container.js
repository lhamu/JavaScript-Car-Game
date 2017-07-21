function Container() {
	this.width=618;
	this.height=640;
	this.color='gray';
	this.element;

  this.create = function () {
		this.element = document.createElement('div');
		this.element.style.width = this.width+'px';
		this.element.style.height = this.height+'px';
		this.element.style.position='relative';
		this.element.style.background = this.color;
		this.element.style.overflow = 'hidden';
		this.element.style.marginLeft='auto';
		this.element.style.marginRight='auto';
	}

	this.append=function(element){
		this.element.appendChild(element);
	};

	this.remove=function(element){
		this.element.removeChild(element);
	};

}
