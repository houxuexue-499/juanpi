//banner
//轮播图
function Slider(){
    //实例属性
    //大盒子
    this.big_box = document.querySelector('#slide1');
    //所有的大图li
    this.ul_li = this.big_box.children[0].children;
    //获取span
    this.lt_span = document.querySelector('#ltBtn');
    this.rt_span = document.querySelector('#rtBtn');
    //计算数量
    this.num = this.ul_li.length;
    //完善布局-返回小圆点
    this.ol_li = this.addEle();
    //当前下标
    this.cur_index = 0;
    //调用添加事件
    this.addEvent();
    //调用轮播
    this.slide();
    //调用自动轮播
    this.autoPlay();
}
Slider.prototype.addEle = function(){
    // //左按钮
    // this.lt_span = document.createElement('span');
    // this.lt_span.innerHTML = '&lt;';
    // this.lt_span.id = 'ltBtn';
    // this.big_box.appendChild(this.lt_span);
    // //右按钮
    // this.rt_span = document.createElement('span');
    // this.rt_span.innerHTML = '&gt;';
    // this.rt_span.id = 'rtBtn';
    // this.big_box.appendChild(this.rt_span);
   
    //小圆点
    let ol = document.createElement('ol');
    let arr = [];
    for(let i = 0;i < this.num;i ++){
        let li = document.createElement('li');
        arr.push(li);
        ol.appendChild(li);
    }
    this.big_box.appendChild(ol);
    return arr;
}
Slider.prototype.addEvent = function(){
    //左按钮
    this.lt_span.onclick = () => {
        this.cur_index --;
        if(this.cur_index === -1){
            this.cur_index = this.num - 1;
        }
        //调用轮播
        this.slide();
    }
    //右按钮
    this.rt_span.onclick = () => {
        this.cur_index ++;
        if(this.cur_index === this.num){
            this.cur_index = 0;
        }
        //调用轮播
        this.slide();
    }
    //小圆点
    this.ol_li.forEach((value,index) => {
        value.onmouseenter = () => {
            this.cur_index = index;
            //调用轮播
            this.slide();
        }
    })
}
Slider.prototype.slide = function(){
    //所有的大图none,所有的圆点red
    for(let i = 0;i < this.num;i ++){
        this.ul_li[i].style.display = 'none';
        this.ol_li[i].style.background = 'white';
        this.ol_li[i].style.border = "0";


    }
    //当前大图block 当前圆点blue
    this.ul_li[this.cur_index].style.display = 'block';
    this.ol_li[this.cur_index].style.border = "2px solid #fff";
}
Slider.prototype.autoPlay = function(){
    this.timer = setInterval(() => {
        this.cur_index ++;
        if(this.cur_index === this.num){
            this.cur_index = 0;
        }
        //调用轮播
        this.slide();
    }, 3000);
    this.big_box.onmouseover = () => {
        clearInterval(this.timer);
    }
    this.big_box.onmouseout = () => {
        this.autoPlay();
    }
}
new Slider("slide1");
class Shopping{
    constructor(){
        // this.$li = $('.waterFull li');
        this.getJson();
    }
   getJson(){
        $.getJSON('json/index.json',(data)=>{
            let slide = data.slide;
            let slider = slide.slider;
            $(slider).each((index,value)=>{
                $(`<a href=""><img src="${value}"></a>`).prependTo(`.container ul .slid${index}`);
            })
            let newJs = data.new;
            let imgJs = newJs.img;
            $(imgJs).each((index,value)=>{
                $(`<a href=""><img src="${value}"></a>`).appendTo(`.waterFull .img${index}`);
            })
            let priceJs = newJs.price;
            $(priceJs).each((index,value)=>{
                $(`<em>${value}</em>`).appendTo(`.waterFull .img${index}`);
            })
                
            let old = newJs.old;
            $(old).each((index,value)=>{
                $(`<del>${value}</del>`).appendTo(`.waterFull .img${index} em`);
            })
            let desc = newJs.shopDescribe;
            $(desc).each((index,value)=>{
                $(`<p>${value}</p>`).appendTo(`.waterFull .img${index}`);
            })
            let day = newJs.day;
            $(day).each((index,value)=>{
                $(`<span>${value}</span>`).appendTo(`.waterFull .img${index}`);
            })
            let brand = data.brand;
            let tit = brand.tit;
            $(tit).each((index,value)=>{
                $(`<span>${value}</span>`).prependTo(`.brand ul .br${index}`);
        })
            let title = brand.title;
            $(title).each((index,value)=>{
                $(`<a href=""><img src="${value}"></a>`).prependTo(`.brand ul .br${index}`);
            })
            let sale = newJs.sale;
            $(sale).each((index,value)=>{
                $(`<img src="${value}">`).prependTo(".saleT");
            })
        
    })
    }
 }
new Shopping();


//跳转商品页
// class Skip{
//     constructor(){
//         this.$img = $('.cart1');
//         this.addEvent();
//     }
//     addEvent(){
//        this.$img.click(()=>{
//             location.href = 'shopping.html';
//         })
//     }

// }
// new Skip();
//倒计时
var countDownTime = {
    init: function(a, b, c, d, e) {
        this.t = a, this.d = b, this.h = c, this.m = d, this.s = e
    },
    start: function() {
        var a = this;
        setInterval(a.timer, 1e3)
    },
    timer: function(a) {
        var b, c, d, e, f, g, h;
        a = this.countDownTime, b = new Date, c = new Date(a.t), d = c.getTime() - b.getTime(), e = Math.floor(a.formatTime(d, "day")), f = Math.floor(a.formatTime(d, "hours")), g = Math.floor(a.formatTime(d, "minutes")), h = Math.floor(a.formatTime(d, "seconds")), a.d && (a.d.innerText = a.formatNumber(e)), a.h && (a.h.innerText = a.formatNumber(f)), a.m && (a.m.innerText = a.formatNumber(g)), a.s && (a.s.innerText = a.formatNumber(h))
    },
    formatNumber: function(a) {
        if (a <= 0) {
            a = 0
        }
        return a = a.toString(), a[1] ? a : "0" + a
    },
    formatTime: function(a, b) {
        switch (b) {
            case "day":
                return a / 1e3 / 60 / 60 / 24;
            case "hours":
                return a / 1e3 / 60 / 60 % 24;
            case "minutes":
                return a / 1e3 / 60 % 60;
            case "seconds":
                return a / 1e3 % 60
        }
    }
};
$(function() {
    var day = document.getElementById('day');
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    // 日 时 分 秒的dom对象
    countDownTime.init('2021/4/19 23:59:59', day, hours, minutes, seconds);
    countDownTime.start();
  
});
