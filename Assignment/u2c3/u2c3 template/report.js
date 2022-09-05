// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks
document.querySelector('form').addEventListener('submit',createTable);
function createTable(){
    event.preventDefault();
    var tr=document.createElement('tr');

    var td1=document.createElement('td');
    var img=document.createElement('image');
    var x=document.querySelector('#image').value;
    img.setAttribute('src','x');
    td1.append(img);

    var td2=document.createElement('td');
    td2.innerText=document.querySelector('#name').value;

    var td3=document.createElement('td');
    td3.innerText=document.querySelector('#batch').value;

    var td4=document.createElement('td');
    td4.innerText=document.querySelector('#dsa').value;

    var td5=document.createElement('td');
    td5.innerText=document.querySelector('#cs').value;

    var td6=document.createElement('td');
    td6.innerText=document.querySelector('#coding').value;
    // console.log(td1,td2,td3,td4,td5,td6);

    // td7=document.createElement('td');
    // var sum=eval(td4.innerText+td5.innerText+td6.innerText);
    // Number(sum);

    // console.log(sum+2);
    var dsa_marks=Number(td4.innerText);
    var skill_marks=Number(td5.innerText);
    var code_marks=Number(td6.innerText);
    var sum=dsa_marks+skill_marks+code_marks;
    var per=(sum/30)*100;
    per=Math.floor(per);
    
    var td7=document.createElement('td');
    td7.innerText=per;

    var td8=document.createElement('td');

    if(per>=50){
      td8.innerText='Regular';
      td8.setAttribute('id','green');
    }else{
        td8.innerText='Async';
        td8.setAttribute('id','red')
    }


    

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector('tbody').append(tr);
}
