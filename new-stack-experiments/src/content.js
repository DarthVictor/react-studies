async function asyncFetch(){
    let t = await window.fetch('https://jsonplaceholder.typicode.com/posts') 
    let json = t.json();
    return json
}

export async function anotherAsync() {
    let p = (await asyncFetch()).map((item) => item.title)
    return p
} 