/**
 * JavaScript Complete Guide - 从入门到精通
 * 
 * 本文件涵盖了JavaScript的所有核心语法和高级概念
 * 按照循序渐进的方式组织，帮助学习者达到专家级水平
 */

// ========================================
// 第一部分：基础语法和变量声明
// ========================================

// 1. 变量声明方式
var oldStyle = "传统声明方式"; // 已不推荐使用
let mutableVariable = "可变变量"; // 推荐用于可变变量
const immutableVariable = "不可变变量"; // 推荐用于不可变变量

// 2. 数据类型
// 原始类型
const primitiveTypes = {
  string: "字符串类型",
  number: 42,
  boolean: true,
  undefined: undefined,
  nullValue: null,
  symbol: Symbol("唯一值"),
  bigInt: BigInt(123456789012345678901234567890n)
};

// 对象类型
const objectTypes = {
  object: { key: "值" },
  array: [1, 2, 3],
  function: function() { return "函数"; },
  date: new Date(),
  regex: /pattern/g,
  error: new Error("错误对象")
};

// ========================================
// 第二部分：运算符
// ========================================

// 算术运算符
const arithmetic = {
  addition: 5 + 3,
  subtraction: 5 - 3,
  multiplication: 5 * 3,
  division: 5 / 3,
  modulus: 5 % 3,
  exponentiation: 5 ** 3
};

// 比较运算符
const comparisons = {
  equal: 5 == "5",
  strictEqual: 5 === "5",
  notEqual: 5 != "5",
  strictNotEqual: 5 !== "5",
  greater: 5 > 3,
  less: 5 < 3,
  greaterEqual: 5 >= 3,
  lessEqual: 5 <= 3
};

// 逻辑运算符
const logical = {
  and: true && false,
  or: true || false,
  not: !true
};

// 位运算符
const bitwise = {
  and: 5 & 3,    // 0101 & 0011 = 0001 (1)
  or: 5 | 3,     // 0101 | 0011 = 0111 (7)
  xor: 5 ^ 3,    // 0101 ^ 0011 = 0110 (6)
  not: ~5,       // ~0101 = ...1010 (-6)
  leftShift: 5 << 1,     // 0101 << 1 = 1010 (10)
  rightShift: 5 >> 1,    // 0101 >> 1 = 0010 (2)
  unsignedRightShift: 5 >>> 1  // 0101 >>> 1 = 0010 (2)
};

// 其他运算符
const otherOperators = {
  ternary: 5 > 3 ? "真" : "假",
  assignment: (() => {
    let a = 5;
    a += 3;  // 等同于 a = a + 3
    return a;
  })(),
  nullishCoalescing: null ?? "默认值",  // ES2020
  optionalChaining: { a: { b: 5 }}?.a?.b  // ES2020
};

// ========================================
// 第三部分：控制流程语句
// ========================================

// 条件语句
function conditionalStatements() {
  const value = 10;
  
  // if-else
  if (value > 10) {
    console.log("大于10");
  } else if (value === 10) {
    console.log("等于10");
  } else {
    console.log("小于10");
  }
  
  // switch
  switch (value) {
    case 10:
      console.log("值为10");
      break;
    case 20:
      console.log("值为20");
      break;
    default:
      console.log("其他值");
  }
  
  // 三元运算符
  const result = value > 5 ? "大于5" : "不大于5";
}

// 循环语句
function loopStatements() {
  // for 循环
  for (let i = 0; i < 5; i++) {
    if (i === 3) continue; // 跳过当前迭代
    if (i === 4) break;    // 跳出循环
    console.log(`for循环: ${i}`);
  }
  
  // while 循环
  let count = 0;
  while (count < 3) {
    console.log(`while循环: ${count}`);
    count++;
  }
  
  // do-while 循环
  let num = 0;
  do {
    console.log(`do-while循环: ${num}`);
    num++;
  } while (num < 3);
  
  // for...in 循环（遍历对象的键）
  const obj = { a: 1, b: 2, c: 3 };
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`for-in: ${key} = ${obj[key]}`);
    }
  }
  
  // for...of 循环（遍历可迭代对象的值）
  const arr = [1, 2, 3];
  for (const value of arr) {
    console.log(`for-of: ${value}`);
  }
}

// ========================================
// 第四部分：函数
// ========================================

