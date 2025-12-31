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
  (说明：上面四个伪类选择器书写顺序一定要按照link visited hover active的顺序(LV好))
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

  伪元素技巧->::before ::after默认是inline类型，但是加上定位会自动切换为inline-block，当然也可以自己显示声明display:inline-block：
  h1 {
    position: relative;
  }
  h1::after {
    content: "";
    background-color: linear-gradient(to right, red, blue);
    height: 4px;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }

2.继承特性
  (1)能继承的核心属性 -> 列表/文本
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
  (2)不能继承的核心属性 -> 盒子
    1.width/height 元素宽度 / 高度盒子模型 
    2.margin/padding 外边距 / 内边距盒子模型 
    3.border 边框样式（宽度、颜色、类型）盒子模型 
    4.box-sizing 盒模型计算方式（content-box/border-box）
    content-box: width 和 height 指定的是内容部分
    border-box: width 和 height 指定的是内容部分加上padding和border的总宽高，但是不设定margin
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
  unset 智能重置：能继承则 inherit，否则 initial 
  child { all: unset; }

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
  口诀：继通素类ID行内

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
/* 1个值 - 四边相同 */
border-width: 5px;  /* 上右下左都是5px */

/* 2个值 - 垂直/水平方向 */
border-width: 5px 10px;  /* 上下=5px，左右=10px */

/* 3个值 - 上/左右/下 */
border-width: 5px 10px 15px;  /* 上=5px，左右=10px，下=15px */

/* 4个值 - 按顺时针顺序 */
border-width: 5px 10px 15px 20px;  /* 上=5px，右=10px，下=15px，左=20px */

一般auto对应长度值但是自动计算

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
margin: 20px auto;
margin-top: calc(20px + 10%);
padding: 8px 15px;
padding-left: max(10px, 2vw);

/* 边框 */
border: 1px solid #ccc; /* 宽度 样式 颜色 */  必须三个都写才会有效果
border-width: 2px;
border-style: solid | dashed | dotted | double; /* 实线/虚线/点线/双实线 */
border-color: #f00 rgb(255,0,0) hsl(0,100%,50%);

十六进制颜色（#RRGGBB）
格式：# 开头 + 6 位十六进制数（0-9、A-F），前两位 RR 代表红色，中间 GG 代表绿色，最后 BB 代表蓝色
取值范围：每一位的取值是 00（最小，对应十进制 0）到 FF（最大，对应十进制 255）
示例：
#f00 是 #ff0000 的简写（当 RR/GG/BB 两位相同时可缩写为 3 位），红色 FF（255）、绿色 00（0）、蓝色 00（0）→ 纯红

RGB 颜色（rgb(R,G,B)）
格式：rgb( + 红色值 + 绿色值 + 蓝色值 + )，三个值都是十进制整数
取值范围：每个颜色通道的取值是 0（无该颜色）到 255（该颜色最强）
示例：
rgb(255,0,0) → 红色最强，绿、蓝无 → 纯红

HSL 颜色（hsl(H,S,L)）
格式：hsl( + 色相 + 饱和度 + 亮度 + )，是更符合人类直觉的调色方式
色相（H）：取值 0-360，代表颜色的种类，比如 0 是红色、60 是黄色、120 是绿色、240 是蓝色
饱和度（S）：取值 0%-100%，代表颜色的鲜艳程度，0% 是灰色，100% 是最鲜艳
亮度（L）：取值 0%-100%，代表颜色的明暗，0% 是黑色，50% 是纯色，100% 是白色
示例：
hsl(0,100%,50%) → 色相 0（红）、饱和度 100%（最艳）、亮度 50%（纯色）→ 纯红

border-radius: 8px; /* 圆角 */
border-radius: 50%; /* 圆形 */
border-top-left-radius: 10px;

