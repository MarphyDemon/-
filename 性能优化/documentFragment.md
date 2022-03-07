### 4. documentFragment 是什么？用它跟直接操作 DOM 的区别是什么？

MDN 中对`documentFragment`的解释：

> DocumentFragment，文档片段接口，一个没有父对象的最小文档对象。它被作为一个轻量版的 Document 使用，就像标准的 document 一样，存储由节点（nodes）组成的文档结构。与 document 相比，最大的区别是 DocumentFragment 不是真实 DOM 树的一部分，它的变化不会触发 DOM 树的重新渲染，且不会导致性能等问题。

当我们把一个 DocumentFragment 节点插入文档树时，插入的不是 DocumentFragment 自身，而是它的所有子孙节点。在频繁的 DOM 操作时，我们就可以将 DOM 元素插入 DocumentFragment，之后一次性的将所有的子孙节点插入文档中。和直接操作 DOM 相比，将 DocumentFragment 节点插入 DOM 树时，不会触发页面的重绘，这样就大大提高了页面的性能。
