'use strict'
if(userCurrent){
// delcare nodes
    const inputTask = document.getElementById("input-task");
    const btnTask = document.getElementById("btn-add");
    const todoList = document.getElementById("todo-list");
   
    // bắt sự kiện vào nút Add
    btnTask.addEventListener("click",function(){
        if(inputTask.value==""){
            alert("xin moi nhap nhiem vu"); 
        }
        else{
            // khai báo obj
            const taskList = new Task(
                inputTask.value,
                userCurrent.username,
                false,
            )
            // thêm task mới vào mảng
                toDoArr.push(taskList);
                // cập nhật dữ liệu xuống storage
                saveToStorage("toDoArr",toDoArr);
                // Hiển thị thông tin tasks
                DisplayTasks();
                inputTask.value = "";
            }
            
        })

//* tham khao
        // hàm bắt sự kiện toggle tasks
        const eventToggleTasks = function(){
        document.querySelectorAll("#todo-list li").forEach(function(liEl){
        // lấy tất cả phần tử li chứa thông tin của task và bát sự kiện vào từng phần tử đó
        liEl.addEventListener("click",function(e){
            // tránh nút delete => không bị chồng sự kiện khi ấn nút delete
            if(e.target !== liEl.children[0]){
                liEl.classList.toggle("checked");
                    // tìm class vừa click vào
                    const todo =toDoArr.find((todoItem) => todoItem.owner === userCurrent.username && todoItem.task === liEl.textContent.slice(0,-1)) //lấy nội dụng  text content chứa task loại bỏ dấu x
                    // console.log(todo);
                    // thay đổi thuộc tính isDone
                    todo.isDone = liEl.classList.contains("checked") ? true : false;
                    // lưu lại vào storage
                    saveToStorage("toDoArr",toDoArr)
            }
        })
        })
        }
        // hàm bắt sự kiện xóa các task
        const eventDeleteTasks = function(){
            // lấy tất cả phần tử nút delete và bắt sự kiện từng nút đó
            document.querySelectorAll("#todo-list .close").forEach(function(closeEl){
                closeEl.addEventListener("click",function(){
                    // xac nhan xoa
                    const isDelete = confirm("Bạn có chắc chắn muốn xóa ?");
                    if(isDelete){
                        // tìm vị trí của task cần xóa
                        const index = toDoArr.findIndex((item) =>item.owner === userCurrent.username &&  item.task === closeEl.parentElement.textContent.slice(0,-1) )   // xác định tên user và task ; xác định tên task so sánh

                        // xóa task khỏi mảng 
                        // console.log(index);
                        toDoArr.splice(index,1);
                        // cập nhận dữ liệu xuống storage
                        saveToStorage("toDoArr",toDoArr);
                        // Hiển thị lại list Todo
                        DisplayTasks();
                    }
        
                })
            })
        }
 //* tham khao

// Hàm hiển thị thông tin task 

    const DisplayTasks = function(){

        let html = "";
        toDoArr.filter((todo) => todo.owner===userCurrent.username).forEach(todo => {
            
            html+=`<li class="${todo.isDone ? "checked" : ""}">${todo.task}<span class="close">×</span></li>`
        });
        
        todoList.innerHTML = html;
    // bắt các sự kiện
    eventToggleTasks();
    eventDeleteTasks();
    }

DisplayTasks();

}
else{
    alert("Xin hãy đăng nhập !");
    window.location.href = '../index.html';
}
