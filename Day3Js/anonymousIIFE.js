// Do the below programs in anonymous function & IIFE

// A) Print odd numbers in an array

var arr1 = [1,2,3,4,5,6,7];
//ananymous function
function oddNumAnm(){
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]%2!=0){
            console.log(arr1[i]);
        }
    }
}
oddNumAnm();

//IIFE
var oddNumIife = function(){
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]%2!=0){
            console.log(arr1[i]);
        }
    }
}
oddNumIife();
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// B) Convert all the strings to title caps in a string array
var str = ["guvi zen","guvi codekata","guvi webkata"];

//ananymous function
function titleCapsAnm(){
    let res = [];
    for(let i=0;i<str.length;i++){
        var words = str[i].split(" ");
        var res_wrd="";
        for(let j=0;j<words.length;j++){
            let wrd  = words[j];
            let convertedWrd = wrd.charAt(0).toUpperCase() + wrd.slice(1)+" ";
            res_wrd+=convertedWrd;
        }
        res.push(res_wrd.trimEnd());
        res_wrd="";
    }
    return (res);
}
console.log(titleCapsAnm());

//IIFE
var titleCapsIife = function(){
    let res = [];
    for(let i=0;i<str.length;i++){
        var words = str[i].split(" ");
        var res_wrd="";
        for(let j=0;j<words.length;j++){
            let wrd  = words[j];
            let convertedWrd = wrd.charAt(0).toUpperCase() + wrd.slice(1)+" ";
            res_wrd+=convertedWrd;
        }
        res.push(res_wrd.trimEnd());
        res_wrd="";
    }
    return (res);
}
console.log(titleCapsIife());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// C) Sum of all numbers in an array

var arr2 = [1,2,3,4,5,6];
//ananymous function

function addAnm(){
    let sum = 0;
    for(let i=0;i<arr2.length;i++){
        sum+=arr2[i];
    }
    return sum;
}
console.log(addAnm());

//IIFE function 

function addIife(){
    let sum = 0;
    for(let i=0;i<arr2.length;i++){
        sum+=arr2[i];
    }
    return sum;
}
console.log(addIife());

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// D) Return all the prime numbers in an array

var arr3 = [2,6,3,11,13,16];

//ananymous function 
var prime_res1 = [];
function findPrimeAnm(arr){
     for(let i=0;i<arr3.length;i++){
        if(isPrimeAnm(arr3[i])){
            prime_res1.push(arr3[i]);
        }
     }
     return prime_res1;
}

function  isPrimeAnm(num){
    if(num<=1){
        return false;
    }

    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i === 0){
            return false;
        }
    }

    return true;
}
console.log(findPrimeAnm(arr3));

//IIFE Function
var prime_res2 = [];
var findPrimeIife = function(arr) {
    for(let i=0;i<arr.length;i++){
        if(isPrimeIife(arr[i])){
            prime_res2.push(arr[i]);
        }
     }
     return prime_res2;
}

var isPrimeIife = function(num) {
    if(num<=1){
        return false;
    }

    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i === 0){
            return false;
        }
    }

    return true; 
}
console.log(findPrimeIife(arr3));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// E) Return all the palindromes in an array

var pali = ["malayalam" , "charge" , "level" , "radar" , "animation"];

//ananymous function 
 function findPalindromAnm(arr){
     let res = []
     for(let i=0;i<arr.length;i++){
         let p = arr[i];
         let rev = p.split("").reverse().join("");
         if(rev === p){
            res.push(p);
         }
     }
     return res;
 }
console.log(findPalindromAnm(pali));

//IIFE function

 var findPalindromIife = function(arr){
    let res = []
     for(let i=0;i<arr.length;i++){
         let p = arr[i];
         let rev = p.split("").reverse().join("");
         if(rev === p){
            res.push(p);
         }
     }
     return res;
 }
console.log(findPalindromIife(pali));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// F) Return median of two sorted arrays of the same size.

var arr4 = [12,56,23,89,34];
var arr5 = [76,32,65,90,47];

//ananymous function
function medianAnm(a1,a2){
   let arr = a1.concat(a2);
   arr = arr.sort((a,b) => a-b);
   let len = arr.length;
   let mid = Math.floor(len/2);
   let med = (len%2==0) ? ((arr[mid-1]+arr[mid])/2) : arr[mid];
   return med;
}
console.log(medianAnm(arr4,arr5));

//IIFE function
var medianIife = function(a1,a2){
    let arr = a1.concat(a2);
    arr = arr.sort((a,b) => a-b);
    let len = arr.length;
    let mid = Math.floor(len/2);
    let med = (len%2==0) ? ((arr[mid-1]+arr[mid])/2) : arr[mid];
    return med;
}
console.log(medianIife(arr4,arr5));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// G) Remove duplicates from an array

var arr6 = [6,4,2,9,4,2,1,3,9];

//ananymous function

function rmvDupAnm(arr){
    let set = new Set();
    for(let i=0;i<arr.length;i++){
        set.add(arr[i]);
    }
    return Array.from(set);
}
console.log(rmvDupAnm(arr6));

//IIFE function

var rmvDupIife = function (arr){
    let set = new Set();
    for(let i=0;i<arr.length;i++){
        set.add(arr[i]);
    }
    return Array.from(set);
}
console.log(rmvDupIife(arr6));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// H) Rotate an array by k times
arr7 = [1,2,3,4,5,6,7];
arr8 = [11,12,13,14,15,16];
k = 2;

//ananymous function
function rotateAnm(arr){
    //rotates in clockwise direction
    for(let i=0;i<k;i++){
        let firstEle = arr.shift();
        arr.push(firstEle);
    }
    return arr;
}
console.log(rotateAnm(arr7));

//IIFE function
var rotateIife = function(arr){
    //rotates in anti-clock wise direction
    for(let i=0;i<k;i++){
        let lastEle = arr.pop();
        arr.unshift(lastEle);
    }
    return arr;
}
console.log(rotateIife(arr8));

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
