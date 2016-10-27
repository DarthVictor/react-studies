import 'babel-polyfill'

async function asyncFetch(){
    let t = await window.fetch('https://jsonplaceholder.typicode.com/posts/1') 
    let json = t.json();
    console.log(json)
    return json
}

export async function anotherAsync() {
    let p = await asyncFetch()
    console.log(p)
    return p
} 