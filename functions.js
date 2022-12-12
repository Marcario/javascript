function myFunction(n1,n2){
   
    return n1*n2 
}
   console.log(myFunction(2,3));

//    qn1
var linebreak ="<br></br>";
function addition(a,b){ 
    return a+b
}
document.write(addition(20,30));
document.write(linebreak)

// qn2
function nums(number, length){
    for (i=number; i<=length; i++){
       document.write("The square of  " + i + " is "+ i*i,linebreak);

    }
}
nums(1,10)

// qn3
document.write(" ",linebreak)
const number1 =prompt("Enter a number: ");
document.write("First number:",number1,linebreak);
const number2 =prompt("Enter a number: ");
document.write("Second number:",number2,linebreak );
const number3 =prompt("Enter a number: ");
document.write("Third number:",number3,linebreak);

function maximumNumber(){
    let maxNumber = 0;
    if (number1>number2 && number2>number3) {
        document.write(maxNumber=number1)
    }else{
        document.write("Maximum is: ",maxNumber=Math.max(number1,number2,number3))
    }

}
maximumNumber()