const btnNumCalc = document.querySelectorAll('.numbers__btn');
const inputCalc = document.querySelector('.calc__inputCalc');
// const result = document.querySelector('.calc__result');
const result = form.elements['result'];
const clear = document.querySelector('.delete');
const step = document.querySelector('.step');
const equally = document.querySelector('.equally');

doNumber(btnNumCalc);
delNum(clear);
delStep(step);

function doNumber(num){
 for(let i = 0; i<num.length; i++){
    num[i].addEventListener('click', ()=>{
        inputEnter(result.value = result.value + num[i].value);
    });
}
}

function inputEnter(num){
    if(num.length>=19){
        let delStepInput = result.value;
        result.value = delStepInput.substring(0, 19);
        alert('Не более 19 символов!');
    }
    let a = eval(num);
    equally.addEventListener('click', ()=>{
        console.log(a);
        if(a == 'Infinity'){
            inputCalc.textContent = "На 0 делить нельзя!";
            result.value = '';
        }
        else{
            inputCalc.textContent = (Math.floor(a * 100) / 100);
        }
        let text = inputCalc.textContent;
        if(text.length >=19){
            inputCalc.textContent = text.substr(0, 15);
        }
    });
}

function delNum(del){
    del.addEventListener('click', ()=>{
        inputCalc.textContent = '';
        result.value = '';
    });
}

function delStep(stepDel){
    stepDel.addEventListener('click', ()=>{
        let delStepInput = result.value;
        result.value = delStepInput.substring(0, delStepInput.length-1);

    });
}