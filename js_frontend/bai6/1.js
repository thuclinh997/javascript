var x = document.querySelectorAll('.n1');
console.log(x[0].classList.remove('btn-outline-danger'));
x[0].classList.remove('btn');
x[0].classList.add("btn");
x[0].classList.add("btn-block");
x[0].classList.add("btn-success");
var n3 = document.querySelectorAll('.n3');
n3[0].classList.toggle('btn-block');