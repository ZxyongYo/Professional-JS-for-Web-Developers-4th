
const a = ['foo', 'bar', 'baz', 'qux']

console.log(Array.from(a.keys())) // [0, 1, 2, 3]
console.log(Array.from(a.values())) // ['foo', 'bar', 'baz', 'qux']
console.log(Array.from(a.entries())) // [ [ 0, 'foo' ], [ 1, 'bar' ], [ 2, 'baz' ], [ 3, 'qux' ] ]

for (const [index, item] of a.entries()) {
  console.log(index) // 0 1 2 3
  console.log(item) // 'foo' 'bar' 'baz' 'qux'
}


/**
 * 6.2.13 迭代方法
 * 
 * every()：对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true。
 * filter()：对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回。
 * forEach()：对数组每一项都运行传入的函数，没有返回值。
 * map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。
 * some()：对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true。
 * 这些方法都不改变调用它们的数组
 */

/**
 * 6.2.14 归并方法
 * reduce()
 * reduceRight()
 */

const val = [1,2,3,4,5,6]
const sum = val.reduce((prev, cur, index, array) => prev + cur)
console.log(sum) // 21