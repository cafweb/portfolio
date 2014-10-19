$(function()
{
    win_width = $(window).width()



    if(win_width >= 768)
    {
        $("#sobre").css('max-height',$( window ).height())
    }

    $(window).resize(function()
    {
        $("#sobre").css('max-height',$( window ).height())
    })

    win_pos = $("#sobre").offset().top - 50
    var win_bottom = $(window).height() - 80;
    var menu_margem = $('.navbar.home .container').css('margin-top').replace('px','')

    if($(window).scrollTop() > $(window).height() && $('.navbar.home').hasClass('index'))
    {
        $('.navbar.home').removeClass('index')
    }

    $(window).scroll(function()
    {
        var pos = $(window).scrollTop() - win_bottom
        if($(window).scrollTop() >= win_bottom){
            var diferenca = menu_margem - pos
            if($('.navbar.home .container').css('margin-top').replace('px','') >= 0 && diferenca >= 0)
            {
                $('.navbar.home .container').css('margin-top', diferenca)
            }
            else
            {
                $('.navbar.home .container').css('margin-top', 0)
            }
        }

        win_top = $(window).scrollTop()
        if(win_top >= win_pos)
        {
            $(".navbar.home").removeClass('index')
        }

        if(win_top < win_pos)
        {
            $('.navbar.home').addClass('index')
        }

    })
})