// 1. 函数声明
function regularFunction(name, age = 18) {
  return `姓名: ${name}, 年龄: ${age}`;
}

// 2. 函数表达式
const functionExpression = function(name) {
  return `函数表达式: ${name}`;
};

// 3. 箭头函数
const arrowFunction = (name) => `箭头函数: ${name}`;
const simpleArrow = () => "简单箭头函数";

// 4. 立即执行函数表达式 (IIFE)
const iifeResult = (function() {
  return "立即执行函数";
})();

// 5. 高阶函数
function higherOrderFunction(callback) {
  return callback("参数");
}

// 6. 闭包
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;  // 内部函数访问外部函数的变量
  };
}
const closure = outerFunction(10);

// 7. 参数处理
function argumentHandling(...args) {
  // arguments 对象（非箭头函数中可用）
  console.log("参数数量:", args.length);
  console.log("参数数组:", args);
  
  // 展开运算符
  const numbers = [1, 2, 3, 4, 5];
  const max = Math.max(...numbers);
  return max;
}

// 8. 递归函数
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

// ========================================
// 第五部分：对象和原型
// ========================================

// 1. 对象字面量
const person = {
  name: "张三",
  age: 25,
  // 方法简写
  greet() {
    return `你好，我是${this.name}`;
  },
  // 计算属性名
  ["prop_" + Math.random()]: "随机属性",
  // getter/setter
  _salary: 5000,
  get salary() {
    return this._salary;
  },
  set salary(value) {
    if (value >= 0) {
      this._salary = value;
    } else {
      throw new Error("薪资不能为负数");
    }
  }
};

// 2. 对象属性操作
const objOperations = {
  // 对象解构
  destructure: () => {
    const { name, age } = person;
    console.log(`解构: ${name}, ${age}`);
    
    // 嵌套解构
    const nested = {
      user: {
        personal: { name: "李四", age: 30 }
      }
    };
    const { user: { personal: { name: userName } } } = nested;
    console.log(`嵌套解构: ${userName}`);
  },
  
  // 对象方法
  methods: () => {
    // Object.keys(), Object.values(), Object.entries()
    console.log("键:", Object.keys(person));
    console.log("值:", Object.values(person));
    console.log("键值对:", Object.entries(person));
    
    // Object.assign()
    const newObj = Object.assign({}, person, { city: "北京" });
    
    // 扩展运算符
    const extended = { ...person, city: "上海" };
  }
};

// 3. 构造函数和原型
function PersonConstructor(name, age) {
  this.name = name;
  this.age = age;
}
PersonConstructor.prototype.greet = function() {
  return `你好，我是${this.name}`;
};

// 4. 类语法 (ES6+)
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return `你好，我是${this.name}`;
  }
  
  // 静态方法
  static species() {
    return "人类";
  }
  
  // getter/setter
  get birthYear() {
    return new Date().getFullYear() - this.age;
  }
  
  set birthYear(year) {
    this.age = new Date().getFullYear() - year;
  }
  
  // 私有属性 (ES2022)
  #privateInfo = "私有信息";
  getPrivateInfo() {
    return this.#privateInfo;
  }
}

// 5. 继承
class Student extends PersonClass {
  constructor(name, age, grade) {
    super(name, age);  // 调用父类构造函数
    this.grade = grade;
  }
  
  study() {
    return `${this.name}正在学习`;
  }
}

// ========================================
// 第六部分：数组
// ========================================

