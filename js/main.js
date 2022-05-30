//---------------Ejercicio 1
let x = parseFloat(prompt("Dime tres números del 1 al 100, primero", ""));
let y= parseFloat(prompt("Dime tres números del 1 al 100, segundo", ""));
let z= parseFloat(prompt("Dime tres números del 1 al 100, tercero", ""));

console.log(x,y,z);
if((x>=1 && x<=100) && (y>=1 && y<=100) &&(z>=1 && z<=100))
{
    
} else {alert("No es un número del 1 al 100")};


if((x>=y) && (x>=z)){
    alert("El número amyor es " + x);
    console.log(x);

} else if ((y>=x) && (y>=z))
{ 
    alert("El número amyor es " + y);
    console.log(y);

} else if ((z>=x) && (z>=y))
{ 
    alert("El número amyor es " + z);
    console.log(z);

};

//-----------------------Ejercicio 2

// x = parseFloat(prompt("Dime tres números del 1 al 100, primero", ""));
// y= parseFloat(prompt("Dime tres números del 1 al 100, segundo", ""));
// z= parseFloat(prompt("Dime tres números del 1 al 100, tercero", ""));

//console.log(x,y,z);
// if((x>=1 && x<=100) && (y>=1 && y<=100) &&(z>=1 && z<=100))
// {
    
// } else {alert("No es un número del 1 al 100")};


// if((x<=y) && (x<=z)){
//     alert("El número menor es " + x);
//     console.log(x);

// } else if ((y<=x) && (y<=z))
// { 
//     alert("El número menor es " + y);
//     console.log(y);

// } else if ((z<=x) && (z<=y))
// { 
//     alert("El número menor es " + z);
//     console.log(z);

// };

//---------------------Ejercicio 3
// let n = parseFloat(prompt("Dime un número entero del 1 al 100", ""));
// console.log(n);

//Adivinar número
// let m= 1;
// if(m==n)
// {
//     prompt("Tu número es" + m);
//     alert("Adivine tu número!!!");
// } else if(m!=n)
// {
//     m=+1;

// } ;
let m = prompt("Dime un número entero del 1 al 100", "");
Adivinar (m)
function Adivinar ()
{
let superior = 100;
let inferior = 0;
let noEncontrado = true;

while (noEncontrado)
    {
    let mid = parseInt(inferior + ((superior-inferior) /2));
    console.log(mid);
    console.log(((superior-inferior)/2));
    
    if (((superior-inferior)/2)<1)
        {
           noEncontrado = false;
            alert("Tú número es el "+ (parseInt(mid) +1));
              break;
        }
    let res = confirm("Tu número es menor o igual a "+mid);

    if (res)
    {
          superior = mid;
    } else 
        {
           inferior = mid;
        };
    console.log(inferior, superior);
    };
};
//---------------------Ejercicio 4------------------------
// let a = parseFloat(prompt("Dime un número entero del 100 al 200", ""));
// console.log(a);

// let b= a%3;
// switch (b) {
//     case b==0:
//     alert("Tu número es múltiplo de 3: " + a);
//         break;
//     default: alert("Tu número no es múltiplo de 3: " + a);
//         break;
// };

//----------------------Ejercicio 5-----------------------
let a = parseFloat(prompt("Dime un número a la azar, primero", ""));
let b = parseFloat(prompt("Dime un número a la azar, segundo", ""));
let c = parseFloat(prompt("Dime un número a la azar, segunfo", ""));

// switch (a || b || c) {
//     case a==(b+c):
//     alert("Tu número " + a + "es la suma de " + b + c);
//         break;
//     case b==(a+c):
//         alert("Tu número " + b + "es la suma de " + a + c);
//         break;
//     case c==(a+b):
//         alert("Tu número " + c + "es la suma de " + a + b);
//         break;
//     default :
//     alert("Ningún número es la suma de los otros dos");
//         break;
// };

if(a==(b+c))
{
    alert("Tu número " + a + " es la suma de " + b +" y "+ c);
} else if (b==(a+c))
{
    alert("Tu número " + b + " es la suma de " + a +" y " + c);
} else if (c==(a+b))
{
    alert("Tu número " + c + " es la suma de " + a +" y "+ b);
} else
{
    alert("Ningún número es la suma de los otros dos"); 
};

//-------------------Ejercicio 6----------------------------



