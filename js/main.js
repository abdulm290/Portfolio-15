
/*----------------Animate on scroll's custom javascript start here below----------------*/
$(document).ready(function () {
    //AOS instance
    AOS.init();
});
/*----------------Animate on scroll's custom javascript close here above----------------*/


/*----------------Search box custom javascript start here below----------------*/
const choices = new Choices('[data-trigger]', {
    searchEnabled: false,
    itemSelectText: '',
}); 
/*----------------Search box custom javascript close here above----------------*/



/*----------------Owl Carousal custom javascript start here below----------------*/
$("#owl-slider").owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 1
        }
    }
});
/*----------------Owl Carousal custom javascript close here above----------------*/
 