/**
 * Vue语法完整指南 - 从入门到专家
 * 
 * 目录
 * 1. Vue简介与基础
 * 2. 数据绑定
 * 3. 指令系统
 * 4. 事件处理
 * 5. 组件系统
 * 6. 响应式系统
 * 7. 生命周期
 * 8. 计算属性与侦听器
 * 9. 表单处理
 * 10. 过渡与动画
 * 11. 插槽系统
 * 12. 混入(Mixins)
 * 13. 自定义指令
 * 14. 插件
 * 15. 状态管理(Vuex)
 * 16. 路由管理(Vue Router)
 * 17. 组合式API (Vue 3)
 * 18. TypeScript集成
 * 19. 高级特性
 * 20. 性能优化
 * 21. 错误处理与调试
 * 22. 全局API
 * 23. 响应式进阶API
 * 24. 测试相关
 * 25. Vue 3 新特性
 * 26. 服务端渲染
 */

// 1. Vue简介与基础
// Vue.js 是一个用于构建用户界面的渐进式框架。与其他大型框架不同，Vue 被设计为可以自底向上逐层应用。

// 基础示例
const basicExample = {
  data: {
    message: 'Hello Vue!'
  },
  template: `
    <div>
      <h1>{{ message }}</h1>
    </div>
  `
};

// Vue实例的创建
const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

// 2. 数据绑定
// Vue.js 实现了数据的双向绑定，让开发者可以专注于业务逻辑而不是DOM操作。

const dataBindingExample = {
  // 插值绑定
  interpolation: '{{ message }}',

  // 属性绑定
  attributeBinding: '<img v-bind:src="imageSrc">',

  // 简写属性绑定
  shorthandAttribute: '<img :src="imageSrc">',

  // 动态参数绑定
  dynamicArgument: '<div v-bind:[key]="value">',

  // 简写事件绑定
  shorthandEvent: '<button @click="handleClick">',

  // 简写表单绑定
  shorthandForm: '<input v-model="inputValue">'
};

// 3. 指令系统
// Vue指令是带有v-前缀的特殊属性，用于在DOM上应用特殊的响应式行为。

const directivesExample = {
  // 条件渲染
  conditional: {
    vIf: '<p v-if="seen">现在你看到我了</p>',
    vElseIf: '<p v-else-if="condition">条件为真时显示</p>',
    vElse: '<p v-else>条件为假时显示</p>'
  },

  // 列表渲染
  listRendering: {
    vFor: `
      <li v-for="item in items" :key="item.id">
        {{ item.name }}
      </li>
    `,
    vForWithIndex: `
      <li v-for="(item, index) in items">
        {{ index }} - {{ item.name }}
      </li>
    `,
    vForObject: `
      <li v-for="(value, key) in object">
        {{ key }}: {{ value }}
      </li>
    `
  },

  // 事件处理
  eventHandling: {
    vOn: '<button v-on:click="handleClick">点击</button>',
    vOnShorthand: '<button @click="handleClick">点击</button>',
    vOnWithArgs: '<button @click="handleClick(arg)">点击</button>',
    vOnModifiers: '<form @submit.prevent="onSubmit">'
  },

  // 表单绑定
  formBinding: {
    vModel: '<input v-model="message">',
    vModelModifiers: {
      lazy: '<input v-model.lazy="message">',
      number: '<input v-model.number="age">',
      trim: '<input v-model.trim="message">'
    }
  },

  // 元素和组件绑定
  binding: {
    vBind: '<img v-bind:src="imageSrc">',
    vBindShorthand: '<img :src="imageSrc">',
    vBindBoolean: '<button :disabled="isDisabled">按钮</button>'
  },

  // 显示切换
  display: {
    vShow: '<p v-show="show">总是存在，只是切换显示</p>'
  },

  // 其他指令
  otherDirectives: {
    vText: '<span v-text="msg"></span>',
    vHtml: '<div v-html="html"></div>',
    vShow: '<p v-show="show">条件显示</p>',
    vPre: '<span v-pre>跳过编译</span>',
    vOnce: '<span v-once>只渲染一次</span>',
    vCloak: '<div v-cloak>{{ message }}</div>' // 防止模板闪烁
  }
};

