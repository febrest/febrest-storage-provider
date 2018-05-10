var rollup = require('./rollup');

var { version } = require('./../package');

var buildTypes = ['dev','prod'];

var entry = 'index.js'
var name = 'FebrestStorageProvider';
var output = 'dist'
async function build(){
    await rollup(entry,output,name,version,'dev');
    await rollup(entry,output,name,version,'prod');
}
if(process.argv[2]){
    build();
}
module.exports = build;