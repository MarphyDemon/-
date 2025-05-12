const routes = {
    "/a/b": () => { console.log("ab") },
    "/a/:id": (v) => { console.log(v) },
    "/a/:c/:D/:e": (a, b, c) => { console.log(a, b, c) },
    "/a/:c/:D/:e/:r": (a, b, c,r) => { console.log(a, b, c,r) }
}

const matchPath = (path) => {
    if (routes[path]) {
        return routes[path]();
    }
    let pathKey = [];
    let pathValue = []
    const pathArr = path.split("/")
    Object.keys(routes).forEach(key => {
        const keyArr = key.split("/");
        if (pathArr.length !== keyArr.length) {
            return null
        }
        pathKey = [];
        pathValue = [];
        for (let i = 1; i < pathArr.length; i++) {
            if (keyArr[i] === pathArr[i]) {
                pathKey.push(pathArr[i]);
            } else if (keyArr[i].startsWith(":")) {
                pathKey.push(keyArr[i]);
                pathValue.push(pathArr[i])
            }
        }
    })
    const key = `/${pathKey.join("/")}`
    if (key && routes[key]) {
       return routes[key](...pathValue)
    }

}

matchPath("/a/b")
matchPath("/a/111")
matchPath("/a/1/2/3")
matchPath("/a/1/2/3/4")