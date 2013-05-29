

var count = 0; 
var person = " "; 

function setupChatroom() {
var x;

person=prompt("Please enter your name", "Your name");




} 


function conversation (messages) {

this.messages=messages; 
}

function messages (user,text,time) {

this.user = user;
this.text = text; 
this.time = time; 
}




function clearContents(element) {
  element.value = '';
}

function getTime (time) {

var today = new Date();
var hour = today.getHours();
var minute = today.getMinutes(); 

if (hour > 12 )

{
  hour = hour-12; 
}

now = hour + ':' + minute; 

return now; 
} 

function send () {


var text = document.getElementById("myTextArea").value;
var textArray = new Array(); 

textArray.push(text); 
var time = getTime(time); 
var myMessages = new messages(window.person, text, time) ; 

display(myMessages.user,myMessages.text,myMessages.time); 

}

function display (user,text,time) {

        $("#chat ul").append( ' <span style="color:blue">'+ user + '<li style="color:green">'+ text +'\n' + '<span style="color:red;">' + time +'</span>'+ '</li>' );
        count++;
        
             checkCount(count); 

        response(); 
}

function response () {
var time = getTime(time); 
 $("#chat ul").append( ' <span style="color:blue">'+ "user1" + '<li style="color:green">'+ "this is a repsone!" +'\n' + '<span style="color:red;">' + time +'</span>'+ '</li>' );
        count++;
        
        checkCount(count); 

}

function checkCount(count) {

  if ( count> 6) {
        
        $("#chat").css("overflow-y","scroll") ; 
        }
        
 } 
        
        
