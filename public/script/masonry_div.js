
/*
$(document).ready(function () {
    $('.app_page_wrapper').masonry({
        itemSelector: '.app_card_cover',
        columnWidth: '.app_card_cover',
        percentPosition: true
    });
}); 

*/
var $grid = $('.app_page_wrapper').imagesLoaded(function(){
    $grid.masonry({
         itemSelector: '.app_card_cover',
        columnWidth: '.app_card_cover',
        percentPosition: true
    })
})