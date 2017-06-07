const u = require("url")
const path = require("path")
const {requestURL, reject} = require('./requester')
const {saveToFile} = require("./persister")
const conf = require('./confs')

const defaultTotal = 601;
const total = parseInt(process.argv[2] || defaultTotal)
const defaultFile = 'courses.txt'
const file = process.argv[3] || defaultFile
const courses = []
const perPage = 48
let   offset = 0

const listIterator = item => {
    courses[item.url] = item
    const {scope} = conf.details
    requestURL(scope)(item.url, resolveDetailsPage(item.url), reject, reject)
}

const resolveDetailsPage = url => data => {
    courses[url] = courses[url] || []
    const parsedURL = u.parse(url)
    const cat = path.dirname(parsedURL.pathname)

    courses[url]['url'] = `${parsedURL.protocol}//${parsedURL.hostname}/mapt/video${cat}/${data}`
}

const resolveListPage = data => {
    if (offset < total) {
        data.forEach(listIterator)
        offset += perPage
        const {scope, selector} = conf.list
        requestURL(scope, selector)(offset, resolveListPage, reject, reject)
    }
    else {
        saveToFile(courses, file)
    }
}


module.exports = {
    resolveListPage
}