const arr = ["a","a","a","b","b","c","c","c","d"];
const CallbackFn = (acc, arr) => {
    for(i=0; i<arr.length; i++){
        if (acc[arr[i]]){
            acc[arr[i]] += 1;
        }else{
            acc[arr[i]] = 1;
        }
    }
    return acc;
}
const result = arr.reduce(CallbackFn, {});
console.log(result);