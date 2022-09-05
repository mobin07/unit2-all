var todoItems=JSON.parse(localStorage.getItem('todoData'));
// console.log(todoItems);
// var completed=JSON.parse(localStorage.getItem('completedToDo')) || [];
if(localStorage.getItem('completedToDo')==null){
   var completed=[];
}else{
    completed=JSON.parse(localStorage.getItem('completedToDo'));
}
todoItems.forEach(function(e,i){
    var tr=document.createElement('tr');

    var td1=document.createElement('td');
    td1.innerText=e.itemName;
    
    var td2=document.createElement('td');
    td2.innerText=e.itemQty;

    var td3=document.createElement('td');
    td3.innerText=e.itemPriority;

    var td4=document.createElement('td');
    td4.innerText='Mark as Completed';
    td4.style.cursor='pointer';
    td4.addEventListener('click',function(){
        td4.innerText='Completed'
        td4.style.color='red';
        markCompleteFunction(e);
    });
    tr.append(td1,td2,td3,td4);
    document.querySelector('#body').append(tr);

});
function markCompleteFunction(e){
    completed.push(e);
    localStorage.setItem('completedToDo',JSON.stringify(completed));
}
