
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

    $(document).ready(function(){
    $("#work4").hover(function(){
        $("#test4").fadeIn("slow");
        $("#test4").show();
    }).mouseout(function(){
        $("#test4").hide();
    });
    });



    $(document).ready(function(){
        $("#work3").hover(function(){
            $("#test3").fadeIn("slow");
            $("#test3").show();
        }).mouseout(function(){
            $("#test3").hide();
        });
        });



    $(document).ready(function(){
        $("#work2").hover(function(){
            $("#test2").fadeIn("slow");
            $("#test2").show();
        }).mouseout(function(){
            $("#test2").hide();
        });
        });



    $(document).ready(function(){
        $("#work1").hover(function(){
            $("#test1").fadeIn("slow");
            $("#test1").show();
        }).mouseout(function(){
            $("#test1").hide();
        });
        });



    $(document).ready(function(){
        $("#work5").hover(function(){
            $("#test5").fadeIn("slow");
            $("#test5").show();
        }).mouseout(function(){
            $("#test5").hide();
        });
        });



    $(document).ready(function(){
        $("#work6").hover(function(){
            $("#test6").fadeIn("slow");
            $("#test6").show();
        }).mouseout(function(){
            $("#test6").hide();
        });
        });



    $(document).ready(function(){
        $("#work7").hover(function(){
            $("#test7").fadeIn("slow");
            $("#test7").show();
        }).mouseout(function(){
            $("#test7").hide();
        });
        });



    $(document).ready(function(){
        $("#work8").hover(function(){
            $("#test8").fadeIn("slow");
            $("#test8").show();
        }).mouseout(function(){
            $("#test8").hide();
        });
        });



});
