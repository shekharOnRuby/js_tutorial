let states = ["Kansas", "Nebraska", 'North Dakota', "South Dakota"]

function imperativeMap(states){
    let urlStates = []
    states.forEach(state => {
        urlStates.push(state.toLowerCase().split(/\s+/).join("-"))
    });
    return urlStates
}

function functionalMap(states){
return states.map((state => state.toLowerCase().split(/\s+/).join('-')))
}


console.log(imperativeMap(states))
console.log(functionalMap(states))