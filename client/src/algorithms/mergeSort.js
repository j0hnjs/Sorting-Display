export function getMergeSortDisplay(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSort(
    startArr,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSort(auxiliaryArray, startIdx, middleIdx, startArr, animations);
    mergeSort(auxiliaryArray, middleIdx + 1, endIdx, startArr, animations);
    doMerge(startArr, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    startArr,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      
      animations.push([i, j]);
      
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        
        animations.push([k, auxiliaryArray[i]]);
        startArr[k++] = auxiliaryArray[i++];
      } else {
        
        animations.push([k, auxiliaryArray[j]]);
        startArr[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      
      animations.push([i, i]);
      
      animations.push([i, i]);
      
      animations.push([k, auxiliaryArray[i]]);
      startArr[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      
      animations.push([j, j]);
      
      animations.push([j, j]);
      
      animations.push([k, auxiliaryArray[j]]);
      startArr[k++] = auxiliaryArray[j++];
    }
  }