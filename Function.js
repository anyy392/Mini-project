// function Avg(a,b,c){
//     let avg=(a+b+c)/3;
//     return avg;
// }




// function table(num){
// num=parseInt(num);
// for(let i=num; i<=num*10;i=i+num){
//     console.log(i);
// }
// }

// table(9);


// function PrintDice(){
//     let rendom=Math.floor(Math.random()*6)+1;
//     console.log(rendom);
// }



// console.log(PrintDice());





// function Sum(a,b){
//     let num1,num2,num3;
//     num1=a;
//     num2=b;
//     num3=num1+num2;
//     console.log(num3);

// }

// console.log(Sum(10,2));







// const max = prompt('enter the max number');
// const random = Math.floor(Math.random() * max) + 1;
// let guess = prompt('guess the number');
// while (true) {
//     if (guess == 'quit') {
//         console.log('quit');
//         break;
//     }
//     else if (guess == random) {
//         console.log("grate",random);
//         break;
//     }
//     else if (guess < random) {
//         guess = prompt(`your guess is too small`);
//     } else {

//         guess = prompt(`your gussing too large`);
//     }
// }



// const random=Math.floor(Math.random()*6)+1;
// console.log('your number is ',random);

// let car={
//     name:"toyota",
//     model:"Inova",
//     color:"white"
// }


// let person={
//     name:"tom",
//     age:40,
//     city:"mumbai"
// }


// function sum(n) {
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//         sum = sum + i;
//         if (i == n) {
//             console.log(`sum from 1 to ${n} is: ${sum}`);
//         }
//     }

// }
// sum(10);

// let str=['hello','anurag'];
// function concat(str){

//     let con='';
//     for(let i=0;i<str.length;i++){
//         con=con+str[i];
//         // console.log(con);
//     }
//     return con;

// // }
// let arr = [1, 2, 6, 8, 90, 5, 6];
// let num = 5;
// function GetLargeNum(arr, num) {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }

// }

// let arr = 'abcdabcd';
// function UniqueWord(arr) {
//     let store = '';
//     for (let i = 0; i < arr.length; i++) {
//         let arr1 = arr[i];
//         if (store.includes(arr1) == false) {
//             store += arr1;
//         }

//     }
//     return store;
// }
// UniqueWord(arr);

// let arr = ['Up', 'maharastra', 'united', ' state of', ' America'];
// function largestName(arr) {
//     let longestName = '';
//     for (let i = 0; i < arr.length; i++) {
//         if (longestName.length < arr[i].length) {
//             longestName = arr[i];
//         }

//     }
//     console.log(longestName);
// }
// largestName(arr);

// function RandomNum(num1,num2){
//     let rand=Math.floor(Math.random()*num1)+num2;
//     return rand;
// }
// RandomNum(10,20);

// let info={
//     name:'anurag',
//     age:20,
//     city:'mumbai',
//     class:'it',
//     hindi:25,
//     math:55,
//     eng:49,
//     phy:94,
//     avg(){
//         console.log((this.hindi+this.math+this.eng+this.phy)/3);
//     }
//}

// const square=n=>(n**2);
// console.log(square(2));
// id1 = setInterval(() => {
//     console.log('hello world')
// }, 2000);
// setTimeout(() => {
//     console.log('stop')
//     clearInterval(id1)
// }, 10000);


// let arr = [1, 2, 3, 4, 5];
// avg=(arr)=>{

//     let avg=0;
// for (let i = 0; i < arr.length; i++) {
//     avg += arr[i];

// }
// return avg
// }

// let n;
// isEven=(n)=>n%2==0;

// let num=[1,2,3,4,5,6,6];
// console.log(num);
// let copy=num.map((ele)=>(ele**2));
// console.log(copy);


// let n=arr.every((ele)=>(ele%10==0));
// console.log(n);

// let arr=[9,8,5,6,3,6,7,9];
// let Finalans=arr.reduce((acc,el)=>{
//     if(acc<el){
//         return acc;
//     }else{
//         return el;
//     }
// });
// console.log(Finalans);

// let a=10;
// function sum(a,b=10){
//     return a+b;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7];
// let Newarr = arr.map(ele => {
//     console.log(ele ** 2);
// });
// let sum = arr.reduce((acc, ele) =>(acc+ele));
// let avg=sum/arr.length;


// let newArr=arr.map((ele)=>(ele+5));
// console.log(newArr);


// let arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z'];
// let NewArr=arr.map((ele)=>(ele.toUpperCase()));
// let arr = [1, 2, 3, 4, 5];
// let doubleAndReturnArg=((arr,...args)=>[...arr,...args.map((ele)=>ele*2)])

// let info={
//     name:'anurag',
//     age:10,
//     class:'IT',
//     id:10,
// }

// let info1={ name:'anuj',
//     age:10,
//     class:'IT',
//     id:10,
// }

// let n = 0;
// function sum(...args) {
//     return args.reduce((min, ele) => {
//         if (min > ele) {
//             return ele;
//         } else {
//             return min;
//         }
//     });
// }

// let arr = [1, 2, 3, 4, 5];
// let doubleAndReturnArgs = (arr, ...args) => {

//     return [...arr, ...args.map((ele) => (ele+2))];

// }

// let obj1={
//     name:'anurag',
//     age:10
// }
// let obj2={
//     name:'ansh',
//     age:20
// }
// let doubleAndReturnArgs=(obj1,obj2)=>({...obj1,...obj2});

// let name=['abc','efg','pqy','xyz'];
// let [name1]=name[0];
// let [name2]=name[1];
// let [...other]=name;


// let input=document.createElement("input");
// let btn=document.createElement("button");
// btn.innerText="click me!!";
// input.innerText="tpye something here";
// document.querySelector('body').append(btn);
// document.querySelector('body').append(input);

