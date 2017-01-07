$(document).ready(function() {
    var $testimonialImg = $(".testimonial-img");
    var $testimonialMessage = $(".testimonial-message");
    var testimonialImgHeight = $testimonialImg.height();
    var testimonialMessageHeight = $testimonialMessage.height();
    var findHeight = testimonialImgHeight - testimonialMessageHeight;

    $testimonialMessage.each(function() {
        var thisParent = $(this).parents();

        if(thisParent.hasClass("pt-100")) {
            $(this).css({
                "top": findHeight / 2 + 100 + "px"
            });
        } else {
            $testimonialMessage.css({
                "top": findHeight / 2 + "px"
            });
        }
    });
});