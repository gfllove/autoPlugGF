/**
 * 
 */
var j = 1;  //总执行次数
var y = 0;  //成功匹配次数
var n = 0;  //未匹配次数

//setInterval
//setTimeout
setInterval(function(){
	
	var cur_url = document.URL;
	
	if(cur_url=="https://key.gf.com.cn/#/main/order"){
		
		/**
		 * 1、先获取html下面所有的元素及内容
		 * 2、用正则表达式匹配 <ul class="chat-lists">元素，匹配成功说明有需要抢购的订单；
		 *    ul为隐藏元素，隐藏时为<ul class="chat-lists ng-hide"> 
		 * 3、获取button对象，将所有button添加上唯一标识id
		 * 4、通过正则表达式，匹配出来抢的button按钮并提交。提交即抢单
		 */
		var html_obj = document.getElementsByTagName("html");
		var html_str = html_obj[0].innerHTML ; //获取html下面所有元素及内容
		//alert(html_str);
		
		var order_button_id_reg="order_button_id\\d+";   //正则表达式，匹配添加的button id
		var order_yes_reg="<ul(.*?)class=\"chat-lists\"[\\s\\S]*?>";   //正则表达式，判断是否有订单需要抢(原理：<ul class="chat-lists"为隐藏标签，当为显示时说明有可以抢的订单)
		var order_button_q_reg="<button class=\"btn-chat btn-small btn-danger\"[\\s\\S]*?>抢</button>";   //正则表达式，匹配button抢的按钮
	    
	    var reg_obj = new RegExp(order_yes_reg);
	    
	    if(reg_obj.test(html_str)){
	    	
	    	//获取button对象，将所有button添加唯一标识id
	    	var order_button = document.getElementsByTagName("button");
		    for(var i = 0 ; i < order_button.length;i++){
		    	order_button[i].id="order_button_id"+i;
		    	//alert(button_order[i].id);
		    }
		    
		    //获取已经添加button id 的html所有元素源代码
		    var html_new_obj = document.getElementsByTagName("html");
		    var html_new_str = html_new_obj[0].innerHTML ;
		    //正则表达式，匹配button抢的按钮
		    var order_button_q=html_new_str.match(order_button_q_reg).toString();
		    
		    //alert("第"+j+"次order_button_q，开头：------"+order_button_q+"------:结尾，第"+j+"次");
		    //在匹配button抢的按钮里面匹配出button唯一id值
		    var order_button_id=order_button_q.match(order_button_id_reg);
		    //alert("第"+j+"次order_button_id，开头："+order_button_id+"------结尾，第"+j+"次");
		    //根据获取到的button id得到button对象，并提交
		    var order_button_obj = document.getElementById(order_button_id);
		    order_button_obj.click();
			
		    ++y;
		    console.log("第"+j+"次执行，第"+y+"次匹配成功，开头：------------:结尾，第"+j+"次执行，第"+y+"次匹配成功");
	    	
	    }else{
	    	++n;
		    //console.log("第"+j+"次执行，第"+n+"次未匹配，开头：------------:结尾，第"+j+"次执行，第"+n+"次未匹配");
	    }
	    j++
	    
	}
    	
},3);