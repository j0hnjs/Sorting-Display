export function getSelectionSortDisplay (array) {
    const animations = [];
    for (let i =0; i < array.length; i++) {
        // curr idx min
        let minIdx = i;
        let temporary = array[i];
        for (let j = i + 1; j < array.length; j++) {
            // color
            animations.push([minIdx, j]);
            // change back
            animations.push([minIdx, j]);

            animations.push("noSwap");

            if (array[j] < array[minIdx]) {
                // if j is smaller than minIdx, update minIdx
                minIdx = j;
            }
        }

        // colors
        animations.push([i, minIdx]);
        // change
        animations.push([i, minIdx]);
        // swap
        animations.push([i, array[minIdx], minIdx, array[i]]);
        array[i] = array[minIdx];
        array[minIdx] = temporary;
    }
    return animations;
}