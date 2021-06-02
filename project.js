// console.log("Welcome to the console of Calculator!");
let a = 0;
let b = 0;
let result = 0;
let input = 1;
let decimal_check = false;
let check = false;
let is_on = false;
let oper = '';
let r = false;
let no_after_decimal = 0;
let decimal_divider = 10;
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let add = document.getElementById("+");
let minus = document.getElementById("-");
let multiply = document.getElementById("*");
let divide = document.getElementById("/");
let equal = document.getElementById("=");
let decimal = document.getElementById(".");
let ce = document.getElementById("CE");
let back = document.getElementById("Back");
let on = document.getElementById("ON");
let off = document.getElementById("OFF");
let line1 = document.getElementById("line1");
let line2 = document.getElementById("line2");

//Setting the Operands-->

one.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setValue(one);
    displayNum(one);
});
two.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setValue(two);
    displayNum(two);
});
three.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setValue(three);
    displayNum(three);
});
four.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setValue(four);
    displayNum(four);
});
five.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setValue(five);
    displayNum(five);
});
six.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setValue(six);
    displayNum(six);
});
seven.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setValue(seven);
    displayNum(seven);
});
eight.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setValue(eight);
    displayNum(eight);
});
nine.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setValue(nine);
    displayNum(nine);
});
zero.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setValue(zero);
    displayNum(zero);
});

// Setting the Operator-->

add.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setOperator(add);
    displayNum(add);
});
minus.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setOperator(minus);
    displayNum(minus);
});
multiply.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setOperator(multiply);
    displayNum(multiply);
});
divide.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    setOperator(divide);
    displayNum(divide);
});

// Displaying the Result-->

equal.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    if(a>0 && b>0 && decimal_check == true){
        b += no_after_decimal;
        // console.log("decimal b:",b);
    }
    switch(oper){
        case '+':
            result = a+b;
            break;
        case '-':
            result = a-b;
            break;
        case '*':
            result = a*b;
            break;
        case '/':
            result = a/b;
            break;
    }
    result = Number(result.toFixed(3));
    line2.innerText = result;
    a = result;
    b = 0;
    input=1;
    check = true;
    decimal_check = false;
    no_after_decimal = 0;
})


// Decimal -->

decimal.addEventListener('click',function(){
    decimal_check = true;
    line1.innerText += ".";
})

// CE, BACK, ON, OFF-->

ce.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    line1.innerText ="";
    line2.innerText ="";
    a = 0;
    b = 0;
    result = 0;
    input = 1;
    check = false;
})

back.addEventListener('click',function(){
    if(is_on == false){
        alert("Let's turn on the calculator first.");
        is_on = true;
    }
    if(input == 1){
        a = (a - (a%10))/10;
        line1.innerText = a;
    }
    else if(input == 2){
        oper="";
        line1.innerText = a + oper;
    }
    else if(input == 3){
        b = (b - (b%10))/10;
        line1.innerText = a + oper + b;
    }
})

on.addEventListener('click',function(){
    is_on = true;
    line1.innerText = "0";
    line2.innerText = "";
})

off.addEventListener('click',function(){
    line1.innerText = "";
    line2.innerText = "";
    a = 0;
    b = 0;
    result = 0;
    input = 1;
    check = false;
    oper="";
    is_on = false;
})

// Declaring the Functions-->

function setValue(obj){
    if(decimal_check == true){
        no_after_decimal += Number(obj.id);
        no_after_decimal /= decimal_divider;
        console.log(no_after_decimal);
        return;
    }
    if(input == 2 || input == 3){
        b = (b*10) + Number(obj.id);
        // console.log("b is set as: ",b);
        input = 3;
    }
    else if(input==1){
        a = (a*10) + Number(obj.id);
        // console.log("a is set as: ",a);
    }
}
function setOperator(obj){
    oper = obj.id;
    input++;
    if(a>0 && b==0 && decimal_check == true){
        a += no_after_decimal;
        // console.log("decimal a:",a);
    }
    if(check == true){
        line1.innerText = result;
        line2.innerText = "";
    }    
    decimal_check = false;
    no_after_decimal = 0;
}
function displayNum(obj){
    if(line1.innerText == "0"){
        line1.innerText="";
    }
    line1.innerText = line1.innerText + obj.id;
}
