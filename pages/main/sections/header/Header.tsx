import styles from "./Header.module.scss";
import Image from "next/image";
import menu from "../../../../public/assets/icons/menu.svg";
import logo from "../../../../public/assets/images/logo.png"
import close from "../../../../public/assets/icons/close.svg";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

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
  selected_tab: string
}
export var header_height = 0;

const Header = ({selected_tab}:props) => {
  const router = useRouter()

  const ref = useRef(null);

  const [open_state, menu_listener] = useState(false);

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
            {tabs.map((tab: string, index: number) => {
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
                    className={`${styles.header_buttons} ${
                      selected_tab == tab ? styles.header_buttons_active : ""
                    }`}
                    
                    onClick={() => {
                      // console.group(tab_heights)
                      // window.scrollTo({
                      //   top: (tab_heights as any)[tab].start,
                      //   behavior: "smooth"
                      // });
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
            // TODO:
            return <Image
            key={index}
            src={logo}
            alt="home"
            className={styles.header_logo}
          />
          
          // <p >LOGO</p>;
          } else {
            return (
              <button
                tabIndex={1}
                aria-label={tab}
                type="button"
                key={index}
                className={`${styles.header_buttons} ${
                  selected_tab == tab ? styles.header_buttons_active : ""
                }`}
                onClick={() => {
                  tab == "home"?router.push("/"):router.push(tab) 
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
