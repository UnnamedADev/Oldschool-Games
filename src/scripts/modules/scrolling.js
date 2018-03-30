export const setScrolling = () => {
    $('.main-menu > li').click(function () {

        let targetName = $(this).text().toLowerCase();

        $('.game-tile').each(function () {
            if($(this).hasClass(targetName)){
                $('html, body').animate({
                    scrollTop: $(this).position().top
                },300,'swing');
            }
        });
    });
    
}