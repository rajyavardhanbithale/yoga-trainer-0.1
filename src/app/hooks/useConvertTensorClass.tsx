
function useConvertTensorClass(val: string, set: number) {
    const threshold:number = 0.80

    const set1: Array<string>  = ["downdog", "tree", "warrior1"]

    const arr = val.split(',')
    const numericArr = arr.map(parseFloat);
    const nonZeroCount = numericArr.filter(num => num !== 0).length;
    
    let pred:number

    console.log(nonZeroCount)
    
    // Extracting Index
    if (nonZeroCount == 2) {
        // const min = Math.min(...numericArr.filter(num => num !== 0));
        // const minIndex = numericArr.indexOf(min);
        // pred =  minIndex 
        pred =  -1
    } else if (nonZeroCount === 1) {
        const max = Math.max(...numericArr)
        const maxIndex = numericArr.indexOf(max)

        pred = threshold <= max ? maxIndex : -1
    } else {
        pred = -1;
    }
    
    
    // Returning Values based on class and index
    if (set === 1){
        return set1[pred]
    }

}

export default useConvertTensorClass