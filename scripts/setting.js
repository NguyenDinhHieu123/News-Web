'use strict'
if(userCurrent){
    // declare nodes
    const btnSubmit = document.getElementById("btn-submit");
    const inputCategory = document.getElementById("input-category");
    const inputpageSize = document.getElementById("input-page-size");


    


    btnSubmit.addEventListener("click",function(){
        if(validate()){
            // cap nhat lai userCurrent
            userCurrent.pageSize = Number.parseInt(inputpageSize.value);
            userCurrent.category = inputCategory.value;
            saveToStorage("currentUser",userCurrent);
            // cập nhật lại mảng userArr
            const index = userArr.findIndex((userItem) =>userItem.username ===userCurrent.username);
            userArr[index] =  userCurrent;
            saveToStorage("userArr",userArr);
            //  thông báo
            alert("cài đặt thành công");
            
        }
    })
    // Hien thi gia tri cua userCurrent
    inputpageSize.value = userCurrent.pageSize; 
    inputCategory.value = userCurrent.category;
    // hàm validate dữ liệu người dùng
    function validate(){
        let isValidate = true;
        // kiem tra inputPageSize
        if(Number.isNaN(Number.parseInt(inputpageSize.value))){
            alert("News per page khong hop le ! ");
            isValidate = false;
        }
        return isValidate;
    }
    
}
else{
    alert("Xin hãy đăng nhập !");
    window.location.href = '../index.html';
    
  }

