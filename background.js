





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