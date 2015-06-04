function boton_aleatorio (){
  var num = 7*Math.random();
  if (num<0){
    window.location="http://gonthalo.github.io/Gallinas/";
  } else {
    if (num<1){
      window.location="http://gonthalo.github.io/Gallinas/Contribuir.html";
    } else {
      if (num<2){
        window.location="http://gonthalo.github.io/Gallinas/Mapa.html";
      } else {
        if (num<3) {
          window.location="http://gonthalo.github.io/Gallinas/Sobre_nosotros.html";
        } else {
          if (num<4) {
            window.location="http://gonthalo.github.io/Gallinas/Masterchem.html";
          } else {
            if (num<5) {
              window.location="http://gonthalo.github.io/Gallinas/Clapeyron.html";
            } else {
              if (num<6) {
                window.location="http://gonthalo.github.io/Gallinas/Masterchem2.html";
              } else {
                window.location="http://gonthalo.github.io/Gallinas/Ultimo.html";
              }
            }
          }
        }
      }
    }
  }
}

(function($) {
$(document).ready(function(){

  // putting lines by the pre blocks
  $("pre").each(function(){
    var pre = $(this).text().split("\n");
    var lines = new Array(pre.length+1);
    for(var i = 0; i < pre.length; i++) {
      var wrap = Math.floor(pre[i].split("").length / 70)
      if (pre[i]==""&&i==pre.length-1) {
        lines.splice(i, 1);
      } else {
        lines[i] = i+1;
        for(var j = 0; j < wrap; j++) {
          lines[i] += "\n";
        }
      }
    }
    $(this).before("<pre class='lines'>" + lines.join("\n") + "</pre>");
  });

  var headings = [];

  var collectHeaders = function(){
    headings.push({"top":$(this).offset().top - 15,"text":$(this).text()});
  }

  if($(".markdown-body h1").length > 1) $(".markdown-body h1").each(collectHeaders)
  else if($(".markdown-body h2").length > 1) $(".markdown-body h2").each(collectHeaders)
  else if($(".markdown-body h3").length > 1) $(".markdown-body h3").each(collectHeaders)

  $(window).scroll(function(){
    if(headings.length==0) return true;
    var scrolltop = $(window).scrollTop() || 0;
    if(headings[0] && scrolltop < headings[0].top) {
      $(".current-section").css({"opacity":0,"visibility":"hidden"});
      return false;
    }
    $(".current-section").css({"opacity":1,"visibility":"visible"});
    for(var i in headings) {
      if(scrolltop >= headings[i].top) {
        $(".current-section .name").text(headings[i].text);
      }
    }
  });

  $(".current-section a").click(function(){
    $(window).scrollTop(0);
    return false;
  })
});
})(jQuery)