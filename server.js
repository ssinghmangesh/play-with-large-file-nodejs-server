const http = require('http')

const { PORT, HOST_NAME } = require('./constants')
const { logPerformance } = require('./utils')
const importFile = require('./Controller/import')
const exportFile = require('./Controller/export')


const handleRequest = (req, res) => {
    
    if(req.url.startsWith('/export') && req.method === "GET") {
        exportFile(req, res)
        logPerformance()
    } else if(req.url === '/import'){
        importFile(req, res)
        logPerformance()
    }
}

const server = http.createServer(handleRequest)


server.listen(PORT, HOST_NAME, () => {
    console.log(`Server running at http://${HOST_NAME}:${PORT}/`);
})



