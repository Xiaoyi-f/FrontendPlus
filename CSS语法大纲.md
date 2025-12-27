1.选择器类型
  element {} 元素选择器
  .class {} 类选择器
  #id {} id选择器
  * {} 通配符选择器
  [attr] {} 属性选择器
  [attr=value] 属性值选择器
  div p {} 后代元素选择器
  div > p {} 直接子元素选择器
  div + p {} 相邻兄弟选择器 -> 选择后同级唯一邻兄弟
  div ~ p {} 通用兄弟选择器 -> 选择后面所有同级兄弟
  
  /* 选择器组合demostart */
  div,
  p,
  span {}
  /* 选择器组合demoover */

  div.class#id[attr=value] {} 复合选择器

  /* 伪类选择器demostart */
  a:link {} 链接选择器
  a:visited {} 访问选择器
  a:hover {} 鼠标悬停选择器
  a:active {} 激活选择器
  (说明：上面四个伪类选择器书写顺序一定要按照link visited hover active的顺序)
  input:focus {} 获取焦点选择器
  input:checked {} 选中选择器
  input:disabled {} 禁用选择器
  input:enabled {} 启用选择器
  input:invalid {} 无效选择器
  input:valid {} 有效选择器
  input:required {} 必填选择器
  input:optional {} 可选选择器
  input:autofill {} 自动填充选择器
  input:placeholder-shown {} 显示提示选择器
  input:default {} 默认选择器
  input:in-range {} 范围内选择器
  input:out-of-range {} 超出范围选择器
  input:read-only {} 只读选择器
  input:read-write {} 可读写选择器
  input:empty {} 空选择器
  input:target {} 目标选择器
  input:lang(zh-CN) {} 语言选择器
  input:dir(ltr) {} 文本方向选择器
  input:not(selector) {} 非选择器
  input:nth-child(n) {} 孩子选择器
  input:first-child {} 首个孩子选择器
  input:last-child {} 末尾孩子选择器
  div:has(selector) {} 孩子拥有选择器
  div:is(input, select, textarea):focus 等价于input:focus,select:focus,textarea:focus  简化选择器组 -> 优先级以具体选择器来计算
  input:where(selector) {} 简化选择器组 -> 最低优先级
  /* 伪类选择器demoover */

  /* 伪元素选择器 */
  ::before {} 前置元素选择器
  ::after {} 后置元素选择器
  ::first-letter {} 首字母选择器
  ::first-line {} 首行选择器
  ::selection {} 选中选择器
  ::placeholder {} 提示选择器
  ::backdrop {} 背景选择器

2.继承特性
  (1)能继承的核心属性
    1.color 文字颜色文本样式 
    2.text-align 文字对齐方式(左 / 右 / 居中)文本样式 
    3.text-indent 首行缩进文本样式 
    4.text-decoration 文本装饰（如下划线），默认继承可覆盖文本样式 
    5.line-height 行高（控制文字行间距）字体样式 
    6.font-family 字体类型（如微软雅黑、宋体）字体样式 7.font-size 字体大小字体样式 
    8.font-weight 字体粗细（粗体 / 正常）字体样式 
    9.font-style 字体样式（斜体 / 正常）
    10.list-style 列表标记样式（如圆点、方块）列表样式 
    11.list-style-type 列表标记具体类型（circle/decimal 等）其他 
    12.cursor 鼠标光标样式(如 pointer / 默认箭头)其他 
    13.visibility 元素可见性（hidden/visible）
  (2)不能继承的核心属性
    1.width/height 元素宽度 / 高度盒子模型 
    2.margin/padding 外边距 / 内边距盒子模型 
    3.border 边框样式（宽度、颜色、类型）盒子模型 
    4.box-sizing 盒模型计算方式（content-box/border-box） 
    5.background-color 背景颜色背景样式 
    6.background-image 背景图片背景样式 
    7.background-position 背景图片位置定位布局 
    8.position 定位方式(static/relative/absolute)
    9.display 元素显示方式（block/inline 等）
    10.float/clear 浮动 / 清除浮动定位布局 
    11.z-index 元素层级顺序其他 
    12.opacity 元素透明度其他 overflow 溢出内容处理方式（hidden/scroll 等）