// 4. 事件处理
const eventHandling = {
  // 基本事件处理
  basicEvent: {
    click: 'v-on:click="handleClick"',
    keyup: 'v-on:keyup="handleKeyup"',
    submit: 'v-on:submit.prevent="handleSubmit"'
  },

  // 事件修饰符
  modifiers: {
    stop: '@click.stop="doThis"', // 阻止冒泡
    prevent: '@submit.prevent="onSubmit"', // 阻止默认行为
    capture: '@click.capture="doThis"', // 捕获模式
    self: '@click.self="doThat"', // 只在当前元素触发
    once: '@click.once="doThis"', // 只触发一次
    passive: '@scroll.passive="onScroll"' // 以被动模式添加事件监听器
  },

  // 键值修饰符
  keyModifiers: {
    enter: '@keyup.enter="submit"',
    tab: '@keyup.tab="moveFocus"',
    delete: '@keyup.delete="confirmDelete"',
    esc: '@keyup.esc="closeModal"',
    space: '@keyup.space="handleSpace"',
    up: '@keyup.up="moveUp"',
    down: '@keyup.down="moveDown"',
    left: '@keyup.left="moveLeft"',
    right: '@keyup.right="moveRight"',
    ctrl: '@keyup.ctrl.a="selectAll"',
    alt: '@keyup.alt.enter="toggleFullscreen"',
    exact: '@keyup.exact="handle"', // 仅按下该键
    keyCode: '@keyup.13="submit"' // 使用keyCode
  }
};

// 5. 组件系统
// Vue组件是可复用的Vue实例，具有name和template选项。

const componentSystem = {
  // 注册全局组件
  globalComponent: function () {
    Vue.component('my-component', {
      props: ['title', 'content'],
      template: `
        <div class="component">
          <h3>{{ title }}</h3>
          <p>{{ content }}</p>
        </div>
      `
    });
  },

  // 局部组件注册
  localComponent: {
    components: {
      'my-local-component': {
        props: ['message'],
        template: '<p>{{ message }}</p>'
      }
    }
  },

  // Props传递数据
  props: {
    basic: {
      props: ['title', 'likes']
    },
    withType: {
      props: {
        title: String,
        likes: Number,
        isActive: {
          type: Boolean,
          default: true
        },
        callback: Function
      }
    },
    validation: {
      props: {
        value: {
          type: String,
          required: true,
          validator: function (value) {
            return ['success', 'warning', 'danger'].indexOf(value) !== -1;
          }
        }
      }
    }
  },

  // 自定义事件
  customEvents: {
    emitEvent: 'this.$emit("custom-event", data)',
    listenEvent: '<my-component @custom-event="handleEvent" />',
    syncModifier: '<my-component :title.sync="title" />'
  },

  // 插槽
  slots: {
    defaultSlot: {
      template: '<slot></slot>'
    },
    namedSlot: {
      template: `
        <div>
          <header><slot name="header"></slot></header>
          <main><slot></slot></main>
          <footer><slot name="footer"></slot></footer>
        </div>
      `
    },
    scopedSlot: {
      template: `
        <div>
          <slot name="item" :item="item" :index="index"></slot>
        </div>
      `
    }
  },

  // 动态组件
  dynamicComponent: {
    template: '<component :is="currentComponent"></component>'
  },

  // 异步组件
  asyncComponent: function () {
    const AsyncComponent = () => import('./AsyncComponent.vue');
    return AsyncComponent;
  }
};

// 6. 响应式系统
// Vue的响应式系统是其核心特性之一。

const reactivitySystem = {
  // 数据响应式原理
  dataReactivity: {
    // Vue 2的响应式
    vue2Reactivity: function () {
      return {
        data: {
          count: 0,
          nested: {
            obj: { a: 1 }
          }
        },
        // Vue 2无法检测到以下变化
        limitations: [
          '直接通过索引设置数组项: vm.items[indexOfItem] = newValue',
          '修改数组长度: vm.items.length = newLength',
          '添加/删除对象属性（需使用Vue.set或this.$set）'
        ]
      };
    },

    // Vue 3的响应式
    vue3Reactivity: function () {
      // 使用Proxy实现响应式
      const { reactive, ref, computed } = Vue;

      const state = reactive({
        count: 0,
        user: {
          name: 'Vue Developer'
        }
      });

      const countRef = ref(0);

      return { state, countRef };
    }
  },

  // Vue.set 和 vm.$set
  setMethods: {
    globalSet: 'Vue.set(vm.someObject, "newProperty", "newValue")',
    instanceSet: 'vm.$set(vm.someObject, "newProperty", "newValue")',
    arraySet: 'Vue.set(vm.items, indexOfItem, newValue)'
  },

  // 监听数据变化
  watchData: {
    watchOption: {
      watch: {
        // 监听简单属性
        question: function (newVal, oldVal) {
          console.log('Question changed:', newVal, oldVal);
        },
        // 深度监听
        someObject: {
          handler: function (newVal, oldVal) {
            // 做些什么
          },
          deep: true,
          immediate: true
        },
        // 监听对象的特定属性
        'someObject.property': function (newVal, oldVal) {
          // 处理
        }
      }
    }
  }
};

