const name = require('./names')
const hobby = require('./hobbies');


function people() {
  return {
    fullName: name('carlo', 'magno'),
    hobbies: hobby('lettura', 'arrampicata', 'biliardo')
  }
}

console.log(people());