const arrayMethods = {
  // 创建数组
  create: [
    [1, 2, 3],                    // 字面量
    new Array(5),                 // 构造函数
    Array.of(1, 2, 3),            // ES6 - 静态方法
    Array.from("abc"),            // ES6 - 从类数组或可迭代对象创建
    Array.from({ length: 3 }, (_, i) => i * 2)  // ES6 - 带映射函数
  ],
  
  // 修改器方法（会改变原数组）
  mutatorMethods: () => {
    const arr = [1, 2, 3];
    arr.push(4);        // 末尾添加
    arr.pop();          // 删除末尾元素
    arr.unshift(0);     // 开头添加
    arr.shift();        // 删除开头元素
    arr.reverse();      // 反转数组
    arr.sort();         // 排序
    arr.splice(1, 1, "新"); // 替换元素
    return arr;
  },
  
  // 访问方法（不改变原数组）
  accessorMethods: () => {
    const arr = [1, 2, 3, 4, 5];
    return {
      slice: arr.slice(1, 3),     // 返回子数组
      concatenated: arr.concat([6, 7]),  // 连接数组
      joined: arr.join("-"),      // 连接为字符串
      indexOf: arr.indexOf(3),    // 查找索引
      lastIndexOf: arr.lastIndexOf(3), // 从后往前查找索引
      includes: arr.includes(3),  // 检查是否包含
      toString: arr.toString(),   // 转为字符串
      toLocaleString: arr.toLocaleString(), // 本地化字符串表示
      at: arr.at(-1)              // ES2022 - 通过索引获取元素（支持负数）
    };
  },
  
  // 迭代方法
  iterationMethods: () => {
    const nums = [1, 2, 3, 4, 5];
    
    // forEach - 遍历
    nums.forEach((num, index) => {
      console.log(`索引${index}: ${num}`);
    });
    
    // map - 转换
    const doubled = nums.map(num => num * 2);
    
    // filter - 过滤
    const evens = nums.filter(num => num % 2 === 0);
    
    // reduce - 归约（从左到右）
    const sum = nums.reduce((acc, num) => acc + num, 0);
    
    // reduceRight - 归约（从右到左）
    const rightSum = nums.reduceRight((acc, num) => acc + num, 0);
    
    // some - 至少一个元素满足条件
    const hasEven = nums.some(num => num % 2 === 0);
    
    // every - 所有元素都满足条件
    const allPositive = nums.every(num => num > 0);
    
    // find - 找到第一个满足条件的元素
    const found = nums.find(num => num > 3);
    
    // findIndex - 找到第一个满足条件元素的索引
    const foundIndex = nums.findIndex(num => num > 3);
    
    // keys() - 获取索引迭代器
    const keys = [...nums.keys()];
    
    // values() - 获取值迭代器
    const values = [...nums.values()];
    
    // entries() - 获取键值对迭代器
    const entries = [...nums.entries()];
    
    return {
      doubled,
      evens,
      sum,
      rightSum,
      hasEven,
      allPositive,
      found,
      foundIndex,
      keys,
      values,
      entries
    };
  },
  
  // 数组检测
  detection: () => {
    const arr = [1, 2, 3];
    return {
      isArray: Array.isArray(arr),  // 检查是否为数组
      isPrototype: Array.prototype.isPrototypeOf(arr)  // 检查是否为数组原型链
    };
  },
  
  // ES2022 和 ES2023 数组方法
  es2022_2023Methods: () => {
    const nums = [1, 2, 3, 4, 5, 4, 3, 2, 1];
    return {
      // at() 方法已在 accessorMethods 中介绍
      
      // ES2022/ES2023 - 新增的数组方法
      findLast: nums.findLast(num => num % 2 === 0),        // 找到最后一个偶数: 2
      findLastIndex: nums.findLastIndex(num => num % 2 === 0) // 找到最后一个偶数的索引: 7
    };
  }
};

// ========================================
// 第七部分：异步编程
// ========================================

// 1. Promise
const promiseExample = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("操作成功");
      } else {
        reject("操作失败");
      }
    }, 1000);
  });
};

// Promise 链式调用
const promiseChain = promiseExample()
  .then(result => {
    console.log(result);
    return "链式结果";
  })
  .then(nextResult => {
    console.log(nextResult);
    return "继续链式";
  })
  .catch(error => {
    console.error("错误:", error);
  });

// 2. async/await
async function asyncFunction() {
  try {
    const result = await promiseExample();
    console.log("async/await结果:", result);
    return result;
  } catch (error) {
    console.error("async/await错误:", error);
  }
}

// 3. 并发处理
async function concurrentExecution() {
  const promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
  ];
  
  // Promise.all - 全部完成
  const allResults = await Promise.all(promises);
  
  // Promise.race - 任一完成
  const raceResult = await Promise.race(promises);
  
  return { allResults, raceResult };
}

// ========================================
// 第八部分：模块化
// ========================================

// 注意：在实际项目中，模块化需要在单独的文件中使用
// 这里展示语法结构

