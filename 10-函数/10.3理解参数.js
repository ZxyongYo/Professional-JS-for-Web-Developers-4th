
function doAdd(num1, num2) {
  arguments[1] = 10
  console.log(arguments) // [Arguments] { '0': 2, '1': 10 }
  console.log(num1, num2) // 2 10
}

doAdd(2, 5)

// 箭头函数中没有 arguments 对象
const foo = () => {
  console.log(arguments[0])
}
foo(2)