3.控制继承的关键字
  inherit 强制子元素继承父元素的该属性值 
  child {width: inherit;}
  initial 恢复属性的浏览器默认值，取消继承 
  child { color: initial; }
  unset 智能重置：能继承则 inherit，否则 initial child { all: unset; }

4.层叠性特性
层叠性说的是对于同一个元素的重复属性配置的层叠，不是对于选择器整体直接层叠，而是对于样式属性的层叠

5.优先级特性

  优先判断：
  继承的样式（权重0） 
  < 通配符*（权重0） 
  < 元素/伪元素选择器（权重1） 
  < 类/伪类/属性选择器（权重10） 
  < ID选择器（权重100） 
  < 行内样式（权重1000） 
  < !important（权重最高，突破所有规则）
  
  其次判断：
  兄弟/后代/子选择器
  < 属性选择器
  < 伪类选择器
  < 伪元素选择器

  优先级权重说明：
  (1)权重越高优先级越高
  (2)选择器个数越多，权重会随之变大

6.样式属性
## 一、基础盒模型（布局核心）
/* 尺寸 */
width: 300px; /* 固定值 */
width: 100%; /* 相对父元素 */
width: auto; /* 自适应 */
width: min(500px, 100%); /* 高级函数：取最小值 */
width: max(300px, 50%); /* 取最大值 */
width: clamp(200px, 50%, 600px); /* 限定范围：最小值 基准值 最大值 */
height: 200px;
height: 100vh; /* 视口高度 */
height: calc(100vh - 80px); /* 计算函数：支持+ - * /，运算符前后加空格 */

/* 内外边距 */
margin: 10px; /* 上下左右 */
margin: 5px 10px 15px 20px; /* 上 右 下 左 */
margin: auto; /* 水平居中 */
margin-top: calc(20px + 10%);
padding: 8px 15px;
padding-left: max(10px, 2vw);

/* 边框 */
border: 1px solid #ccc; /* 宽度 样式 颜色 */
border-width: 2px;
border-style: solid | dashed | dotted | double; /* 实线/虚线/点线/双实线 */
border-color: #f00 rgb(255,0,0) hsl(0,100%,50%);
border-radius: 8px; /* 圆角 */
border-radius: 50%; /* 圆形 */
border-top-left-radius: 10px;

/* 盒模型计算 */
box-sizing: content-box | border-box; /* 内容盒/边框盒 */
box-shadow: 0 2px 8px rgba(0,0,0,0.1); /* x y 模糊 颜色 */
box-shadow: 0 0 10px 5px rgba(255,0,0,0.2), inset 0 0 5px #000; /* 多阴影/内阴影 */
outline: 2px solid blue; /* 外轮廓（不占空间） */
outline-offset: 5px; /* 轮廓偏移 */

## 二、定位与布局
/* 显示类型 */
display: block | inline | inline-block | none | flex | grid | table;
display: flow-root; /* 清除浮动，替代BFC */

/* 定位 */
position: static | relative | absolute | fixed | sticky;
top: 10px;
left: 50%;
transform: translateX(-50%); /* 配合定位居中 */
z-index: 999; /* 层级，仅定位元素生效 */
z-index: calc(100 + var(--z-index-base)); /* 结合变量+计算 */

/* 浮动 */
float: left | right | none;
clear: both | left | right;

/* 溢出处理 */
overflow: visible | hidden | scroll | auto;
overflow-x: hidden;
overflow-y: auto;
text-overflow: ellipsis; /* 文字省略号，需配合white-space:nowrap和overflow:hidden */
white-space: nowrap | normal | pre | pre-wrap;

/* 可见性 */
visibility: visible | hidden; /* 隐藏但占空间 */
opacity: 0.5; /* 透明度，0-1，影响子元素 */
opacity: calc(1 - 0.3);