// 7. 生命周期
// Vue实例有一个完整的生命周期，从创建到销毁经历多个阶段。

const lifecycle = {
  // 创建期间的生命周期钩子
  creationHooks: {
    beforeCreate: function () {
      // 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用
      console.log('beforeCreate');
    },
    created: function () {
      // 在实例创建完成后被立即调用
      // 数据观测，属性和方法的运算已完成，$el 属性还没有显示创建
      console.log('created');
    }
  },

  // 挂载期间的生命周期钩子
  mountingHooks: {
    beforeMount: function () {
      // 在挂载开始之前被调用
      console.log('beforeMount');
    },
    mounted: function () {
      // 实例被挂载后调用，DOM 已经生成
      console.log('mounted');
      // 这里可以访问DOM元素
      this.$nextTick(() => {
        // DOM 更新后执行
      });
    }
  },

  // 更新期间的生命周期钩子
  updateHooks: {
    beforeUpdate: function () {
      // 数据更新时调用，发生在虚拟 DOM 打补丁之前
      console.log('beforeUpdate');
    },
    updated: function () {
      // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用
      console.log('updated');
    }
  },

  // 销毁期间的生命周期钩子
  destructionHooks: {
    beforeDestroy: function () {
      // 实例销毁之前调用
      console.log('beforeDestroy');
    },
    destroyed: function () {
      // Vue 实例销毁后调用
      console.log('destroyed');
    }
  },

  // Vue 3 Composition API 中的生命周期钩子
  vue3Lifecycle: function () {
    const {
      onBeforeMount,
      onMounted,
      onBeforeUpdate,
      onUpdated,
      onBeforeUnmount,
      onUnmounted
    } = Vue;

    onBeforeMount(() => {
      console.log('Vue 3 beforeMount');
    });

    onMounted(() => {
      console.log('Vue 3 mounted');
    });

    // ...
  }
};

// 8. 计算属性与侦听器
const computedAndWatchers = {
  // 计算属性
  computedProperties: {
    computed: {
      template: `
        <div>
          <p>Original message: "{{ message }}"</p>
          <p>Computed reversed message: "{{ reversedMessage }}"</p>
        </div>
      `,
      data: {
        message: 'Hello'
      },
      computed: {
        reversedMessage: function () {
          // 只有依赖变化时才会重新计算
          return this.message.split('').reverse().join('');
        },
        // 计算属性的 getter 和 setter
        fullName: {
          get: function () {
            return this.firstName + ' ' + this.lastName;
          },
          set: function (newValue) {
            var names = newValue.split(' ');
            this.firstName = names[0];
            this.lastName = names[names.length - 1];
          }
        }
      }
    }
  },

  // 侦听器
  watchers: {
    watch: {
      firstName: function (val) {
        this.fullName = val + ' ' + this.lastName;
      },
      // 深度监听
      someObject: {
        handler: function (val, oldVal) {
          console.log(val, oldVal);
        },
        deep: true
      },
      // 立即执行
      question: {
        handler: function (newVal, oldVal) {
          // ...
        },
        immediate: true
      }
    }
  }
};

// 9. 表单处理
const formHandling = {
  // 基本表单绑定
  basicForm: {
    input: '<input v-model="message" placeholder="编辑我">',
    textarea: '<textarea v-model="message" placeholder="多行文本"></textarea>',
    checkbox: `
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
    `,
    radio: `
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
    `,
    select: `
      <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    `
  },

  // 修饰符
  modifiers: {
    lazy: '<input v-model.lazy="msg">',
    number: '<input v-model.number="age">',
    trim: '<input v-model.trim="msg">'
  },

  // 多个复选框绑定到同一个数组
  multipleCheckboxes: `
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
  `
};

// 10. 过渡与动画
const transitionsAndAnimations = {
  // transition组件
  transitionComponent: `
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  `,

  // 过渡的类名
  transitionClasses: {
    enterFromClass: 'v-enter',      // 进入过渡的开始状态
    enterActiveClass: 'v-enter-active', // 进入过渡的结束状态
    enterToClass: 'v-enter-to',     // 进入过渡的结束状态
    leaveFromClass: 'v-leave',      // 离开过渡的开始状态
    leaveActiveClass: 'v-leave-active', // 离开过渡的结束状态
    leaveToClass: 'v-leave-to'      // 离开过渡的结束状态
  },

  // CSS过渡
  cssTransitions: `
    <style>
      .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
      }
      .fade-enter, .fade-leave-to {
        opacity: 0;
      }
    </style>
  `,

  // CSS动画
  cssAnimations: `
    <style>
      .bounce-enter-active {
        animation: bounce-in .5s;
      }
      .bounce-leave-active {
        animation: bounce-in .5s reverse;
      }
      @keyframes bounce-in {
        0% {
          transform: scale(0);
        }
        50% {
          transform: scale(1.5);
        }
        100% {
          transform: scale(1);
        }
      }
    </style>
  `,

  // JavaScript钩子
  jsHooks: `
    <transition
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:after-enter="afterEnter"
      v-on:enter-cancelled="enterCancelled"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
      v-on:after-leave="afterLeave"
      v-on:leave-cancelled="leaveCancelled"
    >
      <!-- ... -->
    </transition>
  `,

  // 多个元素/组件的过渡
  multiElementTransition: `
    <transition-group tag="ul" name="slide">
      <li v-for="item in items" :key="item.id">
        {{ item.text }}
      </li>
    </transition-group>
  `
};

