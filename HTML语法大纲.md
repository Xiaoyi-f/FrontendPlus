1.<!DOCTYPE html>  文件类型声明

2.html文件内容体

3.head头部内容体
  (1)元数据meta
  (2)title
  (3)link

4.body主内容体(显示内容)
  (1)<noscript />
  (2)<div />  <span />
  (3)<h1 /> ~ <h6 />
  (4)<mark />
  (5)<strong /> <b />
  (6)<em /> <i />
  (7)<ins /> <u />
  (8)<del /> <s />
  (9)<small />
  (10)<pre />
  (11)<ul /> <ol /> <dl /> <dt /> <dd /> <li />
  (12)<br>
  (13)<hr>
  (14)<a />
  (15)<img />
  (16)<iframe />
  (17)<video />
  (18)<audio />
  (19)<canvas />
  (20)<source />
  (21)<object />
  (22)<script />
  (23)<style />
  (24)<p />
  (25)<track />
  (26)<table /> <tr /> <th /> <td /> <colgroup /> <col /> <caption />
  (27)<label /> <input /> <datalist /> <option /> <output /> <button /> <select /> <fieldset /> <legend /> <textarea /> 
  (28)<progress /> <meter />
  (29)<details /> <summary />
  (30)<map /> <area />
  (31)<code />
  (32)<blockquote />
  (33)<abbr />
  (34)<cite />
  (35)<dfn />
  (36)<kbd />
  (37)<samp />
  (38)<var />
  (39)<time />
  (40)<address />
  (41)<sub /> <sup /> 
  (42)<svg>

5.语义化标签 -> 不一定不显示
  (1)<header />
  (2)<nav />
  (3)<main />
  (4)<article />
  (5)<figure /> <figcaption />
  (6)<section />
  (7)<aside />
  (8)<footer />
  (9)<thead />
  (10)<tbody />
  (11)<tbody />
  (12)<tfoot />
  (13)<dialog />
  (14)<form />
  (15)<optgroup />

6.特殊字符
  (1)&nbsp; 空格
  (2)&lt; 小于
  (3)&gt; 大于
  (4)&amp; &符
  (5)&quot; 双引号
  (6)&apos; 单引号
  (7)&ensp; 两个普通空格
  (8)&emsp; 四个普通空格
  (9)&copy; 版权符号(©)
  (10)&reg; 注册商标(®)
  (11)&trade; 商标(™)

7.基本属性
### 基础样式/标识类
1. **class**  
   元素类名，用于批量选择元素（可重复），配合CSS/JS复用样式/逻辑
2. **id**  
   元素唯一标识，页面内不可重复，用于精准定位单个元素
3. **style**  
   行内样式属性，直接定义元素CSS样式（优先级高，不推荐大量使用）
4. **title**  
   元素提示文本，鼠标悬停时显示，补充元素说明
5. **lang**  
   定义元素内容语言，`lang="zh-cn"`（中文）、`lang="en"`（英文），辅助浏览器/翻译识别
6. **dir**  
   文本排列方向，`dir="rtl"`（从右向左，如阿拉伯语）、`dir="ltr"`（从左向右，如中文/英文）

### 交互/键盘操作类
7. **accesskey**  
   键盘快捷键，值为单个字符（如`accesskey="F"`），配合系统修饰键（Alt+F）快速聚焦元素
8. **tabindex**  
   Tab键聚焦顺序，`tabindex="1"`优先聚焦，0按DOM顺序，-1仅JS可聚焦
9. **contenteditable**  
   元素是否可编辑，`contenteditable="true"`时用户可修改元素内容
10. **draggable**  
    元素是否可拖动，`draggable="true"`开启拖拽功能（需JS配合实现拖拽逻辑）
11. **spellcheck**  
    拼写检查，`spellcheck="true"`开启文本拼写校验（仅可编辑元素生效）
12. **translate**  
    翻译控制，`translate="yes"`允许翻译元素内容，`no`禁止翻译
13. **hidden**  
    元素隐藏，`hidden="true"`时元素不显示且不占布局空间

### 文档/链接类
14. **name/http-equiv/content/charset**  
    主要用于`<meta>`标签：`name`定义元数据类型，`http-equiv`模拟HTTP响应头，`content`是元数据值，`charset`定义文档编码（如`utf-8`）
15. **rel/href/type**  
    多用于`<a>/<link>/<script>`：`rel`定义资源关系（如`stylesheet`），`href`指定资源地址，`type`定义资源类型（如`text/css`）
16. **target**  
    链接/表单跳转目标，`_blank`新窗口打开，`_self`当前窗口，`_parent`父框架，`_top`顶级框架

### 语义/结构化类
17. **property/content**  
    多用于OGP/微数据，`property`定义属性名，`content`定义属性值（如SEO优化）
