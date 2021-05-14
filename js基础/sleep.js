function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
async function test() {
  console.log('Hello')
  await sleep(1000)
  console.log('world!')
}
test()

function sleep1(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function test1() {
  console.log(111)
  await sleep1(1000)
  console.log(222)
}
test1()
