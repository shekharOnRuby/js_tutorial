let states = ["Kansas", "Nebraska", 'North Dakota', "South Dakota"]
function urlify(string){
    return string.toLowerCase().split(/\s+/).join('-')
}

function returnURL(states){
    return  states.map(state => "http://example.com/"+ urlify(state))
}
function imperativeMap(states){
    let urlStates = []
    states.forEach(state => {
        urlStates.push(urlify(state))
    });
    return urlStates
}

function functionalMap(states){
return states.map(state => urlify(state))
}


console.log(imperativeMap(states))
console.log(functionalMap(states))
console.log(returnURL(states))