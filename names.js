function names(firstName, lastName) {
  return { firstName: firstName, lastName: lastName }
}

console.log(names('carlo', 'magno'));

module.exports = names;