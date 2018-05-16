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

// console.log(imperativeFilter(states))
// console.log(functionalFilter(states))
// console.log(functionalFilter2(states))
// console.log(functionalIncludes(states))


let a = [1,2,3,4,5,6,7,8,9,10]

function iterativeSum(array){
    let total = 0
    array.forEach(function(n){
        total += n
    })
    return total
}

function functionalSum(array){
    return array.reduce((total,n)=>{ return total += n})
}

// console.log(iterativeSum(a))
// console.log(functionalSum(a))

function imperativeLengths(states){
    let lengths ={}
    states.forEach(function(state){
        lengths[state] = state.length
    })
    return lengths
}

function functionalLengths(states){
    return states.reduce((lengths, state) => {
         lengths[state] = state.length
         return lengths
        },{})
}

function imperativeSumProduct(array){
    let sumProduct = 1
    array.forEach(function(n){
        sumProduct *= n
    })
    return sumProduct
}
function functionalSumProduct(array){
    return array.reduce((sumProduct, n)=> {return sumProduct *= n},1)
}
console.log(imperativeLengths(states))
console.log(functionalLengths(states))
console.log(imperativeSumProduct(a))
console.log(functionalSumProduct(a))