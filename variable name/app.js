let numb2 = 5;
function check(){
    let a=3;
    console.log(a); // local variables and show error in console tab because its scope is just in the box
    console.log(numb2); // we can access global variable at any block or function
}
function login(){
    let a=3;
    console.log(a);
}

{
    var numb1=2;
}
{
    let b=5;
    console.log(numb1); // we can access value of numb1 just because we use var not let
}
