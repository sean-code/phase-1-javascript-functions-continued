// code your solution here

function saturdayFun(activity1 = "roller-skate"){
    return (`This Saturday, I want to ${activity1}!`)
}
console.log(saturdayFun());
console.log(saturdayFun("bath my dog"));


function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
console.log(mondayWork());

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`;

    }
    
  }