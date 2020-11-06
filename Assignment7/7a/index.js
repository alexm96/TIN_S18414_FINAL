const http = require('http')
const url = require('url');

const acceptedUrls = { '/mult': (x, y) => x * y, "/add": (x, y) => x + y, "/div": (x, y) => x / y, "/sub": (x, y) => x - y }

const numberReg = /\d+/
http.createServer(function (req, res) {
    const parts = url.parse(req.url, true)
    const slug = parts.pathname

    if (slug in acceptedUrls) {
        let accumulator = 1 - (slug === "/add" || slug === "/sub") // I both love and hate JS because this totally works 
        const operation = acceptedUrls[slug]
        for (queryItem in parts.query) {
            valueOfItem = parts.query[queryItem]
            if (valueOfItem.match(numberReg)) {
                accumulator = operation(accumulator, Number(valueOfItem))
            }
            else {

                res.write(`${String(queryItem)} is not a numeric value , has a value of ${valueOfItem} and is being ignored \n`)
            }
        }
        res.write(`Result is: ${accumulator}`)

    }
    else {
        res.write("Sorry, looks like you are using the wrong endpoint")
    }
    res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