// 11. 插槽系统
const slotsSystem = {
  // 默认插槽
  defaultSlot: {
    template: `
      // 父组件
      <child-component>
        <p>这将插入到子组件的插槽中</p>
      </child-component>
      
      // 子组件
      <div>
        <slot></slot>
      </div>
    `
  },

  // 具名插槽
  namedSlots: {
    template: `
      // 父组件
      <base-layout>
        <template v-slot:header>
          <h1>这里是标题</h1>
        </template>
        
        <p>主要内容</p>
        <p>更多内容</p>
        
        <template v-slot:footer>
          <p>这里是底部</p>
        </template>
      </base-layout>
      
      // 子组件
      <div class="container">
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    `
  },

  // 作用域插槽
  scopedSlots: {
    template: `
      // 子组件
      <div>
        <slot v-bind:user="user" :message="message"></slot>
      </div>
      
      // 父组件
      <current-user>
        <template v-slot:default="slotProps">
          {{ slotProps.user.firstName }}
        </template>
      </current-user>
    `
  },

  // 动态插槽名
  dynamicSlotNames: `
    <base-layout>
      <template v-slot:[dynamicSlotName]>
        <p>动态插槽内容</p>
      </template>
    </base-layout>
  `
};

// 12. 混入(Mixins)
const mixins = {
  // 基础混入
  basicMixin: {
    created: function () {
      console.log('混入对象的钩子被调用');
    },
    methods: {
      hello: function () {
        console.log('hello from mixin!');
      }
    }
  },

  // 使用混入
  usingMixin: {
    mixins: ['basicMixin'],
    created: function () {
      console.log('组件钩子被调用');
    },
    methods: {
      start: function () {
        console.log('组件方法被调用');
      }
    }
  },

  // 全局混入
  globalMixin: function () {
    Vue.mixin({
      created: function () {
        console.log('全局混入 - created hook');
      }
    });
  }
};

// 13. 自定义指令
const customDirectives = {
  // 注册全局自定义指令
  globalDirective: function () {
    Vue.directive('focus', {
      // 当被绑定的元素插入到 DOM 中时……
      inserted: function (el) {
        // 聚焦元素
        el.focus();
      }
    });
  },

  // 局部自定义指令
  localDirective: {
    directives: {
      focus: {
        inserted: function (el) {
          el.focus();
        }
      }
    }
  },

  // 指令的完整钩子函数
  directiveHooks: {
    bind: '只调用一次，指令第一次绑定到元素时调用',
    inserted: '被绑定元素插入父节点时调用',
    update: '所在组件的 VNode 更新时调用',
    componentUpdated: '所在组件的 VNode 及其子 VNode 全部更新后调用',
    unbind: '只调用一次，指令与元素解绑时调用'
  },

  // 钩子函数参数
  hookArguments: {
    el: '指令所绑定的元素，可以用来直接操作 DOM',
    binding: {
      name: '指令名，不包括 v- 前缀',
      value: '指令的绑定值',
      oldValue: '指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用',
      expression: '字符串形式的指令表达式',
      arg: '传给指令的参数，可选',
      modifiers: '一个包含修饰符的对象，可选'
    },
    vnode: 'Vue 编译生成的虚拟节点',
    oldVnode: '上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用'
  }
};

// 14. 插件
const plugins = {
  // 插件定义
  pluginDefinition: {
    // 对象形式的插件
    objectPlugin: {
      install: function (Vue, options) {
        // 1. 添加全局方法
        Vue.myGlobalMethod = function () {
          console.log('全局方法');
        };

        // 2. 添加全局资源
        Vue.directive('my-directive', {
          bind(el, binding, vnode, oldVnode) {
            console.log('自定义指令');
          }
        });

        // 3. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
          console.log('实例方法');
        };

        // 4. 添加全局组件
        Vue.component('my-component', {
          template: '<div>全局组件</div>'
        });
      }
    },

    // 函数形式的插件
    functionPlugin: function (Vue, options) {
      // 插件逻辑
    }
  },

  // 使用插件
  usingPlugin: function () {
    Vue.use(plugins.pluginDefinition.objectPlugin, { /* 选项 */ });
  }
};

