function add() {
    
    var a = parseInt(document.getElementById('number1').value);
    var b = parseInt(document.getElementById('number2').value);
    
    var c=a+b;
    console.log(c);
    document.getElementById('result1').innerHTML='Addition of two numbers is:'+ ''+c;
    // body...
}

function sub() {
    var a = parseInt(document.getElementById('number1').value);
    var b = parseInt(document.getElementById('number2').value);
    
    var y=a-b;
    console.log(y);
    document.getElementById('result2').innerHTML='Subtraction of two numbers is:'+''+y;
    // body...
}

function mul(){

    var a= parseInt(document.getElementById('number1').value);
    var b= parseInt(document.getElementById('number2').value);

    var z=a*b;
    console.log(z);
    document.getElementById('result3').innerHTML='Multiplication of two numbers is:'+''+z;

}

function div(){

    var a= parseInt(document.getElementById('number1').value);
    var b= parseInt(document.getElementById('number2').value);

    var r=a/b;
    console.log(r);
    document.getElementById('result4').innerHTML='division of two numbers is:'+''+r;

}

