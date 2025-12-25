const DEMO = "ok"
// a one line comment
/*
* multi-line comment
*/

var varity = "varity"
let letty = "letty"

let x
console.log(x)  // logs "undefined"
// var 一定是全局作用域 let const 可以属于某个另外的作用域
// 同一作用域下数据类型声明不可以重复
if (Math.random() > 0.5) {
  const Y = 5
}

console.log(Y)

if (true) {
  var t = 5
}

console.log(x === undefined)
var d = 4
  (function () {
    console.log(x)
    var m = "local value"
  })

const MY_OBJECT = { key: "value" }
MY_OBJECT.key = "other value"

const MY_ARRAY = ["HTML", "CSS"]
MY_ARRAY.push("JAVASCRIPT")  // push方法往后添加内容，然后是直接修改原数组，js中数组可以变动
console.log(MY_ARRAY)
console.log(666)

console.log(null)

x = "the answer is" + 43
console.log(x)
console.log(typeof x)
var demo = "101"
console.log(parseInt(demo, 2))  // 将demo以2进制形式转换为十进制，结果是5 (1*2² + 0*2¹ + 1*2⁰ = 4+0+1 = 5)
let demo2 = "34.5"
console.log(parseFloat(demo2))  // 结果是34.5
// parseNumber(demo2)  // 这行代码会报错，因为parseNumber不是内置函数，应为Number()

// 正确的类型转换方法：
console.log("=== 类型转换方法的区别 ===");

// parseInt: 解析字符串并返回整数部分，可以指定进制
console.log(parseInt("45.67"));     // 45 (取整数部分)
console.log(parseInt("100", 2));    // 4 (二进制的100等于十进制的4)
console.log(parseInt("1A", 16));    // 26 (十六进制的1A等于十进制的26)
console.log(parseInt("hello"));     // NaN (Not-a-Number)

// parseFloat: 解析字符串并返回浮点数
console.log(parseFloat("45.67"));   // 45.67
console.log(parseFloat("3.14159")); // 3.14159
console.log(parseFloat("6.7.8"));   // 6.7 (遇到第二个小数点停止解析)
console.log(parseFloat("hello"));   // NaN

// Number: 转换整个值为数字类型，要求整个字符串都是数字格式
console.log(Number("45.67"));       // 45.67
console.log(Number(" 42 "));        // 42 (会处理空白字符)
console.log(Number("0x1A"));        // 26 (十六进制)
console.log(Number("hello"));       // NaN (整个字符串必须是数字格式)

// 其他转换方法：
console.log(+"45.67");              // 45.67 (一元加号操作符)
console.log(+"hello");              // NaN

let demo = [1, 2, 3,]  // 后置逗号有利于后期修改代码，js是允许后置逗号的
const sales = "Toyota"
function carTypes(name) {
  return name === "Toyota" ? name : `Sorry, we don't sell ${name}`
}

// js没有类，但是有原型链
const car = { myCar: "Toyota" }
const liu = { manCars: { a: "Saab", b: "Jeep" }, 7: "Toyota" }
console.log(liu.manCars.b)
console.log(liu[7])
// 对象属性名称可以是任何字符串，包括空字符串。如果属性名称不是有效的 JavaScript 标识符或编号，则必须用引号包住
// 这种不能用.访问，只能用[]

const obj = {
  // __proto__
  __proto__: theProtoObj,
  // Shorthand for 'handler: handler'
  handler,
  // Methods
  toString() {
    // Super calls
    return `d ${super.toString()}`;
  },
  // Computed (dynamic) property names
  ["prop_" + (() => 42)()]: 42,
};

const formatArg = (arg) => {
  if (Array.isArray(arg)) {
    // Print a bulleted list
    return arg.map((part) => `- ${part}`).join("\n")
  }
  if (arg.toString === Object.prototype.toString) {
    // This object will be serialized to "[object Object]".
    // Let's print something nicer.
    return JSON.stringify(arg)
  }
  return arg;
}

const print = (segments, ...args) => {
  // For any well-formed template literal, there will always be N args and
  // (N+1) string segments.
  let message = segments[0]
  segments.slice(1).forEach((segment, index) => {
    message += formatArg(args[index]) + segment;
  })
  console.log(message);
}

const todos = [
  "Learn JavaScript",
  "Learn Web APIs",
  "Set up my website",
  "Profit!",
]

const progress = { javascript: 20, html: 50, css: 10 };

print`I need to do:
${todos}
My current progress is: ${progress}
`;

// I need to do:
// - Learn JavaScript
// - Learn Web APIs
// - Set up my website
// - Profit!
// My current progress is: {"javascript":20,"html":50,"css":10}
print(["I need to do:\n", "\nMy current progress is: ", "\n"], todos, progress)

// 块语句
{
  statement1;
  statement2;
  // …
  statementN;
}

while (x < 10) {
  x++;
}

if (condition1) {
  statement1;
} else if (condition2) {
  statement2;
} else if (conditionN) {
  statementN;
} else {
  statementLast;
}

console.log(NaN)

function checkData() {
  if (document.form1.threeChar.value.length === 3) {
    return true;
  }
  alert(
    `Enter exactly three characters. ${document.form1.threeChar.value} is not valid.`,
  );
  return false;
}

switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault;
}

function doSomethingErrorProne() {
  if (ourCodeMakesAMistake()) {
    throw new Error("The message");
  }
  doSomethingToGetAJavaScriptError();
}

try {
  doSomethingErrorProne();
} catch (e) {
  // Now, we actually use `console.error()`
  console.error(e.name); // 'Error'
  console.error(e.message); // 'The message', or a JavaScript error message
}

var step;
for (step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}

var i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);

label:
statement

var num = 0;
outPoint: for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      break outPoint; // 在 i = 5，j = 5 时，跳出所有循环，
      // 返回到整个 outPoint 下方，继续执行
    }
    num++;
  }
}

alert(num); // 输出 55

var i = 0;
var j = 10;
checkiandj: while (i < 4) {
  console.log(i);
  i += 1;
  checkj: while (j > 4) {
    console.log(j);
    j -= 1;
    if (j % 2 == 0) {
      continue checkj;
    }
    console.log(j + " 是奇数。");
  }
  console.log("i = " + i);
  console.log("j = " + j);
}


// for...in 语句循环一个指定的变量来循环一个对象所有可枚举的属性
function dump_props(obj, obj_name) {
  var result = "";
  for (var i in obj) {
    result += obj_name + "." + i + " = " + obj[i] + "<br>";
  }
  result += "<hr>";
  return result;
}
// for...in 语句迭代的是自定义的属性，而不是数组的元素
// 对于非对象不建议使用for ... in 

// for...of 语句在可迭代对象（包括Array、Map、Set、arguments 等等）上创建了一个循环，对值的每一个独特属性调用一次迭代
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
  console.log(i); // 输出 "0", "1", "2", "foo"
}

for (let i of arr) {
  console.log(i); // 输出 "3", "5", "7"
}
// 注意 for...of 的输出没有出现 "hello"

function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(mycar.make); // "Honda"
myFunc(mycar);
console.log(mycar.make); // "Toyota"

// 不会立即执行
const square = function (number) {
  return number * number;
};

console.log(square(4)); // 16

// 使用括号包围函数表达式，然后立即用()调用会立即执行
(function () {
  console.log("这是一个立即执行的匿名函数");
})();

// 或者
(function () {
  console.log("这也是立即执行的");
}());

// 箭头函数形式的立即执行
(() => {
  console.log("箭头函数立即执行");
})();

// 带参数的立即执行函数
((name) => {
  console.log(`Hello, ${name}!`);
})("World");

(function (name, age) {
  console.log(`Name: ${name}, Age: ${age}`);
})("John", 25);

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

