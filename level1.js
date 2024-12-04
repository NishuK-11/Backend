/*


var a = "thapatechnical";
alert(a);
document.write("Bakwas band karo aur padha karo!")
var x = 6;
var y = 6;
var z = x+y;
document.write(z);
*/
// undefined and null
var a;
document.write(a);  //undefined
document.write("<br>");
var a = null;
document.write(a);
document.write("<br>");
var a = "ThapaTechnical is a \"youtuber\" oo yes";
document.write(a);
document.write("<br>");
var b = 111111;
document.write(b);
document.write("<br>");
var boolean = true;
document.write(boolean);
document.write("<br>");
document.write(typeof(b));

var youtube = "Thapa";
var name = "Technical";
document.write("<br>");
document.write(youtube + name);
document.write("<br>");
document.write(youtube + "    "+ name);//ek hi space beech mein dega
document.write("<br>");
document.write(youtube + "    "+ name);
document.write("<br>");

var marks = 100;
if(marks = 100){
    document.write("yes u are correct");
}
document.write("<br>");
var i = 2; var j = 1;
while(i<=20){
    document.write("2"+"*"+j+"="+i);
    i=i+2;
    j++;
    document.write("<br>");
}
var c;
for(c=2;c<21;c+=2){
    document.write(c);
    document.write("<br>");
}

function hello(){
    alert ("welcome to Thapa Technical");
}
hello();

    var friends = ['nishu','nisha','sunita','siya','saibun'];
    document.write(friends);
    document.write("<br>");
    var friends =new Array('nishu','nisha','sunita','siya','saibun');
    document.write(friends);
    document.write("<br>");
    var array = ['vinod','bahadur','thapa'];
    array.push("thapa technical");
    var length = array.length;
    alert(length);
    document.write(length);
    document.write("<br>");
    document.write(array);
    document.write("<br>");
    array.pop();// ek element last se hatayega
    document.write(array);
    document.write("<br>");
    array.shift();// ek element start se hatayega
    document.write(array);
    document.write("<br>");
    array.unshift("thapa technical");// ek element start me lagayega
    document.write(array);
    document.write("<br>");
    array.reverse();
    document.write(array);
    document.write("<br>");

    var check = Array.isArray(array);
    document.write(check);
    document.write("<br>")
    var arr2 = ['priya','mahima'];
    document.write(array.concat(arr2));
    document.write("<br>")

    document.write(arr2.indexOf("mahima"));