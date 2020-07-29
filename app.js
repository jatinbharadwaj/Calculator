window.onload=function(){
    let anim = document.getElementsByClassName("anim-container")[0];
    const inp = document.getElementsByTagName('input')[0]
    const btn = document.getElementsByClassName("btn");
    const equal = document.getElementsByClassName('equal')[0];
    let val="";
    let animText="";
    function animate(animText){
        anim.innerText=animText;
        anim.classList.add('animation');
        setTimeout(() => {
            anim.innerText="";
            anim.classList.remove("animation");
        }, 1000);
    }

    for(let i=0;i<btn.length;i++){
        btn[i].addEventListener('click',function(){
            text = btn[i].innerText;
            animText = text
            console.log(text);
            if(text == "A/C"){
                inp.value="";
                val="";
            }
            else if(text=="="){
                console.log(val);
                val = val.replace(/cos/g,"Math.cos");
                val = val.replace(/sin/g,"Math.sin");
                val = val.replace(/√/g,"Math.sqrt");
                console.log(val);
            
                inp.value = eval(val);
                text = "";
                val=inp.value;
                animText=val;
            
            }
            else{
                val+=text;
                inp.value = val;
              
               
            }
            animate(animText);
        });
    }
}