// 函数其实也是对象，另外要注意函数的作用域
// js中允许函数嵌套
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}

console.log(addSquares(2, 3)); // 13
console.log(addSquares(3, 4)); // 25
console.log(addSquares(4, 5)); // 41

// 闭包
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}

const fnInside = outside(3); // 可以这样想：给我一个可以将提供的值加上 3 的函数
console.log(fnInside(5)); // 8
console.log(outside(3)(5)); // 8

// 核心定义：闭包是指一个函数能够记住并访问其词法作用域（定义时的环境），即使该函数在其词法作用域之外被执行，依然可以访问原作用域中的变量和函数
function outer() {
  const name = "闭包"; // 外层作用域变量
  // 内层函数（闭包），定义时绑定了outer的词法作用域
  return function inner() {
    console.log(name); // 即使在outer外部执行，仍能访问name
  };
}

const fn = outer(); // 内层函数被带出outer作用域
fn(); // 输出：闭包（此时inner在全局作用域执行，仍能访问outer中的name）

const createPet = function (name) {
  let sex;

  const pet = {
    // 在这个上下文中：setName(newName) 等价于 setName: function (newName)
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Vivie");
console.log(pet.getName()); // Vivie

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver

// 备注：使用闭包时需要注意许多陷阱！
// 如果一个闭包的函数定义了一个和外部的某个变量名称相同的变量，那么这个闭包将无法引用外部作用域中的这个变量。（内部作用域的变量“覆盖”外部作用域，直至程序退出内部作用域。可以将其视作命名冲突）
// 函数的实际参数会被保存在一个类似数组的 arguments 对象中
function myConcat(separator) {
  let result = ""; // 初始化列表
  // 迭代 arguments
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
// 注意：箭头函数是没有this的
// 剩余参数语法允许将不确定数量的参数表示为数组
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

const arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]

function Person() {
  // 构造函数 Person() 将 `this` 定义为自身。
  this.age = 0;

  setInterval(function growUp() {
    // 在非严格模式下，growUp() 函数将 `this` 定义为“全局对象”，
    // 这与 Person() 定义的 `this` 不同。
    this.age++;
  }, 1000);
}

const p = new Person();
// js运算符和java的运算符几乎一样
// delete操作符，删除一个对象的属性或者一个数组中某一个键值
delete objectName.property;
delete objectName[index];
// 其实像这些都属于一元表达式 另外还有 new typeof等都是
propNameOrNumber in objectName
objectName instanceof objectType
void (0)  // 无论参数是什么都会返回undefined
// 安全的undefined：在老版本JavaScript中，undefined可以被重新赋值，使用void可以获得真正的undefined
super([arguments]); // calls the parent constructor. super.functionOnParent([arguments])
console.log(+Infinity, "表示正无穷；", -Infinity, "表示负无穷")
// 0b二进制 0o八进制 0x十六进制
// 安全整数就是可以精确表示的整数，超出范围就不能精确表示
const biggestNum = Number.MAX_VALUE;
const smallestNum = Number.MIN_VALUE;
const infiniteNum = Number.POSITIVE_INFINITY;
const negInfiniteNum = Number.NEGATIVE_INFINITY;
const notANum = Number.NaN;
0e-5   // 0
0e+5   // 0
5e1    // 50
175e-2 // 1.75
1e3    // 1000
1e-3   // 0.001
1E3    // 1000
Number.isFinite()
Number.isInteger()
Number.isNaN()
Number.isSafeInteger()
var a = 123, b = a.toFixed(2)//b="123.00"
var a = 123, b = a.toPrecision(2)//b="1.2e+2"
Number.MAX_SAFE_INTEGER  // 最大安全整数
Number.MIN_SAFE_INTEGER  // 最小安全整数
// 内置对象：Math Date RegExp String Number Object Function Array Error Symbol Promise Map Set WeakMap WeakSet Int8Array Int16Array Int32Array Uint8Array Uint16Array Uint32Array Float32Array Float64Array
const colors = ["red", "green", "blue"];
colors.forEach((color) => console.log(color));
// red
// green
// blue

let myArray = ["1", "2", "3"];
myArray = myArray.concat("a", "b", "c");
// myArray 现在是 ["1", "2", "3", "a", "b", "c"]

// const myArray = ["Wind", "Rain", "Fire"];
const list = myArray.join(" - "); // list 现在是 "Wind - Rain - Fire"
// const myArray = ["1", "2", "3"];
const last = myArray.pop();
// myArray 现在是 ["1", "2"]，last 为 "3"

// const myArray = ["1", "2", "3"];
// const first = myArray.shift();
// myArray 现在是 ["2", "3"]，first 为 "1"
// const myArray = ["1", "2", "3"];
myArray.unshift("4", "5");
// myArray 变成了 ["4", "5", "1", "2", "3"]
// let myArray = ["a", "b", "c", "d", "e"];
myArray = myArray.slice(1, 4); // [ "b", "c", "d"]
// 从索引 1 开始，提取所有的元素，直到索引 3 为止
// const myArray = ["a", "b", "c", "d", "e"];
myArray.at(-2); // "d"，myArray 的倒数第二个元素
// const myArray = ["1", "2", "3"];
myArray.reverse();
// 将原数组颠倒，myArray = [ "3", "2", "1" ]
// let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray 现在是 [1, 2, 3, 4]，因为子数组 [3, 4] 已被展平
// const myArray = ["Wind", "Rain", "Fire"];
myArray.sort();
// 对数组排序，myArray = ["Fire", "Rain", "Wind"]
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// 再试一次，这次从最后一次匹配之后开始
console.log(a.indexOf("b", 2)); // 3
console.log(a.indexOf("z")); // -1, 因为找不到 'z'
const a = ["a", "b", "c", "d", "a", "b"];
console.log(a.lastIndexOf("b")); // 5

// 再试一次，这次从最后一次匹配之前开始
console.log(a.lastIndexOf("b", 4)); // 1
console.log(a.lastIndexOf("z")); // -1
const a1 = ["a", "b", "c"];
// const a2 = a1.map((item) => item.toUpperCase());
console.log(a2); // ['A', 'B', 'C']
// const a1 = ["a", "b", "c"];
// const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']
// const a1 = ["a", 10, "b", 20, "c", 30];
const a2 = a1.filter((item) => typeof item === "number");
console.log(a2); // [10, 20, 30]
// const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.find((item) => typeof item === "number");
console.log(i); // 10
// const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLast((item) => typeof item === "number");
console.log(i); // 30
// const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findIndex((item) => typeof item === "number");
console.log(i); // 1
// const a1 = ["a", 10, "b", 20, "c", 30];
const i = a1.findLastIndex((item) => typeof item === "number");
console.log(i); // 5
function isNumber(value) {
  return typeof value === "number";
}
// const a1 = [1, 2, 3];
console.log(a1.every(isNumber)); // true
// const a2 = [1, "2", 3];
console.log(a2.every(isNumber)); // false
function isNumber(value) {
  return typeof value === "number";
}
// const a1 = [1, 2, 3];
console.log(a1.some(isNumber)); // true
// const a2 = [1, "2", 3];
console.log(a2.some(isNumber)); // true
const a3 = ["1", "2", "3"];
console.log(a3.some(isNumber)); // false
const a = [10, 20, 30];
const total = a.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60

const mapped = arr.map((i) => i + 1); // [ 2, 3, <2 empty items>, 6 ]
arr.forEach((i) => console.log(i)); // 1 2 5
const filtered = arr.filter(() => true); // [ 1, 2, 5 ]
const hasFalsy = arr.some((k) => !k); // false

// 属性迭代
const keys = Object.keys(arr); // [ '0', '1', '4' ]
for (const key in arr) {
  console.log(key);
}
// 输出：'0' '1' '4'
// 在对象中使用展开，使用属性枚举，而不是数组的迭代器
const objectSpread = { ...arr }; // { '0': 1, '1': 2, '4': 5 }

const values = Object.values(arr);
function printArguments() {
  Array.prototype.forEach.call(arguments, (item) => {
    console.log(item);
  });
}
// Map 对象就是一个简单的键/值对映射集合，可以按照数据插入时的顺序遍历所有的元素
const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meow");
sayings.set("elephant", "toot");
sayings.size; // 3
sayings.get("dog"); // woof
sayings.get("fox"); // undefined
sayings.has("bird"); // false
sayings.delete("dog");
sayings.has("dog"); // false

for (const [key, value] of sayings) {
  console.log(`${key} goes ${value}`);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
// js的底层object键只能是字符串或Symbol，虽然用数字等也可以，但是实际最后都会有转换成为字符串，也可以用字符串来索引
// 在 Map 里键可以是任意类型
// 必须手动计算 Object 的大小，但是可以很容易地获取 Map 的大小（size）
// Map 的遍历遵循元素的插入顺序
// Object 有原型，所以映射中有一些缺省的键。（可以用 map = Object.create(null) 回避）
const privates = new WeakMap();

function Public() {
  const me = {
    // 这里是私有数据
  };
  privates.set(this, me);
}

Public.prototype.method = function () {
  const me = privates.get(this);
  // 处理 `me` 中的私有数据
  // …
};

module.exports = Public;
// WeakMap 是键/值对的集合，其键必须是对象或非注册符号，其值为任意 JavaScript 类型，并且不会对其键创建强引用。也就是说，一个对象作为键出现在 WeakMap 中并不会阻止该对象被垃圾回收。一旦作为键的对象被收集，其在任何 WeakMap 中的相应值也会被垃圾收集，只要它们没有在其他地方被强引用。唯一可用作 WeakMap 键的原始类型类型是 symbol，更具体地说，是非注册 symbol，因为非注册 symbol 保证是唯一的，并且不能被重新创建
// Set 对象是一组唯一值的集合，可以按照添加顺序来遍历。Set 中的值只能出现一次；它在集合 Set 中是唯一
// const mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (const item of mySet) {
  console.log(item);
}
// 1
// "some text"
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1, 2, 3, 4]);

