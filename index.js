// Write your solution here!
 let cats = ["Milo", "Otis", "Garfield"]

 function destructivelyAppendCat(name){
    return cats.push(name)
    

 }
//  console.log(destructivelyAppendCat('raphl'))

 function destructivelyPrependCat(name){
    return cats.unshift(name)
 }
//  console.log (destructivelyPrependCat('BOB'))

 function destructivelyRemoveLastCat(){
    return cats.pop(2)
 }

 function destructivelyRemoveFirstCat(){
    return cats.shift(0)
 }

 function appendCat(name){
    let newArray = [...cats, name]
    return newArray
 }

 function prependCat(name){
    let newArray = [name, ...cats]
    return newArray
 }

 function removeLastCat(){
    let newArray = cats.slice()
    newArray.pop()
    return newArray

 }

 function removeFirstCat(){
    let newArray = cats.slice()
    newArray.shift()
    return newArray

 }