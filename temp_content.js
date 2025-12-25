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

let c = 'existing';
let d = 'new';
c &&= d; // 等价于 c = c && d
console.log(c); // 'new'

let e = null;
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