## 三、弹性布局（Flex）
/* 父容器 */
display: flex;
flex-direction: row | row-reverse | column | column-reverse;
flex-wrap: nowrap | wrap | wrap-reverse;
flex-flow: row wrap; /* 缩写：方向+换行 */
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
align-items: stretch | flex-start | flex-end | center | baseline;
align-content: flex-start | flex-end | center | space-between | space-around;

/* 子元素 */
flex: 1; /* 缩写：flex-grow flex-shrink flex-basis */
flex: 0 0 200px; /* 不放大 不缩小 基准宽度200px */
flex-grow: 0 | 1 | 2; /* 放大比例 */
flex-shrink: 0 | 1; /* 缩小比例 */
flex-basis: auto | 200px | 50%;
align-self: auto | flex-start | center; /* 单独对齐 */
order: 2; /* 排列顺序，数值越小越靠前 */

## 四、网格布局（Grid）
display: grid | inline-grid;
grid-template-columns: 100px 1fr 2fr; /* 列，fr=剩余空间比例 */
grid-template-columns: repeat(3, 1fr); /* 重复函数：3列等宽 */
grid-template-columns: minmax(100px, 1fr) auto; /* 列宽限定范围 */
grid-template-rows: 50px auto 100px;
grid-template-areas: 
  "header header header"
  "sidebar main main"
  "footer footer footer"; /* 区域命名 */
grid-area: header; /* 子元素关联区域 */
grid-column: 1 / 3; /* 列跨度：从第1列到第3列 */
grid-column: span 2; /* 跨2列 */
grid-row: 2 / 4;
grid-gap: 10px; /* 间距，缩写：grid-row-gap + grid-column-gap */
grid-row-gap: 5px;
grid-column-gap: 8px;
justify-items: start | center | end; /* 单元格内容水平对齐 */
align-items: start | center | end; /* 单元格内容垂直对齐 */
justify-content: center | space-between; /* 整个网格容器对齐 */
align-content: center | space-around;

## 五、文本与字体
/* 字体基础 */
font-size: 14px | 1.2rem | 1em | 80% | clamp(14px, 2vw, 18px);
font-family: "Microsoft Yahei", Arial, sans-serif;
font-weight: normal | bold | 400 | 700 | 900;
font-style: normal | italic | oblique;
font-variant: small-caps; /* 小型大写字母 */
font: italic bold 16px/1.5 "微软雅黑"; /* 缩写：样式 粗细 字号/行高 字体 */

/* 文本样式 */
color: #333 | rgb(51,51,51) | rgba(51,51,51,0.8) | hsl(0,0%,20%) | var(--text-color);
text-align: left | center | right | justify;
text-indent: 2em | 20px | calc(2em + 10px); /* 首行缩进 */
text-decoration: none | underline | overline | line-through;
text-decoration-color: red;
text-decoration-style: dashed;
text-decoration-thickness: 2px;
text-transform: none | uppercase | lowercase | capitalize; /* 大小写转换 */
letter-spacing: 1px | -0.5px; /* 字间距 */
word-spacing: 5px; /* 词间距（英文） */
line-height: 1.5 | 24px | normal; /* 行高，无单位为字号倍数 */
text-shadow: 1px 1px 2px #666 | 0 0 5px rgba(255,0,0,0.3); /* 文字阴影 */
vertical-align: baseline | middle | top | bottom | 5px; /* 垂直对齐 */

/* 高级文本 */
writing-mode: horizontal-tb | vertical-rl; /* 书写方向：水平/垂直 */
text-orientation: upright | mixed; /* 文字方向 */
hyphens: auto | manual | none; /* 连字符（英文换行） */
font-feature-settings: "liga" 1; /* 字体特性（连字等） */
font-variation-settings: "wght" 500; /* 可变字体属性 */

