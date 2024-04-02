

function calculateParallelogramAreaBtn(){
    const parallelogramAreaInputWidth = document.getElementById('parallelogram-input-width')
    const parallelogramAreaInputWidthText = parallelogramAreaInputWidth.value;
    const parallelogramWidthResult = parseFloat(parallelogramAreaInputWidthText)
    parallelogramAreaInputWidth.value = '';
    // console.log(rectangleWidthResult)

   const parallelogramAreaInputLength = document.getElementById('parallelogram-input-length');
    const parallelogramAreaInputLengthText = parallelogramAreaInputLength.value;
    const parallelogramHightResult = parseFloat(parallelogramAreaInputLengthText)
    parallelogramAreaInputLength.value = '';
    // console.log(rectangleHightResult)

    // calculator 
     const parallelogramTotalResult =  parallelogramWidthResult * parallelogramHightResult ;
     
    const parallelogramAreaDisplay = document.getElementById('parallelogram-area-display')
    parallelogramAreaDisplay.innerText = parallelogramTotalResult
}


