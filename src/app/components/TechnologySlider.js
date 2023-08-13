'use client';
import Slider from "react-slick";
import Image from "next/image";
import data from "../data.json";

var settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    vertical:true,
    responsive: [{
      breakpoint: 600,
      settings: {
        vertical:false
      }
    }]
    
  };
var destinationData = data.technology;
export const TechnologySlider = () => {
  return (
   <>
    <Slider {...settings}>
   {
    destinationData.map((item, index)=>{
        return(<>
<div className="flex justify-center  items-center flex-col p-5 text-center lg:p-0 lg:text-left">
   <div className="p-5 lg:p-0 lg:w-3/4 text-xl lg:text-3xl uppercase font-bellarfair"><span className="mr-5 text-gray-400">{`0${index+1}`}</span> SPACE LAUNCH 101</div>
<div className="w-full flex flex-col-reverse lg:flex-row lg:px-40 lg:pt-14 lg:flex">
<div className="lg:w-1/2 flex justify-center lg:items-start flex-col lg:pl-16">
    <h2 className="text-xl lg:text-2xl my-2 lg:mb-4">THE TERMINOLOGY…</h2>
    <h1 className="text-4xl lg:text-6xl mb-2 lg:mb-4">{item.name}</h1>
    <p className="pb-20">{item.description}</p>
</div>
<div className="lg:w-1/2 px-20"><Image src={item.images.portrait} width={300} height={300} alt={item.name} className="w-full"/></div>
</div>
</div>
</>
        )
    })
   }
    
    
    </Slider>
    </> 
  )
}
