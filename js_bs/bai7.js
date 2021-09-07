// vong lap for in
let hocVien = {
    ten: "linh",
    tuoi: 24,
    diemToan: 9,
    diemLy: 8,
    diemHoa: 10,
    chieuCao: "165cm"
};
// console.log(hocVien.ten);
var x;
for(x in hocVien){
    console.log(hocVien[x]);
}