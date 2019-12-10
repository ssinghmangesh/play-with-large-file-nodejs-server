const fs = require('fs')
const url = require('url')

const { DATABASE_NAME } = require('../constants')
const { manuplateData } = require('../utils')

const exportFile = (req, res) => {
    let body = ''
    req.on('data', (chunk) => { body += chunk.toString() })
    .on('end', () => { 
        let options = url.parse(req.url, {parseQueryString: true}).query
        console.log(options)
        res.writeHead(200,{
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/text",
            "Content-Disposition": "attachment; filename=mangesh.log"
        });

        const db = fs.createReadStream(DATABASE_NAME)
        db.pipe(manuplateData(options)).pipe(res)
        .on('finish', () => {
            res.end();
        });
    })

}

module.exports = exportFile