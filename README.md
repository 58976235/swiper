# swiper

轮播图 
### 简单用法

htlm
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin: 0;
        }
        ul{
            padding: 0;
            margin: 0;
        }
        li{
            list-style: none;
        }
    </style>
</head>
<body>
    <div id="swipe" style="margin:200px auto;width:1200px;height:200px;"></div>
</body>
<script src="../../public/js/jquery-1.10.2.js"></script>
<script src="../../public/js/swiper-mini.js"></script>
<script src="./swipe-dome.js"></script>
</html>
```

```js
$(()=>{
    let list = [
        {src:'https://img2.baidu.com/it/u=4249630208,1769413815&fm=253&fmt=auto&app=138&f=JPEG?w=806&h=480',href:'javascript:;'},
        {src:'https://img0.baidu.com/it/u=1490760942,1960856049&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',href:'javascript:;'},
        {src:'https://img1.baidu.com/it/u=2841300789,3597403330&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',href:'javascript:;'},
        {src:'https://img0.baidu.com/it/u=3798217922,3880088897&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',href:'javascript:;'},
        {src:'https://img1.baidu.com/it/u=3384796346,381674655&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',href:'javascript:;'},
        {src:'https://img0.baidu.com/it/u=530426417,2082848644&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',href:'javascript:;'}
    ]
    let swiper = new Swiper({id:'swipe',list})

    $(".lh-swipe-control").on("click",'div',(e)=>{
        if(e.target.dataset.tag =="prev"){
            swiper.prev()
            return
        }
        if(e.target.dataset.tag =="next"){
            swiper.next()
            return
        }
    })
    $(".lh-swipe-indicator").on('click','li',(e)=>{
        swiper.to(e.target.dataset.index)
    })
})

// swiper实例方法
swiper.next() //下一张
swiper.prev() //上一张
swiper.to(3) //切换到第三张
```


### 参数详情
```ts
type Items = {
    src: string, // 图片地址
    herf: string // 点击图片跳转地址
}
interface Params {
    id: string, // domId
    list: Array<Items>, // 图片列表 array类型，内部是object，有src和herf
    showView?: number, // 轮播窗口显示图片数 默认1 建议奇数
    spacing?: number, // 窗口显示多图片条件下 图片之间的间距 默认10
    play?: boolean, // 开启自动轮播 默认开启
    control?: boolean, // 显示控制按钮 默认开启
    indicator?: boolean // 显示指示器 默认开启
}

```

### 效果
#### 显示1张图片
![显示1张图片](images/test3.png)
#### 显示3张图片
![显示3张图片](images/test1.png)
#### 显示5张图片
![显示5张图片](images/test2.png)