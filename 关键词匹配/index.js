var personArr = [{
    name: '王刚',
    src: '1.jpg',
    des: '颈椎不好',
    sex: 'm'
}, {
    name: '王莹',
    src: '2.jpg',
    des: '我是谁',
    sex: 'f'
}, {
    name: '王苏',
    src: '3.jpg',
    des: '三月',
    sex: 'm'
}, {
    name: '刘建国',
    src: '4.jpg',
    des: 'shs',
    sex: 'm'
},{
    name: '刘含香',
    src: '5.jpg',
    des: 'hit me like sun',
    sex: 'f'
    }];

// -------------------------------------------------

var oUl = document.getElementsByTagName('ul')[0],
    oInput = document.getElementsByTagName('input')[0],
    tag = document.getElementsByTagName('p')[0],
    tagName = document.getElementsByTagName('span');
//渲染数据
function render(data) {
    var str = '';
    data.forEach(function (ele, index) {
        str += '<li>\
                    <img src="' + ele.src +  '" alt="11">\
                    <p>' + ele.name + '</p>\
                    <p>' + ele.des + '</p>\
                </li>';
        oUl.innerHTML = str;
    })
}
render(personArr)
//全局定义对象
var state = {
    sex: 'a',
    name: ''
    
}
//筛选匹配的name
function filterName(name,arr) {
    return arr.filter(function (ele, index) {
        if (ele.name.indexOf(name) != -1) {
            return true;
        }
    })
}
//筛选匹配的sex
function filterSex(sex, arr) {
    if (sex == 'a') {
        return arr
    } else {
        return arr.filter(function (ele, index) {
            if (ele.sex == sex) {
                return true;
            }
        })
    }
}

//筛选匹配的name和sex
// filterData({name: filterData,sex: filterSex},arr)
function filterData(obj, arr) {
    //闭包
    return function(){
        var data = arr;
        for (prop in obj) {
            data = obj[prop](state[prop], data);
        }
        return data;
    }
}
var filter = filterData({  sex: filterSex,name: filterName}, personArr)

//监听输入框输入值
oInput.oninput = function () {
    state.name = this.value;
    // console.log(this.value)
    render(filter())
    // render(filterName(state.name, personArr))
}
//监听点击状态
tag.addEventListener('click', function (e) {
    if (e.target.tagName == 'SPAN') {//匹配点击的tagName
        state.sex = e.target.getAttribute('sex')//获取事件源对象的属性
        render(filter())
        // render(filterSex(state.sex,personArr))
        document.getElementsByClassName('active')[0].className = '';//清除active
        e.target.className = 'active'//点击的添加active
    }
})


