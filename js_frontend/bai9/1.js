document.addEventListener("DOMContentLoaded",function(){
    let nut = document.getElementById('hieuUng');
    let khoi = document.getElementById('khoi');
    let trangThai = "lan1";
    nut.onclick = function(){
        if(trangThai == "lan1"){
            console.log("click lan 1");
            trangThai = "lan2";
            khoi.classList.remove('chieuso2');
            khoi.classList.add('chieuso1');
        }
        else{
            console.log("click lan 2");
            trangThai = "lan1";
            khoi.classList.remove('chieuso1');
            khoi.classList.add('chieuso2');
        }
    }
},false);
 