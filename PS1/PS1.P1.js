
const sortString = myString => [... myString.replace(/[^A-Za-z]/g, "")].sort().join('')

console.log(`answ: ${sortString('supercalifragilisticexpialidocious')}`)
module.exports ={
    sortString
}