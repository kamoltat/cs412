function* generator1(){
    let a = 0;
    let b = 1;
    while (true) {
      yield a;
      a = b;
      b = a + b;
    }
    
}

function*  generator2(){
    const f = generator1();
    let a = f.next().value
    while(true){
        if(a % 2 == 0){
            yield a
        }
        a = f.next().value
    }   
}

const f = generator2();
for(i=0;i<6;i++){
    console.log(f.next().value)
}
