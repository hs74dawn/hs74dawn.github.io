  var idx_lgth = $("#visual2>div").length;
  var srt = 1;
  
  $("section>a").click(function(){
    var idx = $(this).index();
    srt = idx;
    $(this).addClass('on').siblings().removeClass('on');
    $("#visual2>div").eq(idx).addClass('on').siblings().removeClass('on');
  });
  
setInterval(AutoRun, 6000);
  
function AutoRun(){
  if(srt == idx_lgth){
      srt = 0;  
  }
  $("section2>a").eq(srt).addClass('on').siblings().removeClass('on');
  $("#visual2>div").eq(srt).addClass('on').siblings().removeClass('on');
  srt++;  
}