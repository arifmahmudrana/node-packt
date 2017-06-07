'use strict'

const x = require('x-ray')()

const requestPackt = (url, scope, selector) => new Promise((resolve, reject) => {
    x(generateURL(url), scope, selector)(callback(resolve, reject))
})

const generateURL = url => ('' + url).indexOf('http') == -1 ? `https://www.packtpub.com/all?search=&type_list%5Bvideos%5D=videos&availability_list%5BAvailable%5D=Available&offset=${url}&rows=48&sort=` : url

const callback = (resolve, reject) => (err, data) => {
    if (err) {
        reject(err)
    }
    resolve(data)
}

const reject = err => {
    // console.log(err)
}

const requestURL = (scope, selector) => (data, resolveCB, rejectCB, catchCB) => {
    requestPackt(data, scope, selector)
        .then(resolveCB, rejectCB)
        .catch(catchCB)
}

module.exports = {
    requestURL,
    reject
}