function showProps(obj, objName) {
  var result = "";
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      result += objName + "." + i + " = " + obj[i] + "\n";
    }
  }
  return result;
}

function listAllProperties(o) {
  var objectToInspect;
  var result = [];

  for (
    objectToInspect = o;
    objectToInspect !== null;
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  ) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
  }

  return result;
}

// Animal properties and method encapsulation
var Animal = {
  type: "Invertebrates", // 属性默认值
  displayType: function () {
    // 用于显示 type 属性的方法
    console.log(this.type);
  },
};

// 创建一种新的动物——animal1
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// 创建一种新的动物——Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Output:Fishes

object.methodname(params)

var d = Date.prototype;
Object.defineProperty(d, "year", {
  get: function () {
    return this.getFullYear();
  },
  set: function (y) {
    this.setFullYear(y);
  },
});

// 明确：js是没有传统的类的，但是也可以说类，因为现在都有类的概念了
class MyClass {
  // 构造函数
  constructor() {
    // 构造函数主体
  }
  // 实例字段
  myField = "foo";
  // 实例方法
  myMethod() {
    // myMethod 主体
  }
  // 静态字段
  static myStaticField = "bar";
  // 静态方法
  static myStaticMethod() {
    // myStaticMethod 主体
  }
  // 静态块
  static {
    // 静态初始化代码
  }
  // 字段、方法、静态字段、静态方法、静态块都可以使用“私有”形式
  #myPrivateField = "bar";
}

function MyClass() {
  this.myField = "foo";
  // 构造函数主体
}
MyClass.myStaticField = "bar";
MyClass.myStaticMethod = function () {
  // myStaticMethod 主体
};
MyClass.prototype.myMethod = function () {
  // myMethod 主体
};

(function () {
  // 静态初始化代码
})();

class Color {
  constructor(r, g, b) {
    // 将 RGB 值作为 `this` 的属性
    this.values = [r, g, b];
  }
}

class Color {
  constructor(r, g, b) {
    this.values = [r, g, b];
  }
  getRed() {
    return this.values[0];
  }
}

const red = new Color(255, 0, 0);
console.log(red.getRed()); // 255

class Color {
  #values;
  constructor(r, g, b) {
    this.#values = [r, g, b];
  }
  getRed() {
    return this.#values[0];
  }
  setRed(value) {
    if (value < 0 || value > 255) {
      throw new RangeError("无效的 R 值");
    }
    this.#values[0] = value;
  }
}

// const red = new Color(255, 0, 0);
red.setRed(1000); // RangeError：无效的 R 值

// 请记住，# 是一种特殊的标识符语法，你不能像字符串一样使用该字段名。"#values" in anotherColor 会查找一个名为 "#values" 的属性，而不是一个私有字段
class MyClass {
  luckyNumber = Math.random();
}
console.log(new MyClass().luckyNumber); // 0.5
console.log(new MyClass().luckyNumber); // 0.3

class Color {
  static isValid(r, g, b) {
    return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
  }
}

Color.isValid(255, 0, 0); // true
Color.isValid(1000, 0, 0); // false

class MyClass {
  static {
    MyClass.myStaticProperty = "foo";
  }
}

console.log(MyClass.myStaticProperty); // 'foo'

class Color {
  #values;
  constructor(r, g, b, a = 1) {
    this.#values = [r, g, b, a];
  }
  get alpha() {
    return this.#values[3];
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha 值必须在 0 与 1 之间");
    }
    this.#values[3] = value;
  }
}

class ColorWithAlpha extends Color {
  #alpha;
  constructor(r, g, b, a) {
    super(r, g, b);
    this.#alpha = a;
  }
  get alpha() {
    return this.#alpha;
  }
  set alpha(value) {
    if (value < 0 || value > 1) {
      throw new RangeError("Alpha 值必须在 0 与 1 之间");
    }
    this.#alpha = value;
  }
}

class ColorWithAlpha extends Color {
  // ...
  static isValid(r, g, b, a) {
    // 调用父类的 isValid()，并在此基础上增强返回值
    return super.isValid(r, g, b) && a >= 0 && a <= 1;
  }
}

console.log(ColorWithAlpha.isValid(255, 0, 0, -1)); // false
// 派生类无权访问父类的私有字段——这是 JavaScript 私有字段的一个关键特性（“硬私有”）。私有字段的有效范围被严格限制在类体内，所以任何外部代码都无权访问

doSomething()
  .then(function (result) {
    return doSomethingElse(result);
  })
  .then(function (newResult) {
    return doThirdThing(newResult);
  })
  .then(function (finalResult) {
    console.log(`得到最终结果：${finalResult}`);
  })
  .catch(failureCallback);

// 箭头函数表达式可以有隐式返回值；所以，() => x 是 () => { return x; } 的简写

doSomething()
  .then((url) => {
    // fetch(url) 前缺少 `return` 关键字。
    fetch(url);
  })
  .then((result) => {
    // result 是 undefined，因为上一个处理器没有返回任何东西。
    // 无法得知 fetch() 的返回值，也无法知道它是否成功。
  });

doSomething()
  .then((url) => {
    // 添加 `return` 关键字
    return fetch(url);
  })
  .then((result) => {
    // result 是一个 Response 对象
  });
const listOfIngredients = [];

