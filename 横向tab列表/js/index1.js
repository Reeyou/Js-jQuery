$(document).ready(
  $('.i1').on('mouseenter', function () {
    $('.line').animate({ left: '0' }, 500, 'easeOutQuint',$('.line').stop())
  }),
  $('.i2').on('mouseenter', function () {
    $('.line').animate({ left: '300px' }, 500, 'easeOutQuint',$('.line').stop())
  }),
  $('.i3').on('mouseenter', function () {
    $('.line').animate({ left: '600px' }, 500, 'easeOutQuint',$('.line').stop())
  })
)