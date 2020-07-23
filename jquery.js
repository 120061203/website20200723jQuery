$(document).ready(function() {
    $(".div1").click(function() {
        $(".div2").slideToggle("slow");
    });
    $(".div3").click(function() {
        $(".div4").slideToggle("slow");
    });
    $(".div5").click(function() {
        $(".div6").slideToggle("slow");
    });


    $(".btnAnimate").click(function() {
        $(".box1").animate({
            left: '250px',
            opacity: '0.5',
            height: 'toggle',
            width: '150px'
        });
    });

    $(".btnAnimateQueue").click(function() {
        var div = $(".box1");
        div.animate({ height: '300px', opacity: '0.4' }, "slow");
        div.animate({ width: '300px', opacity: '0.8' }, "slow");
        div.animate({ height: '100px', opacity: '0.4' }, "slow");
        div.animate({ width: '100px', opacity: '0.8' }, "slow");
    });

});