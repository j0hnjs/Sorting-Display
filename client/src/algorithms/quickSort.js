export function getQuickSortDisplay(array) {
  const animations = []
      // a function for swapping 2 elements
      function switchElem(arr, i1, i2) {
        const temp = arr[i2]
        // change colors
        animations.push([i1,i2])
        // revert colors
        animations.push([i1,i2])
        // swap the numbers
        animations.push([i1,arr[i2],i2,arr[i1]])
        arr[i2] = arr[i1]
        arr[i1] = temp
    }
    // base case
    if (array.length < 2) {
        return array
    }
    const pivotIdx = 0
    switchElem(array, pivotIdx, 0)
    let i = 1
    for (let j = 1; j < array.length; j++) {
        //console.log(`iteration: ${j}`)
        if (array[j] < array[0]) {
            //console.log(array[j])
            switchElem(array, i, j)
            i++
        }
        else {
          // change colors
          animations.push([i,j])
          // revert colors
          animations.push([i,j])
          //no swap yet
          animations.push("noSwap")
        }
    }
    switchElem(array, 0, i-1)
    const leftArray = array.slice(0, i-1)
    const rightArray = array.slice(i, array.length)
    // recursively apply the same to left and right subarrays and merge
    const auxiliaryArray = array.slice()
    QuickSort(leftArray, animations, auxiliaryArray, 0)
    QuickSort(rightArray, animations, auxiliaryArray, i)
    return animations
}

function QuickSort(mainArray, animations, auxArray, startIdx) {
    // base case
    if (mainArray.length < 2) {
      return
    }
    function changeAni(arr, i1, i2, auxArr, Idx1, Idx2) {
      // change colors
      animations.push([Idx1,Idx2])
      // revert colors
      animations.push([Idx1,Idx2])
      // swap the numbers
      animations.push([Idx1,auxArr[Idx2],Idx2,auxArr[Idx1]])
      switchElem(arr, i1, i2)
      switchElem(auxArr, Idx1, Idx2)
  }
  function switchElem(arr, i1, i2) {
    const temp = arr[i2]
    arr[i2] = arr[i1]
    arr[i1] = temp
  }
    const pivotIdx = 0
    changeAni(mainArray, pivotIdx, 0, auxArray, startIdx, startIdx)
    let i = 1
    let iTrack = startIdx + 1
    let jTrack = startIdx + 1
    for (let j = 1; j < mainArray.length; j++) {
        if (mainArray[j] < mainArray[0]) {
            //console.log(array[j])
            changeAni(mainArray, i, j, auxArray, iTrack, jTrack)
            i++
            iTrack++
            jTrack++
        }
        else {
          // change colors
          animations.push([iTrack,jTrack])
          // revert colors
          animations.push([iTrack,jTrack])
          //no swap yet
          animations.push("noSwap")
          jTrack++
        }
    }
    changeAni(mainArray, 0, i-1, auxArray, startIdx, iTrack-1)
    const leftArray = mainArray.slice(0, i-1)
    const rightArray = mainArray.slice(i, mainArray.length)

    QuickSort(leftArray, animations, auxArray, startIdx)
    QuickSort(rightArray, animations, auxArray, iTrack)

}