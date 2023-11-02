var frameNumber = 0;
function background()
{   
        setInterval(function()
            {
            $("#trzon").css("background-image", 'url(png/tlo' + frameNumber + '.png)');
            frameNumber = (frameNumber + 1) % 5;
            }, 10000);
       
    $(".trzon").hide();
    $("#indexhtml").show();
}
function trzon()
{
   $("#mapa").click(function(){
    $(".trzon").hide();
    $("#mapahtml").show();
    });
    
    $("#sklep").click(function(){
    $(".trzon").hide();
    $("#sklephtml").show();
    });
    
    $("#logo").click(function(){
    $(".trzon").hide();
    $("#indexhtml").show();
    });

    $("#poradniki").click(function(){
    $(".trzon").hide();
    $("#poradnikihtml").show();
    });
    
    $("#login").click(function(){
    $(".trzon").hide();
    $("#loginhtml").show();
    });
    
}
  
    