/*
// 导出
export const moduleName = "模块名";
export function moduleFunction() {
  return "模块函数";
}
export default class ModuleClass {
  // 默认导出
}

// 导入
import ModuleClass, { moduleName, moduleFunction } from './module';
import * as module from './module';  // 命名空间导入
import { moduleName as localName } from './module';  // 重命名导入
*/

// ========================================
// 第九部分：错误处理
// ========================================

// 1. try-catch-finally
function errorHandling() {
  try {
    // 可能出错的代码
    throw new Error("自定义错误");
  } catch (error) {
    console.error("捕获错误:", error.message);
  } finally {
    // 无论是否出错都会执行
    console.log("清理工作");
  }
}

// 2. 自定义错误类型
class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "CustomError";
    this.code = code;
  }
}

// 3. 错误处理策略
function errorHandlingStrategy() {
  // 同步错误
  try {
    throw new Error("同步错误");
  } catch (error) {
    console.error(error);
  }
  
  // 异步错误
  Promise.reject("异步错误")
    .catch(error => console.error(error));
  
  // 使用 async/await 处理异步错误
  async function handleAsyncError() {
    try {
      await Promise.reject("异步错误2");
    } catch (error) {
      console.error(error);
    }
  }
}

// ========================================
// 第十部分：高级特性
// ========================================

// 1. 生成器函数
function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
  return "完成";
}

const generator = generatorFunction();
console.log(generator.next()); // { value: 1, done: false }

