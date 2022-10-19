import Footer from "../components/Footer"
import HomeCard from "../components/HomeCard"
import NavBar from "../components/NavBar"
import Slider from "../components/Slider"
export default function Home(){
  return(<div>
    <NavBar></NavBar>
    <Slider/>
    <HomeCard/>
    <HomeCard/>
    <HomeCard/>
    <Footer/>
  </div>) 
  
}