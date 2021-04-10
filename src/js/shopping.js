
   window.onload = function(){
 
	var wrap    = document.getElementsByClassName("wrap")[0];
	var smallImgBox = wrap.getElementsByClassName("imgBox")[0];
	var smallImg = smallImgBox.getElementsByTagName("img")[0];
	var bigImgBox = wrap.getElementsByClassName("imgBox")[1];
	var bigImg = bigImgBox.getElementsByTagName("img")[0];
	var shadow = document.getElementById("shadow")

	smallImgBox.onmouseover = function () {
		shadow.style.display="block";
		bigImgBox.style.display="block";
	};
	smallImgBox.onmouseout = function () {
		shadow.style.display="none";
		bigImgBox.style.display="none";
	}


	smallImgBox.onmousemove = function (ev) {

		var ev = ev || window.event ;

		//鼠标在指定div里面的坐标:可视区里面鼠标坐标- div到文档边界的距离
	  /*  var x =  ev.clientX  -   shadow.offsetParent.offsetLeft -shadow.offsetParent.offsetParent.offsetLeft   ;
		var y = ev.clientY  -    shadow.offsetParent.offsetTop  -shadow.offsetParent.offsetParent.offsetLeft;*/
		var x =  ev.clientX  -   smallImgBox.offsetLeft - wrap.offsetLeft   ;
		var y = ev.clientY  -    smallImgBox.offsetTop  -wrap.offsetTop;


		var l = x-shadow.offsetWidth/2 ;
		var t = y -shadow.offsetHeight/2 ;

		if( l <=0 ) { l=0; }
		else if(  l >=smallImgBox.offsetWidth - shadow.offsetWidth ){
			l = smallImgBox.offsetWidth - shadow.offsetWidth ;
		}
		if(  t <=0 ){  t=0; }
		else if(  t>=smallImgBox.offsetHeight - shadow.offsetHeight )  {
			t=smallImgBox.offsetHeight - shadow.offsetHeight;
		}
		shadow.style.left= l +"px";
		shadow.style.top= t +"px";

	  /*  var  radioX = l /   (smallImgBox.offsetWidth - shadow.offsetWidth);
		var  radioY = t /  (smallImgBox.offsetHeight - shadow.offsetHeight) ;
		document.title =radioX+" "+ radioY ;
		bigImg.style.left=-radioX*(bigImg.width - bigImgBox.offsetWidth) +"px";
		bigImg.style.top=-radioY*(bigImg.height - bigImgBox.offsetHeight) +"px";*/

		 var  radioX = x /  (smallImgBox.offsetWidth - shadow.offsetWidth)  >=1? 1 : x /   (smallImgBox.offsetWidth - shadow.offsetWidth) ;
		 var  radioY = y /  (smallImgBox.offsetHeight - shadow.offsetHeight) >=1? 1 :  y /  (smallImgBox.offsetHeight - shadow.offsetHeight);
		
		 bigImg.style.left=-radioX*(bigImg.width - bigImgBox.offsetWidth) +"px";
		 bigImg.style.top=-radioY*(bigImg.height - bigImgBox.offsetHeight) +"px";

	};
};
        var x=1;
		var divnum=document.getElementById("div_box-right-7-div-1");
		var divadd=document.getElementById("div_box-right-7-div-2-onck1");
		var divdelete=document.getElementById("div_box-right-7-div-2-onck2");
		
		divadd.onclick=function(){
			x++;
			divnum.innerText=x;
		}
		divdelete.onclick=function(){
			x--;
			if(x<2){
				x=1;
			}
			divnum.innerText=x;
		}
		var cima1=document.getElementById("div_box-right-5-div-0");
		var cima2=document.getElementById("div_box-right-5-div-1");
		var cima3=document.getElementById("div_box-right-5-div-2");
		var cima4=document.getElementById("div_box-right-5-div-3");
		var cima5=document.getElementById("div_box-right-5-div-4");
	    cima1.onclick=function(){
	    	cima1.style.border="1px solid #ff0036";
	    	cima2.style.border="0.2px solid #e5e4e4";
	    	cima3.style.border="0.2px solid #e5e4e4";
	    	cima4.style.border="0.2px solid #e5e4e4";
	    	cima5.style.border="0.2px solid #e5e4e4";
	    }
	    cima2.onclick=function(){
	    	cima2.style.border="1px solid #ff0036";
	    	cima1.style.border="0.2px solid #e5e4e4";
	    	cima3.style.border="0.2px solid #e5e4e4";
	    	cima4.style.border="0.2px solid #e5e4e4";
	    	cima5.style.border="0.2px solid #e5e4e4";
	    }
	    cima3.onclick=function(){
	    	cima3.style.border="1px solid #ff0036";
	    	cima1.style.border="0.2px solid #e5e4e4";
	    	cima2.style.border="0.2px solid #e5e4e4";
	    	cima4.style.border="0.2px solid #e5e4e4";
	    	cima5.style.border="0.2px solid #e5e4e4";
	    }
		cima4.onclick=function(){
	    	cima4.style.border="1px solid #ff0036";
	    	cima1.style.border="0.2px solid #e5e4e4";
	    	cima2.style.border="0.2px solid #e5e4e4";
			cima3.style.border="0.2px solid #e5e4e4";
	    	cima5.style.border="0.2px solid #e5e4e4";
	    }
		cima5.onclick=function(){
	    	cima5.style.border="1px solid #ff0036";
	    	cima1.style.border="0.2px solid #e5e4e4";
	    	cima2.style.border="0.2px solid #e5e4e4";
			cima3.style.border="0.2px solid #e5e4e4";
	    	cima4.style.border="0.2px solid #e5e4e4";
	    }

		var div1=document.getElementById("div_box-bottom-left-div-0");
		var div2=document.getElementById("div_box-bottom-left-div-1");
		var div3=document.getElementById("div_box-bottom-left-div-2");
		var div4=document.getElementById("div_box-bottom-left-div-3");
		var div5=document.getElementById("div_box-bottom-left-div-4");
		var wrap    = document.getElementsByClassName("wrap")[0];
        var smallImgBox = wrap.getElementsByClassName("imgBox")[0];//div1
        var smallImg = smallImgBox.getElementsByTagName("img")[0];//图片1
        var bigImgBox = wrap.getElementsByClassName("imgBox")[1];//div2
        var bigImg = bigImgBox.getElementsByTagName("img")[0];//图片2
        
		div1.onmouseover=function(){
			div1.style.border="1px solid #000";
			div2.style.border="1px solid #fff";
			div3.style.border="1px solid #fff";
			div4.style.border="1px solid #fff";
			div5.style.border="1px solid #fff";
			smallImg.src="../image/yi1.jpg";
        	bigImg.src="../image/yi1.jpg";
		}
		div2.onmouseover=function(){
			div2.style.border="1px solid #000";
			div1.style.border="1px solid #fff";
			div3.style.border="1px solid #fff";
			div4.style.border="1px solid #fff";
			div5.style.border="1px solid #fff";
			smallImg.src="../image/yi2.jpg";
        	bigImg.src="../image/yi2.jpg";
		}
		div3.onmouseover=function(){
			div3.style.border="1px solid #000";
			div1.style.border="1px solid #fff";
			div2.style.border="1px solid #fff";
			div4.style.border="1px solid #fff";
			div5.style.border="1px solid #fff";
			smallImg.src="../image/yi3.jpg";
        	bigImg.src="../image/yi3.jpg";
		}
		div4.onmouseover=function(){
			div4.style.border="1px solid #000";
			div1.style.border="1px solid #fff";
			div2.style.border="1px solid #fff";
			div3.style.border="1px solid #fff";
			div5.style.border="1px solid #fff";
			smallImg.src="../image/yi4.jpg";
        	bigImg.src="../image/yi4.jpg";
		}
		div5.onmouseover=function(){
			div5.style.border="1px solid #000";
			div1.style.border="1px solid #fff";
			div2.style.border="1px solid #fff";
			div3.style.border="1px solid #fff";
			div4.style.border="1px solid #fff";
			smallImg.src="../image/yi5.jpg";
        	bigImg.src="../image/yi5.jpg";
		}
		class GetJSON{
			constructor(){
				this.getJson();
			}
		   getJson(){
				$.getJSON('../json/index.json',(data)=>{
					let shop = data.shopping;
					let img = shop.img;
					$(img).each((index,value)=>{
						$(`<img src="${value}">`).prependTo(`#div_box-bottom-left-div-${index}`);
					})	
					let title = shop.title;
					$(title).each((index,value)=>{
						$(`<span id="div_box-right-1-span_1">${value}</span>`).appendTo(`#div_box-right-1`);
					})	
					let size = shop.size;
					$(size).each((index,value)=>{
						$(`<div id="div_box-right-5-div-${index}">${value}</div>`).appendTo(`#div_box-right-5`);
					})	
					let price = shop.price;
					$(`<span id="div_box-right-2-span_2"><span style="font-size: 18px;" >￥</span>${price[0]}<em>${price[1]}</em></span>`).appendTo($('#div_box-right-2'));
					let tit = shop.tit;
					$(`<a href="">${tit[0]}</a><em></em><a href="">${tit[1]}</a><em></em><a href="">${tit[2]}</a>`).appendTo($('.tit'));

				
			})
			}
		 }
		new GetJSON();

		