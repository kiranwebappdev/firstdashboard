$(document).ready(function () {
    $('header').click(function (e) { 
        e.preventDefault();
        $('#admin').slideToggle();
        $('#settings').slideToggle();
        $('#contact').slideToggle();
        $('#home').slideToggle();
        $('#navigation').slideToggle();

    
});
})

$(document).ready(function () {
    $('.card-1').click(function (e) { 
        e.preventDefault();
        
        $('.card-1').width('95%');
        $('.card-1').height('90%');
        $('.card-2').hide();
        $('.card-3').hide();
        $('.card-4').hide();
        
    });
});




$(document).ready(function () {
    $('.card-2').click(function (e) { 
        e.preventDefault();
        $('.card-2').width('95%');
        $('.card-2').height('90%');
        $('.card-1').hide();
        $('.card-3').hide();
        $('.card-4').hide();
    });
});

$(document).ready(function () {
    $('.card-3').click(function (e) { 
        e.preventDefault();
        $('.card-3').width('95%');
        $('.card-3').height('90%');
        $('.card-1').hide();
        $('.card-2').hide();
        $('.card-4').hide();
    });
});


$(document).ready(function () {
    $('.card-4').click(function (e) { 
        e.preventDefault();
        $('.card-4').width('95%');
        $('.card-4').height('90%');
        $('.card-1').hide();
        $('.card-2').hide();
        $('.card-3').hide();
    });
});