// 15. 状态管理(Vuex)
const vuex = {
  // Vuex Store 基础结构
  storeStructure: function () {
    const store = new Vuex.Store({
      // 状态
      state: {
        count: 0,
        user: {
          name: 'Vue Developer',
          email: 'vue@example.com'
        }
      },

      // 计算属性
      getters: {
        doubleCount: state => {
          return state.count * 2;
        },
        doubleCountPlus: (state, getters) => {
          return getters.doubleCount + state.count;
        }
      },

      // 同步修改状态的方法
      mutations: {
        INCREMENT(state) {
          state.count++;
        },
        SET_USER(state, user) {
          state.user = user;
        }
      },

      // 包含异步操作的动作
      actions: {
        incrementAsync({ commit }) {
          setTimeout(() => {
            commit('INCREMENT');
          }, 1000);
        },
        fetchUser({ commit }) {
          // 模拟API调用
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              commit('SET_USER', { name: 'New User', email: 'new@example.com' });
              resolve();
            }, 1000);
          });
        }
      },

      // 模块化
      modules: {
        moduleA: {
          namespaced: true,
          state: { ... },
          mutations: { ... },
          actions: { ... },
          getters: { ... }
        },
        moduleB: {
          namespaced: true,
          state: { ... },
          mutations: { ... },
          actions: { ... }
        }
      }
    });

    return store;
  }
};

// 16. 路由管理(Vue Router)
const vueRouter = {
  // 路由配置
  routerConfig: function () {
    const Home = { template: '<div>Home</div>' };
    const About = { template: '<div>About</div>' };

    const routes = [
      { path: '/', component: Home },
      { path: '/about', component: About },
      {
        path: '/user/:id',
        component: () => import('./User.vue'), // 懒加载
        props: true,
        children: [
          {
            path: 'profile',
            component: () => import('./UserProfile.vue')
          },
          {
            path: 'posts',
            component: () => import('./UserPosts.vue')
          }
        ]
      }
    ];

    const router = new VueRouter({
      mode: 'history', // 使用HTML5 History模式
      base: __dirname,
      routes // (缩写) 相当于 routes: routes
    });

    return router;
  },

  // 路由导航守卫
  navigationGuards: {
    globalBefore: function (router) {
      router.beforeEach((to, from, next) => {
        // ...
        next();
      });
    },

    globalAfter: function (router) {
      router.afterEach((to, from) => {
        // ...
      });
    },

    perRoute: function () {
      return {
        path: '/foo',
        component: Foo,
        beforeEnter: (to, from, next) => {
          // ...
          next();
        }
      };
    },

    component: {
      beforeRouteEnter: function (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        next();
      },
      beforeRouteUpdate: function (to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        next();
      },
      beforeRouteLeave: function (to, from, next) {
        // 导航离开该组件的对应路由时调用
        next();
      }
    }
  },

  // 编程式导航
  programmaticNavigation: {
    push: 'this.$router.push("/user")',
    replace: 'this.$router.replace("/user")',
    go: 'this.$router.go(-1)',
    routeInfo: 'this.$route.path, this.$route.params, this.$route.query'
  }
};

