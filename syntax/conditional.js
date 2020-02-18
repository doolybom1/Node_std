var args = process.argv;
console.log(args);
console.log(args[2]);

if(args[2] === 'node'){
    console.log('노드js')
}else{
    console.log('java')
}