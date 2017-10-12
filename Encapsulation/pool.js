//获取最大值
function getMax(){
	var max = arguments[0];
	for(var i=0;i<arguments.length;i++){
		if(max<=arguments[i]){
			max=arguments[i]
		}
	}
	return max;
}

//获取最小值
function getMin(){
	var min =arguments[0];
	for(var i=0;i<arguments.length;i++){
		if(min>=arguments[i]){
			min=arguments[i]
		}
	}
	return min;
}

//随机数 n小于m
function random1Num(n,m){
	return parseInt(n+Math.random()*(m-n+1));
}

//打乱随机排序

function random1Number(arr){
	arr.sort(function(){
		return 0.5-Math.random();
	})

	return arr;
}

//返回最大值   传入的参数是数组
function getMax(arr){
	var max = arr[0];
	for(var i=0;i<arr.length;i++){
		if(max<arr[i]){
			max=arr[i]
		}
	}
	return max;
}

//返回最小值   传入的参数是数组
function getMin(arr){
	var min = arr[0];
	for(var i=0;i<arr.length;i++){
		if(min>arr[i]){
			min=arr[i]
		}
	}
	return min;
}

//返回最大值的下标  传入的是数组
function getMaxIndex(arr){
	var max = arr[0];
	var index;
	for(var i=0;i<arr.length;i++){
		if(max<arr[i]){
			max=arr[i]
			index=i;
		}
	}
	return index;
}

//返回最小下标  传入的是数组
function getMinIndex(arr){
	var min = arr[arr.length-1];
	var index=arr.length-1;
	for(var i=0;i<arr.length;i++){
		if(min>arr[i]){
			min=arr[i];
			index=i;
		}
	}
	return index;
}

//冒泡排序  传入的是数组
function bubbling(arr){
	var temp;
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-1-i;j++){
			if(arr[j]>arr[j+1]){
				temp = arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;

			}
		}
	}
	return arr;
}

//选择排序 传入的是数组
function selectSort(arr){
	var temp;
	for(var i=0;i<arr.length-1;i++){
		for(var j=i+1;j<arr.length;j++){
			if(arr[i]>arr[j]){
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
//数组判断是否有某个值
//传入的值是一个数组  n是一个字符
function has(arr,n){
	for(var i in arr){
		if(arr[i]===n){
			return true;
		}
	}
	return false;
}

//数组去重
function norepeat(arr){
	var newArr = [];
	for(var i in arr){
		if(!has(newArr,arr[i])){
			newArr.push(arr[i])
		}
	}
	return newArr;
}

//数组插入 按照原来顺序排序
function sort1Arr(arr,n){			
	for(var i=0;i<arr.length;i++){
		if(arr[arr.length-1]<n){
		arr.push(n);
		}else if(arr[i]>n){
		arr.splice(i,0,n);
		break;
		}
		}
	return arr	
}
//验证码  6位数的验证码
function authCode(){
	var str = '';
	while(str.length<6){
		var num = randomNum(48,122)
	
		if((num>57&&num<65)||(num>90&&num<97)){
			num = randomNum(48,122)
		}else{
			str+=''+String.fromCharCode(num)
		}
		
	}
	return str
}

//随机颜色
function randomColor(){
	var R = random1Num(0,255)
	var G = random1Num(0,255)
	var B = random1Num(0,255)
	return "#"+string2Num(R,G,B) 
}
//转换为16进制不足补0
function string2Num(r,g,b){
	r = r.toString(16).length<2?"0"+r.toString(16):r.toString(16);
	g = g.toString(16).length<2?"0"+g.toString(16):g.toString(16);
	b = b.toString(16).length<2?"0"+b.toString(16):b.toString(16);
	return r+g+b;
}

//将时间对象转换成字符串
function date2String(d,sign){
	if(sign==undefined){
		sign="/"
	}

	return d.getFullYear()+sign+addzero((d.getMonth()+1))+sign+addzero(d.getDate())+" "+addzero(d.getHours())+":"+addzero(d.getMinutes())+":"+addzero(d.getSeconds());
}
//当数字不足两位的时候补0  应用于时间对象
function addzero(num){
    var str = ""+num;
    return str.length<2?"0"+str:str;
}