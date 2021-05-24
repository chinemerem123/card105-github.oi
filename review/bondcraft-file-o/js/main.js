let wel=$(".welcome-page");
let main=$(".main-page");
//context load
setInterval(()=>{
wel.fadeOut();
main.fadeIn();

},500);

let font=document.querySelectorAll(".c1");
for(let fontIndex=0; fontIndex < font.length; fontIndex++){
   font[fontIndex].addEventListener("click",()=>{
        let ff=  font[fontIndex].value;
     //   document.querySelector(".font").style.fontFamily=ff;
   
    })
}

let btn=document.querySelectorAll(".Btns");
for(let btnSize=0; btnSize < btn.length; btnSize++){
    btn[btnSize].addEventListener("click",()=>{
       document.querySelector(".size").innerHTML=btn[btnSize].value;
    })
    btn[btnSize].addEventListener("focus",()=>{
        btn[btnSize].style.border="3px solid rgb(192, 28, 28)";
        btn[btnSize].style.boxShadow="5px 5px 10px rgb(241, 121, 121)";
    })
    btn[btnSize].addEventListener("blur",()=>{
        btn[btnSize].style.border="1px solid black";
        btn[btnSize].style.boxShadow="none";
    })
   
}

let colorPads=document.querySelectorAll(".bcolor");
for(let colorPad=0; colorPad<colorPads.length; colorPad++){
    colorPads[colorPad].addEventListener("click",()=>{
        let colour=colorPads[colorPad].value;
        document.querySelector("#color-fill").style.backgroundColor=colour;
        document.querySelector(".size").style.color=colour;
        document.querySelector(".font").style.color=colour;
        //mobile view-----------------------------------
        document.querySelector(".md-font").style.color=colour;
        document.querySelector(".md-size").style.color=colour;
        document.querySelector("#md-color-fill").style.backgroundColor=colour;
    })

    colorPads[colorPad].addEventListener("focus",()=>{
        colorPads[colorPad].style.border="3px solid rgb(192, 28, 28)";
    })
    colorPads[colorPad].addEventListener("blur",()=>{
        colorPads[colorPad].style.border="1px solid black";
    })
}

let close=document.querySelector(".md-close");
close.addEventListener("click",()=>{
    document.querySelector("#md-section").fadeOut();
    document.querySelector(".md-head").fadeOut();
})


//mobile view js code down here--------------
let mdSize=document.querySelectorAll(".md-Btns");
for(let mdIndex=0; mdIndex<mdSize.length;mdIndex++){
    mdSize[mdIndex].addEventListener("click",function(){
        document.querySelector(".md-size").innerHTML=mdSize[mdIndex].value;
    })

    mdSize[mdIndex].addEventListener("focus",()=>{
        mdSize[mdIndex].style.border="3px solid rgb(192, 28, 28)";
        mdSize[mdIndex].style.boxShadow="5px 5px 10px rgb(241, 121, 121)";
    })

    mdSize[mdIndex].addEventListener("blur",()=>{
        mdSize[mdIndex].style.border="1px solid black";
        mdSize[mdIndex].style.boxShadow="none";
    })
}



let show=document.querySelector(".show-text");
let hide=document.querySelector(".hide-text");
let bar=document.querySelector(".side-bar");
let empy=document.querySelector("#empy");

show.addEventListener("click",()=>{
empy.style.display="none";
bar.style.display="block";
})

hide.addEventListener("click",()=>{
    empy.style.display="block";
    bar.style.display="none";
    })

