/**
 *时间格式： 26 Feb 16:19:34
 * @param n
 * @returns {string}
 */
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}

// 26 Feb 16:19:34
function timestamp() {
  let d = new Date();
  let time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


/**
 *单行写评级组件
 * @param rate 变量rate是1到5的值
 */
function start(rate) {
  "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
}

/**
 * 取随机字符串
 */
function random() {
  Math.random().toString(16).substring(2);
  Math.random().toString(36).substring(2);
}

/**
 * 取整
 */
function integer(n) {
  return (~~n) || (n | 0) || (n >> 0)
}

/**
 * 实现金钱格式化
 */
function format(money) {
  money.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function formatCash(str) {
  return str.split('').reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev
  })
}

/**
 * 实现标准JSON的深拷贝
 */
let a = {a: 1, b: {c: 1, d: 2}};
let b = JSON.parse(JSON.stringify(a));

/**
 * 代码实现数组去重
 */
[...new Set([1, "1", 2, 1, 1, 3])]


/**
 * 长度为m(6)且值都n(8)的数组
 */
Array(6).fill(8);

/**
 * 取出一个数组中的最大值和最小值
 */
let numbers = [5, 458, 120, -215, 228, 400, 122205, -85411];
let maxInNumbers = Math.max.apply(Math, numbers);
let minInNumbers = Math.min.apply(Math, numbers);

/**
 * 将argruments对象转换成数组
 */
function arguments(str) {
  Array.prototype.slice.call(arguments);
  // 或者ES6：
  Array.from(arguments)
}

/**
 * 从一个数组中找到一个数
 */
function find(x, y) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] === y) return i;
  }
  return null;
}

let arr = [0, 1, 2, 3, 4, 5];
console.log(find(arr, 2));
console.log(find(arr, 8));


/**
 * Function构造函数接受的参数中，第一个是要传入的参数名，第二个是函数内的代码（用字符串来表示）。
 */
let func = new Function('a', 'alert(a)');
func('wilDo');
