'use strict'
// declare nodes
const inputFirstName = document.getElementById('input-firstname');
const inputLastName = document.getElementById('input-lastname');
const inputUsername = document.getElementById('input-username');
const inputPassword = document.getElementById('input-password');
const inputConfirmPassword = document.getElementById('input-password-confirm');

const btnSubmit = document.getElementById('btn-submit');





// bat su kien vao nut Submit
btnSubmit.addEventListener('click',function(){
    const user = new User(
        inputFirstName.value,
        inputLastName.value,
        inputUsername.value,
        inputPassword.value

    );
    if(validate(user)){
        userArr.push(user);
        saveToStorage("userArr",userArr);
        alert("Dang ki thanh cong");
        window.location.href = '../pages/login.html';
    }    
})

// Function
// validate data nhap vao form
// Kiểm tra các điều kiện để form là hợp lệ
// Hàm trả về true nếu hợp lệ và false nếu không
function validate(user){
    let isValidate = true ;
    // 1.Không có trường nào bị bỏ trông
    if(user.firstname === " " || user.lastname === " " || user.username === " " || user.password === " " ){
        alert("Please fill in this form");
        isValidate =false;
    }
    // 2. Kiểm tra xem username có đã tồn tại hay không 
    for(let i = 0;i < userArr.length;i++){
        if(userArr[i].username === user.username){
            alert('This username is existed');
            isValidate =false;
            break;
        }
    }
    // 3.Trường nhập lại mật khẩu bị trống
    if(inputConfirmPassword.value === " "){
        alert("Please confirm your password");
        isValidate = false;
    }
    //4. Kiểm tra nếu mật khẩu và nhập lại mật khẩu không khớp
    if(user.password !== inputConfirmPassword.value){
        alert("Confirm Password is not valid");
        isValidate =false;
    }
    // 5.Mật khẩu phải dài hơn 8 kí tự
    if(user.password.length <= 8){
        alert("Password length must be longer ")
        isValidate =false;
    }
    return isValidate;
}