/*
* @Author: Jiang Guoxi
* @Date:   2016-08-21 05:35:34
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-08-21 06:38:31
*/
const t = require('./base');
module.exports = function (article = {}) {
  const content = `
  <div class = 'article-content'>
    ${article.content}
  </div>
  `;
  return t({
    content
  });
}
