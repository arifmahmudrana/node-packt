const fs = require('fs')
const Course = require('./models').Course

const saveToFile = (courses, file = 'courses.txt') => {
    const w = fs.createWriteStream(file)
    w.on('finish', function () {
        console.log('file has been written')
    })
    Object.keys(courses).forEach(item => {
        w.write(`${courses[item].title}\t${courses[item].url}\n`)
    })
    w.end()
}

const saveCourse = courses => item => {
    Course.create(courses[item])
        .then(course => {})
        .catch(error => {})
}

const saveToDB = courses => Object.keys(courses).forEach(saveCourse(courses))

module.exports = {
    saveToFile,
    saveToDB
}