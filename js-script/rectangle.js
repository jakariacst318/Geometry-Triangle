

function calculateRectangleAreaBtn(){
    const rectangleAreaInputWidth = document.getElementById('rectangle-input-width')
    const rectangleAreaInputWidthText = rectangleAreaInputWidth.value;
    const rectangleWidthResult = parseFloat(rectangleAreaInputWidthText)
    rectangleAreaInputWidth.value = '';
    // console.log(rectangleWidthResult)

   const rectangleAreaInputLength = document.getElementById('rectangle-input-length');
    const rectangleAreaInputLengthText = rectangleAreaInputLength.value;
    const rectangleHightResult = parseFloat(rectangleAreaInputLengthText)
    rectangleAreaInputLength.value = '';
    // console.log(rectangleHightResult)

    // calculator 
     const rectangleTotalResult =  rectangleWidthResult * rectangleHightResult ;
    const triangleAreaDisplay = document.getElementById('rectangle-area-display')
    triangleAreaDisplay.innerText = rectangleTotalResult
}


