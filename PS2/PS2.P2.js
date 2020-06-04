function* generator(str){
    let arry = str.split(' ');
    let i=0;
    let array_length = arry.length
    while(i<array_length){
        yield arry[i]
        i++
    }

}


let str = "All I know is something like a bird within her sang"
let gen = generator(str)
for(i=0;i<str.split(" ").length;i++){
    console.log(gen.next().value)
}