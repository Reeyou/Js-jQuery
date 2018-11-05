requirejs.config({
  paths: {
    jquery: 'jquery.min'
  }
})
requirejs(['jquery', 'scroll'], function ($, scroll) {
  var scroll = new scroll.Scroll({
    dest: 0, //距离
    speed: 400 //速度
  })
  $('span').on('click', $.proxy(scroll.move,scroll))//$.proxy
  $(window).on('scroll', checkPosition)
  checkPosition()

  function checkPosition() {
    if ($(window).scrollTop() > $(window).height()) {
      $('span').fadeIn();
    } else {
      $('span').fadeOut();
    }
  }
})