/* 盒模型计算 */
box-sizing: content-box | border-box; /* 内容盒/边框盒 */
box-shadow: 0 2px 8px rgba(0,0,0,0.1); /* x y 模糊 颜色 */
box-shadow: 0 0 10px 5px rgba(255,0,0,0.2), inset 0 0 5px #000; /* 多阴影/内阴影 */

box-shadow: h-offset v-offset blur spread color | inset | initial | inherit;
水平偏移（h-offset）：阴影往左边 / 右边挪多少；取值规则：正数 = 右移，负数 = 左移，单位用 px（必写！）；注意点：不能省略，0 = 不左右偏
垂直偏移（v-offset）：阴影往上面 / 下面挪多少；取值规则：正数 = 下移，负数 = 上移，单位用 px（必写！）；注意点：不能省略，0 = 不上下偏
模糊半径（blur）：阴影边缘有多糊（虚化程度）；取值规则：正数 = 越糊，0 = 无模糊（边缘锐利），不能负数；注意点：省略则默认 0
扩散半径（spread）：阴影整体放大 / 缩小多少；取值规则：正数 = 放大，负数 = 缩小，0 = 不扩不缩；注意点：省略则默认 0
颜色（color）：阴影的颜色；取值规则：支持 #十六进制 / RGB/HSL（比如 #ccc、rgb (0,0,0,0.2)）；注意点：省略则默认黑色（偏深，建议显式写）
inset：阴影从「外部」变「内部」；取值规则：加这个关键词 = 内阴影，不加 = 外阴影；注意点：要写在参数最后 / 最前都可以

类(外)边框 -> 但是不占空间
不受border-radius的影响
outline: 2px solid blue; /* 外轮廓（不占空间） */
# 边框和轮廓的距离，能设定负数
outline-offset: 5px; /* 轮廓偏移 */

## 二、定位与布局
/* 显示类型 */
display: block | inline | inline-block | none | flex | grid | table;
display: flow-root; /* 清除浮动，替代BFC */

BFC（Block Formatting Context）是CSS中的一个概念，中文称为"块级格式化上下文"

/* 定位 */
->左右只能写一个，上写只能写一个，写了左就只能写左上下同理，再写右是没有用的
position: static | relative | absolute | fixed | sticky;
static是默认形式->默认文档流，无top/right/bottom/left和z-index影响
relative相对于自身原位置，也不脱离文档流
反着来： top: 10px; /* 向下偏移10px */
        left: 20px; /* 向右偏移20px */
absolute绝对定位->脱离文档流，相对于父盒子定位
示例：.child {
        position: absolute;
        top: 0;
        right: 0; /* 相对于父级右上角定位 */
        width: 50px;
        height: 50px;
      }
fixed固定定位->脱离文档流，相对于视口(body)定位
position: sticky 是 CSS3 引入的一种定位方式，结合了 relative 和 fixed 的特性

注意：位置大多用左上角点来相对
学会结合translate使用

<!-- 常用定位妙招 -->
parent {
  position: relative;
}
son {
  position: absolute;
}
若父元素没写position，absolute可能会相对于视口来定位，因为absolute是相对于最近的定位祖先元素的
脱离文档流就可能浮动起来，覆盖...

top: 10px;
left: 50%;
transform: translateX(-50%); /* 配合定位居中 */

static以外的absolut、fixed、relative、sticky才能使用z-index
z-index: 999; /* 层级，仅定位元素生效 */
z-index: calc(100 + var(--z-index-base)); /* 结合变量+计算 */

/* 浮动 */
这种浮动模式需要清除浮动，否则父级盒子无法感知到子元素的尺寸，他们已经脱离了文档流
float: left | right | none;
<!-- 用于父级清除浮动 -->
overflow: hidden;  /* 清除浮动，隐藏又被检测又把父级盒子撑起来，就正常显示 */
display: flow-root;  /* 代替overflow: hidden; */

阻止当前元素出现在左浮动/右浮动的浮动元素周围，因为块级元素的边界还是可能会和浮动元素重叠，因为浮动元素可能处于溢出状态，但是它们又有父级大盒子，当前块级元素只会相对于他们的父级大盒子，然后可能会和浮动元素影响到
clear: both | left | right;

