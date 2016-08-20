# todoList

> 你以为你懂得很多， 其实你什么都不懂。

> 一段时间最好只做一件事情， 完成该完成的任务， 曲线救国只会浪费你更多的时间。


## 写这个的缘由

发现自己的注意力总是不经意间因其他因素的影响而转移， 以至于原本预计做的一件事情， 做着做着， 就因为一些莫名其妙的原因， 而把自己路线给带偏了。 甚至有时候， 自己也不知道该做什么， 内心实在是浮躁的紧， 以至于浪费了大把大把的时间。对于我这种已经快23岁，非科班出身才接触IT一年不到的人来说， 时间真的是比什么都重要， 毕竟混沌度日的话， 你会越来越不如别人。 你没有任何优势， 所以只有控制时间来提升自己。

原本公司开发的软件就是时间管理方面的， 但是个人还是只习惯用它来管理工作上的事情， 学习上的事情还是用`GitHub`这种东西吧， 毕竟自己的笔记（MD版）的都是放在这上面的。也许这就是传说中的情怀。

## [任务排期](../../wiki)

## 需要做的一些东西

### 需要看的书
- [ ] [MongoDB docs](https://docs.mongodb.com/manual/mongo/)
- [ ] Java疯狂讲义
- [ ] CSS揭秘

### 需要再看一遍的书
以下这些书看第一遍的时候， 功利心比较重， 着重于去了解它能满足我的什么需求以及通过阅读它们我能收获到什么去了， 以至于第一次的阅读过程完全是速读， 有很多细节的地方没有注意， 同时也没有去思考背后的原因， 以及耐心地把代码敲一遍。 那么下一次阅读的时候， 这些地方就应该多加注意。

- [ ] 深入浅出Nodejs
- [ ] HTTP权威指南
- [ ] Linux Command Line and Shell Scripting Bibel

### 学习内容整理
- [ ] [just-some-tips](https://github.com/374632897/just-some-tips)错误内容标注， 并且将里面有用的东西提取出来

- [ ] linux命令行巩固 + 做笔记

- [ ] 学习笔记整理， 将以前的学习笔记建立一个索引

- [ ] 将一些常用的代码之类的东西迁移到[gist](https://gist.github.com/374632897)

- [ ] 分开建立易错和小Tips的索引， 感觉应该会有很多的样子

### 渣渣小玩意儿

- [ ] 通过`shell`来完成代码行数统计工具， 大致思路是`cat file | wc -l`

- [ ] [打标签功能完善](https://github.com/374632897/gen-tag)

- [ ] [完善常用功能库](https://github.com/374632897/utils)

- [ ] [cost使用数据库来代替本地存储](https://github.com/374632897/cost)

- [ ] [幻灯片播放需要添加更多的效果](https://github.com/374632897/share)

- [ ] 雪碧图生成器


### 灵光一闪记下来的一些小东西

- [x] 通过`find`命令来对部分类型文件批量追加内容: `find ./ -name "*.scss" -exec ... {} \` 这里出了问题， 使用echo 写不进去， 可能是方式错了→＿←

```bash
# 正确方式
find . -name "*.scss" -exec bash -c "echo '\$width: 50px;' >> {}" \;
# bash -c 将会使用其后面的第一个非选项字符串作为输入。'\$'是对$进行转义， 避免读取为变量。
```
相对于之前通过`nodejs`和`bash`脚本遍历文件再进行修改的方法， 这种方法无疑更为简洁方便

- [x] 代码检测： 使用git diff获取和远程分支相比有改动的文件， 专门针对这部分文件做检测， 而不是针对整个目录做检测， 从而节省时间

### 不久的将来需要看的书

- [ ] 算法(第4版)


这本书很早就买了， 但是只看到了第二章就看不下去，整个阅读的过程， 从最开始的只是为了看书， 到后来为了方便理解而去学Java, 被环境配置啥的折腾的不行， 然后计划就早夭了（毕竟家里没有网， 搜索困难）。 现阶段心态太浮躁， 非科班出身， 再加上技术不够扎实， 而算法这种东西又是需要花大工夫， 静下心去学习的。 所以就现在我这种情况来看， 学习这个性价比不会太高， 那么在看完`疯狂Java讲义`并且能够非常顺利地写`Java`同时自己心态也变好了的时候， 再来慢慢折腾这玩意儿吧。