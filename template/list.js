/*
* @Author: Jiang Guoxi
* @Date:   2016-08-21 05:35:31
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-08-21 06:06:01
*/
const t = require('./base');
module.exports = function (articles) {
  let html = '<ul class = \'articles\'>';
  articles.forEach(item => {
    html += `<li><a href = ${item.href} title = ${item.title} >${item.title}</a></li>`;
  });
  html += '</ul>';
  return t({
    content: html,
    title: 'Articles'
  });
}
