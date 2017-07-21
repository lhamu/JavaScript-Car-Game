function Score(){
	this.width=618;
	this.height=30;

	this.create=function(){
		this.element=document.createElement('div');
		this.element.style.width=this.width+'px';
		this.element.style.height=this.height+'px';
		this.element.style.marginLeft='auto';
		this.element.style.marginRight='auto';
		this.element.style.position='absolute';
		this.element.style.align='center';
    this.element.style.fontSize=40+'px';
    this.element.style.fontFamily="Arial";
    this.element.style.fontWeight='bold';
    this.element.style.display='block';
    this.element.style.color='white';
    
	}
	this.append=function(childElement){
		this.element.appendChild(childElement);
	};
}