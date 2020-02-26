
$(document).ready(function(){

    $("#img1").click(function(){
        $("#design").toggle()
    });
    $("#img2").click(function(){
        $("#development").toggle()
    });
    $("#img3").click(function(){
        $("#product").toggle()
    });
     $(".submit").click(function(){
        var name =  $("mce-FNAME").val()
        var Email =  $("mce-EMAIL").val()
        var  message=$("mce-MESSAGE").val()

        if(name && Email && message){
            alert(name + " we have received your message.Thank you for reaching to us");

        }else{
            alert('check your input');
        }
    });

    $(document).ready(function(){
    $("#work4").hover(function(){
        $("#test4").fadeIn("slow");
        $("#test4").show();
    }).mouseout(function(){
        $("#test4").hide();
    });
    });



});
