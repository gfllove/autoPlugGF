

console.log("background执行---------------------------开始！！！！！！！！！！！！！");

//拦截请求
chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	
	//从所有的request中删除User-Agent的header
	for (var i = 0; i < details.requestHeaders.length; ++i) {
		if (details.requestHeaders[i].name == 'User-Agent') {
			//details.requestHeaders[i].value = "linden_test";
			//console.log("background66666666666666666："+details.requestHeaders);
			break;
		}
	}
	
	//得到类型为为image
	if("image"==details.type){
		
		var url_reg="https://behavior.gf.com.cn/sa.gif";
		var reg_obj = new RegExp(url_reg);
		if(reg_obj.test(details.url)){
			//console.log("details.url ="+details.url);
			if (details.url.indexOf("?") != -1) {
				var str = details.url.split("?")[1]; 
				var strs = str.split("&"); 
				for(var i = 0; i < strs.length; i ++) {
					if("data"==strs[i].split("=")[0]){
						//console.log(strs[i].split("=")[0]+"="+unescape(strs[i].split("=")[1]));
						console.log(base64decode(decodeURIComponent(strs[i].split("=")[1])));
					}
					
				
				
				}
			}

			/*console.log("before type:"+details.type);
			console.log("before url:"+details.url);
			console.log("before tabId:"+details.tabId);
			console.log("before method:"+details.method);
			console.log("before parentFrameId:"+details.parentFrameId);
			console.log("before frameId:"+details.frameId);
			console.log("before requestId:"+details.requestId);
			console.log("before timeStamp:"+details.timeStamp);
			console.log("before --------------------- end");*/
			
			
		}
		
	
		
	
	}
	
	
	
	return {
		requestHeaders : details.requestHeaders
	};
}, {
	urls : [ "<all_urls>" ]
}, ["blocking","requestHeaders"]);


// 请求完毕，返回的相关数据，都在details中
chrome.webRequest.onCompleted.addListener(function(details){
	
	// 拿到数据后，可以通过chrome.extension.sendMessage({msg:"getNetworkResource", data:details});将数据通知popup.html
	
	
},{urls: ["<all_urls>"]},["responseHeaders"]);


//修改header头信息
function modifyHeader(_headers, _url){
	var blockingResponse = {};
	var isxForward = false;
	var isReferer = false;
	var isuserAgent = false;
	var iscookie = false;
	for (var j = 0; j < _headers.length; j++){
		//console.log(_headers[j].name + ':' + _headers[j].value);
		if(_headers[j].name == "X-Forward-For" && (localStorage['xForward'].length > 6 || localStorage['randomip'] == 'true')){
			if(localStorage['xForward'].length > 6){
				_headers[j].value = localStorage['xForward'];
			}
			else if (localStorage['randomip'] == 'true') {
				_headers[j].value = Math.floor(Math.random()*225)+'.'+Math.floor(Math.random()*255)+'.'+Math.floor(Math.random()*255)+'.'+Math.floor(Math.random()*255);
			}
			isxForward = true;
		}
		
		if(_headers[j].name == "Referer" && (localStorage['referer'].length > 6 || localStorage['targeturl'] == 'true')){
			//console.log('referer:'+_headers[j].value);
			if(localStorage['referer'].length > 6){
				_headers[j].value = localStorage['referer'];
			}
			else if(localStorage['targeturl'] == 'true'){
				_headers[j].value = _url;
			}
			isReferer = true;
		}
		
		if(_headers[j].name == "User-Agent" && localStorage['userAgent'].length > 10){
			_headers[j].value = localStorage['userAgent'];
			isuserAgent = true;
		}
		
		if(_headers[j].name == "Cookie" && localStorage['cookie'].length > 0){
			_headers[j].value = localStorage['cookie'];
			iscookie = true;
		}
	}
	if(isxForward == false){
		if(localStorage['xForward'].length > 6){
			_headers.push({name:'X-Forwarded-For',value:localStorage['xForward']});
			//_headers['X-Forward-For'] = localStorage['xForward'];
		}
		else if (localStorage['randomip'] == 'true') {
			_headers.push({name:'X-Forwarded-For',value:Math.floor(Math.random()*225)+'.'+Math.floor(Math.random()*255)+'.'+Math.floor(Math.random()*255)+'.'+Math.floor(Math.random()*255)});
		}
		isxForward = true;
	}
	if(isReferer == false){
		if(localStorage['referer'].length > 6){
			_headers.push({name:'Referer',value:localStorage['referer']});
		}
		else if(localStorage['targeturl'] == 'true'){
			_headers.push({name:'Referer',value:_url});
		}
		isReferer = true;
	}
	if(isuserAgent == false){
		if(localStorage['userAgent'].length > 10){
			_headers['User-Agent'] = localStorage['userAgent'];
		}
		isuserAgent = true;
	}
	if(iscookie == false){
		if(localStorage['cookie'].length > 0){
			_headers['Cookie'] = localStorage['cookie'];
		}
		iscookie = true;
	}
	blockingResponse.requestHeaders = _headers;
	
	console.log(blockingResponse);
	return blockingResponse;
}



