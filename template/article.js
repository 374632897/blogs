/*
* @Author: Jiang Guoxi
* @Date:   2016-08-21 05:35:34
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-08-21 06:27:59
*/
const t = require('./base');
module.exports = function (article = {}) {
  // let html = '<div class = 'article'>';

  // // articles.forEach(item => {
  // //   html += `<li><a href = ${item.href} title = ${item.title} >${item.title}</a></li>`;
  // // });
  // html += '</ul>';
  const content = `
  <div class = 'article-content'>
    ${article.content}
  </div>
  `;
  return t({
    content
  });
}
