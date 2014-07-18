# 史上最华丽的打字效果JS插件

### 当前版本**1.0**

引入相关文件

```html
  <!--引入鼠标闪烁效果CSS(可选)-->
  <link rel="stylesheet" href="typing.css">
  <!--引入typing.js，核心文件-->
  <script src="typing.js"></script>
```

在页面底部或者`Ready`事件中执行相关代码

```html
<script>
  var typing = new Typing({
    source: document.getElementById('source'),
    output: document.getElementById('output'),
    delay: 80
  });
  typing.start();
</script>
```

鼠标闪烁效果，暂时只支持内容都是行内元素的内容

`typing-cursor`和`typing-cursor-black`都是闪烁的黑色光标，而`typing-cursor-white`则是闪烁的黑色光标。
**请注意要在`span`里面放置内容`|`**

```html
<div id="source">
  这里的呈现效果是有鼠标跟随的！<br />
  还不错吧？
</div>
<div id="output-wrap">
  <span id="output"></span>
  <span class="typing-cursor">|</span>
</div>
```

### todo

- 回退删除效果
- 块状元素的鼠标闪烁输入效果

### 接口说明（尚未实现）

```html
<div>
  <span data-type="back">通过设置元素的data-type="back"来达到回退删除的效果</span>
  <span>上面的文本被删除完毕后才会出现的文本</span>
  <h1 data-delay="200">重点文本，可以设置高的延迟时间。通过设置data-delay="200"来设置打印效果的毫秒数</h1>
</div>
```
