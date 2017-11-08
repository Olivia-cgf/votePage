window.onload = function(){
 waterFall();
  var dataInt={"data":[{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507105316&di=c9ae9a606dabd01f913c5617f14923fa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F170113%2F9-1F1131A609.jpg"},{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507105316&di=c9ae9a606dabd01f913c5617f14923fa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F170113%2F9-1F1131A609.jpg"},{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507105316&di=c9ae9a606dabd01f913c5617f14923fa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F170113%2F9-1F1131A609.jpg"},{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507105316&di=c9ae9a606dabd01f913c5617f14923fa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F170113%2F9-1F1131A609.jpg"}]};
  var noLoad=true;

 $(window).on('scroll',function(){
    if(noLoad){
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
          noLoad=false;  
        /*$('.vote').append("<div style='margin:80px'>加载完成</div>");*/
     }else{
     }
  });
    // 添加颜色
    var color= "#f00";
    $(".table").css("background",color);
    $(".search input").css("border-color",color);
    $(".pank h2,.search button,.voteDetail .voteBtn,.confrim").css("background",color);

   
    // 显示报名
    $(".signBtn").click(function(){
         $(".mask,.return").removeClass('hide');
         $(".container,.detail,.admin,.list").addClass('hide');
    })

    // 显示活动详情
    $(".activtyBtn").click(function(){
        $(".detail,.return").removeClass('hide');
         $(".container,.mask,.admin,.list").addClass('hide');
    })


    // 显示我的

    $(".adminBtn").click(function(){
        $(".admin,.return").removeClass('hide');
         $(".container,.mask,.detail,.list,.displayPic").addClass('hide');
    })

    // 点击返回，返回主页
    $(".return").click(function(){
        $(".container").removeClass('hide');
         window.location.reload();
        $(".signBtn,.mask,.detail,.return,.list,.displayPic").addClass('hide');
    })

    // 点击查看排名
    $(".pank").click(function(event) {
        $(".return,.list").removeClass('hide');
        $(".signBtn,.mask,.detail,.container,.displayPic").addClass('hide');
    });
    
    // 点击确认报名
    $(".confrim").click(function(event) {
        $(this).attr("disabled", true);
    });


    // 点击图片查看详细信息
    $(".vote img").click(function(){
        $(".displayPic,.return").removeClass('hide');
        $(".container").addClass('hide');
    })

    
};
   // 点击图片上传
    function previewImage(file) {
        var MAXWIDTH = 100;
        var MAXHEIGHT = 100;
        var div = document.getElementById('preview');
        if (file.files && file.files[0]) {
            div.innerHTML = '<img id=imghead><span class="del"></span>';
            var img = document.getElementById('imghead');
            img.onload = function () {
                var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
                img.width = rect.width;
                img.height = rect.height;
                img.style.marginLeft = rect.left+'px';
                img.style.marginTop = rect.top + 'px';
            }
            var reader = new FileReader();
            reader.onload = function (evt) {
                img.src = evt.target.result;
            }
            reader.readAsDataURL(file.files[0]);
        }else{  //兼容IE
        }
    }

    function clacImgZoomParam( maxWidth, maxHeight, width, height ){
        var param = {top:0, left:0, width:width, height:height};
        if( width>maxWidth || height>maxHeight ){
            rateWidth = width / maxWidth;
            rateHeight = height / maxHeight;
            if( rateWidth > rateHeight ){
                param.width =  maxWidth;
                param.height = Math.round(height / rateWidth);
            }else{
                param.width = Math.round(width / rateHeight);
                param.height = maxHeight;
            }
        }
        param.left = Math.round((maxWidth - param.width) / 2);
        param.top = Math.round((maxHeight - param.height) / 2);
        return param;
    }


   // $(window).on('load',function(){
  // waterFall();
  // var dataInt={"data":[{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507105316&di=c9ae9a606dabd01f913c5617f14923fa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F170113%2F9-1F1131A609.jpg"},{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507105316&di=c9ae9a606dabd01f913c5617f14923fa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F170113%2F9-1F1131A609.jpg"},{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507105316&di=c9ae9a606dabd01f913c5617f14923fa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F170113%2F9-1F1131A609.jpg"},{"src":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1507105316&di=c9ae9a606dabd01f913c5617f14923fa&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F170113%2F9-1F1131A609.jpg"}]};
 /*$(window).on('scroll',function(){
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
});*/
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
  return (lastBoxDis<scrollTop+documentH)?true:false;

}