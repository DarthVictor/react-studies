import {anotherAsync} from './tsContent.ts'
 
async function run(){    
    return (await anotherAsync()).map((title, id) => (id+1) + '. ' + title)
}
run().then((res) => {
    document.querySelector('.main-list').innerHTML =  res.join('<br>');
    console.log(res)
    require('./bootstrap.css')
})