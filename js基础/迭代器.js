for(let i of [1,2,3,4,5,6,7,8,9,10]){console.log(i)}
function* foo() {
    yield 0;
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

for(let i of foo()){
    console.log(i);
}