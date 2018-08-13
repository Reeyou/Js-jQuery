$(document).ready(
  $('.i1').on('mouseenter', function () {
    $('.line').animate({ left: '0' }, 500, 'easeOutQuint',$('.line').stop())
    $('.block_1').show()
    $('.block_2').hide()
    $('.block_3').hide()
  }),
  $('.i2').on('mouseenter', function () {
    $('.line').animate({ left: '300px' }, 500, 'easeOutQuint', $('.line').stop())
      $('.block_1').hide()
      $('.block_2').show()
      $('.block_3').hide()
  }),
  $('.i3').on('mouseenter', function () {
    $('.line').animate({ left: '600px' }, 500, 'easeOutQuint', $('.line').stop())
      $('.block_1').hide()
      $('.block_2').hide()
      $('.block_3').show()
  })
)