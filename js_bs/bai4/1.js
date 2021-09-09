// opject
let dongho = {
    hangsx: "casio",
    mau: "den",
    gia: 5000,
    gioiTinh: "nam",
    hienThiNgay: function () {
        console.log("hom nay la ngay 08/09/2021")
    }
};
// console.log(dongho.hangsx);
// dongho.hienThiNgay();
let hocVien = {
    ten: "Linh",
    ho: "Cao",
    namSinh: 1997,
    chieuCao: 165,
    canNang: 56,
    tiendaydu: function () {
        return this.ho + " " + this.ten
    },
    danhGia: function () {
        if (this.chieuCao / this.canNang < 3) {
            return "dep trai";
        }
        return "hoi gay";
    }
}
console.log("ten: " + hocVien.tiendaydu());
console.log("nam sinh: " + hocVien.namSinh);
console.log("danh gia: " + hocVien.danhGia());