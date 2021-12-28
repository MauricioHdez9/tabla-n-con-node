
const { isUndefined } = require('util');
const { number, options, boolean } = require('yargs');
const {creararchivotabla} = require('./helpers/multiplicar');//? llama la funcion de multiplicar.js 
const argv = require('./config/yargs'); //?llama los argumentos de yargs.js 





console.log(argv);
console.log('base de yargs',argv.n,'L tiene :',argv.l);







//console.log(process.argv);//?comando para agreagar cosas por terminal --n
//  const [,,arg3 = 'n=5']=process.argv;
//  const [ ,n = 5] = arg3.split('=') ;
//  console.log(n);
 creararchivotabla(argv.n,argv.l,argv.h)
 .then(nombrearchivo =>console.log(nombrearchivo,'creado'))
 .catch(err =>console.log(err));