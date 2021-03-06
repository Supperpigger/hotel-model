window.onload = function () {
    console.log('onload')
    var pageHeight = $(document).height();
    $('.hotel-login-box').css('height', pageHeight + 'px');
}

var userName = ''
var userPassword = ''

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
        预约
    </div>
</div>`
}
//循环动态输出房间
for (let i = 0; i < drf.length; i++) {
    onlyMsg = onlyMsg + `<div class="hotel-text">
    <div class="hotel-img">

    </div>
    <p class="hotel-sstyle">${drf[i].Message}</p>
    <p class="hotel-prise" style="letter-spacing: 28px">价格</p> <span class="hotel-prises">￥${drf[i].Prise}</span>
    <p class="hotel-prise-vip">vip-价格</p> <span class="hotel-prises-vip">￥${drf[i].V_prise}</span>
    <div class="hotel-right" data-id="${drf[i].Num}">
        预约
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
        预约
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
        预约
    </div>
</div>`
}
$('.hotel-all').html(allMsg)
$('.hotel-once').html(onlyMsg)
$('.hotel-double').html(doubleMsg)
$('.hotel-vip').html(VMsg)
console.log(allMsg)


$('.login').click(function (e) {
    e.preventDefault();
    $('.hotel-login').show();
    $('.hotel-register').hide();
    $('.hotel-login-box').show();
});
$('.register').click(function (e) {
    e.preventDefault();
    $('.hotel-login').hide();
    $('.hotel-register').show();
    $('.hotel-login-box').show();
});

$('.hotel-login-box .box-close').click(function (e) {
    e.preventDefault();
    $('.hotel-login-box').hide();
});

$('.hotel-header-reserve').click(function (e) {
    e.preventDefault();
    $('.hotel-header-reserve').css('color', '#CCCCCC');
    $('.hotel-header-index').css('color', 'black');
    $('.hotel-index-msg').hide();
    $('.hotel-reserve-msg').show();
});

$('.hotel-header-index').click(function (e) {
    e.preventDefault();
    $('.hotel-header-reserve').css('color', 'black');
    $('.hotel-header-index').css('color', '#CCCCCC');
    $('.hotel-index-msg').show();
    $('.hotel-reserve-msg').hide();
});

$('.hotel-header-name').click(function (e) {
    e.preventDefault();
    window.location.href = "indexAdmin.html?userName="+userName;
});

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
//判断登录信息。如果用户名和密码是对的显示，否则隐藏
$('.login-submit').click(function (e) { 
    e.preventDefault();
    userName = $('.login-username').val();
    userPassword = $('.login-password').val();
    console.log(userName, userPassword)
    if (userName == 'admin' && userPassword == '123456') {
        $('.hotel-user-login-yes').show();
        $('.hotel-user-login-none').hide();
        $('.hotel-login-box').hide();
        $('.user-name').html(userName);
        $('.user-mail').html('123456789@qq.com');
        $('.user-phone').html('13333333333');
        $('.hotel-user-login-yes').show();

    } else if(userName == 'npm' && userPassword == '123456'){
        $('.hotel-user-login-none').hide();
        $('.hotel-login-box').hide();
        $('.user-name').html(userName);
        $('.user-mail').html('123456789@qq.com');
        $('.user-phone').html('13333333333');
        $('.hotel-user-login-yes').hide();
	    $('.hotel-user-login-yes1').show();
    }else {
        alert('用户名&密码错误，请重试');
    }
});
//点击弹出房间号
$('.hotel-right').click(function (e) { 
    e.preventDefault();
    var num = $(this).attr('data-id');
    alert(num+'号房间预订成功')
});