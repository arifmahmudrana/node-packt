const fs = require('fs')

const saveToFile = (courses, file = 'courses.txt') => {
    const w = fs.createWriteStream(file);
    w.on('finish', function () {
        console.log('file has been written');
    });
    Object.keys(courses).forEach(item => {
        w.write(`${courses[item].title}\t${courses[item].url}\n`);
    })
    w.end();
}

module.exports = {
    saveToFile
}