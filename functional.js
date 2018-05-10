let states = ["Kansas", "Nebraska", 'North Dakota', "South Dakota"]

function imperativeMap(states){
    let urlStates = []
    states.forEach(state => {
        urlStates.push(state.toLowerCase().split(/\s+/).join("-"))
    });
    return urlStates
}

console.log(imperativeMap(states))