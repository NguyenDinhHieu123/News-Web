'use strict'

// declare node
const btnLogin = document.getElementById('btn-submit');
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");

inputPassword.value = " ";
inputUsername.value = " ";
// function
function validate(){
    let isValidate = true;
    // kiểm tra trường username bị trống
    if(inputUsername.value === "" ){
        alert("Please fill in username");
        isValidate =false;
    }
        // kiểm tra trường password bị trống
    if(inputPassword.value === ""){
        alert("please fill in password");
        isValidate =false;
    }
    return isValidate ; 
}
// Bắt sự kiện vào nút Login
btnLogin.addEventListener('click',function(){
    // kiểm tra dữ liệu đúng hay chưa
    const isValidate = validate();
    if(isValidate){
        // tìm kiếm thông tin trong userArr xem thông tin người dùng nhập vào có đúng hay không
    const currentUser = userArr.find((user) => user.username === inputUsername.value && user.password === inputPassword.value);

    if(currentUser){
        // khai báo đăng nhập thành công
        alert("Đăng nhập thành công");
        // lưu thông tin user hiện tại đang đăng nhập trên trang
        saveToStorage("currentUser",currentUser);   
        // chuyển hướng từ trang chủ
        window.location.href = '../index.html';
    }
    else{
        alert("Your information is wrong ,Please refill in this form")
    }
}
})


