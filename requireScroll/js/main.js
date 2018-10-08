requirejs.config({
  paths: {
    jquery: 'jquery.min'
  }
})
requirejs(['jquery', 'scroll'], function ($,scroll  ) {
  var scroll = new scroll.Scroll({
    dest: 0,
    speed: 400
  })
  $('span').on('click', $.proxy(scroll.move,scroll))//$.proxy
  $(window).on('scroll', checkPosition)
  checkPosition()
  function move() {
    $('html,body').animate({
      scrollTop: 0
    },500)
  }
  function checkPosition() {
    if ($(window).scrollTop() > $(window).height()) {
      $('span').fadeIn();
    } else {
      $('span').fadeOut();
    }
  }
})