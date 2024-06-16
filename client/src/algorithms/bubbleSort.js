export function getBubbleSortDisplay(array) {
    const animations = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            // change colors with animations
            animations.push([j, j + 1]);
            // change back
            animations.push([j, j + 1]);

            if (array[j] > array[j + 1]) {
                let temporary = array[j];
                animations.push([j, array[j + 1], j + 1, array[j]]);
                array[j] = array[j + 1];
                array[j + 1] = temporary;
            }
            else {
                animations.push("noSwap");
            }
        }
    }
    return animations;
}