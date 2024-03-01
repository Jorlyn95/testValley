export default async function listShortcut():Promise<any> {
    let arrayShortcut:Array<any>=[]
    return new Promise((resolve, reject)=>{
        fetch("http://api.testvalley.kr/main-shortcut/all")
        .then(res=>res.json())
        .then((res)=>{

            resolve(res)
        })
        .catch((error)=>{
            reject([])
        })
    })

}