1.唯三个类型修饰符: var let const
2.作用域问题
3.作用域提升问题
4.数据类型
  (1)string
  (2)number -> 底层仍区分实现浮点数和整数
  (3)boolean true false
  (4)undefined
  (5)null
  (6)Symbol("唯一值")
  (7)BigInt(2^53n)  n表示这是BigInt类型值
  (8)对象 {key: value}
  (9)function
  (10)NaN
  (11)Array [1, 2, 3]
  (12)Set -> 无序且不重复
  (13)Map -> 无序且可重复
  (14)WeakMap -> 无序且可重复，键必须为对象
  (15)WeakSet -> 无序且不重复，键必须为对象
  (16)Object -> 引用类型
  (17)Date -> 时间对象
  (18)RegExp 正则表达式
  (19)JSON -> JSON.parse() JSON.stringify()
  (20)Error -> 错误对象
  (21)Proxy -> 代理对象
  (22)Reflect -> 反射对象
  (23)Promise
  (24)Generator -> 生成器对象
  (25)Iterator -> 可迭代对象


5.运算符
  (1)算数运算符 + - * / % ** ++ --
  (2)赋值运算符 = += -= *= /= %= **=
  (3)比较运算符 > < >= <= == != === !==
  (4)逻辑运算符 && || !
  (5)位运算符 & | ^ ~ << >> >>>
  (6)typeof
  (7)instanceof
  (8)delete
  (9)in
  (10)new
  (11)void 获取安全undefined值(不可修改)
  (12)yield
  (13)await async
  (14)... 展开运算符(简化书写)/剩余参数语法(动态多参)
  (15)? :
  (16)?. 可选链运算符
  (17)?? 空值合并运算符 -> 当左边值为null/undefined时，返回右边值，否则返回左边值
  
6.高级特性
  (1)(function(arg1, arg2, arg3) {}) (arg1, arg2, arg3)
  (2)`HelloJS ${demo}`
  (3)((arg1, arg2, arg3) => {}) (arg1, arg2, arg3) 箭头函数没有this
  (4)函数内置对象arguments用来收集参数

