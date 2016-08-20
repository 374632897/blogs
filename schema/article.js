/*
* @Author: Jiang Guoxi
* @Date:   2016-08-21 04:36:09
* @Last Modified by:   Jiang Guoxi
* @Last Modified time: 2016-08-21 05:15:37
*/
require('../dbs/connect');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// console.log(Schema);
const article = new Schema({
   title: String,
   createAt: {
     type: Date,
     default: Date.now
   },
   lastModified: {
      type: Date,
      default: Date.now
   },
   tags:[String],
   // comments: [Object],
   path: String
});
const Article = mongoose.model('Article', article);
// new Article({
//   title: 'test',
//   path: 'test.html'
// }).save();
module.exports = Article;