doSomething()
  .then((url) => {
    // fetch(url) 前缺少 `return` 关键字。
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients 永远为 []，因为 fetch 请求还没有完成。
  });
// const listOfIngredients = [];

doSomething()
  .then((url) => {
    // fetch 调用前面现在包含了 `return` 关键字。
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        listOfIngredients.push(data);
      });
  })
  .then(() => {
    console.log(listOfIngredients);
    // listOfIngredients 现在将包含来自 fetch 调用的数据。
  });
async function logIngredients() {
  const url = await doSomething();
  const res = await fetch(url);
  const data = await res.json();
  listOfIngredients.push(data);
  console.log(listOfIngredients);
}
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => console.log(`得到最终结果：${finalResult}`))
  .catch(failureCallback);
doSomethingCritical()
  .then((result) =>
    doSomethingOptional()
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => { }),
  ) // 即便可选操作失败了，也会继续执行
  .then(() => moreCriticalStuff())
  .catch((e) => console.log(`严重失败：${e.message}`));



async function main() {
  try {
    const result = await doSomethingCritical();
    try {
      const optionalResult = await doSomethingOptional(result);
      await doSomethingExtraNice(optionalResult);
    } catch (e) {
      // 忽略可选步骤的失败并继续执行。
    }
    await moreCriticalStuff();
  } catch (e) {
    console.error(`严重失败：${e.message}`);
  }
}

new Promise((resolve, reject) => {
  console.log("初始化");

  resolve();
})
  .then(() => {
    throw new Error("有哪里不对了");

    console.log("执行「这个」");
  })
  .catch(() => {
    console.log("执行「那个」");
  })
  .then(() => {
    console.log("执行「这个」，无论前面发生了什么");
  });

process.on("unhandledRejection", (reason, promise) => {
  /* 你可以在这里添加一些代码，以便检查 promise 和 reason */
});

Promise.all([func1(), func2(), func3()]).then(([result1, result2, result3]) => {
  /* 使用 result1、result2 和 result3 */
});

[func1, func2, func3]
  .reduce((p, f) => p.then(f), Promise.resolve())
  .then((result3) => {
    /* 使用 result3 */
  });

Promise.resolve()
  .then(func1)
  .then(func2)
  .then(func3)
  .then((result3) => {
    /* 使用 result3 */
  });

const applyAsync = (acc, val) => acc.then(val);
const composeAsync =
  (...funcs) =>
    (x) =>
      funcs.reduce(applyAsync, Promise.resolve(x));

const transformData = composeAsync(func1, func2, func3);
const result3 = transformData(data);

let result;
for (const f of [func1, func2, func3]) {
  result = await f(result);
}
/* 使用最后的结果（即 result3）*/

setTimeout(() => saySomething("10 秒钟过去了"), 10 * 1000);
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10 * 1000)
  .then(() => saySomething("10 秒钟"))
  .catch(failureCallback);
function doSomething(callback) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    setTimeout(() => callback(), 1000);
  }
}

Promise.resolve().then(() => console.log(2));
console.log(1); // 1, 2

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait().then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4

const promise = new Promise((resolve, reject) => {
  console.log("Promise 执行函数");
  resolve();
}).then((result) => {
  console.log("Promise 回调（.then）");
});

setTimeout(() => {
  console.log("新一轮事件循环：Promise（已完成）", promise);
}, 0);

console.log("Promise（队列中）", promise);

const uint8 = new Uint8Array([1, 2, 3]);
console.log(uint8[0]); // 1

// 仅用作示例。不要在生产代码中使用。
uint8[-1] = 0;
uint8[2.5] = 0;
uint8[NaN] = 0;
console.log(Object.keys(uint8)); // ["0", "1", "2"]
console.log(uint8[NaN]); // undefined

// 非数字访问仍然有效
uint8[true] = 0;
console.log(uint8[true]); // 0

Object.freeze(uint8); // TypeError：无法冻结非空缓冲的视图

function toBinary(
  x,
  { type = "Float64", littleEndian = false, separator = " ", radix = 16 } = {},
) {
  const bytesNeeded = globalThis[`${type}Array`].BYTES_PER_ELEMENT;
  const dv = new DataView(new ArrayBuffer(bytesNeeded));
  dv[`set${type}`](0, x, littleEndian);
  const bytes = Array.from({ length: bytesNeeded }, (_, i) =>
    dv
      .getUint8(i)
      .toString(radix)
      .padStart(8 / Math.log2(radix), "0"),
  );
  return bytes.join(separator);
}
// 类型化数组
console.log(toBinary(1.1)); // 3f f1 99 99 99 99 99 9a
console.log(toBinary(1.1, { littleEndian: true })); // 9a 99 99 99 99 99 f1 3f
console.log(toBinary(20, { type: "Int8", radix: 2 })); // 00010100

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start;
  let iterationCount = 0;

  const rangeIterator = {
    next() {
      let result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
        nextIndex += step;
        iterationCount++;
        return result;
      }
      return { value: iterationCount, done: true };
    },
  };
  return rangeIterator;
}

let it = makeRangeIterator(1, 10, 2);

// let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log(`已迭代序列的大小：${result.value}`); // 5

function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let iterationCount = 0;
  for (let i = start; i < end; i += step) {
    iterationCount++;
    yield i;
  }
  return iterationCount;
}

function* makeIterator() {
  yield 1;
  yield 2;
}

// const it = makeIterator();

for (const itItem of it) {
  console.log(itItem);
}

console.log(it[Symbol.iterator]() === it); // true

// 这个例子向我们展示了生成器（迭代器）是可迭代对象，
// 它有一个 [Symbol.iterator]() 方法返回 it（它自己），
// 因此，it 对象只能迭代*一次*。

// 如果我们将它的 [Symbol.iterator]() 方法改为一个返回新的迭代器/生成器对象的函数/生成器，
// 它（it）就可以迭代多次了。

it[Symbol.iterator] = function* () {
  yield 2;
  yield 1;
};

var myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (let value of myIterable) {
  console.log(value);
}
// 1
// 2
// 3

[...myIterable]; // [1, 2, 3]

for (let value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next(); // { value: "a", done: false }

[a, b, c] = new Set(["a", "b", "c"]);
a; // "a"

function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    const reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}

const sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2

let handler = {
  get(target, name) {
    return name in target ? target[name] : 42;
  },
};

// let p = new Proxy({}, handler);
p.a = 1;

console.log(p.a, p.b); // 1, 42

const revocable = Proxy.revocable(
  {},
  {
    get(target, name) {
      return `[[${name}]]`;
    },
  },
);
const proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError: Cannot perform 'get' on a proxy that has been revoked
proxy.foo = 1; // TypeError: Cannot perform 'set' on a proxy that has been revoked
delete proxy.foo; // TypeError: Cannot perform 'deleteProperty' on a proxy that has been revoked
console.log(typeof proxy); // "object", `typeof` 不会触发任何陷阱

Reflect.has(Object, "assign"); // true

Function.prototype.apply.call(Math.floor, undefined, [1.75]);

Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"

Reflect.apply(Math.floor, undefined, [1.75]);
// 1;

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"

if (Reflect.defineProperty(target, property, attributes)) {
  // success
} else {
  // failure
}

const n = 123; // 为数值分配内存
const s = "azerty"; // 为字符串分配内存

const o = {
  a: 1,
  b: null,
}; // 为对象及其包含的值分配内存

// 为数组及其包含的值分配内存（就像对象一样）
const a = [1, null, "abra"];

function f(a) {
  return a + 2;
} // 为函数（可调用的对象）分配内存

// 函数表达式也会分配内存
someElement.addEventListener(
  "click",
  function () {
    someElement.style.backgroundColor = "blue";
  },
  false,
);

const d = new Date(); // 为 Date 对象分配内存

