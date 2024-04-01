function calculateTriangleAreaBtn() {
    const triangleAreaInputBase = document.getElementById('triangle-input-base')
    // console.log(triangleAreaInputBase)
    // const triangleAreaInputBaseText = typeof triangleAreaInputBase.value;
    const triangleAreaInputBaseText = triangleAreaInputBase.value;
    // console.log(triangleAreaInputBaseText)
    const baseResult = parseFloat(triangleAreaInputBaseText).toFixed(2)
    // console.log(baseResult)
    triangleAreaInputBase.value = '';

    const triangleAreaInputHight = document.getElementById('triangle-input-hight')
    const triangleAreaInputHightText = triangleAreaInputHight.value;
    const hightResult = parseFloat(triangleAreaInputHightText).toFixed(2)
    // console.log(hightResult)

    //   calculator
    const triangleTotalResult = 0.5 * baseResult * hightResult
    // console.log('area ',area)
    triangleAreaInputHight.value = '';


    const triangleAreaDisplay = document.getElementById('triangle-area-display')
    triangleAreaDisplay.innerText = triangleTotalResult


}