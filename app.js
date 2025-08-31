btns=document.querySelectorAll('button');
inp=document.getElementById('inputbox');

str='';

arr=Array.from(btns);
for(btn of arr){
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        if(e.target.innerText== '='){
            str=eval(str);
            inp.value=str;
            str='';
        }else if(e.target.innerText== 'AC'){
            str ='';
            inp.value=str;
        }else if(e.target.innerText=='DEL'){
            str=str.slice(0,str.length-1);
            inp.value= str;

        }else{
            str+=e.target.innerText;
            inp.value= str;
        }
    })
}