$(".image").hover(function(){
    $(this).children("button").show();
    $(this).css("opacity",0.5)
    
   
},function(){
    $(this).css("opacity",1)
    $(this).children("button").hide();
})



       $(".course1").click(function(){
        $("#fade").modal({
            fadeDuration: 100
          });
        })
        
        $(".course2").click(function(){
            $("#fade").modal({
                fadeDuration: 100
              });
            })

        $(".course3").click(function(){
                $("#fade").modal({
                    fadeDuration: 100
                  });
                })
        $(".course4").click(function(){
                    $("#fade").modal({
                        fadeDuration: 100
                      });
                    })
        $(".course5").click(function(){
                        $("#fade").modal({
                            fadeDuration: 100
                          });
                        })
        $(".course6").click(function(){
                            $("#fade").modal({
                                fadeDuration: 100
                              });
                            })
        $(".course7").click(function(){
                                $("#fade").modal({
                                    fadeDuration: 100
                                  });
                                })
        $(".course8").click(function(){
                                    $("#fade").modal({
                                        fadeDuration: 100
                                      });
                                    })
        $(".course9").click(function(){
                         $("#fade").modal({
                             fadeDuration: 100
                                          });
                        })