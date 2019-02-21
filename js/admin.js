window.onload = function(){
    // console.log(sqrt)console.log('onload')
    var pageHeight = $(document).height();
    $('.add-hotel-box').css('height', pageHeight + 'px');
    var xx = getUrlParam('userName');
    console.log(xx)
     if (xx == 'admin') {

    } else {
         window.location.href='index.html';
    }
}

function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}

let drf = [
    {
        Title:'drf',
        Message:'单人房',
        Prise:300,
        V_prise:290,
        Img:'',
        Num:101
    },
    {
        Title:'drf',
        Message:'单人房',
        Prise:300,
        V_prise:290,
        Img:'',
        Num:101
    },
    {
        Title:'drf',
        Message:'单人房',
        Prise:300,
        V_prise:290,
        Img:'',
        Num:102
    },
    {
        Title:'drf',
        Message:'单人房',
        Prise:300,
        V_prise:290,
        Img:'',
        Num:103
    },
    {
        Title:'drf',
        Message:'单人房',
        Prise:300,
        V_prise:290,
        Img:'',
        Num:104
    }
]

let srf = [
    {
        Title:'srf',
        Message:'双人房',
        Prise: 400,
        V_prise:380,
        Img: '',
        Num:202
    },
    {
        Title:'srf',
        Message:'双人房',
        Prise: 400,
        V_prise:380,
        Img: '',
        Num:203
    },
    {
        Title:'srf',
        Message:'双人房',
        Prise: 400,
        V_prise:380,
        Img: '',
        Num:204
    },
    {
        Title:'srf',
        Message:'双人房',
        Prise: 400,
        V_prise:380,
        Img: '',
        Num:205
    },
    {
        Title:'srf',
        Message:'双人房',
        Prise: 400,
        V_prise:380,
        Img: '',
        Num:206
    },
    {
        Title:'srf',
        Message:'双人房',
        Prise: 400,
        V_prise:380,
        Img: '',
        Num:207
    },
    {
        Title:'srf',
        Message:'双人房',
        Prise: 400,
        V_prise:380,
        Img: '',
        Num:208
    },
    {
        Title:'srf',
        Message:'双人房',
        Prise: 400,
        V_prise:380,
        Img: '',
        Num:209
    },
]

let ztf = [
    {
        Title:"ztf",
        Message:'总统房',
        Prise:800,
        V_prise:750,
        Img:'',
        Num:301
    },
    {
        Title:"ztf",
        Message:'总统房',
        Prise:800,
        V_prise:750,
        Img:'',
        Num:302
    },
    {
        Title:"ztf",
        Message:'总统房',
        Prise:800,
        V_prise:750,
        Img:'',
        Num:303
    }
]

let allHotel = drf.concat(srf).concat(ztf);
let allMsg = '';
let onlyMsg = '';
let doubleMsg = '';
let VMsg = '';
for (let i = 0; i < allHotel.length; i++) {
    if (allHotel[i].Title = 'drf') {
        var styles = '单人房'
    } else if (allHotel[i].Title = 'srf') {
        var styles = '双人房'
    } else if (allHotel[i].Title = 'ztf') {
        var styles = '总统房'
    }
    allMsg = allMsg + `<div class="hotel-text">
    <div class="hotel-img">

    </div>
    <p class="hotel-sstyle">${allHotel[i].Message}</p>
    <p class="hotel-prise" style="letter-spacing: 28px">价格</p> <span class="hotel-prises">￥${allHotel[i].Prise}</span>
    <p class="hotel-prise-vip">vip-价格</p> <span class="hotel-prises-vip">￥${allHotel[i].V_prise}</span>
    <div class="hotel-right" data-id="${allHotel[i].Num}">
        删除
    </div>
</div>`
}
for (let i = 0; i < drf.length; i++) {
    onlyMsg = onlyMsg + `<div class="hotel-text">
    <div class="hotel-img">

    </div>
    <p class="hotel-sstyle">${drf[i].Message}</p>
    <p class="hotel-prise" style="letter-spacing: 28px">价格</p> <span class="hotel-prises">￥${drf[i].Prise}</span>
    <p class="hotel-prise-vip">vip-价格</p> <span class="hotel-prises-vip">￥${drf[i].V_prise}</span>
    <div class="hotel-right" data-id="${drf[i].Num}">
        删除
    </div>
</div>`
}
for (let i = 0; i < srf.length; i++) {
    doubleMsg = doubleMsg + `<div class="hotel-text">
    <div class="hotel-img">

    </div>
    <p class="hotel-sstyle">${srf[i].Message}</p>
    <p class="hotel-prise" style="letter-spacing: 28px">价格</p> <span class="hotel-prises">￥${srf[i].Prise}</span>
    <p class="hotel-prise-vip">vip-价格</p> <span class="hotel-prises-vip">￥${srf[i].V_prise}</span>
    <div class="hotel-right" data-id="${srf[i].Num}">
        删除
    </div>
</div>`
}
for (let i = 0; i < ztf.length; i++) {
    VMsg = VMsg + `<div class="hotel-text">
    <div class="hotel-img">

    </div>
    <p class="hotel-sstyle">${ztf[i].Message}</p>
    <p class="hotel-prise" style="letter-spacing: 28px">价格</p> <span class="hotel-prises">￥${ztf[i].Prise}</span>
    <p class="hotel-prise-vip">vip-价格</p> <span class="hotel-prises-vip">￥${ztf[i].V_prise}</span>
    <div class="hotel-right" data-id="${ztf[i].Num}">
        删除
    </div>
</div>`
}
$('.hotel-all').html(allMsg)
$('.hotel-once').html(onlyMsg)
$('.hotel-double').html(doubleMsg)
$('.hotel-vip').html(VMsg)

