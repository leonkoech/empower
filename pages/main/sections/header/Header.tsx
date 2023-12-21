import styles from "./Header.module.scss";
import Image from "next/image";
import { images } from "../../../../public/shared/modules/images";
import React, { useState, useRef, useEffect } from "react";
// import { animateScrollTo } from "../../../../public/shared/services/animate";

const tabs = [
  "about",
  "treatment",
  "services",
  "logourl",
  "insurance",
  "admissions",
  "contact"
];

interface TabRefs {
  home: any;
  about: any;
  treatment: any;
  services: any;
  logourl: any;
  housing: any;
  insurance: any;
  admissions: any;
  contact: any;
}


type props = {
  tab_refs: any,
  // section_heights: any[],
  loader: any
}
interface tab_values {
  "from": number,
  "to": number
}
interface tabs {
  [key: string]: tab_values;
}
export var header_height = 0;

const Header = ({tab_refs, loader}:props) => {
  const ref = useRef(null);

  const [open_state, menu_listener] = useState(false);
  const [focused_tab, focus_listener ] = useState('')
  const scrollToRef = (myRef:any) => {
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
  };

 useEffect(()=>{
  if(loader){
    console.log(tab_refs)
  }
 })

 
  // useEffect(()=>{
  //   let head_height = 0
  //   if (typeof window !== 'undefined') {
  //   window.scrollTo(0,0)
  //   focus_listener("home")
  //   console.log(focused_tab)
  //   }
  
  //   if(loader){
  //     if(!load_data){
  //       const new_values = {
  //       "home": {"from": head_height , "to": head_height+section_heights[0]},
  //       "about": {"from": head_height+section_heights[0], "to": head_height+section_heights[0]+section_heights[1]}, 
  //       "services": {"from": head_height+section_heights[0]+section_heights[1], "to": head_height+section_heights[0]+section_heights[1]+section_heights[2]},
  //       "treatment": {"from": head_height+section_heights[0]+section_heights[1]+section_heights[2], "to": head_height+section_heights[0]+section_heights[1]+section_heights[2]+section_heights[3]},
  //       "admissions": {"from": head_height+section_heights[0]+section_heights[1]+section_heights[2]+section_heights[3], "to": head_height+section_heights[0]+section_heights[1]+section_heights[2]+section_heights[3]+section_heights[4]},
  //       "contact": {"from": head_height+section_heights[0]+section_heights[1]+section_heights[2]+section_heights[3]+section_heights[4], "to": head_height+section_heights[0]+section_heights[1]+section_heights[2]+section_heights[3]+section_heights[4]+section_heights[5]},
  //       }
  //       select_tab(new_values)
  //       load_listener(true)
  //       handleScroll(selected_tab_height)
  //     }   
  //   }
  // },[loader,selected_tab_height])

  
  // function handleScroll(selected_tab_height: tabs) {
  //   if(loader){
  //     for(let [tab_name, tab_size] of Object.entries(selected_tab_height)){
  //       if (typeof window !== 'undefined') {
  //         let current_location = window.scrollY
  //         if(current_location>=tab_size.from && current_location<=tab_size.to ){
  //           // console.log(current_location)
  //           focus_listener(tab_name)
  //         }
  //       }}
  //   }

  // }

  // useEffect(() => {
    
  //   window.addEventListener('scroll', ()=>handleScroll(selected_tab_height));

  //   // Remove event listener on unmount
  //   return () => {
  //     window.removeEventListener('scroll', ()=>handleScroll(selected_tab_height));
  //   };
  // }, [focused_tab])
  return (
    <div ref={ref} className={styles.header_container}>
      <div className={styles.header_phone}>
        <div className={styles.header_phone_display}>
        <Image
            key={"logo"}
            src={images.wordLogo}
            alt="Empower Recovery Center"
            aria-label="Empower Recovery Center"
            onClick={() => {
              scrollToRef(tab_refs["home"])
            }}
          />
          <button
            aria-label="open menu"
            type="button"
            onClick={() => {
              menu_listener(true);
            }}
          >
            <Image
              src={images.menu}
              alt="open menu"
              className={styles.header_menu_icon}
            />
          </button>
        </div>
        <div
          className={`${styles.header_phone_expanded} ${
            open_state
              ? styles.header_phone_expanded_opened
              : styles.header_phone_expanded_closed
          }`}
        >
          <div className={`${styles.header_phone_expanded_controls}`}>
            <button
              aria-label="close menu"
              tabIndex={-1}
              type="button"
              onClick={() => {
                menu_listener(false);
              }}
            >
              <Image
                src={images.close}
                alt="close menu"
                className={styles.header_menu_icon}
              />
            </button>
          </div>
          <div className={styles.header_phone_expanded_tabs}>
            {tabs.map((tab: any, index: number) => {
              if (index !== Math.floor(tabs.length/2)) {
                return (
                  <button
                    tabIndex={-1}
                    aria-label={tab}
                    type="button"
                    aria-pressed="false"
                    key={index}
                    className={`${styles.header_buttons} ${
                      focused_tab == tab ? styles.header_buttons_active : ""
                    }`}
                    
                    onClick={() => {
                      scrollToRef(tab_refs[tab])
                      menu_listener(false);
                    }}
                  >
                    <p>{tab}</p>
                  </button>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className={styles.header_tablet}>
        {tabs.map((tab: string, index: number) => {
          if (index === Math.floor(tabs.length/2)) {
            return <Image
            key={index}
            src={images.logo}
            alt="Empower Recovery Center"
            aria-label="Empower Recovery Center"
            className={styles.header_logo}
            onClick={() => {
              scrollToRef(tab_refs["home"])
            }}
          />
          } else {
            return (
              <button
                tabIndex={1}
                aria-label={tab}
                type="button"
                key={index}
                className={`${styles.header_buttons} ${
                  focused_tab == tab ? styles.header_buttons_active : ""
                }`}
                onClick={() => {
                  scrollToRef(tab_refs[tab])
                }}
              >
                <span>{tab}</span>
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Header;
