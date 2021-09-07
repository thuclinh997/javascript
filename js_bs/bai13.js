//constructor
let cacMonAn = {
    ten: "thit kho tau",
    nguyenlieu: "thit heo",
    gia: 200
};
let monSo2 = cacMonAn;
monSo2.ten = "bo cuon la lot";
console.log(cacMonAn);
console.log(monSo2);

//khai bao constructor
function MonAn(t, nl, g) {
    this.ten = t;
    this.nguyenlieu = nl;
    this.gia = g;
}
var mon1 = new MonAn('rau xao', 'rau muong', 20);
let mon2 = new MonAn('Thit kho', 'thit bo',30);
console.log(mon1);
console.log(mon2);