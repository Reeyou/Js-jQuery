//定义Scroll模块
define(['jquery'], function ($) {
  function Scroll(opts) {
    //$.extend
    this.opts = $.extend({}, Scroll.DEFAULTS, opts)
    this.$el = $('html, body')
  }
  Scroll.prototype.move = function () {
    var opts = this.opts,
        dest = this.opts.dest
    if ($(window).scrollTop() != dest) {
      if (!this.$el.is(':animated')) {
        this.$el.animate({
          scrollTop: dest
        },opts.speed)
      }
    }
  }
  Scroll.prototype.go = function () {
    var dest = this.opts.dest
    if ($(window).scrollTop() != dest) {
      $('html, body').scrollTop(dest)
    }
  }
  //默认属性值
  Scroll.DEFAULTS = {
    dest: 0,
    speed: 800
  }
  return {
    Scroll: Scroll
  }
})