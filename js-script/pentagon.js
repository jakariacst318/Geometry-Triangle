function calculatePentagonAreaBtn(){
    const parameterPentagon = getInputValueById('pentagon-input-width')
    const parameterPentagonHight = getInputValueById('pentagon-input-hight')

    const pentagonTotalResult = 3.14 * parameterPentagon * parameterPentagonHight;

    setInnerTextById('pentagon-area-display' , pentagonTotalResult);
}


function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    console.log(inputValueText);

    inputField.value = '';

    const inputValue = parseFloat(inputValueText) ;
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    const aa = document.getElementById(elementId)
    aa.innerText = area;
}
 
