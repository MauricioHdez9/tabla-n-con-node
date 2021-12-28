const argv = require('yargs')
.option('n', {
    alias: 'numero',
    demandOption: true,
    default:'' ,
    describe:'numero de la tabla a multiplicar',
    type:'number'
})
.option('l', {
    alias: 'listado',
    default:false,
    describe:'mostrara la tabla en pantalla',
    type:'boolean'
})
.option('h', {
    alias: 'hasta',
    default:10,
    describe:'hasta donde quiere que se multiplique',
    type:'number'
})
.check((argv,options)=>{
    if(isNaN(argv.n))
    {
        throw 'la base tiene que ser un numero'

    }
    // if(isUndefined(argv.l))
    // {
        // throw 'L tiene que tener un valor '
    // }
    return true
})
.argv;
module.exports=argv; //? esporta la variavle arvg que en este caso es todo el archivo