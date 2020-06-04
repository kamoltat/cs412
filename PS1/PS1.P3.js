let bigFunc = (func, str) => func(str)

let returnFrag = (str) => str.split(/(?=c)/)

console.log(`\n answ: ${bigFunc(returnFrag,'supercalifragilisticexpialidocious')}`)

let replaceA = (str) => {

    let originalString =  str
    let modifiedString = str.split('a').join('A')
    let numberReplaced = str.split('a').length - 1
    let length = modifiedString.length
    res = {
        'originalString': originalString,
        'modifiedString': modifiedString,
        'numberReplaced': numberReplaced,
        'length': length

    }
    return res
}

module.exports ={
    bigFunc,
    returnFrag,
    replaceA
}

console.log(bigFunc(replaceA,'supercalifragilisticexpialidocious'))