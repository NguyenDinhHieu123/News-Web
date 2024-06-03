'use strict'
// declare nodes
const btnLogout = document.getElementById("btn-logout");
const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomeMessage = document.getElementById("welcome-message");


displayHome();
// Function hiển thị nội dung theo trường hợp người dùng đã đăng nhập hay chưa
function displayHome(){
    // nếu đã đăng nhập ẩn login modal và hiển thị main content
    if(userCurrent){
        loginModal.style.display = "none";
        mainContent.style.display = " block";
        // them thong bao welcome message
        welcomeMessage.textContent = ` Welcome    ${userCurrent.lastname} !` ;
    }
    // ngược lại
    else{
        loginModal.style.display = "block";
        mainContent.style.display = " none";
    }
};

// bắt sự kiện vào nút logout
btnLogout.addEventListener("click",function(){
    const isLogout = confirm("Ban chac chan muon Logout ?");
    if(isLogout){
        // Gan gia tri usserActive ve null de bieu hien khong co ai dang nhap
        userCurrent = null;
        // cap nhat gia tri moi xuong local storage
        saveToStorage("currentUser",userCurrent);
        // hien thi lai displayHome
        displayHome();
    }
})