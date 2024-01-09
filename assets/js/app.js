const btn = document.querySelector("button");
const inp = document.querySelector("input");
const div = document.querySelector("div");
console.log(btn);

btn.addEventListener("click",()=> {
    
div.innerHTML = div.innerHTML + "<p>" + inp.value + "</p>";
});