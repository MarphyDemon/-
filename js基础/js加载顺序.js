// 从上到下加载，阻塞DOM渲染，除此之外还存在defer和async两种方式
// defer在页面加载完成之后执行，常用在需要操作dom元素时
// async加载完成之后立即执行，会阻塞DOM,常用于和DOM无关的操作
