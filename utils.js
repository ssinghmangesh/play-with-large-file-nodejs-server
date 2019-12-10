const { Transform } = require('stream');

// business logic or filters is to be applied here for each line.
const bussinessLogic = (options, date) => {

    const { startDate, endDate } = options
    if(!startDate && !endDate) {
        return true
    } else if(startDate && endDate) {
        if(new Date(startDate) >= new Date(date) && new Date(endDate) <= new Date(date)) {
            return true
        } else {
            return false
        }
    } else if(startDate) {
        if(new Date(startDate) >= new Date(date)) {
            return true
        } else {
            return false
        }
    } else if(endDate) {
        if(new Date(endDate) <= new Date(date)) {
            return true
        } else {
            return false
        }
    }
    return true
}

// this function will help as apply bussiness logic, add filter to data.
const manuplateData = (options) => {


    const streamFile = new Transform({
        readableObjectMode: true,
        writableObjectMode: true,
    
        transform(chunk, encoding, callback) {
            let bufStr = '';
            let data = chunk.toString().split('\n')
            data.map(line => {
                let part = line.split(' ')
                let date = null
                try {
                    date = new Date(part[0])
                } catch(e) {
                    console.log(e)
                }
                if(!isNaN(date.getTime())) {
                    if(bussinessLogic(options, date)) {
                        bufStr += line + '\n'
                    }
                }

            })
            this.push(Buffer.from(bufStr, 'utf8'));
            callback();
        }
    });
    return streamFile


}



// To print the utilization of heap memory.
const logPerformance = () => {
    const used = process.memoryUsage();
    console.log(`------------------Memory Perfomance-------------------------------`);
    for (let key in used) {
        console.log(`${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB`);
    }
    console.log(`-------------------------------------------------------------------`);
}

module.exports = {
    manuplateData,
    logPerformance
}