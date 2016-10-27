import 'whatwg-fetch'
 

async function asyncFetch(){
    let t = await fetch('https://jsonplaceholder.typicode.com/posts') 
    console.log('TypeScript module')
    let json = t.json();
    return json
}

export async function anotherAsync() : Promise<any>{
    let p = (await asyncFetch()).map((item: any) => item.title)
    return p
} 