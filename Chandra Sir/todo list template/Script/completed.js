var completedArr=JSON.parse(localStorage.getItem('completedToDo'));

completedArr.forEach(function(e,i){
    var tr=document.createElement('tr');

    var td1=document.createElement('td');
    td1.innerText=e.itemName;
    
    var td2=document.createElement('td');
    td2.innerText=e.itemQty;

    var td3=document.createElement('td');
    td3.innerText=e.itemPriority;
    tr.append(td1,td2,td3);
    document.querySelector('#body').append(tr);

});
