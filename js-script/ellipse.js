function calculateEllipseAreaBtn(){
    const parameterPentagon = getInputValueById('ellipse-input-width')
    const parameterEllipseHight = getInputValueById('ellipse-input-hight')

    const ellipseTotalResult = 3.14 * parameterPentagon * parameterEllipseHight;

    setInnerTextById('ellipse-area-display' , ellipseTotalResult);
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
 
