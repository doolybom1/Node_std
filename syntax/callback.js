
// 자바스크립트에서는 함수가 값이다
var a = function(){
    console.log('안녕');
}

function slowfunc(callback){
    callback();
}

slowfunc(a);  