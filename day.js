function dayOfTheWeek(date){
    const daysOfTheWeek = ["Saturday","Sunday","Monday", "Tuesday", "Thursday","Friday"]
    return daysOfTheWeek[date.getDay()]
}

function greeting(date){
    
    alert(`Hello World !!! , Happy ${dayOfTheWeek(date)}.`)
}