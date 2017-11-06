class Enemy extends Spirit {
	constructor() {
		super();
		console.log('创建了敌机', this)

		document.body.appendChild(this.ele)
		//		this.run();

	}

	//飞机运动
	run() {
		//offsetWidth 可视区域
		console.log('飞机运动', this.ele.offsetWidth);

		var body_main = document.getElementById('body_main');
		var leftS = body_main.offsetLeft;
		var ringhtS = body_main.offsetLeft + body_main.offsetWidth - this.ele.offsetWidth;

		var enemyX = randomInt(leftS, ringhtS);
		var enemyY = -this.ele.offsetHeight;

		this.ele.style.left = enemyX + "px";
		this.ele.style.top = enemyY + 'px';

		setInterval(function() {

			this.ele.style.top = this.ele.offsetTop + 10 + 'px';

			if(this.ele.offsetTop >= document.body.clientHeight) {
				
				this.ele.remove();
				
				console.log(en.enemies);
				//超出屏幕 需要把数组中的对象删掉
				//en.enemies    this;
				
				var index = en.enemies.indexOf(this);
				en.enemies.splice(index,1);
				
				
				
				
				
			}

		}.bind(this), 50)

	}

}

class SmallEnemy extends Enemy {
	constructor() {
		super();
		this.ele.className = 'enemy-small';
		this.hp = 1;
		this.run();
		//		console.log(this.ele.offsetWidth)
	}

}
class MiddleEnemy extends Enemy {
	constructor() {
		super();
		this.ele.className = 'enemy-middle';
		this.hp = 3;
		this.run();
	}

}
class LargeEnemy extends Enemy {
	constructor() {
		super();
		this.ele.className = 'enemy-large';
		this.hp = 8;
		this.run();
	}

}