function sortVersions(arr) {
    return arr.sort((a,b) => {
        const arr1 = a.split(".");
        const arr2 = b.split(".");
        const maxLen = Math.max(arr1.length,arr2.length);
        for(let i = 0; i < maxLen; i++) {
            if(arr1[i] === arr2[i]) {
                continue;
            } else{
                return arr1[i] - arr2[i]
            } 
        }
    })
}
console.log(sortVersions(["1.2.3","1.4","1.45","1.50.1", "1.2.1", "1.2.3.3.3.33", "3.3.3.3.3.3.3.3", "0.0.0.1"]))
