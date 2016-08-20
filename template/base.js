/*
* @Author: Jiang Guoxi
* @Date:   2016-08-21 05:54:26
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-08-21 05:55:53
*/
module.exports = function (obj = {}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${obj.title || 'Jason\'s blog'}</title>
  <meta name = 'viewport' content = 'width = device-width,initial-scale=1.0, user-scalable = no'>
  <meta name = 'author' content = 'Jason'>
  <meta name = 'keywords' content = 'front-end, blog'>
  <meta name = 'description' content = 'The blog of Jason'>
</head>
<body>
  <div class="container">
    ${obj.content || ''}
  </div>
</body>
</html>
`;
}
