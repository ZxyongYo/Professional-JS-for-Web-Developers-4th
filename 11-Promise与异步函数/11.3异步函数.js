/** 
 * 异步函数如果使用 return 返回了值（如果没有 return 则会返回undefined）
 * 这个值会被Promise.resolve() 包装成一个 Promise 对象
 */
const foo = async () => {
  console.log(1)
  // 相当于 return Promise.relove(3)
  return 3
}
foo().then(console.log)
console.log(2)
// 1
// 2
// 3