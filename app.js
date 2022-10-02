// 1===============>. Write a ts program to find length of a string
// var a:string="malik"
// console.log(a.length);
// 2===============>. Write a ts program to copy one string to another string
// var a:string="my name is mudusar"
// var b:string="my name is malik"
// console.log(a.replace(a,b));
// 3============>. Write a ts program to concatenate two strings.
// var a:string="malik"
// var b:string="mudusar"
// console.log(a.concat(b));
// 4==========>. Write a ts program to compare two strings
// var a:string="i like pakistan"
// var b:string="i like pakistan"
// console.log(a.localeCompare(b));
// 5================>. Write a ts program to convert lowercase string to uppercase.
// var a:string="mudusar"
// console.log(a.toLocaleUpperCase());
// 6========================>. Write a ts program to convert uppercase string to lowercase.
// var a:string="MUDUSAR"
// console.log(a.toLowerCase());
// 7===================>. Write a ts program to toggle case of each character of a string.
// var a:string="mUdusaR"
// var b:string=""
// for(let i=0;i<a.length;i++){
//     if(a[i]==a[i].toLowerCase()){
//         b+=a[i].toUpperCase()
//     }
//     else if(a[i]==a[i].toUpperCase()){
//         b+=a[i].toLowerCase()
//     }else{
//         console.log("plz enter an alphbet");
//     }
// }
// console.log(b);
// 8================>. Write a ts program to find total number of alphabets, digits or special character in a string
// var a:string="abd231!@#"
// var alphas1="a"
// var alphas2="z"
// var alphabets:number=0
// var digits:number=0
// var special:number=0
// console.log(a);
// for(let i=0;i<a.length;i++){
// if(a.charAt(i)>=alphas1&&a.charAt(i)<=alphas2){
// alphabets+=1
// }else if(a.charAt(i)>="1"&&a.charAt(i)<="9"){
//     digits+=1
// }else{
//     special+=1
// }
// }
// console.log(alphabets,"alphabets",digits,"digits",special,"special character");
// 9=====================>. Write a ts program to count total number of vowels and consonants in a string.
// var a:string="malik"
// var consonants:number=0
// var vowels:number=0
// for(let i=0;i<a.length;i++){
// if(a.charAt(i)=="a"||a.charAt(i)=="i"||a.charAt(i)=="o"||a.charAt(i)=="e"
// ||a.charAt(i)=="u"||a.charAt(i)=="A"||a.charAt(i)=="E"||a.charAt(i)=="I"||a.charAt(i)=="O"||a.charAt(i)=="U"){
//     vowels+=1
// }else if(a.charAt(i)!="a"||a.charAt(i)!="i"||a.charAt(i)!="o"||a.charAt(i)!="e"
// ||a.charAt(i)!="u"||a.charAt(i)!="A"||a.charAt(i)!="E"||a.charAt(i)!="I"||a.charAt(i)!="O"||a.charAt(i)!="U"){
// consonants+=1
// }
// else{
//     console.log("enter an alphabet");
// }
// }
// console.log("consonants :",consonants);
// console.log("vowels :",vowels);
// 10====================>. Write a ts program to count total number of words in a string.
// var a:string="my name is malik mudusar"
// var b=a.split(" ")
// console.log("total words",b.length);
// 11===============>. Write a ts program to find reverse of a string.
// var a:string="abcde"
// var b:string=a.split("").reverse().join("")
// console.log(b);
// 12================>. Write a ts program to check whether a string is palindrome or not
// var a:string= "aaaaac"
// var b=a.split("").reverse().join("")
// if(a==b){
//    console.log("string is palindrome");
// }
// else{
//    console.log("string is not a palindrome");
// }
// 13================>. Write a ts program to reverse order of words in a given string
// var a:string="my name is malik mudusar"
// var b=a.split(" ").reverse().join(" ")
// console.log("reverse order :",b);;
// 14===================>. Write a ts program to find first occurrence of a character in a given string.
// var a:string= "aaaaac"
// console.log("first occourance ",a.indexOf("a"));
// 15===================>. Write a ts program to find last occurrence of a character in a given string.
//  var a:string= "aaaaac"
// console.log("last occourance ",a.lastIndexOf("a"));
// 16=================>. Write a ts program to search all occurrences of a character in given string
//  var a:string= "acacaccacac"
//  var character:string="a"
//  var occourance=""
//  for(let i=0;i<a.length;i++){
// if(a.charAt(i)=="a"){
//     occourance+=i
// }
//  }
//  console.log("occourance of character",occourance);
// 17=================>. Write a ts program to count occurrences of a character in given string.
// var a:string= "acacaccacac"
//  var character:string="a"
//  var occourance=0
//  for(let i=0;i<a.length;i++){
// if(a.charAt(i)=="a"){
//     occourance+=1
// }
//  }
//  console.log("occourance of character",occourance);
// 18==================>. Write a ts program to find highest frequency character in a string.
//////////////////////not complete////////////////
// var a:string= "acacaccacac"
// var b=a.split("")
// function f1(index,element){
// }
// var newArray=b.forEach()
//  var occourance=0
//  for(let i=0;i<a.length;i++){
//      var b=a.charAt(i)
//      console.log(b);
//     }
//  console.log("occourance of character",occourance);
// 21==============>. Write a ts program to remove first occurrence of a character from string
// var a:string="mudusar"
// var b:string=a.replace("u","")
// console.log(b)
// 22===========>. Write a ts program to remove last occurrence of a character from string
// var str = 'hello world';
// var lastIndexOfL = str.lastIndexOf('l');
// console.log(lastIndexOfL); 
// var removeLastL = str.slice(0, lastIndexOfL)+str.slice(lastIndexOfL+1)
// console.log(removeLastL);
// 23================>. Write a ts program to remove all occurrences of a character from string
// var a:any="mudusar"
// var b:string=a.replaceAll("u","")
// console.log(b)
// 24==============>. Write a ts program to remove all repeated characters from a given string
/////////////////////not complete/////////////////////////
// var a:string="mudusar"
// var b:string[]=a.split("")
// console.log(b);
// for(let i=0;i<a.length;i++){
//     console.log(a.charAt(i));
// }
// 25==================>. Write a ts program to replace first occurrence of a character with another in a string
// var a:string="mudusar"
// var b=(a.indexOf("u"));
// console.log(a.replace(a.charAt(b),"a"));
// 26=============>. Write a ts program to replace last occurrence of a character with another in a string.
// var a:string="mudusar arshad"
// var b=a.split("")
// var c=a.lastIndexOf("r")
// var d=b.splice(c,1,"m")
// console.log(b.join(""));
// 27===========>. Write a ts program to replace all occurrences of a character with another in a string
// var a:any="mudussar"
// console.log(a.replaceAll("u","a"));
// 28=============>. Write a ts program to find first occurrence of a word in a given string
// var a:string="i like pakistan you like pakistan and all like pakistan"
// console.log(a.indexOf("pakistan"));
// 29==============>. Write a ts program to find last occurrence of a word in a given string.
// var a:string="i like pakistan you like pakistan and all like pakistan"
// console.log(a.lastIndexOf("like"));
// 30===========>. Write a ts program to search all occurrences of a word in given string.
// var a ="i like pizza and you like pizza and whole world like pizza"
//  var b=a.split(" ")
//  var occourance=""
//  console.log(b);
//  for(let i=0;i<b.length;i++){
//     if(b[i]=="pizza"){
//         occourance+=i+","
//     }
//  }
//  console.log(occourance);
// 31================>. Write a ts program to count occurrences of a word in a given string.
//  var a ="i like pizza and you like pizza and whole world like pizza"
//  var b=a.split(" ")
//  var occourance:number=0
//  console.log(b);
//  for(let i=0;i<b.length;i++){
//     if(b[i]=="pizza"){
//         occourance+=1
//     }
//  }
//  console.log(occourance);
// 32==============>. Write a ts program to remove first occurrence of a word from string.
// var a ="i like pizza and you like pizza and whole world like pizza"
//  var b:any=a.split(" ")
//  var index:number=b.indexOf("pizza")
//  console.log(index);
//  var final=b.slice(0,index) + b.slice(index+1 )
//  console.log(final);
// 33==============>. Write a ts program to remove last occurrence of a word from string.
// var a ="i like pizza and you like pizza and whole world like pizza"
//  var b:any=a.split(" ")
//  var index:number=b.lastIndexOf("pizza")
//  console.log(index);
//  var final=b.slice(0,index) + b.slice(index+1 )
//  console.log(final);
// 34==============>. Write a ts program to remove all occurrence of a word from string.
// var a ="i like pizza and you like pizza and whole world like pizza"
//  var b:any=a.split(" ")
//  var occourance=""
//  for(let i=0;i<b.length;i++){
//      if(b[i]=="pizza"){
//          occourance+=i+","
//         }
//     }
//     console.log(occourance);
//     var result=b.slice(0,2)+b.slice(3,6)+b.slice(7,11)
//     console.log(result);
// 35============>. Write a ts program to trim leading white space characters from given string
// var a:string="       b  a"
// console.log(a.trimStart());
// 36===========>. Write a ts program to trim trailing white space characters from given string
// var a:string="    ba   "
// console.log(a.trimEnd());
// 37=======>. Write a ts program to trim both leading and trailing white space characters from given string.
// var a:string="    ba   "
// console.log(a.trim());
// 38===========>. Write a ts program to remove all extra blank spaces from given string.
// var a:string="    my       name is    mudusar  "
// console.log(a. replace(/\s/g, ''));
//////////////////////////////////////////////////conditional operatores///////////////////////////////////////////
// 1==============>. Write a ts program to find maximum between two numbers using conditional operator.
// var n1:number=3
// var n2:number=2
// var result=n1>n2? "n1 is greater":"n2 is greater"
// console.log(result);
// 2===========>. Write a ts program to find maximum between three numbers using conditional operator
// var n1:number=5
// var n2:number=4
// var n3:number=3
// var result=(n1>n2&&n1>n3)?"n1 is greater":(n2>n1&&n2>n3)?"n2 is greater":"n3 is greater"
// console.log(result);
// 3========>. Write a ts program to check whether a number is even or odd using conditional operator
// var n:number=3
// var result=n%2==0? "number is even":"number is odd"
// console.log(result);
// 4========>. Write a ts program to check whether year is leap year or not using conditional operator
// var num:number=2021
// var result=num%4==0?"year is leap":"year is not a leap"
// console.log(result);
// 5=======>. Write a ts program to check whether character is an alphabet or not using conditional operator.
// var a:string="a"
// var result=(a >="a"  && a <= "z" || a >= "A" && a <= "Z")?"character is an alphabet":"character is not an alphabet"
// console.log(result);
////////////////////////////////////////////////Switch case excersize////////////////////////////////////////////////////
// 1============>. Write a ts program to print day of week name using switch case.
// var day:number=4
// switch(day){
//     case 1:{
//         console.log("monday");
//         break
//     }
//     case 2 :{
//         console.log("tuesday"); 
//         break
//     }
//     case 3:{
//         console.log("wednesday"); 
//         break
//     } case 4:{
//         console.log("thursday"); 
//         break
//     } case 5:{
//         console.log("friday"); 
//         break
//     } case 6 :{
//         console.log("saturday"); 
//         break
//     } case 7:{
//         console.log("sunday"); 
//         break
//     }
// }
// 2=============>. Write a ts program print total number of days in a month using switch case.
// var months:number=12
// switch(months){
//     case 1:{
//         console.log("31 days");
//         break
//     }
//     case 2 :{
//         console.log("29 days"); 
//         break
//     }
//     case 3:{
//         console.log("31 days"); 
//         break
//     } case 4:{
//         console.log("30 days"); 
//         break
//     } case 5:{
//         console.log("31 days"); 
//         break
//     } case 6 :{
//         console.log("30 days"); 
//         break
//     } case 7:{
//         console.log("31 days"); 
//         break
//     }
//     case 8:{
//         console.log("31 days"); 
//         break
//     }
//     case 9:{
//         console.log("30 days"); 
//         break
//     }
//     case 10:{
//         console.log("31 days"); 
//         break
//     }
//     case 11:{
//         console.log("30 days"); 
//         break
//     }
//     case 12:{
//         console.log("31 days"); 
//         break
//     }
// }
// 3==========>. Write a ts program to check whether an alphabet is vowel or consonant using switch case.
// var alphabet:string="b"
// switch(alphabet){
//     case "a":{
//         console.log("this is a vowel");
//         break
//     }
//     case "e" :{
//         console.log("this is a vowel"); 
//         break
//     }
//     case "i":{
//         console.log("this is a vowel"); 
//         break
//     } case "o":{
//         console.log("this is a vowel"); 
//         break
//     } case "u":{
//         console.log("this is a vowel"); 
//         break
//     } case "A" :{
//         console.log("this is a vowel"); 
//         break
//     } case "E":{
//         console.log("this is a vowel"); 
//         break
//     }
//     case "I":{
//         console.log("this is a vowel"); 
//         break
//     } case "O":{
//         console.log("this is a vowel"); 
//         break
//     } case "U":{
//         console.log("this is a vowel"); 
//         break
//     }
//     default:{
//         console.log("this is constant");
//         break
//     }
// }
// 4=============>. Write a ts program to find maximum between two numbers using switch case
// var n1:any=1
// var n2:any=2
// switch(true){
// case n1>n2:{
//     console.log("n1 is max");
//     break
// }
// case n1<n2:{
//     console.log("n2 is max");
//     break 
// }case n1==n2:{
//     console.log("n1 and n2 is equal");
//     break 
// }
// }
// 5==============>. Write a ts program to check whether a number is even or odd using switch case
// var n:any=101
// switch(true){
//     case n%2==0:{
//         console.log("number is even");
//         break
//     }
//     case n%2!=0:{
//         console.log("number is odd");
//         break}
//     default:{
//         console.log("plz enter a number");
//         break
//     }
// }
// 6==========>. Write a ts program to check whether a number is positive, negative or zero using switch case.
// var n:number=1
// switch(true){
//     case n>0:{
//         console.log("number is positive");
//         break
//     }
//     case n<0:{
//         console.log("number is negetive");
//         break
//     } case n==0:{
//         console.log("number is zero");
//         break
//     }
// }
// 7================>. Write a ts program to find roots of a quadratic equation using switch case.
//////////////////////////////////////not complete////////////////////////////////////
// var a : number = 1
// var b : number = 13
// var c : number = 2
// var nominator: number = Math.sqrt (b*b-4*a*c)
// var denominator : number = 2*a
// var result1 : number = (-b + nominator)/denominator
// var result2: number= (-b - nominator)/denominator
// console.log(result1, "root1");
// console.log(result2, "root2");
// 8=========================>. Write a ts program to create Simple Calculator using switch case
// var n1 = 2
// var n2 = 4
// var n3: any = ""
// switch (n3) {
//     case n3 = "+": {
//         console.log(n1 + n2)
//         break
//     }
//     case n3 = "-": {
//         console.log(n1 - n2)
//         break
//     }
//     case n3 = "*": {
//         console.log(n1 * n2)
//         break
//     }
//     case n3 = "/": {
//         console.log(n1 / n2)
//         break
//     }
//     default{
//         console.log("plz enter an assignment operator");
//     }
// }
