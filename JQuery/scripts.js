$(document).ready (function () {
    $('body').prepend('<button class="button">Click Me</button>')
    
    $('.button').click(function() {
        alert('You are really pressing my buttons!');
    });
    
    $('#empty').mouseover(function(){
        $('#empty').css('background-color','red')
    });
    
    $('#empty').mouseout(function(){
        $('#empty').css('background-color','blue')
    });
    
    $('p').click(function(){
        $('p').css('color', getRandomColor() );
    })
    $('#span-button').append('<button class="span-button">Click Me for a span</button>');
    
    $('.span-button').click(function() {
        $('#nothing').prepend('<span>Chase Brasfield</span>')
    });
    

});



function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}