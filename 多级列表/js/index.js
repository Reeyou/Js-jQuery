
$(document).ready(
  $('.i1')
    .on('mouseenter', function () {
      $('.i1 ul').css('display', 'block')
      // $('li:after').css('height', '0')
      $('.i11 ul').css('display', 'none')//一级事件触发时三级元素隐藏
      $('.banner1').css('display', 'block')
      $('.banner2,.banner3,.banner4,.banner5').css('display', 'none')
    })
    .on('mouseleave', function () { $('.i1 ul').css('display', 'none') })
    //一级子元素二级事件触发
    .on('mouseenter', '.i11', function () { $('.i11 ul').css('display', 'block') })
    .on('mouseleave', '.i11', function () { $('.i11 ul').css('display', 'none') }),
  $('.i2')
    .on('mouseenter', function () {
      $('.i2 ul').css('display', 'block')
      $('.i22 ul').css('display', 'none')//一级事件触发时三级元素隐藏
      $('.banner2').css('display', 'block')
      $('.banner1,.banner3,.banner4,.banner5').css('display', 'none')
    })
    .on('mouseleave', function () { $('.i2 ul').css('display', 'none') })
    //一级子元素二级事件触发
    .on('mouseenter', '.i22', function () { $('.i22 ul').css('display', 'block') })
    .on('mouseleave', '.i22', function () { $('.i22 ul').css('display', 'none') }),
  $('.i3').on('mouseenter', function () {
    $('.banner3').css('display', 'block')
    $('.banner1,.banner2,.banner4,.banner5').css('display', 'none')
    }),
  $('.i4')
    .on('mouseenter', function () {
      $('.i4 ul').css('display', 'block')
      $('.i41 ul').css('display', 'none')//一级事件触发时三级元素隐藏
      $('.banner4').css('display', 'block')
      $('.banner1,.banner2,.banner3,.banner5').css('display', 'none')
    })
    .on('mouseleave', function () { $('.i4 ul').css('display', 'none') })
    //一级子元素二级事件触发
    .on('mouseenter', '.i41', function () { $('.i41 ul').css('display', 'block') })
    .on('mouseleave', '.i41', function () { $('.i41 ul').css('display', 'none') }),
    $('.i5').on('mouseenter', function () {
      $('.banner5').css('display', 'block')
      $('.banner1,.banner2,.banner3,.banner4').css('display', 'none')
    }),
)
