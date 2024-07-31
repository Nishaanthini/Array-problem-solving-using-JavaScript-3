//27.comparing two arrays of equality
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const equalValues = (arr1. length === arr2. length) && arr1. every((value, index) => value === arr2[index]);
if (equalValues) {
console. log("Equal");
} 
else {
console. log("Not Equal");
}

//18.Array Intersection
const array1 = [1, 2, 3, 4];
const array2 = [2, 3, 5, 6];
const intersection = array1.filter(value => array2.includes(value));
console.log(intersection); 

//14.Array Merging
const num1= [1,2,3,4];
const num2 = [5,6,7,8];
const all = [...num1, ...num2];
console.log(all);

//17.array deduplication 
var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
function removeDuplicates(data){
    return data.filter((value,index)=>data.indexOf(value)===index);
}
console.log(removeDuplicates(arr));

//26.creating an array of arrays
let arrayOfArrays = [];
arrayOfArrays.push([1, 2, 3]);
arrayOfArrays.push([4, 5, 6]);
arrayOfArrays.push([7, 8, 9]);
console.log(arrayOfArrays);