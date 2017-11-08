$(window).on('load',function(){
  waterFall();
  var dataInt={"data":[{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507105316&di=c9ae9a606dabd01f913c5617f14923fa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F170113%2F9-1F1131A609.jpg"},{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507105316&di=c9ae9a606dabd01f913c5617f14923fa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F170113%2F9-1F1131A609.jpg"},{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507105316&di=c9ae9a606dabd01f913c5617f14923fa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F170113%2F9-1F1131A609.jpg"},{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507105316&di=c9ae9a606dabd01f913c5617f14923fa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F170113%2F9-1F1131A609.jpg"}]};
 $(window).on('scroll',function(){
    console.log(3);
   if(checkScrollSlide()){
      $.each(dataInt.data,function(key,value){
        var result='<li>'
                  +'<img src="'+$(value).attr('src') +'"/>'
                  +'<div class="voteDetail">' 
                  +'<div class="name">'      
                  +'<span class="left">'           
                  +'姓名'               
                  +'</span>'           
                  +'<span class="right iconfont icon-dianzan">'           
                  +'800708'               
                  +'</span>'           
                  +'</div>'       
                  +'<button class="voteBtn">投票</button>'       
                  +'</div>'   
                  +'</li>';
        $('#main').append(result);
      });
      waterFall();
    }
  });
});
function waterFall() {
  var $boxs=$('#main>li');
  var w=$boxs.eq(0).outerWidth();
  var cols=2;
  $("#main").width(w*cols).css('margin','0 auto');
  var hArr=[];
  $boxs.each(function(index,value){
    var h=$boxs.eq(index).outerHeight();
    if(index<cols){
      hArr.push(h);
    }else {
      minH=Math.min.apply(null,hArr);
      var minHeightIndex=$.inArray(minH,hArr);
      // console.log(value);
      $(value).css({
        'position':'absolute',
        'top':minH+'px',
        'left':minHeightIndex*w+'px'
      });
      hArr[minHeightIndex]+=$boxs.eq(index).outerHeight();
    }
  });

}

function checkScrollSlide() {
  var $lastBox=$('#main>li').last();
  var lastBoxDis=$lastBox.offset().top+Math.floor($lastBox.outerHeight()/2);
  var scrollTop=$(window).scrollTop();
  var documentH=$(window).height();
  console.log(lastBoxDis<scrollTop+documentH);//如果滑到底部的高度小于页面的滚动的高度和本身的高度
  return (lastBoxDis<scrollTop+documentH)?true:false;

}