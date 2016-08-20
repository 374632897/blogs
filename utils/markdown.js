/*
* @Author: Jiang Guoxi
* @Date:   2016-08-21 06:17:20
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-08-21 06:21:43
*/
const marked = require('marked');

module.exports = function (str, cb) {
  return marked(str, cb);
}
