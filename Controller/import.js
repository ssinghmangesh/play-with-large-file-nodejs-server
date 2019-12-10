const fs = require('fs')
const { DATABASE_NAME } = require('../constants')



const importFile = (req,res) => {
    const writeable = fs.createWriteStream(DATABASE_NAME, { flags: 'a' })

    req.pipe(writeable)
    writeable.on('finish', () => {
        res.writeHead(200,{
            "Content-Type": "application/json",
        });
        res.write(JSON.stringify({
            message: "File uploaded successfully..."
        }))
    });

}

module.exports = importFile



/**  ----------------------NOTE-------------------------
 * It is assumed that db.log will never be deleted.
 * 
 */