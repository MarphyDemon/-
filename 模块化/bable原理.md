### **1. Babel**的原理是什么**?**

babel 的转译过程也分为三个阶段，这三步具体是：

- **解析 Parse**: 将代码解析⽣成抽象语法树（AST），即词法分析与语法分析的过程；
- **转换 Transform**: 对于 AST 进⾏变换⼀系列的操作，babel 接受得到 AST 并通过 babel-traverse 对其进⾏遍历，在此过程中进⾏添加、更新及移除等操作；
- **⽣成 Generate**: 将变换后的 AST 再转换为 JS 代码, 使⽤到的模块是 babel-generator。

![image.png](https://cdn.nlark.com/yuque/0/2021/png/1500604/1615908675152-69682ae3-d0b3-4552-a32e-39c2022b1db0.png?x-oss-process=image%2Fresize%2Cw_1500)
