if ($(window).width() >= 576) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = "$(function () {$('html').sakura();});";
    document.getElementsByTagName('head')[0].appendChild(script);
}
mediumZoom('.zoom',{ 
    margin: 0,
    background: '#000000',
    scrollOffset: 40
})



$(function() {
        $('.lazy').lazy({
            effect: 'fadeIn',
        });
    });
                     
                  
 