// 17. 组合式API (Vue 3)
const compositionAPI = {
  // 基础使用
  basicUsage: function () {
    const { ref, reactive, computed, watch, onMounted, onUnmounted } = Vue;

    // 响应式引用
    const count = ref(0);

    // 响应式对象
    const state = reactive({
      firstName: 'Vue',
      lastName: 'Developer'
    });

    // 计算属性
    const fullName = computed(() => state.firstName + ' ' + state.lastName);

    // 侦听器
    watch(count, (newVal, oldVal) => {
      console.log(`count changed from ${oldVal} to ${newVal}`);
    });

    // 生命周期钩子
    onMounted(() => {
      console.log('Component is mounted!');
    });

    onUnmounted(() => {
      console.log('Component is unmounted!');
    });

    // 方法
    const increment = () => {
      count.value++;
    };

    return {
      count,
      state,
      fullName,
      increment
    };
  },

  // Vue 3组合式API的SFC语法（使用<script setup>）
  sfcSyntax: {
    defineProps: `
      <script setup>
      // 使用宏定义props
      const props = defineProps({
        title: String,
        likes: Number
      })
      </script>
    `,

    defineEmits: `
      <script setup>
      // 定义组件发出的事件
      const emit = defineEmits(['response', 'complete'])
      
      function submit() {
        emit('response', 'data')
      }
      </script>
    `,

    defineExpose: `
      <script setup>
      import { ref } from 'vue'
      
      const count = ref(0)
      
      // 暴露给父组件的API
      defineExpose({
        count,
        increment
      })
      
      function increment() {
        count.value++
      }
      </script>
    `,

    defineModel: `
      <script setup>
      // Vue 3.4+ 新增，用于双向绑定
      const model = defineModel()
      
      // 或者带选项
      const model = defineModel('value', { type: String })
      </script>
    `,

    withDefaults: `
      <script setup>
      // 为props提供默认值
      const props = withDefaults(defineProps<{
        title?: string
        likes?: number
      }>(), {
        title: '默认标题',
        likes: 0
      })
      </script>
    `
  },

  // 组合函数
  composableFunction: function () {
    // 一个典型的组合函数
    function useCounter(initialValue = 0) {
      const count = ref(initialValue);

      const increment = () => count.value++;
      const decrement = () => count.value--;
      const reset = () => count.value = initialValue;

      return {
        count,
        increment,
        decrement,
        reset
      };
    }

    // 在组件中使用
    const { count, increment, decrement, reset } = useCounter(10);

    return { count, increment, decrement, reset };
  },

  // provide/inject
  provideInject: function () {
    const { provide, inject } = Vue;

    // 父组件
    provide('theme', 'dark');

    // 子组件
    const theme = inject('theme', 'light'); // 第二个参数是默认值

    return { theme };
  },

  // 响应式进阶API
  advancedReactivity: {
    toRefs: '将响应式对象转换为普通对象，每个属性都是ref',
    toRef: '将响应式对象的某个属性转换为ref',
    readonly: '创建只读的响应式代理',
    shallowReactive: '创建浅层响应式代理',
    shallowReadonly: '创建浅层只读代理',
    customRef: '创建自定义的ref'
  }
};

// 18. TypeScript集成
const typescriptIntegration = {
  // Vue 2 with TypeScript
  vue2WithTS: {
    component: `
      import Vue from 'vue';
      
      export default Vue.extend({
        name: 'MyComponent',
        
        props: {
          msg: {
            type: String,
            required: true
          }
        },
        
        data() {
          return {
            count: 0
          };
        },
        
        computed: {
          doubleCount(): number {
            return this.count * 2;
          }
        },
        
        methods: {
          increment(): void {
            this.count++;
          }
        }
      });
    `
  },

  // Vue 3 with TypeScript
  vue3WithTS: {
    component: `
      import { defineComponent, ref, computed } from 'vue';
      
      export default defineComponent({
        name: 'MyComponent',
        
        props: {
          msg: {
            type: String,
            required: true
          }
        },
        
        setup(props) {
          const count = ref<number>(0);
          
          const doubleCount = computed((): number => {
            return count.value * 2;
          });
          
          const increment = (): void => {
            count.value++;
          };
          
          return {
            count,
            doubleCount,
            increment
          };
        }
      });
    `
  },

  // Vue 3 + TypeScript + <script setup>
  vue3TsScriptSetup: `
    <script setup lang="ts">
    import { ref } from 'vue'
    
    interface Props {
      title: string
      likes?: number
    }
    
    const props = withDefaults(defineProps<Props>(), {
      likes: 0
    })
    
    const count = ref<number>(0)
    
    const increment = (): void => {
      count.value++
    }
    </script>
  `
};

// 19. 高级特性
const advancedFeatures = {
  // 渲染函数
  renderFunction: {
    basic: function (h) {
      return h('div', { class: 'my-class' }, [
        h('h1', 'Hello'),
        h('p', 'World')
      ]);
    },

    jsx: `
      // 需要JSX转换器
      export default {
        render() {
          return (
            <div class="container">
              <h1>{this.title}</h1>
              <p>{this.content}</p>
            </div>
          );
        }
      };
    `
  },

  // 异步组件
  asyncComponents: function () {
    const AsyncComponent = () => ({
      // 需要加载的组件 (应该是一个 Promise)
      component: import('./TheComponent.vue'),
      // 加载中显示的组件
      loading: { template: '<div>加载中...</div>' },
      // 加载失败时显示的组件
      error: { template: '<div>加载失败</div>' },
      // 展示加载时组件的延时时间 (默认: 200ms)
      delay: 200,
      // 如果提供了超时时间且组件加载也超时了，
      // 则使用加载失败时显示的组件 (默认: Infinity)
      timeout: 3000
    });

    return AsyncComponent;
  },

  // 动态组件
  dynamicComponents: `
    <component :is="currentComponent"></component>
  `,

  // 递归组件
  recursiveComponents: `
    // 需要设置name选项
    {
      name: 'tree-item',
      template: `
    < ul >
    <li v-for="item in items" : key="item.id">
      {{ item.name }}
      <tree-item v-if="item.children" :items="item.children"></tree-item>
          </li >
        </ >
  `
    }
  `,

  // 内联模板
  inlineTemplate: `
    <my-component inline-template>
      <div>
        <p>这些内容在父组件中定义</p>
        <p>访问子组件的数据: {{ childData }}</p>
      </div>
    </my-component>
  `,

    // X-Templates
    xTemplates: `
    <script type="text/x-template" id="my-component-template">
      <div>这里是模板内容</div>
    </script>
  `
};