18. **itemscope/itemtype/itemprop/itemid/itemref**  
    HTML5微数据属性：标记语义实体（itemscope）、定义实体类型（itemtype）、属性（itemprop）、唯一ID（itemid）、关联外部属性（itemref）
19. **data-***  
    自定义数据属性，如`data-id="1"`，用于存储元素关联的业务数据，可通过JS读取

### 无障碍/辅助类
20. **aria-***  
    无障碍辅助属性，如`aria-label="关闭"`，为屏幕阅读器提供元素说明
21. **role**  
    角色属性，如`role="button"`，定义元素语义角色（辅助无障碍识别非原生控件）

### 事件类
22. **onclick/onchange/onsubmit/onload/onerror/onmouseover/onmouseout/onkeydown/onkeyup/onkeypress/oninvalid/oninput**  
    事件属性，触发对应行为时执行JS代码（如`onclick`点击、`oninput`输入、`onload`加载完成）

### 表单控件类
23. **value**  
    表单元素值，如输入框内容、按钮显示文本、单选/复选框提交值
24. **checked**  
    单选/复选框默认选中，`checked="checked"`（布尔属性可简写为`checked`）
25. **selected**  
    `<option>`默认选中，`selected="selected"`（简写`selected`）
26. **disabled**  
    禁用元素，`disabled="true"`时元素不可交互、不参与表单提交
27. **readonly**  
    只读属性，输入框仅可查看不可编辑，仍参与表单提交
28. **autofocus**  
    页面加载后自动聚焦到该表单元素（仅一个元素生效）
29. **autocomplete**  
    表单自动补全，`on`开启（默认），`off`关闭（如密码框）
30. **autocapitalize**  
    移动端输入自动大写，控制首字母/全部字母大写（仅移动端生效）
31. **autocorrect**  
    移动端输入自动纠错，`on`开启，`off`关闭
32. **autosave**  
    多用于`<input type="search">`，自动保存搜索历史（浏览器兼容有限）
33. **background-attachment: scroll**  
    CSS属性（非HTML属性），背景图随元素内容滚动
34. **background-attachment: fixed**  
    CSS属性，背景图固定在视口，不随滚动移动
35. **background-attachment: local**  
    CSS属性，背景图随元素内部滚动条滚动
36. **reversed**  
    用于`<ol>`，列表项倒序排列（如10→9→8）
37. **src/alt**  
    多用于`<img>/<script>/<video>`：`src`指定资源地址，`alt`为图片/视频提供替代文本（无障碍/加载失败时显示）
38. **controls/autoplay/loop/muted/preload/poster/playsinline**  
    音视频属性：`controls`显示播放控件，`autoplay`自动播放，`loop`循环，`muted`静音，`preload`预加载，`poster`视频封面，`playsinline`移动端内联播放
39. **kind/src/srclang/label**  
    用于`<track>`（音视频字幕）：`kind`定义轨道类型（如`subtitles`），`src`字幕文件地址，`srclang`字幕语言，`label`字幕名称
40. **summary**  
    用于`<details>`，定义折叠面板的摘要/标题
41. **span/scope/headers/rowspan/colspan**  
    表格属性：`span`（单元格合并），`scope`定义表头作用域，`headers`关联表头ID，`rowspan`跨行，`colspan`跨列
42. **action/method/enctype/novalidate/accept-charset**  
    表单属性：`action`提交地址，`method`提交方式（GET/POST），`enctype`编码类型，`novalidate`禁用验证，`accept-charset`接收字符集
43. **for/placeholder**  
    `for`：`<label>`关联表单控件ID；`placeholder`：输入框提示文本
44. **min/max/step**  
    数值输入控件属性：`min`最小值，`max`最大值，`step`步长（如数字输入框每次增减1）
45. **pattern**  
    输入框正则验证，如`pattern="\d{6}"`限制输入6位数字
46. **required**  
    表单必填项，`required="true"`时提交前需填写
47. **form/minlength/maxlength/formnovalidate**  
    `form`：控件关联外部表单ID；`minlength/maxlength`：输入字符最小/最大长度；`formnovalidate`：提交时跳过该控件验证
48. **width/height**  
    定义元素宽高（如`<img>/<table>`），块级元素需配合CSS生效
49. **low/high/optimum**  
    用于`<meter>`（计量器）：`low`低值阈值，`high`高值阈值，`optimum`最佳值
50. **multiple**  
    允许选择/上传多个值，如`<input type="file" multiple>`可多选文件
51. **label**  
    除`<label>`外，也用于`<track>/<option>`等，定义显示标签
52. **datetime**  
    用于`<time>`，定义机器可读的时间/日期（如`datetime="2025-12-27"`）
53. **accept** 
    用于<input type="file">，限制上传文件类型（如accept="image/png,image/jpg"）


