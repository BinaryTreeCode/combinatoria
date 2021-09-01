
var A = document.getElementById("A");
var B = document.getElementById("B");
var C = document.getElementById("C");
var D = document.getElementById("D");
var E = document.getElementById("E");

var txt1 = document.querySelector('input1');
var txt2 = document.querySelector('input2');
var txt3 = document.querySelector('input3');
var txt4 = document.querySelector('input4');
var txt5 = document.querySelector('input5');

function nombres () {
    a = A.value;
    b = B.value;
    c = C.value;
    d = D.value;
    e = E.value;

    document.getElementById('array1').value = a;
    document.getElementById('array2').value = b;
    document.getElementById('array3').value = c;
    document.getElementById('array4').value = d;
    document.getElementById('array5').value = e;
};

var btn_nombres = document.getElementById("nombres")
    
btn_nombres.addEventListener("click",nombres, true)

var arrays = 
{
    array1:[],
    array2:[],
    array3:[],
    array4:[],
    array5:[]
};

var conjunto1 = 
{
    a1 : document.getElementById("a1"),
    b1 : document.getElementById("b1"),
    c1 : document.getElementById("c1"),
    d1 : document.getElementById("d1"),
    e1 : document.getElementById("e1")
};

var conjunto2 = 
{
    a2 : document.getElementById("a2"),
    b2 : document.getElementById("b2"),
    c2 : document.getElementById("c2"),
    d2 : document.getElementById("d2"),
    e2 : document.getElementById("e2")
};

var conjunto3 = 
{
    a3 : document.getElementById("a3"),
    b3 : document.getElementById("b3"),
    c3 : document.getElementById("c3"),
    d3 : document.getElementById("d3"),
    e3 : document.getElementById("e3")
};

var conjunto4 = 
{
    a4 : document.getElementById("a4"),
    b4 : document.getElementById("b4"),
    c4 : document.getElementById("c4"),
    d4 : document.getElementById("d4"),
    e4 : document.getElementById("e4")
};

var conjunto5 = 
{
    a5 : document.getElementById("a5"),
    b5 : document.getElementById("b5"),
    c5 : document.getElementById("c5"),
    d5 : document.getElementById("d5"),
    e5 : document.getElementById("e5")
};

function elementos1 (elemento1, elemento2, elemento3, elemento4, elemento5) 
{
    arrays.array1.push(elemento1, elemento2, elemento3, elemento4, elemento5)
}

function elementos2 (elemento1, elemento2, elemento3, elemento4, elemento5) 
{
    arrays.array2.push(elemento1, elemento2, elemento3, elemento4, elemento5)
}

function elementos3 (elemento1, elemento2, elemento3, elemento4, elemento5) 
{
    arrays.array3.push(elemento1, elemento2, elemento3, elemento4, elemento5)
}

function elementos4 (elemento1, elemento2, elemento3, elemento4, elemento5) 
{
    arrays.array4.push(elemento1, elemento2, elemento3, elemento4, elemento5)
}

function elementos5 (elemento1, elemento2, elemento3, elemento4, elemento5) 
{
    arrays.array5.push(elemento1, elemento2, elemento3, elemento4, elemento5)
}

function push1 () {

    A1 = conjunto1.a1.value;
    B1 = conjunto1.b1.value;
    C1 = conjunto1.c1.value;
    D1 = conjunto1.d1.value;
    E1 = conjunto1.e1.value;
    
    elementos1(A1, B1, C1, D1, E1)
    
    console.log(arrays.array1)
};


function push2 () {

A2 = conjunto2.a2.value;
B2 = conjunto2.b2.value;
C2 = conjunto2.c2.value;
D2 = conjunto2.d2.value;
E2 = conjunto2.e2.value;

elementos2(A2, B2, C2, D2, E2)

console.log(arrays.array2)
};

function push3() {

A3 = conjunto3.a3.value;
B3 = conjunto3.b3.value;
C3 = conjunto3.c3.value;
D3 = conjunto3.d3.value;
E3 = conjunto3.e3.value;

elementos3(A3, B3, C3, D3, E3)

console.log(arrays.array3)
}

function push4() {

A4 = conjunto4.a4.value;
B4 = conjunto4.b4.value;
C4 = conjunto4.c4.value;
D4 = conjunto4.d4.value;
E4 = conjunto4.e4.value;

elementos4(A4, B4, C4, D4, E4)

console.log(arrays.array4)
}

function push5() {
    
A5 = conjunto5.a5.value;
B5 = conjunto5.b5.value;
C5 = conjunto5.c5.value;
D5 = conjunto5.d5.value;
E5 = conjunto5.e5.value;

elementos5(A5, B5, C5, D5, E5)

console.log(arrays.array5)
}

function push () {
    push1();
    push2();
    push3();
    push4();
    push5();
};

var btn = document.getElementById("btn");
    
btn.addEventListener("click",push, true);

arrays.array1.shift("");
arrays.array2.shift("");
arrays.array3.shift("");
arrays.array4.shift("");
arrays.array5.shift("");

var checkbox1 = document.getElementById("check1");
var checkbox2 = document.getElementById("check2");
var checkbox3 = document.getElementById("check3");
var checkbox4 = document.getElementById("check4");
var checkbox5 = document.getElementById("check5");

function multiplicacion() {

    box2 = arrays.array2.length;
    box3 = arrays.array3.length;
    box4 = arrays.array4.length;
    box5 = arrays.array5.length;

    check1 = checkbox1.checked;
    if (check1 == true) {
        box1 = arrays.array1.length;
    }
    else {
        box1 = 1;
    }

    check2 = checkbox2.checked;
    if (check2 == true) {
        box2 = arrays.array2.length;
    }
    else {
        box2 = 1;
    }

    check3 = checkbox3.checked;
    if (check3 == true) {
        box3 = arrays.array3.length;
    }
    else {
        box3 = 1;
    }

    check4 = checkbox4.checked;
    if (check4 == true) {
        box4 = arrays.array4.length;
    }
    else {
        box4 = 1;
    }

    check5 = checkbox5.checked;
    if (check5 == true) {
        box5 = arrays.array5.length;
    }
    else {
        box5 = 1;
    }

    total = box1 * box2 * box3 * box4 * box5;

    console.log(total)
    alert(total + " combinaciones")
}

var resutado = document.getElementById("evento");

resutado.addEventListener("click", multiplicacion, true);

