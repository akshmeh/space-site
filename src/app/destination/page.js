import Navbar from "../components/Navbar"
import { PlanetSlider } from "../components/PlanetSlider"


export default function Destinaiton() {
    
    return <>
    <div className="main main-destination" style={{
    backgroundImage: "url(" + `${require("./assets/destination/background-destination-desktop.jpg")}` + ")"}}>
   <Navbar></Navbar>
   <PlanetSlider/>
   
    </div>
    </>
};
