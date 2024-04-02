function calculateRhombusAreaBtn(){

    const parameterRhombus = getInputValueById('rhombus-input-width');
    const hightParameter = getInputValueById('rhombus-input-hight');
    
    
    const rhombusTotalResult = parameterRhombus * hightParameter;

    setInnerTextById('rhombus-area-display' , rhombusTotalResult);

   /* 
    const rhombusAreaDisplay = document.getElementById('rhombus-area-display')
    rhombusAreaDisplay.innerText = rhombusTotalResult 
    atar porbote funtion us kora
    */
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    console.log(inputValueText);

    inputField.value = '';

    const inputValue = parseFloat(inputValueText) ;
    return inputValue;
}

//  innerText
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    const aa = document.getElementById(elementId)
    aa.innerText = area;
}