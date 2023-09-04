// Do the below programs in arrow functions.

// A) Print odd numbers in an array

var arr1=[1,2,3,4,5,6];
let oddNum = (arr) => {
    let oddNumbers = arr.filter((ele) => ele%2!=0);
    return oddNumbers;
}
console.log(oddNum(arr1));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// B) Convert all the strings to title caps in a string array

var str = ["guvi class","guvi dashboard","guvi task"];

let titleCaps = (arr) => {
    let res = [];
    arr.forEach(ele => {
        var words = ele.split(" ");
        let res_wrd = words.reduce((resWrd , ele) => resWrd + ele.charAt(0).toUpperCase() + ele.slice(1)+" " , "");
        res.push(res_wrd.trimEnd());
        res_wrd="";
    });
    return res;
}
console.log(titleCaps(str));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// C) Sum of all numbers in an array

var arr2 = [1,2,3,4,5];

let addition = (arr) => {
    let res = arr.reduce((sum,ele) => sum + ele , 0);
    // 0 is the initial value of the accumulator 'sum'
    //If the initial value is 1 then sum value starts with value 5 and followed by sum on elements
    return res;
}
console.log(addition(arr2));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// D) Return all the prime numbers in an array

var arr3 = [2,6,3,11,13,16];

let primes = (arr) => {
    var res = arr.filter((ele) =>{
        if(ele<=1){
            return false;
        }

        for(let i=2;i<Math.sqrt(ele);i++){
            if(ele%i === 0){
                return false;
            }
        }
    
        return true;
    });
    return res;
} 
console.log("Primes => " + primes(arr3));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// D) Return all the palindromes in an array

var pali = ["noon" , "charge" , "deified" , "civic" , "animation"];

let palindromes = (arr) => {
    let res = arr.filter((ele) => {
        let rev = ele.split("").reverse().join("");
        if(rev === ele){ return true }
    });
    return res;
}
console.log(palindromes(pali));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~