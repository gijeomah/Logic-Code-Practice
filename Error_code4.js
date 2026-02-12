// Challenge 1 in JS 
let num = prompt("Select a number!");
let new_num = Number(num);  // use num as an error instead of new_num
if (new_num % 2 == 0){ //put the equal sign outside the if statemnet 
    console.log("The number is even!");
    document.write("The numer is even");
}
    else{
        console.log("The number is probably odd!");
        document.write("The number is probably odd!");
    }
//Age verifcation! 
let age = prompt("How old are you??");
let verified_age = Number(age);
if (verified_age >= 18){
    console.log("You're eligible to vote!");
    document.write("You're eligible to vote!");
}
    else{
        console.log("You're not eligible to vote...");
    }
//Check if a number is pos, neg or zero
let value = Number(prompt("pick an number!"));
if (value > 0){
    console.log("This is a posititve number!");
}
    else if (value < 0 && value !=0 ){
        console.log("This is a negative number!");

    }
    else{
        console.log("This number is zero!");
    }
////////////////////////////////////////////////////////////
//Challenge 2:
//Create a for loop to print num (1-10)
for ( let i = 1; i < 11; i++){
    console.log(i);
}
// Do the same thing using a while loop (1-5)
a=0
while (a < 5){
    a++;
    console.log(a);
}
// Create a factorial
let int = Number(prompt("Choose another number!"));
factorial = int 
while (int != 1){
    int -= 1;
    factorial *= int;
    ///CORRECT WAY
}
 console.log(factorial);
 ////////////////////////////////////////////////////////////
 //Challenge 3:
 // function that greets people
 function greets (name){
    console.log("Hello "+ name + " How are you?");
    return ("Hello "+ name + " How are you?");
 }
 greets(prompt("Whats your name?"));
 // Write a function that checks if num is even or odd 
 function even_odd (num){
    if (num % 2 == 0){ 
    console.log("The number is even!");
    document.write("The numer is even");
    }
    else{
        console.log("The number is probably odd!");
        document.write("The number is probably odd!");
    }
 }
even_odd(prompt("Select a number!"));
function vowels (string){
    let v = ["a","i","e","o","u"];
    let counter = 0;
    lst_len = v.length;
    str_len = string.length;
    for (let s=0; s < str_len; s++){
       for (let l=0; l < lst_len; l++){
            if (string[s] == v[l]){
                counter= counter+1;
            }
         } 
    }
    console.log(v);
}
vowels(prompt("Enter a word with vowels!(Lowercase ONLY!)"));
/////////////////////////////////////////////////////////////////
//Challenge 4: 
//Write a program stores list of fruits and prints them
let lst_fruits = [];
let fruit = 0;
let n = Number(prompt("choose a # of items in the list"));
while(fruit < n ){
    lst_fruits.push(prompt("Choose a fruit"));
    console.log(lst_fruits[fruit]);
    fruit+=1;
}
console.log(lst_fruits);
//Write a program that stores students names and grade Loop or no loop?
function student_info (name,grade){
    let my_dict = {'names': "Jessica", 'grades': "A+"};
    my_dict['names']=name;
    my_dict['grades']=grade;
    console.log(my_dict);

}
student_info(prompt("Enter your name"), prompt("Enter a letter grade ONLY"))
// returns index of max in a list
function highest_value (value){
    let max_val = value[0];
    for (val = 0; val<value.length;val++){
        if (max_val < value[val]){
            max_val = value[val]
        }
    }
    console.log(max_val)
}
highest_value([-1,-2,-3,-4])
