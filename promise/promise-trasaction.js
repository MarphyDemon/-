// import Transaction from 'promise-transaction';
// var promise1 = Promise.resolve(3);
// var promise2 = 42;
// var promise3 = new Promise(function(resolve, reject) {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then(function(values) {
//   console.log(values);
// });
const Transaction = require('promise-transaction');
console.log(Transaction);
const t = new Transaction.default([{
        name: 'seed',
        perform: () => {
            console.log("🍊", Math.random());
            return Promise.resolve(3);
        },
        rollback: () => {
            console.log("🏡接受回滚");
        }
    },
    {
        name: 'square',
        perform: (context) => {
            //return Promise.resolve(context.data.seed * context.data.seed);
            // return Promise.resolve(new Error("🌶 ❌"));
            console.log("🍌", Math.random());
            return new Promise(function (resolve, reject) {
                reject("🌶 ❌")
            });
        },
        retries: 3 //如果失败了重复运行的次数
    },
]);

return t.process().then((result) => {
    console.log(result); // should be value of 9 = 3 x 3
}).catch((err) => {
    t.rollback();
    //return t.rollback().then(() => {
    //console.log(t.bar.perform.getCalls().length); // by default should retries for 3 times
    //});
});