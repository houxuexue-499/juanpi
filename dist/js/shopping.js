"use strict";function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var o=0;o<i.length;o++){var t=i[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,i,o){return i&&_defineProperties(e.prototype,i),o&&_defineProperties(e,o),e}window.onload=function(){var d=document.getElementsByClassName("wrap")[0],s=d.getElementsByClassName("imgBox")[0],l=(s.getElementsByTagName("img")[0],d.getElementsByClassName("imgBox")[1]),r=l.getElementsByTagName("img")[0],n=document.getElementById("shadow");s.onmouseover=function(){n.style.display="block",l.style.display="block"},s.onmouseout=function(){n.style.display="none",l.style.display="none"},s.onmousemove=function(e){var i=(e=e||window.event).clientX-s.offsetLeft-d.offsetLeft,o=e.clientY-s.offsetTop-d.offsetTop,t=i-n.offsetWidth/2,e=o-n.offsetHeight/2;t<=0?t=0:t>=s.offsetWidth-n.offsetWidth&&(t=s.offsetWidth-n.offsetWidth),e<=0?e=0:e>=s.offsetHeight-n.offsetHeight&&(e=s.offsetHeight-n.offsetHeight),n.style.left=t+"px",n.style.top=e+"px";i=1<=i/(s.offsetWidth-n.offsetWidth)?1:i/(s.offsetWidth-n.offsetWidth),o=1<=o/(s.offsetHeight-n.offsetHeight)?1:o/(s.offsetHeight-n.offsetHeight);r.style.left=-i*(r.width-l.offsetWidth)+"px",r.style.top=-o*(r.height-l.offsetHeight)+"px"}};var x=1,divnum=document.getElementById("div_box-right-7-div-1"),divadd=document.getElementById("div_box-right-7-div-2-onck1"),divdelete=document.getElementById("div_box-right-7-div-2-onck2");divadd.onclick=function(){x++,divnum.innerText=x},divdelete.onclick=function(){--x<2&&(x=1),divnum.innerText=x};var cima1=document.getElementById("div_box-right-5-div-0"),cima2=document.getElementById("div_box-right-5-div-1"),cima3=document.getElementById("div_box-right-5-div-2"),cima4=document.getElementById("div_box-right-5-div-3"),cima5=document.getElementById("div_box-right-5-div-4");cima1.onclick=function(){cima1.style.border="1px solid #ff0036",cima2.style.border="0.2px solid #e5e4e4",cima3.style.border="0.2px solid #e5e4e4",cima4.style.border="0.2px solid #e5e4e4",cima5.style.border="0.2px solid #e5e4e4"},cima2.onclick=function(){cima2.style.border="1px solid #ff0036",cima1.style.border="0.2px solid #e5e4e4",cima3.style.border="0.2px solid #e5e4e4",cima4.style.border="0.2px solid #e5e4e4",cima5.style.border="0.2px solid #e5e4e4"},cima3.onclick=function(){cima3.style.border="1px solid #ff0036",cima1.style.border="0.2px solid #e5e4e4",cima2.style.border="0.2px solid #e5e4e4",cima4.style.border="0.2px solid #e5e4e4",cima5.style.border="0.2px solid #e5e4e4"},cima4.onclick=function(){cima4.style.border="1px solid #ff0036",cima1.style.border="0.2px solid #e5e4e4",cima2.style.border="0.2px solid #e5e4e4",cima3.style.border="0.2px solid #e5e4e4",cima5.style.border="0.2px solid #e5e4e4"},cima5.onclick=function(){cima5.style.border="1px solid #ff0036",cima1.style.border="0.2px solid #e5e4e4",cima2.style.border="0.2px solid #e5e4e4",cima3.style.border="0.2px solid #e5e4e4",cima4.style.border="0.2px solid #e5e4e4"};var div1=document.getElementById("div_box-bottom-left-div-0"),div2=document.getElementById("div_box-bottom-left-div-1"),div3=document.getElementById("div_box-bottom-left-div-2"),div4=document.getElementById("div_box-bottom-left-div-3"),div5=document.getElementById("div_box-bottom-left-div-4"),wrap=document.getElementsByClassName("wrap")[0],smallImgBox=wrap.getElementsByClassName("imgBox")[0],smallImg=smallImgBox.getElementsByTagName("img")[0],bigImgBox=wrap.getElementsByClassName("imgBox")[1],bigImg=bigImgBox.getElementsByTagName("img")[0];div1.onmouseover=function(){div1.style.border="1px solid #000",div2.style.border="1px solid #fff",div3.style.border="1px solid #fff",div4.style.border="1px solid #fff",div5.style.border="1px solid #fff",smallImg.src="../image/yi1.jpg",bigImg.src="../image/yi1.jpg"},div2.onmouseover=function(){div2.style.border="1px solid #000",div1.style.border="1px solid #fff",div3.style.border="1px solid #fff",div4.style.border="1px solid #fff",div5.style.border="1px solid #fff",smallImg.src="../image/yi2.jpg",bigImg.src="../image/yi2.jpg"},div3.onmouseover=function(){div3.style.border="1px solid #000",div1.style.border="1px solid #fff",div2.style.border="1px solid #fff",div4.style.border="1px solid #fff",div5.style.border="1px solid #fff",smallImg.src="../image/yi3.jpg",bigImg.src="../image/yi3.jpg"},div4.onmouseover=function(){div4.style.border="1px solid #000",div1.style.border="1px solid #fff",div2.style.border="1px solid #fff",div3.style.border="1px solid #fff",div5.style.border="1px solid #fff",smallImg.src="../image/yi4.jpg",bigImg.src="../image/yi4.jpg"},div5.onmouseover=function(){div5.style.border="1px solid #000",div1.style.border="1px solid #fff",div2.style.border="1px solid #fff",div3.style.border="1px solid #fff",div4.style.border="1px solid #fff",smallImg.src="../image/yi5.jpg",bigImg.src="../image/yi5.jpg"};var GetJSON=function(){function e(){_classCallCheck(this,e),this.getJson()}return _createClass(e,[{key:"getJson",value:function(){$.getJSON("../json/index.json",function(e){var i=e.shopping,e=i.img;$(e).each(function(e,i){$('<img src="'.concat(i,'">')).prependTo("#div_box-bottom-left-div-".concat(e))});e=i.title;$(e).each(function(e,i){$('<span id="div_box-right-1-span_1">'.concat(i,"</span>")).appendTo("#div_box-right-1")});e=i.size;$(e).each(function(e,i){$('<div id="div_box-right-5-div-'.concat(e,'">').concat(i,"</div>")).appendTo("#div_box-right-5")});e=i.price;$('<span id="div_box-right-2-span_2"><span style="font-size: 18px;" >￥</span>'.concat(e[0],"<em>").concat(e[1],"</em></span>")).appendTo($("#div_box-right-2"));i=i.tit;$('<a href="">'.concat(i[0],'</a><em></em><a href="">').concat(i[1],'</a><em></em><a href="">').concat(i[2],"</a>")).appendTo($(".tit"))})}}]),e}();new GetJSON;