const e = document.createElement("div"); // 为 DOM 元素分配内存

// const s = "azerty";
// const s2 = s.substr(0, 3); // s2 是一个新的字符串
// 因为字符串是不可变的值，
// JavaScript 可能决定不分配内存，
// 只是存储了 [0-3] 的范围。

const a = ["yeah yeah", "no no"];
// const a2 = ["generation", "no no"];
// const a3 = a.concat(a2);
// 有四个元素的新数组，由 a 和 a2 其中的元素连接而成。

// let x = {
// a: {
// b: 2,
// },
// };
// 创建了两个对象。一个作为另一个的属性被引用。
// 另一个被赋值给变量‘x’。
// 很显然，没有可以被垃圾回收的对象。

let y = x;
// 变量‘y’是第二个拥有对象引用的变量。

x = 1;
// 现在，起初在‘x’中的对象有唯一的引用，就是变量‘y’。

let z = y.a;
// 引用对象的‘a’属性。
// 现在，这个对象有两个引用，一个作为属性，
// 另一个作为变量‘z’。

y = "mozilla";
// 起初在‘x’中的对象现在是零引用了。它可以被垃圾回收了。
// 但是，它的属性‘a’仍被变量‘z’引用，所以这个对象还不能回收。

z = null;
// 起初在 x 中的对象的属性‘a’是零引用了。这个对象可以被垃圾回收了。
// node --max-old-space-size=6000 index.js
// node --expose-gc --inspect index.js

class MyWeakMap {
  #marker = Symbol("MyWeakMapData");
  get(key) {
    return key[this.#marker];
  }
  set(key, value) {
    key[this.#marker] = value;
  }
  has(key) {
    return this.#marker in key;
  }
  delete(key) {
    delete key[this.#marker];
  }
}

function cached(getter) {
  // 一个 Map：从字符串 URL 到 WeakRef 结果
  const cache = new Map();
  return async (key) => {
    if (cache.has(key)) {
      const dereferencedValue = cache.get(key).deref();
      if (dereferencedValue !== undefined) {
        return dereferencedValue;
      }
    }
    const value = await getter(key);
    cache.set(key, new WeakRef(value));
    return value;
  };
}

// const getImage = cached((url) => fetch(url).then((res) => res.blob()));

function cached(getter) {
  // 一个 Map：从字符串 URL 到 WeakRef 结果
  const cache = new Map();
  // 每次值被垃圾回收之后，用缓存中的 key 作为参数调用回调，能移除缓存条目
  const registry = new FinalizationRegistry((key) => {
    // 注意：测试 WeakRef 真的为空很重要。否则，回调可能在用这个 key 添加新对象之后调用，然后那个新的、有效的对象就被删除了
    if (!cache.get(key)?.deref()) {
      cache.delete(key);
    }
  });
  return async (key) => {
    if (cache.has(key)) {
      return cache.get(key).deref();
    }
    const value = await getter(key);
    cache.set(key, new WeakRef(value));
    registry.register(value, key);
    return value;
  };
}

const getImage = cached((url) => fetch(url).then((res) => res.blob()));

const stream = new ReadableStream({
  start(controller) {
    controller.enqueue("a");
    controller.enqueue("b");
    controller.enqueue("c");
    controller.close();
  },
});

async function readUntil(stream, text) {
  const reader = stream.getReader();
  let chunk = await reader.read();

  while (!chunk.done && chunk.value !== text) {
    console.log(chunk);
    chunk = await reader.read();
  }
  // We forgot to release the lock here
}

readUntil(stream, "b").then(() => {
  const anotherReader = stream.getReader();
  // TypeError: ReadableStreamDefaultReader constructor can only
  // accept readable streams that are not yet locked to a reader
});

async function readUntil(stream, text) {
  const reader = stream.getReader();
  try {
    let chunk = await reader.read();

    while (!chunk.done && chunk.value !== text) {
      console.log(chunk);
      chunk = await reader.read();
    }
  } finally {
    reader.releaseLock();
  }
}

const reader1 = stream1.getReader();
const reader2 = stream2.getReader();
try {
  // do something with reader1 and reader2
} finally {
  reader1.releaseLock();
  reader2.releaseLock();
}

// For demonstration
class MyReader {
  // A wrapper
  [Symbol.dispose]() {
    this.releaseLock();
  }
  releaseLock() {
    // Logic to release resources
  }
}

// OR, an alias
MyReader.prototype[Symbol.dispose] = MyReader.prototype.releaseLock;

{
  await using fileHandle = open("file.txt", "w");
  await fileHandle.write("Hello");

  // fileHandle.close() is called and awaited
}

{
  using disposer = new DisposableStack();
  let reader;
  if (someCondition) {
    reader = disposer.use(stream.getReader());
  } else {
    reader = disposer.use(stream.getReader({ mode: "byob" }));
  }
  // Do something with reader
  // Before scope exit, disposer is disposed, which disposes reader
}

{
  using disposer = new DisposableStack();
  // Suppose reader does not have the [Symbol.dispose]() method,
  // then it cannot be used with using.
  // However, we can manually pass a disposer function to disposer.adopt
  const reader = disposer.adopt(stream.getReader(), (reader) =>
    reader.releaseLock(),
  );
  // Do something with reader
  // Before scope exit, disposer is disposed, which disposes reader
}

class MyResource {
  #resource1;
  #resource2;
  #disposables;
  constructor() {
    using disposer = new DisposableStack();
    this.#resource1 = disposer.use(getResource1());
    this.#resource2 = disposer.use(getResource2());
    // If we made it here, then there were no errors during construction and
    // we can safely move the disposables out of `disposer` and into `#disposables`.
    this.#disposables = disposer.move();
    // If construction failed, then `disposer` would be disposed before reaching
    // the line above, disposing `#resource1` and `#resource2`.
  }
  [Symbol.dispose]() {
    this.#disposables.dispose(); // Dispose `#resource2` and `#resource1`.
  }
}

// const stream = new ReadableStream({
//   start(controller) {
//     controller.enqueue("a");
//     controller.enqueue(null);
//     controller.enqueue("b");
//     controller.enqueue("c");
//     controller.close();
//   },
// });

readUntil(stream, "b")
  .catch((e) => console.error(e)) // TypeError: chunk.toUpperCase is not a function
  .then(() => {
    const anotherReader = stream.getReader();
    // Successfully creates another reader
  });

class MyReader {
  [Symbol.dispose]() {
    throw new Error("Failed to release lock");
  }
}

function doSomething() {
  using reader = new MyReader();
  throw new Error("Failed to read");
}

try {
  doSomething();
} catch (e) {
  console.error(e); // SuppressedError: An error was suppressed during disposal
}

async function getAllData(urls) {
  using disposer = new DisposableStack();
  const { signal } = disposer.adopt(new AbortController(), (controller) =>
    controller.abort(),
  );

  // Fetch all URLs in parallel
  // Automatically cancel any incomplete requests if any request fails
  const pages = await Promise.all(
    urls.map((url) =>
      fetch(url, { signal }).then((response) => {
        if (!response.ok)
          throw new Error(
            `Response error: ${response.status} - ${response.statusText}`,
          );
        return response.text();
      }),
    ),
  );
  return pages;
}

const downloadButton = document.getElementById("download-button");
const exampleBlob = new Blob(["example data"]);

downloadButton.addEventListener("click", () => {
  using disposer = new DisposableStack();
  const link = document.createElement("a");
  const url = disposer.adopt(
    URL.createObjectURL(exampleBlob),
    URL.revokeObjectURL,
  );

  link.href = url;
  link.download = "example.txt";
  link.click();
});

class MyReader {
  [Symbol.dispose]() {
    throw new Error("Failed to release lock on reader");
  }
}

class MyWriter {
  [Symbol.dispose]() {
    throw new Error("Failed to release lock on writer");
  }
}

function doSomething() {
  using reader = new MyReader();
  using writer = new MyWriter();
  throw new Error("Failed to read");
}

try {
  doSomething();
} catch (e) {
  console.error(e); // SuppressedError: An error was suppressed during disposal
  console.error(e.suppressed); // SuppressedError: An error was suppressed during disposal
  console.error(e.error); // Error: Failed to release lock on reader
  console.error(e.suppressed.suppressed); // Error: Failed to read
  console.error(e.suppressed.error); // Error: Failed to release lock on writer
}

export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return { length, x, y, color };
}

import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";

const myCanvas = create("myCanvas", document.body, 480, 320);
const reportList = createReportList(myCanvas.id);

const square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);


// 裸模块名称作为模块标识符
import { name as squareNameOne } from "shapes";
import { name as squareNameTwo } from "shapes/square";

// 重新映射一个 URL 到另一个 URL
import { name as squareNameThree } from "https://example.com/shapes/square.js";

// {
//   "imports": {
//     "lodash": "/node_modules/lodash-es/lodash.js",
//     "lodash/": "/node_modules/lodash-es/"
//   }
// }

import * as Module from "/modules/module.js";

// BigInt
// const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false，因为 9007199254740992n 和 9007199254740993n 不相等

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true，因为都等于 9007199254740992

const f = {
  a: 1,
  b: 2,
  // __proto__ 设置了 [[Prototype]]。在这里它被指定为另一个对象字面量。
  __proto__: {
    b: 3,
    c: 4,
  },
};

// o.[[Prototype]] 具有属性 b 和 c。
// o.[[Prototype]].[[Prototype]] 是 Object.prototype（我们会在下文解释其含义）。
// 最后，o.[[Prototype]].[[Prototype]].[[Prototype]] 是 null。
// 这是原型链的末尾，
// 因为根据定义，null 没有 [[Prototype]]。
// 因此，完整的原型链看起来像这样：
// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> Object.prototype ---> null

console.log(o.a); // 1
// o 上有自有属性“a”吗？有，且其值为 1。

console.log(o.b); // 2
// o 上有自有属性“b”吗？有，且其值为 2。
// 原型也有“b”属性，但其没有被访问。
// 这被称为属性遮蔽（Property Shadowing）

console.log(o.c); // 4
// o 上有自有属性“c”吗？没有，检查其原型。
// o.[[Prototype]] 上有自有属性“c”吗？有，其值为 4。

console.log(o.d); // undefined
// o 上有自有属性“d”吗？没有，检查其原型。
// o.[[Prototype]] 上有自有属性“d”吗？没有，检查其原型。
// o.[[Prototype]].[[Prototype]] 是 Object.prototype 且
// 其默认没有“d”属性，检查其原型。
// o.[[Prototype]].[[Prototype]].[[Prototype]] 为 null，停止搜索，
// 未找到该属性，返回 undefined。

const j = {
  a: 1,
  b: 2,
  // __proto__ 设置了 [[Prototype]]。在这里它被指定为另一个对象字面量。
  __proto__: {
    b: 3,
    c: 4,
    __proto__: {
      d: 5,
    },
  },
};

// { a: 1, b: 2 } ---> { b: 3, c: 4 } ---> { d: 5 } ---> Object.prototype ---> null

console.log(o.d); // 5


const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// 当调用 parent.method 时，“this”指向了 parent

// child 是一个继承了 parent 的对象
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3
// 调用 child.method 时，“this”指向了 child。
// 又因为 child 继承的是 parent 的方法，
// 首先在 child 上寻找属性“value”。
// 然而，因为 child 没有名为“value”的自有属性，
// 该属性会在 [[Prototype]] 上被找到，即 parent.value。

child.value = 4; // 将 child 上的属性“value”赋值为 4。
// 这会遮蔽 parent 上的“value”属性。
// child 对象现在看起来是这样的：
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// 因为 child 现在拥有“value”属性，“this.value”现在表示 child.value

const boxPrototype = {
  getValue() {
    return this.value;
  },
};

const boxe = [
  { value: 1, __proto__: boxPrototype },
  { value: 2, __proto__: boxPrototype },
  { value: 3, __proto__: boxPrototype },
];


// 构造函数
function Box(value) {
  this.value = value;
}

// 使用 Box() 构造函数创建的所有盒子都将具有的属性
Box.prototype.getValue = function () {
  return this.value;
};

const boxes = [new Box(1), new Box(2), new Box(3)];

function Box(value) {
  this.value = value;
}
Box.prototype.getValue = function () {
  return this.value;
};
const box = new Box(1);

// 在创建实例后修改 Box.prototype
Box.prototype.getValue = function () {
  return this.value + 1;
};
box.getValue(); // 2

const t = { a: 1 };
// 新创建的对象 o 以 Object.prototype 作为它的 [[Prototype]]
// Object.prototype 以 null 作为它的 [[Prototype]]。
// o ---> Object.prototype ---> null

const b = ["yo", "whadup", "?"];
// 数组继承了 Array.prototype（具有 indexOf、forEach 等方法）
// 原型链如下所示：
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}
// 函数继承了 Function.prototype（具有 call、bind 等方法）
// f ---> Function.prototype ---> Object.prototype ---> null

