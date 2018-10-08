$(function () {
  function getData() {
    if (!flag) {
      flag = true;
      $.ajax({
        url: 'http://www.wookmark.com/api/json/popular',
        methods: 'Get',
        dataType: 'jsonp',
        success: function (data) {
          addPhoto(data)
        }
      })
    }
  }
  getData()
 
  // ====================
  var flag = false;

  function addPhoto(data) {
    data.forEach(ele => {
      var oli = $('li')
      var addIndex = getMin(oli)
      console.log(addIndex)
      var imgData = $('<img>').attr('src', ele.preview)
      var box = $('<div>').addClass('box').append(imgData).append('<p>'+ele.title+'</p>')
      $('li').eq(addIndex).append(box).appendTo('ul')
    })
    flag = false;
  }

  function getMin(dom) {
    var minH = dom.eq(0).outerHeight(),//获取
      index = 0,
      length = dom.length;
    for (var i = 0; i < length; i++) {
      var h = dom.eq(i).outerHeight();
      if (h < minH) {
        minH = h;
        index = i;
      }
    }
    return index;
  }
  $(window).scroll(() => {
    var oli = $('li')
    var addIndex = getMin(oli)
    var minScroll = $('li').eq(addIndex).outerHeight(),
        scrollHeight = $(document).scrollTop(),
        height = $(window).height()
    if (minScroll < scrollHeight + height) {
      getData();
    }
  })
  
})