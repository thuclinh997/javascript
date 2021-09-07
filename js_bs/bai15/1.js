//tao mang du lieu
let mangdl = [{
        id: 1,
        anh: "https://baoquocte.vn/stores/news_dataimages/dieulinh/012020/29/15/nhung-buc-anh-dep-tuyet-voi-ve-tinh-ban.jpg",
        ten: "Ho Thi Thao",
        noidungcm: "Nguồn tin cho biết ngày 9/9, một triệu liều vaccine VeroCell do hãng dược Sinopharm sản xuất đã được cơ quan chuyên môn của Bộ Y tế cấp cho Hà Nội."
    },
    {
        id: 2,
        anh: "https://d25tv1xepz39hi.cloudfront.net/2016-01-31/files/1045.jpg",
        ten: "Cao Thuc Linh",
        noidungcm: "Nguồn tin cho biết ngày 9/9, một triệu liều vaccine VeroCell do hãng dược Sinopharm sản xuất đã được cơ quan chuyên môn của Bộ Y tế cấp cho Hà Nội."
    }
];

// console.log(mangdl[0]['noidungcm']);
for (var i = 0; i < mangdl.length; i++) {
    let noidung1khoi = `<div class="kcm" id="kcm-${mangdl[i].id}">
                            <img width="50" src="${mangdl[i].anh}" alt="">
                            <b>${mangdl[i].ten}</b> <span>${mangdl[i].noidungcm}</span>
                        </div>`;
    console.log(noidung1khoi);
}