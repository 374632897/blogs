/*
* @Author: Jiang Guoxi
* @Date:   2016-08-21 06:19:16
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-08-21 06:26:56
*/
const fs = require('fs');
const data = fs.readFileSync('./test.md').toString();
const marked = require('../../../utils/markdown');
const t = require('../../../template/article');
marked(data, (err, html) => {
  if (err) {
    console.log('err');
    console.log(err);
  }
  fs.writeFileSync('./test.html', t({
    content: html
  }));
});
