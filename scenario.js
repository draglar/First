one=document.getElementById('one')
two=document.getElementById('two')

function loaded() {
    //one.style.visibility='hidden';
    one.style.position='';
    chck=0
}
function one_x(){
   /* for(i=0;i<10;i++){
        if(i==chk){
            i+
        }
    }*/
    one.style.visibility='visible';
    one.style.position='relative';
    one.style.display='block';
    one.style.transition='3s'
    chck=1
    if(chck==1){
        one.style.visibility='none';
      /*  one.style.position='relative';
        one.style.display='block';*/
    }
}
function two_x(){
    two.style.visibility='visible';
    two.style.position='relative';
    two.style.display='block';
    two.style.transition='3s'
    chck=2
}