7.高级代码块
  (1)try catch finally throw
  (2)switch case
  (3)for for in for of forEach
  (4)while do while
  (5)if else if else
  (6)闭包
  function outerFunction(x) {
    return function innerFunction(y) {
      return x + y;  // 内部函数访问外部函数的变量
    }
  }
  // 借助闭包将参数隐藏在闭包里面，且返回一个函数(这个函数内部有闭包隐藏值)
  const closure = outerFunction(10)
  (7)递归
  function factorial(n) {
    if (n <= 1) return 1;
    debugger  // 浏览器会在此处暂停
    return n * factorial(n - 1);
  }
  (8)类
  class PersonClass extends Organism{
    constructor(name, age) {
      // 调用父类构造函数
      super(name, age)
      this.name = name
      this.age = age
      // 私有属性->只有类内部可以访问/修改
      this.#privateInfo = "私有信息"
    }
    
    greet() {
      super.greet()
      return `你好，我是${this.name}`
    }
    
    // 静态方法/属性(属于类本身而非对象)
    static species() {
      return "人类"
    }
    
    // getter/setter定义读取和修改逻辑
    get birthYear() {
      return new Date().getFullYear() - this.age
    }
    
    set birthYear(year) {
      this.age = new Date().getFullYear() - year
    }
    
    getPrivateInfo() {
      return this.#privateInfo
    }
  }
  (9)深拷贝
  function deepClone(obj, hash = new WeakMap()) {
    if (obj === null || typeof obj !== "object") return obj
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj)
    if (hash.has(obj)) return hash.get(obj)
    
    const clone = Array.isArray(obj) ? [] : {}
    hash.set(obj, clone)
    
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = deepClone(obj[key], hash)
      }
    }
    
    return clone
  }
  (10)防抖
  function debounce(func, delay) {
    let timeoutId
    return function(...args) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => func.apply(this, args), delay)
    }
  }
  (11)节流
  function throttle(func, limit) {
    let inThrottle
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }
  (12)深度比较
  function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true
    
    if (obj1 == null || obj2 == null) return false
    
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return obj1 === obj2
    }
    
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    
    if (keys1.length !== keys2.length) return false
    
    for (let key of keys1) {
      if (!keys2.includes(key)) return false
      if (!deepEqual(obj1[key], obj2[key])) return false
    }
    
    return true
  }
  (13)发布-订阅模式
  class EventEmitter {
    constructor() {
      this.events = {}
    }
    
    on(event, callback) {
      if (!this.events[event]) {
        this.events[event] = []
      }
      this.events[event].push(callback)
    }
    
    emit(event, ...args) {
      if (this.events[event]) {
        this.events[event].forEach(callback => callback(...args))
      }
    }
    
    off(event, callback) {
      if (this.events[event]) {
        this.events[event] = this.events[event].filter(cb => cb !== callback)
      }
    }
  }
  (14)代理
  const objToReflect = { x: 1, y: 2 }
  const handlerForReflect = {
    get(target, prop, receiver) {
      console.log(`Getting ${prop}`)
      return Reflect.get(target, prop, receiver)
    },
    set(target, prop, value, receiver) {
      console.log(`Setting ${prop} to ${value}`)
      return Reflect.set(target, prop, value, receiver)
    }
  }

  const proxyWithReflect = new Proxy(objToReflect, handlerForReflect)
  proxyWithReflect.x = 42

  // 5. TypedArray - 二进制数据处理
  const buffer = new ArrayBuffer(16) // 16字节缓冲区
  const int32View = new Int32Array(buffer) // 每个元素4字节，共4个元素
  const float64View = new Float64Array(buffer) // 每个元素8字节，共2个元素

  int32View[0] = 42

  // 6. WeakMap和WeakSet高级应用
  // WeakMap用于存储对象的私有数据
  const privateData = new WeakMap()

  class MyClassWithPrivate {
    constructor() {
      privateData.set(this, { privateProp: 'secret' })
    }
    
    getPrivateProp() {
      return privateData.get(this).privateProp
    }
  }
  (15)模块化

  // 导出
  export const moduleName = "模块名"
  export function moduleFunction() {
    return "模块函数"
  }
  export default class ModuleClass {
    // 默认导出
  }

  // 导入
  import ModuleClass, { moduleName, moduleFunction } from './module'
  import * as module from './module'  // 命名空间导入
  import { moduleName as localName } from './module'  // 重命名导入
  (16)异步
  // 1. 回调函数（基础异步模式：缺点易形成回调地狱）
  function fetchData(callback) {
    setTimeout(() => {
      try {
        const data = { name: "张三", age: 18 }
        callback(null, data); // 成功：第一个参数为null
      } catch (err) {
        callback(err) // 失败：传递错误
      }
    }, 1000)
  }
  // 调用
  fetchData((err, data) => {
    if (err) console.error("失败：", err)
    else console.log("回调获取数据：", data)
  })

  // 2. Promise（解决回调地狱，异步标准）
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true
      if (success) resolve({ name: "李四" }) // 成功态
      else reject(new Error("请求失败")); // 失败态
    }, 1000)
  })
  // 调用Promise
  promise
    .then((data) => console.log("Promise成功：", data))
    .catch((err) => console.error("Promise失败：", err))
    .finally(() => console.log("无论成败都执行"))

  // 3. Promise静态方法（批量处理异步）
  const p1 = Promise.resolve(1)
  const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 500))
  // Promise.all：所有异步完成才成功，一个失败则整体失败
  Promise.all([p1, p2])
    .then((res) => console.log("Promise.all结果：", res)) // [1,2]
    .catch((err) => console.error(err))
  // Promise.race：第一个完成的异步决定结果
  Promise.race([p1, p2]).then((res) => console.log("Promise.race结果：", res)) // 1

  // 4. async/await（Promise语法糖，同步写法写异步）
  async function asyncFunc() {
    try {
      // 等待Promise完成
      const data = await promise
      console.log("async/await获取数据：", data)
      // 异步遍历（for await...of）
      const asyncIterable = {
        [Symbol.asyncIterator]() {
          let i = 0
          return {
            next() {
              if (i < 3) return Promise.resolve({ value: i++, done: false })
              return Promise.resolve({ done: true })
            },
          }
        },
      }
      // 遍历异步迭代器
      for await (const num of asyncIterable) {
        console.log("异步遍历：", num); // 0,1,2
      }
    } catch (err) {
      console.error("async/await错误：", err)
    }
  }
  asyncFunc()

  // 5. 生成器+Promise实现异步（进阶）
  function* genAsync() {
    const data = yield promise
    return data
  }
  const g = genAsync()
  g.next().value.then((data) => {
    console.log("生成器异步：", data)
    g.next(data)
  })
  (17)原型链
  // 1. 原型链基础：__proto__ 与 prototype
  function Person(name) {
    this.name = name
  }
  // 给原型添加方法（所有实例共享）
  Person.prototype.sayHi = function () {
    console.log(`Hi, ${this.name}`)
  }
  const p1 = new Person("张三")
  // 实例的__proto__指向构造函数的prototype
  console.log(p1.__proto__ === Person.prototype) // true
  // 构造函数的prototype的constructor指向构造函数本身
  console.log(Person.prototype.constructor === Person) // true
  // 原型链顶端：Object.prototype
  console.log(Person.prototype.__proto__ === Object.prototype) // true
  console.log(Object.prototype.__proto__) // null（原型链终点）

  // 2. 原型链继承（ES6类之前的继承方式）
  function Student(name, grade) {
    // 继承父类属性
    Person.call(this, name)
    this.grade = grade
  }
  // 继承父类原型方法
  Student.prototype = Object.create(Person.prototype)
  // 修复constructor指向
  Student.prototype.constructor = Student
  // 子类原型添加自己的方法
  Student.prototype.study = function () {
    console.log(`${this.name}在${this.grade}年级学习`)
  }
  const s1 = new Student("李四", 3)
  s1.sayHi() // 继承的方法
  s1.study() // 子类自己的方法

  // 3. 原型操作API
  // 获取原型
  console.log(Object.getPrototypeOf(s1) === Student.prototype) // true
  // 设置原型
  const obj1 = {}
  const obj2 = { a: 1 }
  Object.setPrototypeOf(obj1, obj2)
  console.log(obj1.a) // 1（通过原型链访问）

  // 4. 判断属性是否为自身属性（而非原型链）
  console.log(s1.hasOwnProperty("name")) // true（自身属性）
  console.log(s1.hasOwnProperty("sayHi")) // false（原型链属性）

  // 5. Symbol与原型链（唯一键避免冲突）
  const uniqueKey = Symbol("key")
  Person.prototype[uniqueKey] = "原型唯一值"
  console.log(p1[uniqueKey]) // 原型唯一值
  (18)严格模式
  // 1. 全局严格模式
  'use strict'
  // 禁止未声明的变量
  // x = 10 // 报错：x is not defined
  let x = 10

  // 禁止函数参数重名
  // function fn(a, a) {} // 报错：Duplicate parameter name not allowed in this context

  // 禁止删除不可配置的属性
  // delete Object.prototype // 报错：Cannot delete property 'prototype' of function Object() { [native code] }

  // this不再指向全局对象
  function fn() {
    console.log(this) // undefined（非严格模式指向window）
  }
  fn()

  // 2. 函数内严格模式（局部严格）
  function strictFunc() {
    'use strict'
    // 禁止with语句（严格模式下禁用）
    // with (obj) { console.log(a) } // 报错：'with' statements are not allowed in strict mode
    // 禁止八进制字面量
    // const num = 0123 // 报错：Octal literals are not allowed in strict mode
    const num = 0o123 // ES6八进制写法（严格模式允许）
  }
  strictFunc()

  // 3. 严格模式下的eval（独立作用域）
  eval('var y = 20;')
  // console.log(y) // 报错：y is not defined（非严格模式下y会挂载到全局）

