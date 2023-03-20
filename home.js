
$("input").keypress(function(event){
    $("h1").text(event.key);
    //console.log(event.key)
});


$("button").click(function()
{
    $("h1").css("color","gold")
    $("h1").fadeToggle();
});

$("h1").click(function () { 
    $("h1").css("color","orange")
   
});

$(".second-Container").before("<button>New Button</button>");

const clr=document.querySelector("#clr")
const h1=document.querySelector('h1')
clr.addEventListener('click',()=>{
    const newColor=randomColor();
    document.querySelector('body').style.backgroundColor=newColor;
    h1.innerText=newColor;

})
const randomColor = ()=>{ 
    const r=Math.floor(Math.random()*255);
    const g=Math.floor(Math.random()*255);
    const b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}

// promise

console.log("hello world!");

var prom = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 3000);
    setTimeout(() => reject("promises error"), 4000);
})

console.log(prom);

prom
.then(function (result) { 
    console.log(result);
    return result*2;
})
.then(function (result) { 
    console.log(result);
    return result*2;
  })
  .then(function (result) { 
    console.log(result);
    return result*2;

})

.then(function (result) { 
console.log(result);
return result*2;

})
.then(function (result) { 
console.log(result);
return result*2;
})

.catch(function (obj) { 
    console.log(obj); 
});
