
function useConvertTensorClass(val: string, set: number) {
    const set1:string[] = ["downdog", "tree", "warrior1"]

    const arr = val.split(',');
    const numericArr = arr.map(parseFloat);
    const nonZeroCount = numericArr.filter(num => num !== 0).length;
    
    let pred;

    // Extracting Index
    if (nonZeroCount > 1) {
        const min = Math.min(...numericArr.filter(num => num !== 0));
        const minIndex = numericArr.indexOf(min);
        pred = minIndex
    } else if (nonZeroCount === 1) {
        const max = Math.max(...numericArr);
        const maxIndex = numericArr.indexOf(max);
        pred = maxIndex
    } else {
        pred = -1;
    }
    
    
    // Returning Values based on class and index
    if (set === 1){
        return set1[pred]
    }

}

export default useConvertTensorClass