'use strict'

const {requestURL, reject} = require('./requester')
const {resolveListPage} = require('./resolvers')
const {scope, selector} = require('./confs').list

requestURL(scope, selector)(0, resolveListPage, reject, reject)