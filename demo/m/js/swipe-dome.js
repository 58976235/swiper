"use strict";

$(function () {
  var list = [{
    src: 'https://img2.baidu.com/it/u=4249630208,1769413815&fm=253&fmt=auto&app=138&f=JPEG?w=806&h=480',
    href: 'javascript:;'
  }, {
    src: 'https://img0.baidu.com/it/u=1490760942,1960856049&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    href: 'javascript:;'
  }, {
    src: 'https://img1.baidu.com/it/u=2841300789,3597403330&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500',
    href: 'javascript:;'
  }, {
    src: 'https://img0.baidu.com/it/u=3798217922,3880088897&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
    href: 'javascript:;'
  }, {
    src: 'https://img1.baidu.com/it/u=3384796346,381674655&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    href: 'javascript:;'
  }, {
    src: 'https://img0.baidu.com/it/u=530426417,2082848644&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
    href: 'javascript:;'
  }];
  var swiper = new Swiper({
    id: 'swipe',
    list: list,
    showView: 5
  });
  $(".lh-swipe-control").on("click", 'div', function (e) {
    if (e.target.dataset.tag == "prev") {
      swiper.prev();
      return;
    }

    if (e.target.dataset.tag == "next") {
      swiper.next();
      return;
    }
  });
  $(".lh-swipe-indicator").on('click', 'li', function (e) {
    swiper.to(e.target.dataset.index);
  });
});