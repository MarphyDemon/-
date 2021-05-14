// 将分支如if switch等转换为配置。
if (a === 1) {
  aa()
} else if (b === 2) {
  bb()
} else if (c === 3) {
  cc()
} else if (d === 4) {
  dd()
}

const res = {
  code1: aa(),
  code2: bb(),
  code3: cc(),
  code4: dd(),
}

// 优点
// 简化代码，代码思路更清晰，增强可读性
// 避免多重条件语句
// 提高可复用性

// 缺点
// 耦合性高
