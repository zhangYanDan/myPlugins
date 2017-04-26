(function($){
  var scale=1;
  var changeObjW;
  var changeObjH;
  var deg;
  $.fn.extend({
    "enlarge":function(addBase,maxScale){
      if(scale==1){
        changeObjW=$(this).width();
        changeObjH=$(this).height();
      }
      scale=scale+addBase; //每次放大多少倍
      if(scale<=maxScale){ //如果当前倍数不超过最大倍数
        $(this).css({"width":(changeObjW*scale)+"px","height":(changeObjW*scale)+"px"});
      }else{
        scale=maxScale;//这个已经是最大了，就把倍数设置为最大的倍数
        alert("已经是放大到最大了");
      }
    },
    "narrow":function(minBase,minScale){
      scale=scale-minBase;//每次缩小0.25倍
      if(scale>=minScale){   //允许缩小到的最小倍数
          $(this).css({"width":(changeObjW*scale)+"px","height":(changeObjW*scale)+"px"});
      }else{
        scale=minScale;  //这个是最小了，就把倍数设置为最小的倍数
        alert("已经是缩小得到最小");
      }
    },
    "rotate":function(rotateDeg,maxDeg){
      deg=deg+rotateDeg;//每次旋转一定的角度
      if(deg<=maxDeg){
        $(this).css({"transform":"rotate("+deg+"deg)"});
      }else{
        deg=rotateDeg; //重置角度
        $(this).css({"transform":"rotate("+deg+"deg)"});
      }
    }
  });
})(jQuery);
