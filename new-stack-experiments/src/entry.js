import 'babel-polyfill'

import {anotherAsync} from './content'
//import tsContent from './tsContent.ts'
 
require('./style.css')
async function run(){    
    return await anotherAsync()
}
run().then((res) => document.write(res))