const p = { b: 2, __proto__: o };
// 可以通过 __proto__ 字面量属性（不要将其与 Object.prototype.__proto__ 访问器弄混）将新创建的对象的
// [[Prototype]] 指向另一个对象。
// p ---> o ---> Object.prototype ---> null

const a = { a: 1 };
// a ---> Object.prototype ---> null

const b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b.a); // 1（继承的）

const c = Object.create(b);
// c ---> b ---> a ---> Object.prototype ---> null

const d = Object.create(null);
// d ---> null（d 是一个直接以 null 为原型的对象）
console.log(d.hasOwnProperty);
// undefined，因为 d 没有继承 Object.prototype

function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype.addVertex = function (v) {
  this.vertices.push(v);
};

const g = new Graph();
// g ---> Graph.prototype ---> Object.prototype ---> null

g.hasOwnProperty("vertices"); // true
Object.hasOwn(g, "vertices"); // true

g.hasOwnProperty("nope"); // false
Object.hasOwn(g, "nope"); // false

g.hasOwnProperty("addVertex"); // false
Object.hasOwn(g, "addVertex"); // false

Object.getPrototypeOf(g).hasOwnProperty("addVertex"); // true

// ==================== 补充的JavaScript语法和概念 ====================

// 1. 模块化 (ES6 Modules)
// export 和 import 语句用于模块间共享代码
// export const myVariable = 'hello';
// import { myVariable } from './myModule.js';

// 2. 解构赋值 (Destructuring Assignment)
const [first, second, ...rest] = [1, 2, 3, 4, 5];
const { name, age } = { name: 'John', age: 30 };

// 3. 模板字符串 (Template Literals)
const templateString = `Hello, ${name}! You are ${age} years old.`;

// 4. 默认参数 (Default Parameters)
function greet(name = 'Anonymous', greeting = 'Hello') {
  return `${greeting}, ${name}!`;
}

// 5. 剩余参数 (Rest Parameters)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// 6. 展开运算符 (Spread Operator)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// 7. 箭头函数 (Arrow Functions)
const arrowFunction = (param) => param * 2;
const multiLineArrow = (a, b) => {
  const result = a + b;
  return result;
};

// 8. Promise (异步处理)
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Promise resolved!');
  }, 1000);
});

myPromise.then(result => console.log(result))
  .catch(error => console.log(error));

