// code your solution here

function saturdayFun(activity = "roller-skate"){
    return "This Saturday, I want to " + activity + "!";
}

function mondayWork(activity = "go to the office"){
    return "This Monday, I will " + activity +".";
}

function wrapAdjective(someValue = "*"){
    const innerFunction = function (message = "special") {
        return "You are " + someValue + message + someValue + "!";
    };
    return innerFunction;   
}

