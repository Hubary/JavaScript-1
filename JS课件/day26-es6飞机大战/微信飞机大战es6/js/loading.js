class Loading{
	constructor(callback){
		console.log('创建Loading对象 ');
		
		this.ele = document.createElement('div');
		this.ele.className = 'loading';
		this.interval = 1000;
		
		document.body.appendChild(this.ele);
		
		var i=1;
		var timer =  setInterval(function(){
			i++;
			if(i==4){
				i=1;
			}
			//background: url(../images/loading1.png) no-repeat
			
			var url = `url(images/loading${i}.png) no-repeat`;
			this.ele.style.background = url;
			
		}.bind(this),300);
		
		setTimeout(function(){
			clearInterval(timer);
			this.ele.remove();
			callback();
		}.bind(this),this.interval)
		
		
	}
}
