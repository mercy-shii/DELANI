
$(document).ready(function(){

    $("#img1").click(function(){
        $("#img1").hide();
        $("#design").toggle();
        $("#design").show();     
    })
    $("#design").click(function(){
        $("#design").hide();
        $("#img1").toggle();
        $("#img1").show();     
    })
    
    $("#img2").click(function(){
        $("#img2").hide();
        $("#development").toggle();
        $("#development").show();
    })
    $("#development").click(function(){
        $("#development").hide();
        $("#img2").toggle();
        $("#img2").show();
    })

    $("#img3").click(function(){
        $("#img3").hide();
        $("#product").toggle();
        $("#product").show();
    })
    $("#product").click(function(){
        $("#product").hide();
        $("#img3").toggle();
        $("#img3").show();
    })

     $(".submit").click(function(){
        var name =  $("name").val()
        var Email =  $("Email").val()
        var  message=$("message").val()

        if(name && Email && message){
            alert(name + " we have received your message.Thank you for reaching to us");

        }else{
            alert('check your input');
        }
      });
        $("form").submit(function(event) {
            var name=$("name").val();
            alert("Thank you" + name + "for getting back to us");
        })

  


});
