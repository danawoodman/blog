var path = require('path')

var basename = path.basename
var dirname = path.dirname
var extname = path.extname
var join = path.join

module.exports = plugin

function plugin() {
  return function(files, metalsmith, done) {
    setImmediate(done)
    Object.keys(files).forEach(function(file){
      if (!html(file)) return

      files[file].path = resolve(file)
    })
  }
}

function resolve(path) {
  var root = dirname(path)

  if (root === '.') {
    return '/'
  }

  return '/' + root  +'/'
}

function html(path){
  return /.html/.test(extname(path))
}