## 六、背景与渐变
/* 基础背景 */
background-color: #f5f5f5 | transparent | hsl(0,0%,96%);
background-image: url("bg.png") | none | linear-gradient(to right, #f00, #00f) | radial-gradient(circle, #fff, #000);
background-repeat: repeat | no-repeat | repeat-x | repeat-y;
background-position: center | top left | 10px 20px | 50% 50%;
background-size: cover | contain | 100% 100% | auto 50%;
background-attachment: scroll | fixed | local;
background-origin: padding-box | border-box | content-box; /* 背景起始位置 */
background-clip: padding-box | border-box | content-box | text; /* 背景裁剪，text需配合文字透明 */
background: #f00 url("bg.png") no-repeat center / cover; /* 缩写 */

/* 渐变（高级） */
/* 线性渐变 */
background: linear-gradient(45deg, #f00 0%, #ff0 50%, #00f 100%);
background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));
/* 径向渐变 */
background: radial-gradient(circle at center, #fff 0%, #000 100%);
background: radial-gradient(ellipse 80% 60% at 20% 30%, #f00, #00f);
/* 圆锥渐变 */
background: conic-gradient(red, orange, yellow, green, blue);
background: conic-gradient(from 90deg, #f00 0deg 90deg, #00f 90deg 180deg);
/* 重复渐变 */
background: repeating-linear-gradient(45deg, #f00, #f00 10px, #00f 10px, #00f 20px);

## 七、过渡与动画
/* 过渡 */
transition: all 0.3s ease; /* 属性 时长 缓动 */
transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s linear;
transition-property: width | background | all;
transition-duration: 0.3s | 500ms;
transition-timing-function: linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier(0.1, 0.7, 1.0, 0.1); /* 自定义贝塞尔曲线 */
transition-delay: 0.2s;

/* 动画 */
animation: move 1s infinite alternate; /* 动画名 时长 循环 反向 */
animation-name: move;
animation-duration: 1s;
animation-timing-function: linear;
animation-delay: 0.5s;
animation-iteration-count: 3 | infinite; /* 循环次数 */
animation-direction: normal | reverse | alternate | alternate-reverse;
animation-fill-mode: none | forwards | backwards | both; /* 动画结束后状态 */
animation-play-state: running | paused; /* 播放/暂停 */

/* 关键帧定义 */
@keyframes move {
  0% { transform: translateX(0); }
  50% { transform: translateX(50px); opacity: 0.8; }
  100% { transform: translateX(100px); }
}

/* 变换（Transform） */
transform: translate(10px, 20px) | translateX(50%) | translateY(-10px);
transform: scale(1.2) | scaleX(0.8) | scaleY(1.1); /* 缩放 */
transform: rotate(30deg) | rotateX(180deg) | rotateY(90deg) | rotateZ(45deg); /* 旋转 */
transform: skew(10deg, 5deg) | skewX(15deg) | skewY(-5deg); /* 倾斜 */
transform: matrix(1, 0, 0, 1, 50, 50); /* 矩阵变换 */
transform-origin: center | top left | 50% 50%; /* 变换原点 */
transform-style: flat | preserve-3d; /* 3D变换 */
perspective: 1000px; /* 透视（父元素） */
perspective-origin: center;
backface-visibility: visible | hidden; /* 背面可见性 */

## 八、列表与表格
/* 列表 */
list-style: none | disc | circle | square | decimal;
list-style-type: lower-roman | upper-alpha | none;
list-style-position: inside | outside;
list-style-image: url("icon.png");

/* 表格 */
border-collapse: collapse | separate; /* 边框合并 */
border-spacing: 5px; /* 单元格间距 */
table-layout: auto | fixed; /* 布局方式 */
caption-side: top | bottom; /* 标题位置 */
empty-cells: show | hide; /* 空单元格显示 */

## 九、用户交互
cursor: default | pointer | move | text | not-allowed | wait | help;
cursor: url("custom-cursor.png"), pointer; /* 自定义光标 */
pointer-events: auto | none; /* 事件穿透：none不响应鼠标事件 */
user-select: none | auto | text | all; /* 禁止/允许文本选择 */
resize: none | both | horizontal | vertical; /* 调整尺寸（textarea） */
scroll-behavior: auto | smooth; /* 平滑滚动 */
touch-action: auto | none | pan-x | pan-y; /* 触摸行为 */
will-change: transform | opacity; /* 提前告知浏览器优化 */

## 十、滤镜与混合模式（高级视觉）
/* 滤镜 */
filter: blur(2px); /* 模糊 */
filter: brightness(1.2); /* 亮度 */
filter: contrast(150%); /* 对比度 */
filter: grayscale(100%); /* 灰度 */
filter: hue-rotate(90deg); /* 色相旋转 */
filter: invert(100%); /* 反色 */
filter: opacity(0.8); /* 透明度（区别于opacity，可用于SVG） */
filter: saturate(200%); /* 饱和度 */
filter: sepia(80%); /* 褐色 */
filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)); /* 投影（可作用于透明元素） */
filter: blur(2px) brightness(1.2); /* 多滤镜组合 */

/* 混合模式 */
mix-blend-mode: normal | multiply | screen | overlay | darken | lighten | color-dodge; /* 元素与背景混合 */
background-blend-mode: normal | multiply; /* 背景图与背景色混合 */

## 十一、变量与高级函数（CSS3+）
/* 自定义变量 */
:root {
  --primary-color: #008cff;
  --font-size-base: 14px;
  --spacing: 16px;
}
color: var(--primary-color);
font-size: var(--font-size-base, 16px); /* 变量+默认值 */
padding: var(--spacing) calc(var(--spacing) / 2);

/* 颜色函数 */
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5); /* 带透明度 */
color: hsl(0, 100%, 50%); /* 色相 饱和度 亮度 */
color: hsla(0, 100%, 50%, 0.5);
color: color-mix(in srgb, red 50%, blue 50%); /* 颜色混合 */
color: color-adjust: exact; /* 颜色调整 */

/* 数学函数 */
width: calc(100% - 80px); /* 计算，支持+ - * /，运算符前后加空格 */
width: min(500px, 100%); /* 取最小值 */
width: max(300px, 50%); /* 取最大值 */
width: clamp(200px, 50vw, 600px); /* 限定范围：min ≤ value ≤ max */
height: minmax(100px, auto); /* Grid专用，最小值+最大值 */
count: counter(list-item); /* 计数器函数 */

/* 内容函数 */
content: attr(data-text); /* 获取元素属性值 */
content: counter(step); /* 计数器 */
content: "前缀" var(--text) "后缀";

## 十二、媒体查询与响应式
/* 基础媒体查询 */
@media screen and (max-width: 768px) {
  .container { width: 100%; }
}
@media (min-width: 768px) and (max-width: 1200px) {
  .box { padding: 10px; }
}

/* 高宽比 */
@media (aspect-ratio: 16/9) {}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  :root { --primary-color: #0066cc; }
}

/* 打印样式 */
@media print {
  .no-print { display: none; }
}

/* 视口单位 */
width: 10vw; /* 视口宽度1% */
height: 10vh; /* 视口高度1% */
font-size: 5vmin; /* 视口最小边的1% */
font-size: 5vmax; /* 视口最大边的1% */

## 十三、无障碍与布局进阶
/* 滚动条样式（非标准，兼容webkit） */
::-webkit-scrollbar { width: 8px; }
::-webkit-scrollbar-track { background: #f1f1f1; }
::-webkit-scrollbar-thumb { background: #ccc; border-radius: 4px; }

/* 粘性定位 */
position: sticky;
top: 0;

/* BFC触发 */
overflow: hidden;
display: flow-root;
float: left;
position: absolute;

/* 多列布局 */
column-count: 3; /* 列数 */
column-gap: 20px; /* 列间距 */
column-rule: 1px solid #ccc; /* 列分隔线 */
column-width: 200px; /* 列宽 */
break-inside: avoid; /* 避免列内元素断开 */

/* 逻辑属性（适配多语言布局） */
margin-inline-start: 10px; /* 行内起始边距（左/右，随书写方向） */
margin-block-end: 15px; /* 块级结束边距（上/下） */
padding-inline: 10px 20px; /* 行内左右边距 */
border-inline-start: 2px solid red;

