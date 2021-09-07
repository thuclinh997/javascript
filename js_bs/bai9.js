//string
let x = "dien thoai iphone android, nokia";
// console.log(x.length);
let vitri = x.indexOf("iphone"); //neu co tu iphone trong x thi tra ve vi tri
// vitri = x.search('iphonr');
//neu k thi tra ve -1
console.log(vitri);
if(vitri != -1){
    console.log("tim thay");
    var moi = x.replace('iphone', "Bphone");
    console.log(moi);
}
else{
    console.log("khong tim thay");
}
//tach mang
let c = "Iphone, android, samsung, nokia, sony";
let mang = c.split(',');
for(var i = 0; i<mang.length;i++){
    console.log(mang[i]);
}