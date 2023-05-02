
import Header from "./sections/header/Header";
import HomeSection,{home_height} from "./sections/home/Home";
import Footer from "./sections/footer/Footer";
import { useEffect, useRef, useState } from "react";
import About from "./sections/about";
import Service from "./sections/services";
import Treatment from "./sections/treatment";
import Contact from "./sections/contact";
import Loader from "./sections/loading";
import Housing from "./sections/housing";
import Insurance from "./sections/insurance/insurance";
import Admissions from "./sections/admissions";

export default function Main() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const treatmentRef = useRef(null);
  const housingRef = useRef(null);
  const insuranceRef = useRef(null);
  const admissionsRef = useRef(null);
  const contactRef = useRef(null);
  const [loaded, elementLoaded] = useState(false);
  useEffect(()=>{
    if((!loaded)&&homeRef && aboutRef  &&  serviceRef  &&  treatmentRef  &&  housingRef  && insuranceRef && admissionsRef && contactRef){
      elementLoaded(true)
    }
  },[loaded])

  return (
    <main>
      <Header 
      tab_refs={{"home":homeRef,"about":aboutRef,"services":serviceRef,"treatment":treatmentRef,"housing":housingRef,"insurance":insuranceRef,"admissions":admissionsRef,"contact":contactRef, 'logourl':undefined}} 
      loader={loaded}
      ></Header>
      <Loader loaded = {loaded}></Loader>
      <HomeSection  ref={homeRef}></HomeSection>
      <About  ref={aboutRef}></About>
      <Service ref={serviceRef}></Service>
      <Treatment  ref={treatmentRef}></Treatment>
      <Housing ref={housingRef}></Housing>
      <Insurance ref={insuranceRef}></Insurance>
      <Admissions ref={admissionsRef}></Admissions>
      <Contact  ref={contactRef}></Contact>
    </main>
  );
}