// 2. 迭代器
const iterableObject = {
  from: 1,
  to: 3,
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

// 3. Set 和 Map
const setCollection = new Set([1, 2, 3, 3]); // 自动去重
const mapCollection = new Map([
  ["key1", "value1"],
  ["key2", "value2"]
]);

// 4. WeakSet 和 WeakMap
const weakSet = new WeakSet();
const weakMap = new WeakMap();

// 5. Symbol 和 Symbol 属性
const uniqueSymbol = Symbol("描述");
const objWithSymbol = {
  [uniqueSymbol]: "只有Symbol能访问的值"
};

// 6. Proxy 和 Reflect
const targetObject = {
  message: "原始值"
};
const proxy = new Proxy(targetObject, {
  get(target, property) {
    console.log(`访问属性: ${property}`);
    return Reflect.get(target, property);
  },
  set(target, property, value) {
    console.log(`设置属性: ${property} = ${value}`);
    return Reflect.set(target, property, value);
  }
});

// 7. 解构赋值
const destructuringExamples = () => {
  // 数组解构
  const [first, second, ...rest] = [1, 2, 3, 4, 5];
  
  // 对象解构
  const { name: personName, age: personAge } = { name: "王五", age: 28 };
  
  // 函数参数解构
  const processUser = ({ name, age }) => {
    return `用户: ${name}, 年龄: ${age}`;
  };
  
  return { first, second, rest, personName, personAge };
};

// 8. 模板字符串和标签模板
const templateString = `姓名: ${person.name}, 年龄: ${person.age}`;
const multilineString = `
  这是
  多行
  字符串
`;

// 标签模板
function tagFunction(strings, ...values) {
  console.log(strings); // 模板字符串中的静态部分
  console.log(values);  // 模板字符串中的表达式值
  return "处理后的结果";
}
const taggedResult = tagFunction`Hello ${"World"}! ${123}`;

// ========================================
// 第十一部分：ES2015+ 新特性
// ========================================

// 1. 模块化 (已在上面介绍)

// 2. 类 (已在上面介绍)

// 3. 箭头函数 (已在上面介绍)

// 4. 模板字符串 (已在上面介绍)

// 5. 解构 (已在上面介绍)

// 6. 默认参数、剩余参数、展开运算符 (已在上面介绍)

// 7. Promise (已在上面介绍)

// 8. let/const (已在上面介绍)

// 9. 块级作用域

// 10. 模块化 (已在上面介绍)

// 11. 新的数据结构
const newDataStructures = {
  // Map
  map: new Map(),
  // Set
  set: new Set(),
  // WeakMap
  weakMap: new WeakMap(),
  // WeakSet
  weakSet: new WeakSet()
};

// 12. 新的数组方法
const newArrayMethods = {
  // Array.from()
  fromString: Array.from("hello"),  // ['h', 'e', 'l', 'l', 'o']
  
  // Array.of()
  ofNumbers: Array.of(1, 2, 3),  // [1, 2, 3]
  
  // Array.find() 和 Array.findIndex() (已在上面介绍)
  
  // Array.fill()
  filled: [1, 2, 3, 4, 5].fill(0, 2, 4),  // [1, 2, 0, 0, 5]
  
  // Array.copyWithin()
  copied: [1, 2, 3, 4, 5].copyWithin(0, 3, 5)  // [4, 5, 3, 4, 5]
};

// 13. 新的对象方法
const newObjectMethods = {
  // Object.assign()
  assign: Object.assign({}, { a: 1 }, { b: 2 }),  // { a: 1, b: 2 }
  
  // Object.is()
  is: Object.is(NaN, NaN),  // true
  
  // Object.setPrototypeOf() / Object.getPrototypeOf()
  proto: Object.setPrototypeOf({}, null)
};

// 14. 新的字符串方法
const newStringMethods = {
  // String.startsWith()
  startsWith: "hello".startsWith("he"),  // true
  
  // String.endsWith()
  endsWith: "hello".endsWith("lo"),  // true
  
  // String.includes()
  includes: "hello".includes("ell"),  // true
  
  // String.repeat()
  repeat: "ha".repeat(3),  // "hahaha"
  
  // String.padStart() / String.padEnd()
  padStart: "5".padStart(3, "0"),  // "005"
  padEnd: "5".padEnd(3, "0")      // "500"
};

// 15. Symbol 类型 (已在上面介绍)

// 16. Proxy (已在上面介绍)

// 17. Reflect (已在上面介绍)

// 18. Promise 增强
const promiseEnhancements = {
  // Promise.allSettled() - ES2020
  allSettled: Promise.allSettled([
    Promise.resolve(1),
    Promise.reject("错误"),
    Promise.resolve(3)
  ]),
  
  // Promise.any() - ES2021
  any: Promise.any([
    Promise.reject("错误1"),
    Promise.reject("错误2"),
    Promise.resolve("成功")
  ])
};

// 19. BigInt - ES2020
const bigIntExample = BigInt(123456789012345678901234567890n);

// 20. Nullish coalescing operator (??) - ES2020
const nullishCoalescing = null ?? "默认值";  // "默认值"

// 21. Optional chaining (?.) - ES2020
const optionalChaining = { a: { b: { c: 5 } } }?.a?.b?.c;  // 5

// 22. Dynamic import - ES2020
// const module = await import('./module.js');

// 23. Logical assignment operators - ES2021
let logicalAssignment = 0;
logicalAssignment ||= 10;  // 等价于 logicalAssignment = logicalAssignment || 10
logicalAssignment &&= 5;   // 等价于 logicalAssignment = logicalAssignment && 5
logicalAssignment ??= 20;  // 等价于 logicalAssignment = logicalAssignment ?? 20

// 24. WeakRefs and FinalizationRegistry - ES2021
const weakRef = new WeakRef({});  // 非强引用对象
const registry = new FinalizationRegistry(message => {
  console.log(message);
});

// 25. Top-level await - ES2022
// 只能在模块顶层使用
// const response = await fetch('/api/data');

// 26. Class fields - ES2022
class ClassWithFields {
  instanceField = "实例字段";
  static staticField = "静态字段";
  
  #privateField = "私有字段";  // 私有字段
  
  getField() {
    return this.#privateField;
  }
}

// 27. Ergonomic brand checking for private fields - ES2022
class PrivateFieldChecker {
  #privateField;
  
  check(obj) {
    return #privateField in obj;  // 检查私有字段
  }
}

// 28. RegExp Match Indices - ES2022
const regexMatchIndices = /a+(?<Z>z)?/.exec("xaaaz");

// 29. .at() method - ES2022
const atMethod = [1, 2, 3].at(-1);  // 3 (从末尾开始索引)

// ========================================
// 第十二部分：实用工具函数
// ========================================

// 1. 深拷贝
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (hash.has(obj)) return hash.get(obj);
  
  const clone = Array.isArray(obj) ? [] : {};
  hash.set(obj, clone);
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key], hash);
    }
  }
  
  return clone;
}

// 2. 防抖函数
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

// 3. 节流函数
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 4. 柯里化
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

