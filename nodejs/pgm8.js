buf=new Buffer.from('I am Pavya from TN')
//syntax:Buffer.alloc(size,fill,encoding);
//output:default all value 00
console.log(buf);
console.log(buf.toString())
buf.write('Namakkal',5)
console.log(buf.toString())
