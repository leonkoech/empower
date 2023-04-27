
import Header from "./sections/header/Header";
import HomeSection,{home_height} from "./sections/home/Home";
import Footer from "./sections/footer/Footer";
import { useEffect, useState } from "react";
import About from "./sections/about";
import Service from "./sections/services";
import Treatment from "./sections/treatment";
import Enroll from "./sections/enroll";
import Contact from "./sections/contact";
import Loader from "./sections/loading";

export default function Main() {
  const [home_height, getHomeHeight] = useState<Promise<Number>>();
  const [about_height, getAboutHeight] = useState<Promise<Number>>();
  const [contact_height, getContactHeight] = useState<Promise<Number>>();
  const [treatment_height, getTreatmentHeight] = useState<Promise<Number>>();
  const [services_height, getServicesHeight] = useState<Promise<Number>>();
  const [enroll_height, getEnrollHeight] = useState<Promise<Number>>();
  const [loaded, elementLoaded] = useState(false);
  useEffect(()=>{
    if((!loaded)&&home_height && about_height  &&  contact_height  &&  treatment_height  &&  services_height  && enroll_height){
      elementLoaded(true)
    }
  })

  return (
    <main>
      <Header section_heights={[home_height,about_height,services_height,treatment_height,enroll_height,contact_height]} loader={loaded}></Header>
      <Loader loaded = {loaded}></Loader>
      <HomeSection sendHeight={getHomeHeight}></HomeSection>
      <About sendHeight={getAboutHeight}></About>
      <Service sendHeight={getServicesHeight}></Service>
      <Treatment sendHeight={getTreatmentHeight}></Treatment>
      <Enroll sendHeight={getEnrollHeight}></Enroll>
      <Contact sendHeight={getContactHeight}></Contact>
    </main>
  );
}
