const fs =require('fs') ;
const { argv } = require('process');
const colors = require('colors');
//--forma de hacer esta cosa una promesa 
// return new Promise((resolve,reject)=> {

//     let salida='';
//     console.clear()
//     for (let index = 1; index <=10; index++) {
//          total=n*index;
//          salida += `${n} X ${index} = ${n*index}\n`;
         
//      }
//      console.log(salida);
//      fs.writeFileSync(`tabla-${n}.txt`,salida) 
//      resolve('tabla.txt  creada');

// })
const creararchivotabla=async(n,l = false,h=10)=>
{
    try 
    {
        let salida='',consola='';
    console.clear()
    for (let index = 1; index <= h; index++) {
        total=n*index;
        salida += `${n} X ${index} ${'='.grey} ${n*index}\n`.bgBlue;
        consola += `${n} X ${index} ${'='} ${n*index}\n`;
    } 
    console.log('el argumento l es '.red,l,''.green);
    if (l === true)
    {
        console.log(consola);
    }
    
    fs.writeFileSync(`./salida/tabla-${n}.txt`,consola) 
    return 'tabla.txt  creada'; 
        
    } catch (err) {
        throw err;
    }
 

};
module.exports={
    creararchivotabla
}