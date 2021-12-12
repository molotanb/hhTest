$(document).ready(function() {
    $(".listing__footer").on("click", function(t) {
        t.preventDefault(),
        $(this).closest(".listing__footer").find(".listing__footer_cond").stop(!0).toggle('slow');
    });
    $('.subheader__desc_overlay').click(function() {
        $('.subheader__desc').addClass('full');
        $(this).hide();
        $('.subheader').css('padding', '30px 0')
    })
});