// 20. 性能优化
const performanceOptimization = {
  // 虚拟滚动
  virtualScrolling: `
    // 使用第三方库如 vue-virtual-scroll-list
    <virtual-list
      :size="40"
      :remain="8"
      :bench="1"
    >
      <item
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </virtual-list>
  `,

  // 长列表优化
  longListOptimization: {
    // 使用Object.freeze()防止响应式转换
    freezeData: function (data) {
      return Object.freeze(data);
    },

    // 使用v-memo (Vue 3.2+)
    memoization: `
      <div v-for="item in list" :key="item.id">
        <template v-memo="[item.id === selectedId]">
          <my-component :item="item" :selected="item.id === selectedId" />
        </template>
      </div>
    `
  },

  // 组件懒加载
  componentLazyLoading: function () {
    return {
      components: {
        HeavyComponent: () => import('./HeavyComponent.vue')
      }
    };
  },

  // 使用keep-alive缓存组件
  keepAlive: `
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  `,

  // 使用production模式
  productionMode: function () {
    // 确保在生产环境中使用生产版本的Vue
    // 设置NODE_ENV为production
  },

  // 虚拟DOM优化
  vdomOptimization: {
    keyUsage: '为列表项提供唯一的key值',
    trackBy: '使用key属性优化列表渲染'
  }
};

// 21. 错误处理与调试
const errorHandling = {
  // 全局错误处理
  globalErrorHandler: function () {
    Vue.config.errorHandler = function (err, vm, info) {
      // 处理错误
      console.error('Global error:', err, info);
    };
  },

  // 组件错误处理
  componentErrorHandler: {
    errorCaptured: function (err, vm, info) {
      // 可以返回false来阻止错误继续向上传播
      console.error('Component error:', err, info);
    }
  },

  // 路由错误处理
  routeErrorHandler: {
    router.onError: function(error) {
      console.error('Router error:', error);
    }
  },

  // 开发调试工具
  debuggingTools: {
    vueDevtools: 'Vue Devtools浏览器扩展',
    consoleLogging: '使用console.log和console.table进行调试',
    vueDevServer: '使用Vue CLI的开发服务器进行热重载'
  }
};

// 22. 全局API
const globalAPI = {
  // Vue.extend
  extend: 'Vue.extend(options) - 创建一个Vue组件的构造器',

  // Vue.nextTick
  nextTick: function () {
    // 在下次DOM更新循环结束之后执行延迟回调
    Vue.nextTick(() => {
      // DOM 更新了
    });
  },

  // Vue.set
  set: 'Vue.set(target, key, value) - 向响应式对象添加属性',

  // Vue.delete
  delete: 'Vue.delete(target, key) - 删除响应式对象的属性',

  // Vue.directive
  directive: 'Vue.directive(id, definition) - 注册或获取全局指令',

  // Vue.filter
  filter: 'Vue.filter(id, [definition]) - 注册或获取全局过滤器',

  // Vue.component
  component: 'Vue.component(id, [definition]) - 注册或获取全局组件',

  // Vue.use
  use: 'Vue.use(plugin) - 使用插件',

  // Vue.mixin
  mixin: 'Vue.mixin(mixin) - 全局注册混入',

  // Vue.compile
  compile: 'Vue.compile(template) - 在render函数中编译模板字符串',

  // Vue.version
  version: 'Vue.version - 提供Vue安装版本号'
};

// 23. 响应式进阶API
const advancedReactivityAPI = {
  // Vue 3响应式API
  vue3Reactivity: {
    ref: '创建一个响应式引用',
    reactive: '创建一个响应式对象',
    readonly: '创建只读的响应式代理',
    computed: '创建计算属性',
    watchEffect: '副作用函数，自动追踪依赖',
    watchPostEffect: '在DOM更新后执行的副作用函数',
    watchSyncEffect: '同步执行的副作用函数'
  },

  // 自定义响应式API
  customReactivity: {
    customRef: '创建自定义的ref',
    toRef: '将响应式对象的属性转换为ref',
    toRefs: '将响应式对象的所有属性转换为ref',
    triggerRef: '强制触发ref的更新',
    unref: '如果参数是ref则返回其值，否则返回参数本身',
    shallowRef: '创建浅层响应式引用',
    shallowReactive: '创建浅层响应式对象'
  }
};

