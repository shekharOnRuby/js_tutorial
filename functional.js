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


// console.log(imperativeMap(states))
// console.log(functionalMap(states))
// console.log(returnURL(states))

function imperativeFilter(states){
    let singleWordStates = []
    states.forEach(function(state){
        if (state.split(/\s+/).length === 1){
            singleWordStates.push(state)
        }
    })
    return singleWordStates
}

function functionalFilter(states){
    return states.filter(state => state.split(/\s+/).length ===1)
}

function functionalFilter2(states){
    return states.filter(state => state.split(/\s+/).length ===2)
}

function functionalIncludes(states){
    return states.filter(state => state.toLowerCase().includes("dakota"))
}

console.log(imperativeFilter(states))
console.log(functionalFilter(states))
console.log(functionalFilter2(states))
console.log(functionalIncludes(states))