8.方法
一函数
声明：function function*（生成器）
表达式：箭头函数()=>{}
参数：默认参数(a=1)、剩余参数(...args)、解构参数({x})
内置对象：arguments
执行：立即执行函数(function(){})()
二、原型链 / 继承相关
__proto__：实例原型指向（非标准）
prototype：构造函数原型对象
constructor：原型指向构造函数的属性
Object.getPrototypeOf()：获取对象原型
Object.setPrototypeOf()：设置对象原型
Object.create()：创建指定原型的对象
Object.hasOwnProperty()：判断是否为自身属性
三、类相关
class：类声明
extends：类继承
constructor：构造函数
super：调用父类构造 / 方法
私有成员：#prop（私有属性）、#method()（私有方法）
静态成员：static prop、static method()
访问器：get prop()、set prop(value)
四、数组核心方法 / 属性
基础属性：length
增删改：push() pop() unshift() shift() splice() fill()
遍历 / 转换：forEach() map() filter() reduce() reduceRight() every() some()
查找 / 判断：find() findIndex() indexOf() lastIndexOf() includes()
排序 / 反转：sort() reverse()
扁平化：flat() flatMap()
拼接 / 截取：concat() slice() join()
其他：toString() valueOf() at()
五、对象核心方法 / 属性
基础：Object.keys() Object.values() Object.entries()
拷贝 / 合并：Object.assign() Object.freeze() Object.seal()
转换：Object.fromEntries()
描述符：Object.getOwnPropertyDescriptors() Object.defineProperty() Object.defineProperties()
其他：Object.is() Object.getOwnPropertyNames() Object.getOwnPropertySymbols()
六、异步编程相关
回调函数：普通回调、高阶回调
Promise：Promise() resolve() reject() then() catch() finally()
Promise 静态：Promise.all() Promise.race() Promise.allSettled() Promise.any()
异步函数：async await
异步遍历：for await...of Symbol.asyncIterator
生成器：yield yield* next() throw() return()
定时器：setTimeout() setInterval() clearTimeout() clearInterval() requestAnimationFrame() cancelAnimationFrame()
七、高级集合（Map/Set/WeakMap/WeakSet）
Map
size、set() get() has() delete() clear() keys() values() entries() forEach()
Set
size、add() has() delete() clear() keys() values() entries() forEach()
WeakMap
set() get() has() delete()
WeakSet
add() has() delete()
八、代理 / 反射（Proxy/Reflect）
Proxy
new Proxy(target, handler)
handler 方法：get() set() deleteProperty() has() construct() apply() 等
Reflect
Reflect.get() Reflect.set() Reflect.deleteProperty() Reflect.has() Reflect.construct() Reflect.apply() 等
九、模块化
ESModule
export export default import import * as import { xx as yy }
CommonJS
module.exports exports require()
十、错误处理相关
内置错误类型：Error SyntaxError ReferenceError TypeError RangeError URIError
自定义错误：继承Error类
全局捕获：window.error（浏览器）、window.unhandledrejection（浏览器）、process.on('uncaughtException')（Node.js）
十一、数据转换 / 处理
JSON：JSON.stringify() JSON.parse()
类型转换：Number() String() Boolean() parseInt() parseFloat()
正则：RegExp() test() exec() match() replace() search() split()
十二、二进制处理（TypedArray）
ArrayBuffer、Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array
属性 / 方法：buffer byteLength byteOffset length set() subarray()
十三、环境特有 API（高频）
浏览器
DOM：document.createElement() document.getElementById() addEventListener() removeEventListener() innerHTML textContent appendChild()
BOM：window location history localStorage sessionStorage fetch()
Node.js
核心：require() module exports process fs.readFile() fs.writeFile() http.createServer() path.join() path.resolve()
十四、工具函数（大厂高频）
深拷贝：deepClone()
防抖：debounce()
节流：throttle()
深度比较：deepEqual()
发布订阅：EventEmitter（on() emit() off()）
十五、内存 / 执行机制相关
垃圾回收：标记清除、引用计数
Event Loop：宏任务、微任务
内存管理：WeakMap WeakSet（弱引用）、解除引用xx = null
