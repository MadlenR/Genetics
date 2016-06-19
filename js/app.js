////////// HEADER
function showBtn() {
    $('.menu_btn').removeClass('hidden_btn');
}

function hideBtn() {
    $('.menu_btn').addClass('hidden_btn');
}


/////// Menu pokazywanie/ukrywanie
function showNav() {
    $('#nav').removeClass('hidden_nav');
    $('#nav').find('.nav_ul').removeClass('mobile_nav');
}

function hideNav() {
    $('#nav').addClass('hidden_nav');
    $('#nav').find('.nav_ul').addClass('mobile_nav');
}

////////// Zawartość hamburger menu
function btnMenuInit() {
    var $nav = $('#nav');
    
    $('.btn-menu').on('click', function(event){
        event.preventDefault();
        $nav.toggleClass('hidden_nav');
    });
}


function test_match_media_with_listener() {
    var mq = window.matchMedia("(max-width: 500px)");
    console.log(mq);
    
    mq.addListener(WidthChange);
    WidthChange(mq);

    
    function WidthChange(mediaQuery) {
        if(mediaQuery.matches) {
            console.log("yes");
            hideNav();
            showBtn();

        } else {
            console.log("no");
            showNav();
            hideBtn();
        }
    }
}

$(document).ready(function() {
  
});


////////// SECTION Q&A
function clickQA (element) {
    var h2= element.find("h2");
    var p= element.find("p");
    
    h2.on("click", function(event) {
        
        var clicked= $(this).next();
        
        clicked.slideToggle();
        p.not(clicked).slideUp();
          
    });
}



//////////// SECTION FORM

function handleForm () {

    var form= $('form');
    var nameInput = form.find('#nameInput');
    var emailInput = form.find('#emailInput');
    var messageInput= form.find('#messageInput');
    var errordiv= form.find('#error');
    console.log(errordiv);
    console.log(nameInput);

    form.on('submit', function (ev) {

        var name =nameInput.val();
        var email= emailInput.val();
        var message= messageInput.val();

        var nameok = name.length > 3; 
        var emailok = email.indexOf('@') !=-1;
        var messageok= message.length >10;


        errordiv.html('');
//        console.log(errordiv.html(''));


        function showError(err) {
            errordiv.html(errordiv.html() + err + '<br>');
        }


        if(!nameok || !emailok || !messageok) {


            if (!nameok) showError('Your name is too short.');
            if (!emailok) showError('Your e-mail address is invalid. Please enter proper e-mail address including "@" sign.');
            if (!messageok) showError('Your message is too short.');

             ev.preventDefault();

        } 
    }); 
}

/////////////////////
///////////DOCUMENT READY////////////////////////////////
////////////////////

$(document).ready(function(){
//        console.log("działa");
    
    clickQA($(".QA"));
    test_match_media_with_listener();
    btnMenuInit();
    handleForm();
});