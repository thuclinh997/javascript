document.addEventListener("DOMContentLoaded", function() {
    var h1 = document.querySelector('h1');
    h1.innerHTML = "xin chao moi nguoi";
    let x1 = document.getElementById('n1');
    console.log(x1);
    x1.onclick = function() {
        console.log("ban vua click vao x1");
        x1.classList.add('diXuong');
    }
}, false);