document.addEventListener("DOMContentLoaded",function(){
    // truy xuat phan tu
    let nut = document.getElementById('nut1');
    let khoi = document.getElementsByClassName('card');
    // console.log(nut);
    //goi su kien click
    nut.onclick = function(){
        // console.log("click duoc chua");
        khoi[0].classList.toggle('diphai');
    }
},false);
 