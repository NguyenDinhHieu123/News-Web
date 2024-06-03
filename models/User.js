'use strict'
class User {
    constructor(firstname,lastname,username,password,pageSize = 5 ,category = "sports"){
        this.firstname = firstname,
        this.lastname =lastname,
        this.username =username,
        this.password = password,
        
        // su dung cho chuc nang so 9
        this.pageSize = pageSize,
        this.category=category
        
    }
}
class Task{
    constructor(task,owner,isDone){
        this.task = task,
        this.owner = owner,
        this.isDone = isDone
    }
}