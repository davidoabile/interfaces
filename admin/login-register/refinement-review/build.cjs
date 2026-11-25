const path=require('node:path');
const {render,emit}=require('../native-mockups-v2/build.cjs');
async function build(){const e=render(1,'ios','light',{id:'phone',w:393,h:852});e.svg=e.svg.replaceAll('../../../../samples/','../samples/');await emit(e,path.join(__dirname,'01-login-light-ios-v8'),'light');console.log('Updated login review with approved spacing and restored DNA.');}
build().catch(e=>{console.error(e.stack);process.exitCode=1});