// 24. 测试相关
const testing = {
  // 单元测试
  unitTesting: {
    vueTestUtils: 'Vue官方测试工具库',
    jest: 'JavaScript测试框架',
    mocha: 'JavaScript测试框架',
    chai: 'BDD/TDD断言库'
  },

  // 组件测试
  componentTesting: {
    mount: '完整挂载组件',
    shallowMount: '浅渲染组件，不渲染子组件',
    render: '渲染组件为DOM'
  },

  // 测试技巧
  testingTips: {
    mockAPI: '模拟API请求',
    stubComponents: '存根子组件',
    testProps: '测试组件props',
    testEvents: '测试组件事件'
  }
};

// 25. Vue 3 新特性
const vue3NewFeatures = {
  // Fragment (多个根节点)
  fragments: `
    <template>
      <div>第一个根节点</div>
      <div>第二个根节点</div>
      <div>第三个根节点</div>
    </template>
  `,

  // Emits (声明发出的事件)
  emits: `
    export default {
      emits: ['response', 'complete'],
      setup(props, { emit }) {
        const submit = () => {
          emit('response', 'data');
        };
        return { submit };
      }
    }
  `,

  // Teleport 组件
  teleport: `
    <teleport to="body">
      <div class="modal">
        <p>这将被渲染到body元素下</p>
      </div>
    </teleport>
  `,

  // Suspense 组件
  suspense: `
    <suspense>
      <template #default>
        <async-component />
      </template>
      <template #fallback>
        <div>加载中...</div>
      </template>
    </suspense>
  `,

  // createApp API
  createApp: `
    const { createApp } = Vue;
    
    const app = createApp({
      data() {
        return {
          message: 'Hello Vue 3!'
        }
      }
    });
    
    app.mount('#app');
  `,

  // Suspense的异步组件
  asyncComponentWithSuspense: `
    // 组件
    const AsyncComponent = {
      async setup() {
        const response = await fetch('/api/data');
        const data = await response.json();
        
        return { data };
      },
      
      template: '<div>{{ data }}</div>'
    };
    
    // 使用
    <Suspense>
      <template #default>
        <AsyncComponent />
      </template>
      <template #fallback>
        <div>加载中...</div>
      </template>
    </Suspense>
  `,

  // serverPrefetch (服务端预取数据)
  serverPrefetch: `
    export default {
      async serverPrefetch() {
        // 服务端渲染时预取数据
        this.data = await this.fetchData();
      },
      
      data() {
        return { data: null };
      },
      
      methods: {
        async fetchData() {
          const response = await fetch('/api/data');
          return response.json();
        }
      }
    }
  `,

  // inheritAttrs
  inheritAttrs: `
    export default {
      inheritAttrs: false, // 不自动继承属性
      
      props: ['label'],
      
      template: \`
        <div>
          <label>{{ label }}</label>
          <input v-bind="$attrs" />
        </div>
      \`
    }
  `,

  // expose (控制暴露给父组件的API)
  expose: `
    export default {
      data() {
        return { privateData: 'private' };
      },
      
      methods: {
        publicMethod() {
          // 公共方法
        },
        
        privateMethod() {
          // 私有方法
        }
      },
      
      // 指定暴露给$refs的属性和方法
      expose: ['publicMethod']
    }
  `
};

// 26. 服务端渲染
const serverSideRendering = {
  // 基础SSR设置
  basicSSR: `
    // 服务端入口
    import { createSSRApp } from 'vue';
    import App from './App.vue';
    
    export function createApp() {
      const app = createSSRApp(App);
      return { app };
    }
  `,

  // SSR数据预取
  dataFetching: {
    beforeRender: `
      // 在服务端渲染期间，数据预取函数
      async serverPrefetch() {
        this.posts = await fetchPosts();
      }
    `,

    hydration: `
      // 客户端激活
      app.mount('#app', true); // 第二个参数表示进行hydration
    `
  }
};

console.log("Vue语法完整指南 - 从入门到专家");
console.log("本文件包含了所有Vue语法的详细讲解，可作为开发参考");

// 导出所有示例
export {
  basicExample,
  directivesExample,
  eventHandling,
  componentSystem,
  reactivitySystem,
  lifecycle,
  computedAndWatchers,
  formHandling,
  transitionsAndAnimations,
  slotsSystem,
  mixins,
  customDirectives,
  plugins,
  vuex,
  vueRouter,
  compositionAPI,
  typescriptIntegration,
  advancedFeatures,
  performanceOptimization,
  errorHandling,
  globalAPI,
  advancedReactivityAPI,
  testing,
  vue3NewFeatures,
  serverSideRendering
};