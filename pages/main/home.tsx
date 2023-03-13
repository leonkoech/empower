
import Header from "./sections/header/Header";
import HomeSection from "./sections/home/Home";
import Footer from "./sections/footer/Footer";
import { useEffect, useState } from "react";

export default function Main() {
  const [home_height, getHeight] = useState<Promise<Number>>();
  useEffect(()=>{
    console.log(home_height)
  })

  return (
    <main>
      <Header selected_tab="home"></Header>
      <HomeSection sendHeight={getHeight}></HomeSection>
      <Footer></Footer>
    </main>
  );
}
