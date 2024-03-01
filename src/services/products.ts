export default async function listProducts():Promise<any> {
    return new Promise((resolve, reject)=>{
        fetch("http://api.testvalley.kr/collections")
        .then(res=>res.json())
        .then((res)=>{

            let {items}=res

            let arrayData=items?.filter((item:any, index:number)=>{
                return item.type=="SINGE" || String(item.viewType).toLowerCase().includes("tile")
            })

            resolve(arrayData)
        })
        .catch((error)=>{
            reject([])
        })
    })

}