/* 溢出处理 */
overflow: visible | hidden | scroll | auto;
overflow-x: hidden;
overflow-y: auto;

注意用法：
（overflow: hidden;
  text-overflow: ellipsis;
  必须一起使用才会有效果一般）

text-overflow: ellipsis; /* 文字省略号，需配合white-space:nowrap和overflow:hidden */

文本换行逻辑处理
white-space: nowrap | normal | pre | pre-wrap;

/* 可见性 */
visibility: visible | hidden; /* 隐藏但占空间 */
opacity: 0.5; /* 透明度，0-1，影响子元素 */
opacity: calc(1 - 0.3);

布局建议：记住轴线很重要，也很有用

## 三、弹性布局（Flex）
Flex 布局 = 「弹性容器（父元素）」 + 「弹性项目（子元素）」：
align-*对于交叉轴/侧轴来看
父容器开启 display: flex 后，子元素默认变成弹性项目，脱离标准流（无需清浮动）；
Flex 布局有「主轴」和「侧轴」：
主轴：由 flex-direction 决定（row/column），项目默认沿主轴排列；
侧轴：与主轴垂直，负责项目的交叉方向对齐
/* 父容器 */
display: flex;
flex-direction: row | row-reverse | column | column-reverse;
flex-wrap: nowrap | wrap | wrap-reverse;  /* 控制换行行为 */
flex-flow: row wrap; /* 缩写：方向+换行 */
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
align-items: stretch | flex-start | flex-end | center | baseline;
align-content: flex-start | flex-end | center | space-between(项目之间有相等空间) | space-around(项目周围有相等空间);
gap: 10px; // 用来设置网格/弹性项目之间的距离
/* 子元素(项目) */
flex: 1; /* 缩写：flex-grow flex-shrink flex-basis */
flex: 0 0 200px; /* 不放大空间 不缩小空间 基准宽度200px */
flex-grow: 0 | 1 | 2; /* 放大比例 */
flex-shrink: 0 | 1; /* 缩小比例 */  默认值为1
flex-basis: auto | 200px | 50%;  项目初始在主轴上占据的空间
align-self: auto | flex-start | center | flex-end | baseline; /* 单独对齐 */
order: 2; /* 排列顺序，数值越小越靠前 */
所有弹性项目的order值默认都是0

align-items → 管每一块积木在自己那一排里的副轴位置，不管一排还是好几排，都管用
align-content → 只在积木挤成好几排的时候才管用，管的是这几排积木整体的副轴间距，要是就一排积木，这属性等于白设，啥用没有
简单说：align-items 管单个，align-content 管多行整体

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
<!-- list-style得详细写法 -->
list-style-type: lower-roman | upper-alpha | none;

list-style-position: inside | outside;
list-style-image: url("icon.png");

/* 表格 */
border-collapse: collapse | separate; /* 边框合并 */
border-spacing: 5px; /* 单元格间距->separate模式才有用 */
table-layout: auto | fixed; /* 布局方式，单元格的大小动态变化/固定 */
caption-side: top | bottom; /* 标题位置 */
empty-cells: show | hide; /* 空单元格显示 */

## 九、用户交互
cursor: default | pointer | move | text | not-allowed | wait | help;
cursor: url("custom-cursor.png"), pointer; /* 自定义光标 */
pointer-events: auto | none; /* 事件穿透：none不响应鼠标事件 */
user-select: none | auto | text | all; /* 禁止/允许文本选择 */
resize: none | both | horizontal | vertical; /* 控制元素是否可以被用户调整尺寸（textarea） */
scroll-behavior: auto | smooth; /* 平滑滚动 一般用于锚点得结合使用 */
touch-action: auto | none | pan-x | pan-y; /* 触摸行为，自动/禁止/横向滚动/纵向滚动 */
will-change: transform | opacity | contents; /* 提前告知浏览器优化 */

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

