const http = require('http')
const url = require('url');

const acceptedUrls = { '/mult': (x, y) => x * y, "/add": (x, y) => x + y, "/div": (x, y) => x / y, "/sub": (x, y) => x - y }
const operations = { '/mult': "Multiplication", "/add": "Addition", "/div": "Division", "/sub" : "Subtraction"}
const numberReg = /\d+/
http.createServer(function (req, res) {
    const parts = url.parse(req.url, true)
    const slug = parts.pathname

    if (slug in acceptedUrls) {
        let accumulator = undefined
        const operation = acceptedUrls[slug]
        console.log(parts.query)
        for (queryItem in parts.query) {
            valueOfItem = parts.query[queryItem]
            if (valueOfItem.match(numberReg)) {
                if(accumulator){
                    accumulator = operation(accumulator, Number(valueOfItem))
                }
                else{
                    accumulator=Number(valueOfItem)
                }
                res.write(`${String(queryItem)} :${valueOfItem} \n`)
            }
            else {
                res.write(`${String(queryItem)} :${valueOfItem}(ignored) \n`)   
            }
            
        }
        
        res.write(`Operation: ${operations[slug]}\n`)
        res.write(`Result is: ${accumulator}`)

    }
    else {
        res.write("Sorry, looks like you are using the wrong endpoint")
    }
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