// 9. async/await (异步处理的语法糖)
async function asyncFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

// 10. 生成器 (Generators)
function* generatorFunction() {
  yield 1;
  yield 2;
  return 3;
}

const generator = generatorFunction();
console.log(generator.next()); // { value: 1, done: false }

// 11. 迭代器 (Iterators)
const myIterable = {
  from: 0,
  to: 3,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { value: this.current++, done: false };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

// 12. Set 和 WeakSet
const mySet = new Set([1, 2, 3, 2, 1]); // Set { 1, 2, 3 }
const myWeakSet = new WeakSet(); // 只能存储对象，不阻止垃圾回收

// 13. Map 和 WeakMap
const myMap = new Map([['key1', 'value1'], ['key2', 'value2']]);
const myWeakMap = new WeakMap(); // 键必须是对象，不阻止垃圾回收

// 14. Proxy 和 Reflect
const target = { message: 'Hello' };
const proxy = new Proxy(target, {
  get(obj, prop) {
    console.log(`Getting ${prop}`);
    return obj[prop];
  }
});

// 15. Promise 静态方法
Promise.all([Promise.resolve(1), Promise.resolve(2)]).then(results => console.log(results));
Promise.race([Promise.resolve(1), Promise.resolve(2)]).then(result => console.log(result));
Promise.allSettled([Promise.resolve(1), Promise.reject(2)]).then(results => console.log(results));

// 16. 数组方法补充
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sumOfNumbers = numbers.reduce((acc, n) => acc + n, 0);

// 17. 字符串方法补充
const str = 'Hello World';
console.log(str.startsWith('Hello')); // true
console.log(str.endsWith('World'));   // true
console.log(str.includes('lo'));      // true
console.log('x'.repeat(3));           // 'xxx'

// 18. 数值和数学方法
Number.EPSILON;           // 极小的数值
Number.isInteger(42);     // true
Math.trunc(4.7);         // 4 (截断小数部分)
Math.sign(-5);           // -1 (符号函数)

// 19. 对象方法补充
Object.assign({}, { a: 1 }, { b: 2 }); // { a: 1, b: 2 }
Object.entries({ a: 1, b: 2 });        // [['a', 1], ['b', 2]]
Object.fromEntries([['a', 1], ['b', 2]]); // { a: 1, b: 2 }

// 20. 错误处理和调试
try {
  throw new Error('Something went wrong');
} catch (error) {
  console.error(error.message);
  console.trace(); // 打印堆栈跟踪
} finally {
  // 无论如何都会执行的代码
}

// 21. 事件循环和异步编程概念
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// 输出顺序: 1, 4, 3, 2

// 22. Web API 相关 (在浏览器环境中)
// localStorage.setItem('key', 'value');
// sessionStorage.getItem('key');
// fetch('https://api.example.com/data').then(response => response.json());

// 23. 正则表达式
const regex = /\d+/g;
const text = 'There are 123 apples and 456 oranges';
const matches = text.match(regex); // ['123', '456']

// 24. 日期和时间
const now = new Date();
const timestamp = Date.now();
const formattedDate = now.toLocaleDateString();

// 25. 类型检查和转换
typeof 'hello';        // 'string'
typeof 42;             // 'number'
typeof true;           // 'boolean'
typeof {};             // 'object'
typeof null;           // 'object' (历史bug)
typeof undefined;      // 'undefined'
typeof Symbol();       // 'symbol'
typeof BigInt(1);      // 'bigint'

// 26. 类型转换
String(123);           // '123'
Number('123');         // 123
Boolean('hello');      // true
parseInt('123.45');    // 123
parseFloat('123.45');  // 123.45

// 27. 严格模式
'use strict';
// 在严格模式下，一些不安全的操作会抛出错误

// 28. 模块模式和设计模式
const myModule = (function() {
  let privateVariable = 'secret';
  
  return {
    publicMethod: function() {
      return privateVariable;
    }
  };
})();

// 29. 函数式编程概念
// const compose = (f, g) => x =>/ f(g(x));
// const pipe = (...fns) => x => fns.reduce((v, fn) => fn(v), x);

// 30. 性能优化和内存管理
// 避免内存泄漏：及时清理事件监听器、定时器等
// const timer = setTimeout(() => { /* ... */ }, 1000);
// clearTimeout(timer);

// 这些语法和概念涵盖了现代JavaScript开发的核心知识
// 掌握这些内容将帮助您成为JavaScript专家并进入大厂

// ==================== 更多JavaScript语法和概念补充 ====================

// 31. Symbol类型详解 - 原始数据类型，表示唯一值
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false - 每个Symbol都是唯一的

// 使用Symbol作为对象属性键
const objWithSymbolKey = {};
const symKey = Symbol('key');
objWithSymbolKey[symKey] = 'value';
console.log(objWithSymbolKey[symKey]); // 'value'

// 全局Symbol注册表
const globalSym1 = Symbol.for('myKey');
const globalSym2 = Symbol.for('myKey');
console.log(globalSym1 === globalSym2); // true - 相同键返回相同Symbol

// 常用内置Symbol
const myIterableObj = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

// 32. BigInt类型 - 表示任意精度的整数
const bigNumber = BigInt(123456789012345678901234567890n);
const anotherBigNumber = 123456789012345678901234567890n;

// 33. 模块加载器和动态导入
// 静态导入 (编译时确定)
// import { someFunc } from './module.js';

// 动态导入 (运行时确定)
// const module = await import('./module.js');
// 或者
// import('./module.js').then(module => {
//   // 使用module
// });

// 34. 代理(Proxy)高级用法
const validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value) || value < 0) {
        throw new Error('Age must be a positive integer');
      }
    }
    obj[prop] = value;
    return true;
  }
};

const person = new Proxy({}, validator);
person.name = 'John';
person.age = 30; // 正常
// person.age = 'thirty'; // 抛出错误

