/*
JavaScript Dialog Boxes alert,Prompt,confirmation. 
Prompt Box - a prompt box is often used if you want the user to input a value before entering a page .
when a prompt box pops up , the user will have to click either "OK" or "Cancel" to proceed after entering an input value.
*/
var name = prompt("What is your name ?");
if(name != ""){
    document.write("Nice to meet you"+" " +name);
}

var thapa = "youtuber";
var technical = new String("youtuber");
document.write(typeof(technical));


/*
A confirmation dialog bix is mostly used to take user's permission on any option. It displeys  a dialog box with two buttons : OKK and Cancel.
If user click on Ok , the window method confirm() will return true. If the user clicks on the cancel button, then confirm() returns false.
*/
function myfun(){

    var userConfirmation = confirm("Do you want to visit websit?");
    if(userConfirmation == true){
        window.open("https://leetcode.com/submissions/detail/1448424616/");
        return true;
    } 
    else{
        document.write("user does not want to visit the page");
        return false;
    }
}
//string :- indexOf(),charAt(),lastIndexOf(),replace(),toUpperCase(),toLowerCase(),concat()length()



