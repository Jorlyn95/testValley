import sliderInterface from "@/app/model/slider";
import isMobile from "@/services/isMobile";
import Slider from "react-slick";

export default function  componentSlider ({isMobile,sliderRef, imgCarouse}:sliderInterface) {
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