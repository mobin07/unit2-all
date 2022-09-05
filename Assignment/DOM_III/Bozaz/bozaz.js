document.querySelector('form').addEventListener('submit',addfunction);
function addfunction(){
    event.preventDefault();
    var product=document.querySelector('#category').value;
    var pTitle=document.querySelector('#name').value;
    var pPrice=document.querySelector('#price').value;

   var tr= document.createElement('tr');

   var td1=document.createElement('td');
   td1.innerText=product;

   var td2=document.createElement('td');
   td2.innerText=pTitle;
   
   var td3=document.createElement('td');
   td3.innerText=pPrice;

   tr.append(td1,td2,td3);
   document.querySelector('tbody').append(tr);

}