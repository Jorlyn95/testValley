import productsFunc from "@/app/model/products";
import Slider from "react-slick";

export default  function componentProducts ({isMobile, shortcut, arrayProducts}:productsFunc) {

    const producSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: !isMobile ? 4 : 2,
      slidesToScroll: 1
    };

    return <>
      <div className="pl-2 pr-2 xl:pl-24 xl:pr-24 lg:pr-24 lg:pl-24 md:pr-24 md:pl-24">


        <div className="gap-8 grid xl:grid-cols-10 lg:grid-cols-10 md:grid-cols-5 grid-cols-5">
          {
            shortcut?.map((item: any, index: number) => {
              //console.log(item)
              return <div key={'sho_' + index} className="w-full">
                <img src={item.imageUrl} className=" xl:w-20 lg:w-20 md:w-20 w-12" />
              </div>
            })
          }
        </div>

        {
          arrayProducts?.map((itemGroup: any, indexGroup: number) => {
            return <div key={"group_" + indexGroup} className="flex flex-col sm:flex-row mt-10 xl:mt-20 lg:mt-20 md:mt-20">

              <div className=" text-3xl w-56  flex-1">
                <strong className="w-full">{itemGroup.title}</strong>
                <p className=" text-sm text-gray-400 w-full">{itemGroup.subtitle}</p>
              </div>

              <div className="xl:w-3/4 lg:w-3/4 md:w-3/4  sm:w-full" >
                <Slider {...producSettings}>

                  {
                    itemGroup.items?.map((item: any, index: number) => {
                      return <div key={'prod1_' + index} className="">
                        <img src={item.publication.media[0].uri} className=" w-48" />
                        <p className=" absolute top-36 bg-emerald-700 text-white  m-2 w-20">{item?.publication.tagsOnImage[0]}</p>

                        <p className="text-[13px] md:text-[15px] mt-[4px] leading-[21px] h-[38px] line-clamp-2 break-all">
                          {item.publication.title}
                        </p>
                        <p className="mt-2 text-xl">
                          {
                            item.publication.priceInfo?.couponDiscountRate && <strong className=" text-red-700 mr-2">
                              {item.publication.priceInfo.couponDiscountRate}%</strong>
                          }

                          <strong>
                            {item.publication.priceInfo.price}
                          </strong>
                          <label>원</label>
                        </p>

                        <div className="mt-1 flex">
                          <img src="https://www.testvalley.kr/star/star-darkgray.svg" alt="" />
                          <label>
                            {item.publication?.rating}
                          </label>
                        </div>

                        {
                          item.publication?.preface && <button type="button" className="flex items-center gap-1 py-2.5 px-5 text-sm font-medium text-emerald-700 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-100 ">
                            <img className="w-3" src={item.publication?.prefaceIconUrl} alt="" />
                            {item.publication?.preface}
                          </button>
                        }

                      </div>
                    })
                  }


                </Slider>
              </div>

            </div>
          })
        }


      </div>
    </>
  }