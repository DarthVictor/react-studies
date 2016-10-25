import 'whatwg-fetch'

export default async function(){
    return await window.fetch('http://www.google.ru',{mode: 'no-cors'}) 
}