/**
 * base64加密
 * @param {Object} e
 */
base64Encode = function(e) {
	var t, r, n, i, o, s, a, c, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", d = 0, u = 0, p = "", f = [];
	if (!e)
		return e;
	e = utf8Encode(e);
	do
		t = e.charCodeAt(d++), r = e.charCodeAt(d++), n = e
				.charCodeAt(d++), c = t << 16 | r << 8 | n, i = c >> 18
				& 63, o = c >> 12 & 63, s = c >> 6 & 63, a = 63 & c, f[u++] = l
				.charAt(i)
				+ l.charAt(o) + l.charAt(s) + l.charAt(a);
	while (d < e.length);
	switch (p = f.join(""), e.length % 3) {
		case 1 :
			p = p.slice(0, -2) + "==";
			break;
		case 2 :
			p = p.slice(0, -1) + "="
	}
	return p
}


/**
 * base64解码
 * @param {Object} str
 */
function base64decode(str){
    var c1, c2, c3, c4;
    var i, len, out;
    
    var base64DecodeChars = new Array(
  		  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  		  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  		  -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63,
  		  52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1,
  		  -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  		  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1,
  		  -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  		  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
    
    len = str.length;
    i = 0;
    out = "";
    while (i < len) {
        /* c1 */
        do {
            c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        }
        while (i < len && c1 == -1);
        if (c1 == -1) 
            break;
        /* c2 */
        do {
            c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
        }
        while (i < len && c2 == -1);
        if (c2 == -1) 
            break;
        out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
        /* c3 */
        do {
            c3 = str.charCodeAt(i++) & 0xff;
            if (c3 == 61) 
                return out;
            c3 = base64DecodeChars[c3];
        }
        while (i < len && c3 == -1);
        if (c3 == -1) 
            break;
        out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
        /* c4 */
        do {
            c4 = str.charCodeAt(i++) & 0xff;
            if (c4 == 61) 
                return out;
            c4 = base64DecodeChars[c4];
        }
        while (i < len && c4 == -1);
        if (c4 == -1) 
            break;
        out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
    }
    return out;
}


utf8Encode = function(e) {
	e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n");
	var t, r, n, i = "", o = 0;
	for (t = r = 0, o = e.length, n = 0; o > n; n++) {
		var s = e.charCodeAt(n), a = null;
		128 > s ? r++ : a = s > 127 && 2048 > s ? String.fromCharCode(
				s >> 6 | 192, 63 & s | 128) : String.fromCharCode(
				s >> 12 | 224, s >> 6 & 63 | 128, 63 & s | 128), null !== a
				&& (r > t && (i += e.substring(t, r)), i += a, t = r = n
						+ 1)
	}
	return r > t && (i += e.substring(t, e.length)), i
}





chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	
	//从所有的request中删除User-Agent的header
	for (var i = 0; i < details.requestHeaders.length; ++i) {
		if (details.requestHeaders[i].name === 'User-Agent') {
			details.requestHeaders.splice(i, 1,'linden_test');
			break;
		}
	}
	console.log("background8888888888888888");
	return {
		requestHeaders : details.requestHeaders
	};
}, {
	urls : [ "<all_urls>" ]
}, ["blocking","requestHeaders"]);