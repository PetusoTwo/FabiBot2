const fs = require('fs')
const toMs = require('ms')

/**
*add user to bannedList datauser
* @param {string} userId
* @param {string} expired 
* @param {object} _data
*/
const addBanned = (userId, expired, _data) => {
let success = false
if (expired === undefined) {
    expired = 'PERMANENT'
} else { 
    expired = expired
}

let expired_at = 'PERMANENT'

if (expired === 'PERMANENT') {
    expired_at = 'PERMANENT'
} else {
    expired_at = Date.now() + toMs(expired)
}

const obj = { 
    id: userId,
    expired: expired_at
}

_data.push(obj)
fs.readFileSync('./src/banned.json', JSON.stringfy(_data))
}
/**
* unbanned someone
* @param {string} userId
* @param {object} _dir
* @returns. {number}
*/
const unBanned = {userId, _data) => {
let position = null
object.keys(_data).forEach((i) => {
if (_data[i].id === userId) {
position = i
}
})
if (position !== null) {
