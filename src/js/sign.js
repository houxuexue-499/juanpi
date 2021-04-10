
let o_inp = document.querySelectorAll('input');
let ico = document.querySelectorAll('form strong');
let erro = document.querySelectorAll('form i');
o_inp[0].onfocus =function(){
    erro[0].innerHTML='请输入11位手机号';
    erro[0].style.color = '#666';
    o_inp[0].style.border = "1px solid #c6c6c6";
}
o_inp[0].onblur = function(){
    let re = /^(156|158|188|176|182|155)\d{8}$/;
    let str = this.value;
    if(re.test(str)){
        ico[0].style.background = ' url(../image/login.gif) no-repeat -40px -19px';
        erro[0].innerHTML='';
        o_inp[0].style.border = "1px solid #c6c6c6";
        erro[0].style.color = '#666';
    }else{
        ico[0].style.background = ' url(../image/login.gif) no-repeat 0 -19px';
        erro[0].innerHTML='请输入正确的手机号码';
        erro[0].style.color = '#ff464e';
        o_inp[0].style.border = "1px solid #ff464e";

    }
}

o_inp[1].onfocus =function(){
    erro[1].innerHTML='6-16个数字 字母或符号 字母区分大小写';
    erro[1].style.color = '#666';
    o_inp[1].style.border = "1px solid #c6c6c6";
}
o_inp[1].onblur = function(){
    let re =  /^\w{6,16}$/;
    let str = this.value;
    if(re.test(str)){
        ico[1].style.background = ' url(../image/login.gif) no-repeat -40px -19px';
        erro[1].innerHTML='';
        o_inp[1].style.border = "1px solid #c6c6c6";
        erro[1].style.color = '#666';
    }else{
        ico[1].style.background = ' url(../image/login.gif) no-repeat 0 -19px';
        erro[1].innerHTML='密码格式不符合规范';
        erro[1].style.color = '#ff464e';
        o_inp[1].style.border = "1px solid #ff464e";

    }
}
o_inp[2].onfocus =function(){
    erro[2].innerHTML='请再次输入密码';
    erro[2].style.color = '#666';
    o_inp[2].style.border = "1px solid #c6c6c6";
}
o_inp[2].onblur = function(){
    let re =  /^\w{6,16}$/;
    let str = this.value;
    if(o_inp[2].value === o_inp[1].value){
        ico[2].style.background = ' url(../image/login.gif) no-repeat -40px -19px';
        erro[2].innerHTML='';
        o_inp[2].style.border = "1px solid #c6c6c6";
        erro[2].style.color = '#666';
    }else{
        ico[2].style.background = ' url(../image/login.gif) no-repeat 0 -19px';
        erro[2].innerHTML='两次密码输入不一致';
        erro[2].style.color = '#ff464e';
        o_inp[2].style.border = "1px solid #ff464e";

    }
}

// o_inp[3].onfocus =function(){
//     erro[3].innerHTML='请输入短信验证码';
//     erro[3].style.color = '#666';
//     o_inp[3].style.border = "1px solid #c6c6c6";
// }
// o_inp[3].onblur = function(){
//     let re =  /^\w{4}$/;
//     let str = this.value;
//     if(re.test(str)){
//         ico[3].style.background = ' url(../image/login.gif) no-repeat -40px -19px';
//         erro[3].innerHTML='';
//         o_inp[3].style.border = "1px solid #c6c6c6";
//         erro[3].style.color = '#666';
//     }else{
//         ico[3].style.background = ' url(../image/login.gif) no-repeat 0 -19px';
//         erro[3].innerHTML='短信验证码有误';
//         erro[3].style.color = '#ff464e';
//         o_inp[3].style.border = "1px solid #ff464e";

//     }
// }
  
