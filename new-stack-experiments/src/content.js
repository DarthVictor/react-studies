async function asyncFetch(){
    let t = await window.fetch('https://jsonplaceholder.typicode.com/posts') 
    console.log('ES2017 module')
    let json = t.json();
    return json
}

export async function anotherAsync() {
    let p = (await asyncFetch()).map((item) => item.title)
    return p
} 