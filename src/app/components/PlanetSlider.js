'use client';
import Slider from "react-slick";
import Image from "next/image";
import data from "../data.json";

var settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable:true,
    arrows:true,
    
  };
var destinationData = data.destinations;
export const PlanetSlider = () => {
  return (
   <>
    <Slider {...settings}>
   {
    destinationData.map((item, index)=>{
        return(<>
<div className="flex justify-center  items-center flex-col p-5 text-center lg:p-0 lg:text-left">
   <div className="p-5 lg:p-0 lg:w-3/4 text-xl lg:text-3xl uppercase font-bellarfair"><span className="mr-5 text-gray-400">{`0${index+1}`}</span> Pick your destination</div>
<div className="w-full flex flex-col lg:flex-row lg:px-40 lg:flex">
<div className="p-10 lg:w-1/2 lg:px-20 lg:py-10"><Image src={item.images.webp} width={500} height={500} alt="moon" className="w-full h-auto"/></div>
<div className="lg:w-1/2">
    <h1 className="text-6xl lg:text-9xl mb-4">{item.name}</h1>
    <p className="pb-5 lg:pb-20 border-b-2">{item.description}</p>
    <div className="flex mt-4">

    <div className="w-1/2">
        <h5>AVG. DISTANCE</h5>
        <h3>{item.distance}</h3>
    </div>
    <div  className="w-1/2">
        <h5>Est. travel time</h5>
        <h3>{item.travel}</h3>
    </div>
    </div>
</div>
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