// 35. Reflect API详解
const objToReflect = { x: 1, y: 2 };
const handlerForReflect = {
  get(target, prop, receiver) {
    console.log(`Getting ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`Setting ${prop} to ${value}`);
    return Reflect.set(target, prop, value, receiver);
  }
};

const proxyWithReflect = new Proxy(objToReflect, handlerForReflect);
proxyWithReflect.x = 42; // 日志输出设置操作
const value = proxyWithReflect.x; // 日志输出获取操作

// 36. TypedArray - 二进制数据处理
const buffer = new ArrayBuffer(16); // 16字节缓冲区
const int32View = new Int32Array(buffer); // 每个元素4字节，共4个元素
const float64View = new Float64Array(buffer); // 每个元素8字节，共2个元素

int32View[0] = 42;
console.log(int32View[0]); // 42

// 37. WeakMap和WeakSet高级应用
// WeakMap用于存储对象的私有数据
const privateData = new WeakMap();

class MyClassWithPrivate {
  constructor() {
    privateData.set(this, { privateProp: 'secret' });
  }
  
  getPrivateProp() {
    return privateData.get(this).privateProp;
  }
}

// 38. 事件循环、任务队列详解
// 宏任务: setTimeout, setInterval, setImmediate, I/O, UI渲染
// 微任务: Promise.then, queueMicrotask, MutationObserver

// 示例：任务优先级
console.log('Start');
setTimeout(() => console.log('setTimeout'), 0); // 宏任务

Promise.resolve()
  .then(() => console.log('Promise 1'))
  .then(() => console.log('Promise 2'));

queueMicrotask(() => console.log('Microtask'));

console.log('End');

// 输出顺序: Start, End, Promise 1, Microtask, Promise 2, setTimeout

// 39. 尾调用优化 (TCO - Tail Call Optimization)
// 在严格模式下，当函数调用是尾调用时，引擎可以优化调用栈
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, acc * n); // 尾调用
}

// 40. 模式匹配和解构高级用法
const complexObj = {
  user: {
    id: 1,
    name: 'John',
    preferences: {
      theme: 'dark',
      language: 'en'
    }
  },
  items: [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ]
};

// 嵌套解构
const { 
  user: { 
    name: userName, 
    preferences: { theme } 
  },
  items: [firstItem, ...restItems]
} = complexObj;

// 41. 迭代协议详解
// 可迭代对象必须实现 [Symbol.iterator] 方法
const customIterable = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,
      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// 42. 生成器高级用法
function* fibonacciGenerator() {
  let prev = 0, curr = 1;
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr]; // 解构赋值
  }
}

const fib = fibonacciGenerator();
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3

// 43. 异步生成器
async function* asyncGenerator() {
  let i = 0;
  while (i < 3) {
    yield await Promise.resolve(i++);
  }
}

// 使用异步生成器
async function useAsyncGenerator() {
  for await (const value of asyncGenerator()) {
    console.log(value); // 0, 1, 2
  }
}

// 44. 装饰器模式 (提案阶段，需要编译器支持)
// @exampleDecorator
// class MyClass {
//   @readonly
//   method() { }
// }

// 45. 可选链操作符 (?.) - ES2020
const objWithDeepNesting = {
  user: {
    address: {
      street: '123 Main St'
    }
  }
};

// 安全访问深层嵌套属性
const street = objWithDeepNesting?.user?.address?.street;
const invalid = objWithDeepNesting?.user?.nonexistent?.prop; // undefined

// 46. 空值合并操作符 (??) - ES2020
const nullValue = null;
const undefinedValue = undefined;
const emptyString = '';
const zero = 0;

console.log(nullValue ?? 'default'); // 'default'
console.log(undefinedValue ?? 'default'); // 'default'
console.log(emptyString ?? 'default'); // '' (因为空字符串是真值)
console.log(zero ?? 'default'); // 0 (因为0是真值)

// 47. 逻辑赋值操作符 - ES2021
let a = false;
let b = 'value';
a ||= b; // 等价于 a = a || b
console.log(a); // 'value'

// let c = 'existing';
let d = 'new';
c &&= d; // 等价于 c = c && d
console.log(c); // 'new'

// let e = null;
let f = 'fallback';
e ??= f; // 等价于 e = e ?? f
console.log(e); // 'fallback'

// 48. 数字分隔符 - ES2021
const million = 1_000_000;
const creditCard = 1234_5678_9012_3456;
const binary = 0b1010_0001_1000_0101;
const hex = 0xA0_B0_C0;

// 49. Promise.allSettled, Promise.any - ES2020
const promises = [
  Promise.resolve(1),
  Promise.reject('error'),
  Promise.resolve(3)
];

// Promise.allSettled - 等待所有Promise完成（无论成功或失败）
Promise.allSettled(promises).then(results => {
  results.forEach((result, i) => {
    if (result.status === 'fulfilled') {
      console.log(`Promise ${i} fulfilled with value: ${result.value}`);
    } else {
      console.log(`Promise ${i} rejected with reason: ${result.reason}`);
    }
  });
});

// 50. Intl国际化API
// 数字格式化
const number = 123456.789;
console.log(new Intl.NumberFormat('de-DE').format(number)); // 123.456,789
console.log(new Intl.NumberFormat('ja-JP').format(number)); // 123,456.789

// 日期格式化
const date = new Date();
console.log(new Intl.DateTimeFormat('zh-CN').format(date));
console.log(new Intl.DateTimeFormat('en-US').format(date));

// 货币格式化
console.log(new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'CNY' }).format(1000));
console.log(new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(1000));

// 51. Web API相关 - 在浏览器环境中使用
// Fetch API
// fetch('/api/data')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// 52. 错误类型详解
try {
  throw new TypeError('This is a type error');
} catch (e) {
  if (e instanceof TypeError) {
    console.log('Handling TypeError:', e.message);
  } else if (e instanceof ReferenceError) {
    console.log('Handling ReferenceError:', e.message);
  } else {
    console.log('Handling generic error:', e.message);
  }
}

// 53. 内存管理和垃圾回收
// 避免内存泄漏的实践
let largeDataStructure = new Array(1000000).fill('data');

// 正确释放引用
largeDataStructure = null;

// 事件监听器管理
// element.addEventListener('click', handler);
// // 在适当的时候移除监听器
// element.removeEventListener('click', handler);

// 54. 性能优化技巧
// 防抖函数
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 节流函数
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

// 55. 设计模式示例 - 观察者模式
class Subject {
  constructor() {
    this.observers = [];
  }
  
  subscribe(observer) {
    this.observers.push(observer);
  }
  
  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }
  
  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  
  update(data) {
    console.log(`${this.name} received update:`, data);
  }
}

// 使用示例
const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify('Hello Observers!');

// 56. 深拷贝实现
function deepClone(obj, visited = new WeakMap()) {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (visited.has(obj)) return visited.get(obj); // 处理循环引用
  
  const clonedObj = Array.isArray(obj) ? [] : {};
  visited.set(obj, clonedObj);
  
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key], visited);
    }
  }
  
  return clonedObj;
}

// 57. 高阶函数应用
const pipe = (...fns) => (value) => fns.reduce((acc, fn) => fn(acc), value);
const compose = (...fns) => (value) => fns.reduceRight((acc, fn) => fn(acc), value);

// 示例：数值处理管道
const add = x => y => x + y;
const multiply = x => y => x * y;
const divide = x => y => y / x;

const calculation = pipe(
  add(5),      // 10 + 5 = 15
  multiply(2), // 15 * 2 = 30
  divide(6)    // 30 / 6 = 5
)(10);

console.log(calculation); // 5

// 58. 类型检查函数
function isType(type) {
  return (value) => Object.prototype.toString.call(value) === `[object ${type}]`;
}

const isArray = isType('Array');
const isObject = isType('Object');
const isFunction = isType('Function');
const isDate = isType('Date');

console.log(isArray([1, 2, 3])); // true
console.log(isObject({})); // true
console.log(isFunction(() => {})); // true
console.log(isDate(new Date())); // true

// 59. 实用工具函数
// 防止多次点击
function once(fn) {
  let called = false;
  return function(...args) {
    if (!called) {
      called = true;
      return fn.apply(this, args);
    }
  };
}

// 柯里化函数
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// 使用示例
const addThree = (a, b, c) => a + b + c;
const curriedAdd = curry(addThree);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6

// 60. 学习路径总结
/*
 * 基础阶段：
 * 1. 语法基础：变量、数据类型、运算符、控制流
 * 2. 函数：声明、参数、作用域、闭包
 * 3. 对象和数组：创建、操作、遍历
 * 4. DOM操作：选择器、事件处理
 *
 * 进阶阶段：
 * 1. ES6+特性：箭头函数、解构、模块、类
 * 2. 异步编程：Promise、async/await、事件循环
 * 3. 面向对象：原型链、继承、设计模式
 * 4. 错误处理：try/catch、错误类型
 *
 * 高级阶段：
 * 1. 性能优化：内存管理、算法优化
 * 2. 架构设计：模块化、组件化、状态管理
 * 3. 工具链：构建工具、测试框架、代码质量
 * 4. 框架深度：React/Vue/Angular等框架原理
 *
 * 专家阶段：
 * 1. 编译原理：AST、转译器、构建优化
 * 2. 运行时优化：V8引擎、内存管理、性能调优
 * 3. 系统设计：微前端、SSR、性能监控
 * 4. 团队协作：代码规范、工程化、技术选型
 */

console.log('JavaScript学习路径已补充完整，继续学习成为大厂专家！');