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
<div className="flex justify-center  items-center flex-col">
   <div className="w-3/4 text-3xl"><span className="mr-5">{`0${index+1}`}</span> Pick your destination</div>
<div className="w-full flex px-40">
<div className="w-1/2 px-20 py-10"><Image src={item.images.webp} width={500} height={500} alt="moon" className="w-full h-auto"/></div>
<div className="w-1/2">
    <h1 className="text-9xl mb-4">{item.name}</h1>
    <p className="pb-20 border-b-2">{item.description}</p>
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
