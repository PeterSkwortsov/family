let cooke = document.querySelector('.messages_cookies');
let cookeBtn = document.querySelector('.messages_cookies-close');
let body = document.querySelector('body')
cookeBtn.addEventListener('click', function () {
    cooke.style.display = 'none'
})

// прелоадер 


document.body.onload = function(){

    setTimeout( function(){
    var preloader = document.getElementById('preloader');
    if ( !preloader.classList.contains('hide') )
    {
        preloader.classList.add('hide');
    }
    }, 1000);

}