# 史上最华丽的打字效果JS插件

### 当前版本**0.9**

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
