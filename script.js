const content1=document.getElementById('content1');
const content2=document.getElementById('content2');
if(content1){
    content1.addEventListener('click',()=>{
        content2.classList.add('active');
    })
}