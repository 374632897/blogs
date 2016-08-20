/*
* @Author: Jiang Guoxi
* @Date:   2016-08-21 06:01:36
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-08-21 06:06:43
*/
const fs = require('fs');
const list = require('../../template/list');
const testData = [{
  href: 'test1.html',
  title: 'test1'
},{
  href: 'test2.html',
  title: 'test2'
},{
  href: 'test3.html',
  title: 'test3'
},{
  href: 'test4.html',
  title: 'test4'
},{
  href: 'test1.html',
  title: 'test5'
},{
  href: 'test1.html',
  title: 'test5'
},];
fs.writeFileSync('test.html', list(testData));
// console.log(list(testData));
