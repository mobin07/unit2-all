document.querySelector('form').addEventListener('submit',myfunction);
// var todoArr=[]
if(localStorage.getItem('todoData')==null){
    todoArr=[];
}else{
    todoArr=JSON.parse(localStorage.getItem('todoData'));
}
function myfunction(){
    event.preventDefault();
var name=document.querySelector('#name').value;
var qty=document.querySelector('#qty').value;
var priority=document.querySelector('#priority').value;



var todoObj={
    itemName:name,
    itemQty:qty,
    itemPriority:priority

}
// console.log(todoObj);
todoArr.push(todoObj);
localStorage.setItem('todoData',JSON.stringify(todoArr));
// console.log(todoArr);
// var nam=JSON.parse(localStorage.getItem('todoData'));
// console.log(nam);




}