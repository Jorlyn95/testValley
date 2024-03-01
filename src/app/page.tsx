"use client"
import getCarousel from "@/services/carouse";
import listShortcut from "@/services/shortcut";
import {  useLayoutEffect, useRef, useState } from "react";
import Slider from 'react-slick';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import listProducts from "@/services/products";
import esDispositivoMovil from "@/services/isMobile";

export default function Home() {

  //use statses
  const [imgCarouse, setImgCarouse] = useState<Array<any>>([])
  const [shortcut, setshortcut] = useState<Array<any>>([])
  const [arrayProducts, setArrayProducts] = useState<Array<any>>([])
  const [isMobile, setisMobile] = useState<boolean>(esDispositivoMovil())
  const [loader, setLoader] = useState<boolean>(true)

  //use ref
  let sliderRef: any = useRef<any>();


  //sections
  const navBar = () => {
    return <>
      <nav className="  border-gray-200 border-b-2 fixed z-50 w-full top-0" style={{ backgroundColor: "rgb(255, 255, 255)" }}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://www.testvalley.kr/logo/logo-new.svg" className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              TestValley
            </span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="sm:block hidden">

            <div className="max-w-md mx-auto">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input placeholder="살까말까 고민된다면 검색해보세요!" type="search" id="default-search" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:border-green-500" required />
              </div>
            </div>

          </div>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">
              <li>
                <img src="https://www.testvalley.kr/common/home-event.svg" className=" float-end" alt="" />
              </li>
              <li className="border bg-black">
                <div className=" h-fu" ></div>
              </li>
              <li className=" text-start">
                <a href="#" className="block py-2 px-3 text-black  rounded md:bg-transparent md:p-0 " aria-current="page">
                  로그인 / 회원가입
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  }

  const slider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return <>
      <div className=" mt-20 mb-20 xl:pl-3 xl:pr-3 lg:pl-3 lg:pr-3">
        <div>
          <Slider ref={slider => {
            sliderRef = (slider as any);
          }}
            {...settings} className=" items-center" >
            {
              imgCarouse.map((item: any, index: number) => {
                return <img key={index} src={isMobile == false ? item.imageDesktop : item.imageMobile} className="w-full p-5 xl:h-96 lg:h-96 md:h-96 items-center" alt="..." />
              })
            }
          </Slider>
        </div>

        <button onClick={() => sliderRef.slickPrev()} type="button" className="absolute -top-28 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button onClick={() => sliderRef.slickNext()} type="button" className="absolute -top-28 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </>
  }

  const listProduc = () => {

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

  //global sections
  function homePage() {
    return <>
      {navBar()}

      {slider()}

      {listProduc()}
    </>
  }

  function loaderPage() {
    return <>
      <div className="flex items-center justify-center mt-20">
        <svg aria-hidden="true" role="status" className="inline w-full h-28 me-3 text-green-600 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB" />
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor" />
        </svg>
      </div>
    </>
  }


  //useefects and use layouts
  useLayoutEffect(() => {

    getCarousel().then((res) => {
      setImgCarouse(res)

    })

    listShortcut().then((res) => {
      setshortcut([...res])
    })

    listProducts().then((res) => {
      setArrayProducts([...res])
      setLoader(false)
    })

    window.addEventListener('resize', function () {
      setLoader(true)
      location.reload();
    });

  }, [])

  return (
    <div className="">

      {
        !loader ? homePage() : loaderPage()
      }

    </div>
  );
}
