'use strict'
//Lưu dữ liệu vào storage
const getFromStorage = function (key, defaultVal) {
  return JSON.parse(localStorage.getItem(key)) ?? defaultVal;
};

const saveToStorage = function (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

// Lưu trữ mảng user

  const userData = getFromStorage("userArr") || [];  //Mảng chứa object

const userArr = userData.map((user) =>  parseUser(user));  //Mảng chứa các user(sau khi chuyen du lieu tu object ve class instant)


// hàm để chuyển từ JS Object sang Class Instance
  function parseUser(userData) {
    const user = new User(
      userData.firstname,
       userData.lastname, 
       userData.username, 
       userData.password,
       userData.pageSize,
       userData.category
      )

    return user
}


  
// khai báo userCurrent
let userCurrent = getFromStorage("currentUser") ? parseUser(getFromStorage("currentUser")) : null;




// Lưu trữ todoArr từ local storage
const todos = getFromStorage("toDoArr") || [];
// chuyển đổi dữ liệu về dạng class instance
const toDoArr = todos.map((todo) =>parseTask(todo) );





function parseTask(toDoData) {
  const task = new Task(toDoData.task, toDoData.owner, toDoData.isDone)

  return task
}