$(".hotel-list-all").click(function (e) {
    e.preventDefault();
    $('.hotel-list-all,.hotel-list-once,.hotel-list-double,.hotel-list-vip').css('color','#CCCCCC')
    $('.hotel-list-all').css('color', '#FFFFFF');
    $('.hotel-all,.hotel-once,.hotel-double,.hotel-vip').hide();
    $('.hotel-all').show();
});
$(".hotel-list-once").click(function (e) {
    e.preventDefault();
    $('.hotel-list-all,.hotel-list-once,.hotel-list-double,.hotel-list-vip').css('color','#CCCCCC')
    $('.hotel-list-once').css('color', '#FFFFFF');
    $('.hotel-all,.hotel-once,.hotel-double,.hotel-vip').hide();
    $('.hotel-once').show();
});
$(".hotel-list-double").click(function (e) {
    e.preventDefault();
    $('.hotel-list-all,.hotel-list-once,.hotel-list-double,.hotel-list-vip').css('color','#CCCCCC')
    $('.hotel-list-double').css('color', '#FFFFFF');
    $('.hotel-all,.hotel-once,.hotel-double,.hotel-vip').hide();
    $('.hotel-double').show();
});
$(".hotel-list-vip").click(function (e) {
    e.preventDefault();
    $('.hotel-list-all,.hotel-list-once,.hotel-list-double,.hotel-list-vip').css('color','#CCCCCC')
    $('.hotel-list-vip').css('color', '#FFFFFF');
    $('.hotel-all,.hotel-once,.hotel-double,.hotel-vip').hide();
    $('.hotel-vip').show();
});

$('.add-hotel').click(function (e) { 
    e.preventDefault();
    $('.add-hotel-box').show();
});
$('.add-box .close').click(function (e) { 
    e.preventDefault();
    $('.add-hotel-box').hide();
});

$('.hotel-right').click(function (e) { 
    e.preventDefault();
    var num = $(this).attr('data-id');
    alert('已删除'+num+'号房间');
    $(this).parent().hide();
});
//判断状态值，如果状态为0赋值是单人间
$('.add-hotel-right').click(function (e) { 
    e.preventDefault();
    var thisStyle = $('.hotel-style').val();
    if (thisStyle == 0) {
        thisStyle = '单人间'
    } else if (thisStyle == 1) {
        thisStyle = '双人间'
    } else if (thisStyle == 2) {
        thisStyle = '总统房'
    }
    console.log(thisStyle)
    var thisPrise = $('.hotel-prise-num').val();
    var thisVipPrise = $('.hotel-prise-num-vip').val();
    if (thisPrise == '' || thisVipPrise == '') {
        alert('请填写完整');
    } else {
        alert('已添加新的'+thisStyle)
    }
});