


////////// SECTION Q&A
function clickQA (element) {
    var h2= element.find("h2");
    var p= element.find("p");
    
//    console.log(h2);
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
var messageInput= form.find('messageInput');
var errordiv= form.find('error');


form.on('submit', function (ev) {

    var name =nameInput.val();
    var email= emailInput.val();
    var message= messageInput.val();
    
    var nameok = name.length > 3; 
    var emailok = email.indexOf('@') !=-1;
    var messageok= message.length >10;
    
    
    errordiv.html('');
    
    
    function showError(err) {
        errordiv.html(errordiv.html() + err + '<br>');
        console.log(errordiv.html());
    }
    
    
    if(!nameok || !emailok || !messageok) {
        
        
        if (!nameok) showError('Your name is too short.');
        if (!emailok) showError('Your mail is invalid. Please enter proper e-mail address including "@" sign.');
        if (!messageok) showError('Your message is too short.');
   
         ev.preventDefault();
    
    } 
   
    
}); 

}



$(document).ready(function(){
//        console.log("działa");
    
    clickQA($(".QA"));
    
});