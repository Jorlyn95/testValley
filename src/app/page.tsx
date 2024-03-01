"use client"
import getCarousel from "@/services/carouse";
import listShortcut from "@/services/shortcut";
import { useLayoutEffect, useRef, useState } from "react";
import Slider from 'react-slick';


import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import listProducts from "@/services/products";
import esDispositivoMovil from "@/services/isMobile";
import navBar from "@/components/navbar";
import componentProducts from "@/components/products";
import componentSlider from "@/components/slider";

export default function Home() {

  //use statses
  const [imgCarouse, setImgCarouse] = useState<Array<any>>([])
  const [shortcut, setshortcut] = useState<Array<any>>([])
  const [arrayProducts, setArrayProducts] = useState<Array<any>>([])
  const [isMobile, setisMobile] = useState<boolean>(esDispositivoMovil())
  const [loader, setLoader] = useState<boolean>(true)

  //use ref
  let sliderRef: any = useRef<any>();


  //global sections
  function homePage() {
    return <>
      {
        navBar()
      }

      {componentSlider({
        isMobile,
        sliderRef,
        imgCarouse
      })}

      {componentProducts({
        isMobile,
        arrayProducts,
        shortcut
      })}
    </>
  }

  function loaderPage() {
    return <>
      <div className="flex items-center justify-center mt-20 h-44 w-full">
        <span className="loader"></span>
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
