var unirest = require("unirest")
var req = unirest("GET", "https://my-json-server.typicode.com/GloireM05/alos_tp1/db?$top=10")
req.headers({ 
			"cache-control": "no-cache"
})
req.end(function (res) { 
	if(res.error) throw new Error(res.error) 
		console.log(res.body)
})