/*
    3 Types of variable:
        1.  var
        2.  let
        3.  const
*/


/*    # var   - for older browsers.
            - re-declareable and re-assignable.
            - hoisted but value will be set to 'undefined'.
            - can be declared without initializing.
            - global scopped, functioned scopped.
*/
var string1;
string1 = "hellow Js";
console.log('First declared then initialized.');

var num1 = 10;
num1 = 5;
console.log('Can be re-assigned.');

console.log('Hoisted but value set to undefined.' + hoistedString);
var hoistedString = "declared after printing it.";

{
    var scope = 40
    console.log('block scoped supported.' + scope);
}
function TestVariables(){
    console.log('Different block scoped supported too.' + scope);
}
TestVariables();
console.log('Global scope supported too.' + scope);




/*  # let   - can not be re-declared.
            - can be re-assigned.
            - not hoisted (actually hoisted but give refferenceError).
            - can be declared without initializing.
            - block scopped.
*/
let string1;
string1 = "hellow Js";
console.log('First declared then initialized.');

let num1 = 10;
num1 = 5;
console.log('Can be re-assigned.');

console.log('Hoisted but value set to undefined.' + hoistedString);
let hoistedString = "declared after printing it.";

{
    let scope = 40
    console.log('block scoped supported.' + scope);
}
function TestVariables(){
    console.log('Block scoped not supported.' + scope);
}
TestVariables();
console.log('Global scope not supported.' + scope);




/*    # const     - can not be re-declared.
                - can not be re-assigned.
                - not hoisted (actually hoisted but give refferenceError).
                - can not be declared without assigning value.
                - block scopped.
*/
//const string1;
const string1 = "hellow Js";
console.log('Error.Must be initialized.');

const num1 = 10;
num1 = 5;
console.log('Can not be re-assigned.');

console.log('Hoisted but value set to undefined.' + hoistedString);
const hoistedString = "declared after printing it.";

{
    const scope = 40
    console.log('block scoped supported.' + scope);
}
function TestVariables(){
    console.log('Different block scoped supported too.' + scope);
}
TestVariables();
console.log('Global scope supported too.' + scope);
