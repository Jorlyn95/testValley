export default function getCarousel(mobile:boolean=false):Promise<Array<any>>{
    let arrayCarouse:Array<any>=[]
    return new Promise((resolve, reject)=>{
        fetch("http://api.testvalley.kr/banners")
        .then(res=>res.json())
        .then((res)=>{
            
            let {items, totalCount }=res

            items?.map((item:any, index:number)=>{
                
                let {title, imageUrl, endDate, media}=item

                if(endDate!=null) return

                let deskIMG=media.filter((item:any)=>{
                    return item.deviceType=="DESKTOP"
                })[0]

                let mobileIMG=media.filter((item:any)=>{
                    return item.deviceType=="MOBILE"
                })[0]
                
                if(!mobile && deskIMG?.uri==undefined) return

                arrayCarouse.push({
                    title:title,
                    imageDesktop:deskIMG?.uri ? deskIMG?.uri : "",
                    imageMobile:mobileIMG?.uri ? mobileIMG?.uri : "",
                    selected:index==0 ? true : false
                })
            })

            resolve(arrayCarouse)
        })
        .catch((error)=>{
            console.log(error)
            reject(arrayCarouse)
        })
    })
}