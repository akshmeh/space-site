import Navbar from "../components/Navbar"
import { CrewSlider } from "../components/CrewSlider"


export default function Destinaiton() {
    
    return <>
    <div className="main main-crew" style={{
    backgroundImage: "url(https://akshmeh.github.io/space-site/assets/crew/background-crew-desktop.jpg)"}}>
   <Navbar></Navbar>
   <CrewSlider></CrewSlider>
   
    </div>
    </>
};