// 5. 深度比较
function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;
  
  if (obj1 == null || obj2 == null) return false;
  
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return obj1 === obj2;
  }
  
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  for (let key of keys1) {
    if (!keys2.includes(key)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  
  return true;
}

// 6. 发布-订阅模式
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }
  
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(...args));
    }
  }
  
  off(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    }
  }
}

// ========================================
// 第十三部分：性能优化技巧
// ========================================

// 1. 使用原生方法
// 避免重复造轮子，优先使用JavaScript内置方法

// 2. 避免内存泄漏
// 正确处理事件监听器、定时器等

// 3. 使用DocumentFragment批量操作DOM
function batchDOMOperations(items) {
  const fragment = document.createDocumentFragment();
  items.forEach(item => {
    const div = document.createElement('div');
    div.textContent = item;
    fragment.appendChild(div);
  });
  document.body.appendChild(fragment);
}

// 4. 虚拟滚动（处理大量数据）
// 仅渲染可见区域的元素

// 5. 使用Web Workers处理复杂计算
// 将复杂计算移到后台线程，避免阻塞UI

// ========================================
// 第十四部分：调试技巧
// ========================================

// 1. 使用console方法
console.log("普通日志");
console.warn("警告信息");
console.error("错误信息");
console.table([{ name: "张三", age: 25 }, { name: "李四", age: 30 }]);
console.group("分组日志");
console.log("分组内的日志");
console.groupEnd();

// 2. 条件断点
function conditionalBreakpoint(items) {
  items.forEach((item, index) => {
    // 在浏览器调试器中，在此行设置条件断点: index === 5
    console.log(item);
  });
}

// 3. 使用debugger语句
function debugFunction() {
  let value = 10;
  debugger;  // 浏览器会在此处暂停
  value *= 2;
  return value;
}

// ========================================
// 示例：综合应用
// ========================================

// 创建一个简单的数据管理系统
class DataManager {
  constructor() {
    this.data = [];
    this.eventEmitter = new EventEmitter();
  }
  
  add(item) {
    this.data.push(item);
    this.eventEmitter.emit('add', item);
    return this.data.length - 1;  // 返回索引
  }
  
  remove(index) {
    const removed = this.data.splice(index, 1)[0];
    this.eventEmitter.emit('remove', removed);
    return removed;
  }
  
  update(index, newData) {
    const oldData = this.data[index];
    this.data[index] = { ...oldData, ...newData };
    this.eventEmitter.emit('update', oldData, newData);
    return this.data[index];
  }
  
  subscribe(event, callback) {
    this.eventEmitter.on(event, callback);
  }
  
  // 异步操作示例
  async loadFromAPI(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.data = data;
      this.eventEmitter.emit('load', data);
      return data;
    } catch (error) {
      this.eventEmitter.emit('error', error);
      throw error;
    }
  }
}

// 使用示例
const dataManager = new DataManager();
dataManager.subscribe('add', (item) => console.log('添加了项目:', item));
dataManager.add({ id: 1, name: '项目1' });

// 运行示例函数
console.log("=== JavaScript Complete Guide 运行示例 ===");
console.log("基础变量:", mutableVariable, immutableVariable);
console.log("数据类型示例:", primitiveTypes);
console.log("运算结果:", arithmetic);
console.log("条件语句演示:");
conditionalStatements();
console.log("循环语句演示:");
loopStatements();
console.log("函数调用:", regularFunction("张三"));
console.log("闭包结果:", closure(5));
console.log("递归阶乘:", factorial(5));
console.log("类实例:", new Student("小明", 20, "三年级"));
console.log("数组方法:", arrayMethods.iterationMethods());
console.log("解构示例:", destructuringExamples());
console.log("深拷贝示例:", deepClone({ a: 1, b: { c: 2 } }));
console.log("柯里化示例:", curry((a, b, c) => a + b + c)(1)(2)(3));

// 异步操作示例
async function runAsyncExamples() {
  console.log("异步函数示例:");
  await asyncFunction();
  
  console.log("并发执行示例:");
  const concurrentResult = await concurrentExecution();
  console.log(concurrentResult);
}

runAsyncExamples();

console.log("=== JavaScript Complete Guide 完成 ===");

// ========================================
// 附录：更多JavaScript语法和概念补充
// ========================================

// 1. BigInt - 表示任意精度的整数
const bigNumber = BigInt(123456789012345678901234567890n);
const anotherBigNumber = 123456789012345678901234567890n;

