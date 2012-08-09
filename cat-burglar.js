/*
Copyright (C) 2012 Blake Israel <blake.israel@gatech.edu>

Permission is hereby granted, free of charge, to any person obtaining a copy of
 this software and associated documentation files (the "Software"), to deal in
 the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do
 so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
var version = {
  major: 0,
  minor: 1,
  patch: 0,
  toString: function() {
    return [this.major,this.minor,this.patch].join('.');
  }
};

var fs = require('fs');
var __ = require('underscore');
var argv = require('optimist')
  .options('version', {
    'describe': 'output version information and exit',
    boolean: true
  })
  .argv;

if(argv.version) {
  console.log(''+version);
  process.exit(0);
}

var delim = /\/{2}\s*cat-ignore/i;

__(argv._).each(function(file) {
  var stat = fs.statSync(file);
  if(!stat.isFile()) {
    return console.error('skipping non-file', file);
  }

  var lines = fs.readFileSync(file, 'utf8').split(/\r\n|\r|\n/);
  //console.error('split into', lines, 'lines');
  var off = false;
  __(lines).each(function(line) {
    if(delim.test(line)) off = !off;
    else !off && console.log(line);
  });
});