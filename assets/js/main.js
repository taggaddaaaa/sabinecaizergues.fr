jQuery(document).ready(function($) {
    
    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            let itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
        });
    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    /* Github Activity Feed - https://github.com/taggaddaaaa/sabinecaizergues.fr */
    GitHubActivity.feed({ username: "taggaddaaaa", selector: "#ghfeed" });
});
