const btnNumCalc=document.querySelectorAll(".numbers__btn"),inputCalc=document.querySelector(".calc__inputCalc"),result=form.elements.result,clear=document.querySelector(".delete"),step=document.querySelector(".step"),equally=document.querySelector(".equally");function doNumber(e){for(let t=0;t<e.length;t++)e[t].addEventListener("click",()=>{inputEnter(result.value=result.value+e[t].value)})}function inputEnter(num){if(num.length>=19){let e=result.value;result.value=e.substring(0,19),alert("Не более 19 символов!")}let a=eval(num);equally.addEventListener("click",()=>{console.log(a),"Infinity"==a?(inputCalc.textContent="На 0 делить нельзя!",result.value=""):inputCalc.textContent=Math.floor(100*a)/100;let e=inputCalc.textContent;e.length>=19&&(inputCalc.textContent=e.substr(0,15))})}function delNum(e){e.addEventListener("click",()=>{inputCalc.textContent="",result.value=""})}function delStep(e){e.addEventListener("click",()=>{let e=result.value;result.value=e.substring(0,e.length-1)})}doNumber(btnNumCalc),delNum(clear),delStep(step);