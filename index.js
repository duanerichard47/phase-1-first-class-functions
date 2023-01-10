function receivesAFunction(func) {

    return func();
}
receivesAFunction(function(){return "this ouyput is from call back function";}) 


/* function returnsANamedFunction() {
    let funcVar = function fn(){
        return "This is from inner function"; }
    return funcVar;
}
returnsANamedFunction() */


function returnsANamedFunction() {
    
    return  (function fn(){return "This is from inner function"; });
}
returnsANamedFunction()







function returnsAnAnonymousFunction(){
    
    return (function(){ return "This is from inner function"; }) ;

}
 
returnsAnAnonymousFunction()