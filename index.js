const inquirer = require('inquirer')
const questions = require('./lib/questions')

module.exports = pkgi

var PKG = null
function pkgi (pkg) {
  PKG = pkg
  return function () {
    inquirer.prompt(questions)
      .then(startPkg)
      .catch(raiseError)
  }
}

function startPkg (answers) {
  if (typeof PKG.exec !== 'function') throw Error('Make sure you passed a valid instance of pkg')
  return new Promise(function (resolve, reject) {
    PKG.exec(formatArgs(answers)).then(function (out) {
      resolve(out)
    }).catch(raiseError)
  })
}

function formatArgs (answers) {
  var pkgArgs = ['--target', `node${answers.nodeVersion}-${answers.os}-${answers.architecture}`, '--output', answers.output]
  if (answers.input) pkgArgs = [answers.input].concat(pkgArgs)
  console.log('args:', pkgArgs)
  return pkgArgs
}

function raiseError (err) {
  if (err) throw err
}

