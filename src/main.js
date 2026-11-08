const { invoke } = window.__TAURI__.core;

const input = document.getElementById("display");
const nums = document.getElementsByClassName("numbers");
const equal = document.getElementById("equal");

for(let i = 0; i< nums.length; i++){
    nums[i].addEventListener("click", function(){
        input.value += nums[i].value;
    })
}
  

document.getElementById("equal").addEventListener("click", function(){
    let calcul = input.value;
    console.log(calcul);
    

    
    try{
        input.value = eval(calcul);
    } catch(error){
       // console.error(error);
        input.value = "Invalid!";
    };


});

document.getElementById("delete").addEventListener("click", function(){
    input.value = "";
});



