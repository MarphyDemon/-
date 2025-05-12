function createAjax() {
    const xhr = new XMLHttpRequest();
    return {
        get: (url, params, options) => {
            this.request("GET", url, params, options)
        },
        post: (url, params, options) => {
            this.request("POST", url, params, options)
        },
        request(method, url, params, options) {
            return new Promise((resolve, reject) => {
                if (method === "GET") {
                    url = url + "?" + stringify(params)
                }
                xhr.open(method, url, params)
                xhr.header = options.header;
                // ...
                xhr.setRequestType("Content-Type", "application/json")
                const attempt = () => {
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status >= 200 && xhr.status < 300) {
                                resolve({
                                    data: parseResponse(xhr),
                                    status: xhr.status,
                                    headers: parseHeaders(xhr)
                                });
                            } else {
                                reject(createError(xhr));
                            }
                        }
                    };

                    xhr.onerror = () => reject(createError(xhr));
                    xhr.ontimeout = () => reject(new Error('Request timeout'));

                    try {
                        xhr.send(method === 'POST' ? JSON.stringify(data) : null);
                    } catch (err) {
                        reject(err);
                    }
                };
                attempt();
            })
        }
    }

    return xhr
}

function stringify(params) {
    let str = ""
    Object.keys(params).forEach(key => {
        str = str + "&" + key + "=" + params[key]
    })
    return str
}