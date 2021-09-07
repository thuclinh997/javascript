//anonymous == function k ten

function tbc(x, y) {
    console.log(x + y);
}
let z = function (x, y) {
    return (x + y) / 2;
}
console.log(z(2, 4));

// closure function
function chao() {
    let ten = "thuclinh";
    let thongbao = function () {
        console.log("ten cua ban: " + ten);
    }
    ten = ten + " - dep trai";

    return thongbao;
}
let h = chao(); // h luc nay la mot function anonymous
h();