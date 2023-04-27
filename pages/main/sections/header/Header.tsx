import styles from "./Header.module.scss";
import Image from "next/image";
import menu from "../../../../public/assets/icons/menu.svg";
import logo from "../../../../public/assets/images/logo.png";
import close from "../../../../public/assets/icons/close.svg";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { resolve } from "path";


const tabs = [
  "home",
  "about",
  "services",
  "logourl",
  "treatment",
  "enroll",
  "contact"
];
type props = {
  section_heights: any[],
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

const Header = ({section_heights, loader}:props) => {
  const router = useRouter()

  const ref = useRef(null);

  const [open_state, menu_listener] = useState(false);
  const [load_data, load_listener] = useState(false);
  const [selected_tab_height, select_tab] = useState({
    "home":{"from": 0, "to": 0},
  "about": {"from": 0, "to": 0},
  "services":{"from": 0, "to": 0},
  "treatment":{"from": 0, "to": 0},
  "enroll": {"from": 0, "to": 0},
  "contact": {"from": 0, "to": 0},
} as tabs)

 
  useEffect(()=>{
    let head_height = 0
    if(loader){
      if(!load_data){
        const new_values = {
        "home": {"from": head_height , "to": head_height+section_heights[0]},
        "about": {"from": head_height+section_heights[0], "to": head_height+section_heights[0]+section_heights[1]}, 
        "services": {"from": head_height+section_heights[0]+section_heights[1], "to": head_height+section_heights[0]+section_heights[1]+section_heights[2]},
        "treatment": {"from": head_height+section_heights[0]+section_heights[1]+section_heights[2], "to": head_height+section_heights[0]+section_heights[1]+section_heights[2]+section_heights[3]},
        "enroll": {"from": head_height+section_heights[0]+section_heights[1]+section_heights[2]+section_heights[3], "to": head_height+section_heights[0]+section_heights[1]+section_heights[2]+section_heights[3]+section_heights[4]},
        "contact": {"from": head_height+section_heights[0]+section_heights[1]+section_heights[2]+section_heights[3]+section_heights[4], "to": head_height+section_heights[0]+section_heights[1]+section_heights[2]+section_heights[3]+section_heights[4]+section_heights[5]},
        }
        select_tab(new_values)
        load_listener(true)
      }   
    }
    console.log(selected_tab_height)
  },[loader,selected_tab_height])

  function animateScrollTo(targetPosition: number, duration: number): void {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();
  
    function ease(t: number): number {
      // Easing function, e.g. easeInOutCubic
      return t < 0.5
        ? 4 * t * t * t
        : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
  
    function step(currentTime: number): void {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easedProgress = ease(progress);
      const newPosition = startPosition + distance * easedProgress;
      window.scrollTo(0, newPosition);
      if (timeElapsed < duration) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }
  return (
    <div ref={ref} className={styles.header_container}>
      <div className={styles.header_phone}>
        <div className={styles.header_phone_display}>
          <h1>Empower.</h1>
          <button
            aria-label="open menu"
            type="button"
            onClick={() => {
              menu_listener(true);
            }}
          >
            <Image
              src={menu}
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
                src={close}
                alt="close menu"
                className={styles.header_menu_icon}
              />
            </button>
          </div>
          <div className={styles.header_phone_expanded_tabs}>
            {tabs.map((tab: any, index: number) => {
              if (index !== 3) {
                // if (window.scrollY > (tab_heights as any)[tab]) {
                // }
                return (
                  <button
                    tabIndex={-1}
                    aria-label={tab}
                    type="button"
                    aria-pressed="false"
                    key={index}
                    // className={`${styles.header_buttons} ${
                    //   selected_tab == tab ? styles.header_buttons_active : ""
                    // }`}
                    
                    onClick={() => {
                      // tab == "home"?router.push("/"):router.push(tab)
                      // window.scrollTo(selected_tab_height[tab])
                      // console.log(selected_tab_height.[tab])
                      if (tab in selected_tab_height) {
                        const value = selected_tab_height[tab]["from"];
                        console.log(value)
                        animateScrollTo(value,1000)
                        // window.scrollTo(0, value)
                        // Scroll.an
                      }
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
          if (index === 3) {
            return <Image
            key={index}
            src={logo}
            alt="Empower Recovery Center"
            aria-label="Empower Recovery Center"
            className={styles.header_logo}
            onClick={() => {
              animateScrollTo(0,1000)
            }}
          />
          
          // <p >LOGO</p>;
          } else {
            return (
              <button
                tabIndex={1}
                aria-label={tab}
                type="button"
                key={index}
                // className={`${styles.header_buttons} ${
                //   selected_tab == tab ? styles.header_buttons_active : ""
                // }`}
                onClick={() => {
                  if (tab in selected_tab_height) {
                    const value = selected_tab_height[tab]["from"];
                    console.log(value)
                    animateScrollTo(value,1000)
                    // window.scrollTo(0, value)
                    // Scroll.an
                  }
                  // console.log(tab)
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
