import 'whatwg-fetch'
declare var module: { hot: any };
module.hot.accept() 
console.log('TypeScript 2 module')

async function asyncFetch(){
    let t = await fetch('https://jsonplaceholder.typicode.com/posts') 
    let json = t.json();
    return json
}

export async function anotherAsync() : Promise<any>{
    let p = (await asyncFetch()).map((item: any) => item.title)
    return p
} 