// 2. 动态导入 (Dynamic Import)
// const module = await import('./module.js');

// 3. 代理(Proxy)高级用法
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

// 4. Reflect API详解
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
proxyWithReflect.x = 42;

// 5. TypedArray - 二进制数据处理
const buffer = new ArrayBuffer(16); // 16字节缓冲区
const int32View = new Int32Array(buffer); // 每个元素4字节，共4个元素
const float64View = new Float64Array(buffer); // 每个元素8字节，共2个元素

int32View[0] = 42;

// 6. WeakMap和WeakSet高级应用
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

// 7. 事件循环、任务队列详解
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

// 8. 尾调用优化 (TCO - Tail Call Optimization)
// 在严格模式下，当函数调用是尾调用时，引擎可以优化调用栈
function factorial(n, acc = 1) {
  if (n <= 1) return acc;
  return factorial(n - 1, acc * n); // 尾调用
}

// 9. 模式匹配和解构高级用法
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

// 10. 迭代协议详解
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

// 11. 生成器高级用法
function* fibonacciGenerator() {
  let prev = 0, curr = 1;
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr]; // 解构赋值
  }
}

const fib = fibonacciGenerator();
fib.next().value; // 1
fib.next().value; // 1
fib.next().value; // 2
fib.next().value; // 3

// 12. 异步生成器
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

// 13. 可选链操作符 (?.) - ES2020
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

// 14. 空值合并操作符 (??) - ES2020
const nullValue = null;
const undefinedValue = undefined;
const emptyString = '';
const zero = 0;

console.log(nullValue ?? 'default'); // 'default'
console.log(undefinedValue ?? 'default'); // 'default'
console.log(emptyString ?? 'default'); // '' (因为空字符串是真值)
console.log(zero ?? 'default'); // 0 (因为0是真值)

// 15. 逻辑赋值操作符 - ES2021
let a = false;
let b = 'value';
a ||= b; // 等价于 a = a || b
console.log(a); // 'value'

let c = 'existing';
let d = 'new';
c &&= d; // 等价于 c = c && d
console.log(c); // 'new'

let e = null;
let f = 'fallback';
e ??= f; // 等价于 e = e ?? f
console.log(e); // 'fallback'

// 16. 数字分隔符 - ES2021
const million = 1_000_000;
const creditCard = 1234_5678_9012_3456;
const binary = 0b1010_0001_1000_0101;
const hex = 0xA0_B0_C0;

// 17. WeakRefs 和 FinalizationRegistry - ES2021
const weakRef = new WeakRef({});  // 非强引用对象
const registry = new FinalizationRegistry(message => {
  console.log(message);
});

// 18. Record 和 Tuple - 提案阶段（未来功能）
// record: 不可变对象
// tuple: 不可变数组

// 19. 使用 at() 方法访问数组元素（ES2022）
const arr = [1, 2, 3, 4, 5];
const lastElement = arr.at(-1); // 5 - 访问最后一个元素

// 20. Error Cause - ES2022
const errorWithCause = new Error('加载失败', { cause: '网络错误' });

// 21. RegExp Match Indices - ES2022
const regexMatchIndices = /a+(?<Z>z)?/.exec("xaaaz");

// 22. 用 in 操作符检查私有字段 - ES2022
class PrivateFieldChecker {
  #privateField;
  
  check(obj) {
    return #privateField in obj;  // 检查私有字段
  }
}

// 23. 使用 findLast 和 findLastIndex（ES2023）
const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const lastEven = numbers.findLast(n => n % 2 === 0); // 2 - 最后一个偶数
const lastEvenIndex = numbers.findLastIndex(n => n % 2 === 0); // 7 - 最后一个偶数的索引

// 24. Symbol 模式匹配
const symbolKey = Symbol('key');
const objWithSymbol = {
  [symbolKey]: 'symbol value',
  normalKey: 'normal value'
};

// 25. Object.hasOwn() - ES2022
const obj = { prop: 'value' };
const hasProp = Object.hasOwn(obj, 'prop'); // true

// 导出常用功能（在模块系统中使用）
// export {
//   deepClone,
//   debounce,
//   throttle,
//   curry,
//   deepEqual,
//   EventEmitter,
//   DataManager
// };