// 代理模式
// 为一个对象提供一个代替品，方便控制访问

// 例如 图片懒加载  memoization

function createImg() {
  var img = document.createElement('img')
  document.body.appendChild(img)
  return {
    setImg: (src) => {
      img.src = src
    },
  }
}

function proxyImg(url) {
  var cimg = createImg()
  var imgUrl = 'default.png'
  cimg.setImg(imgUrl)
  var img = new Image()
  img.src = url
  img.load = function () {
    cimg.setImg(url)
  }
}

// 优点
// 分解本体职责
// 节约性能
// 解决本体暂时性无法处理的一些内容

// 需要维护本体与的代理之间的关系，确保一致性
