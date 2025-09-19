// bakground colour chang in button thorugh
let modeBtn=document.querySelector("#mode")
let currmode="light";
modeBtn.addEventListener("click",()=>{
 if (currmode === "light"){
    currmode="dark";
    document.getElementsByClassName("admin-page").style.backgroundColor="white";
}else{
      currmode="light"
      document.getElementsByClassName("admin-page").style.backgroundColor="black";
}
  console.log(currmode)
});