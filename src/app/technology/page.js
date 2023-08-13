import Navbar from "../components/Navbar"
import { TechnologySlider } from "../components/TechnologySlider"


export default function Destinaiton() {
    
    return <>
    <div className="main main-technology" style={{
    backgroundImage: "url(" + `${require("./assets/technology/background-technology-desktop.jpg")}` + ")"}}>
   <Navbar></Navbar>
   <TechnologySlider></TechnologySlider>
   
    </div>
    </>
};
