$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop: false,
  margin: 10,
  nav: true,
  navText: ["←","→"],
    dots:false,
    responsive:{ 
        0:{
            items:4
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})


    $("#openNav").click(function(){
        $("#mySidenav").css("animation", "expand 0.3s forwards");
        //closeBtn
        $(".closeBtn").css("display", "block");
        $(".closeBtn"). css("animation", "show 0.3s");
        //Overlay
        $(".overlay").css("display", "block");
        $(".overlay").css("animation", "show 0.3s");
    });


    $(".closeNav").click(function(){
        $("#mySidenav").css("animation", "collapse 0.3s forwards");
        //closeBtn
        $(".closeBtn").css("animation", "hide 0.5s");   
        $(".overlay"). css("animation", "hide 0.5s");    
        //Overlay
        setTimeout(() => {
        $(".closeBtn").css("display", "none");
        $(".overlay").css("display", "none");
        }, 300) //Reset Menus
    });
});