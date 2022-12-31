import styles from "./Header.module.scss";
import Image from "next/image";
import menu from "../../../../public/assets/icons/menu.svg";
import close from "../../../../public/assets/icons/close.svg";
import React, { useState, useRef, useEffect } from "react";
import { home_height } from "../home/Home";
import { about_height } from "../about/About";
import { service_height, service_team_height } from "../services_team/Service";
import { team_height } from "../services_team/Service";
import { enroll_height } from "../enroll/Enroll";
import { contact_height } from "../contact/Contact";
import { footer_height } from "../footer/Footer";

const tabs = [
  "home",
  "about",
  "services",
  "logourl",
  "team",
  "enroll",
  "contact"
];
export var header_height = 0;
const Header = () => {
  let tab_heights = {
    home: { start: 0, end: home_height + header_height },
    about: {
      start: home_height + header_height,
      end: home_height + about_height + header_height
    },
    services: {
      start: home_height + about_height + header_height,
      end: home_height + about_height + header_height + service_height
    },
    team: {
      start: home_height + about_height + header_height + service_height,
      end:
        home_height +
        about_height +
        header_height +
        service_height +
        2 * team_height
    },
    enroll: {
      start:
        home_height +
        about_height +
        header_height +
        service_height +
        2 * team_height,
      end:
        home_height +
        about_height +
        header_height +
        service_team_height +
        enroll_height
    },
    contact: {
      start:
        home_height +
        about_height +
        header_height +
        service_team_height +
        enroll_height,
      end:
        home_height +
        about_height +
        header_height +
        service_team_height +
        enroll_height +
        contact_height +
        footer_height
    }
  };

  const ref = useRef(null);
  useEffect(() => {
    header_height = (ref.current as any).offsetHeight;
  });

  useEffect(() => {
    // clean up code
    window.removeEventListener("scroll", current_tab);
    window.addEventListener("scroll", current_tab, { passive: true });
    return () => window.removeEventListener("scroll", current_tab);
  }, []);

  function current_tab() {
    let current_position = window.pageYOffset;
    console.log(window.pageYOffset);
    for (let [key, value] of Object.entries(tab_heights)) {
      if (current_position >= value.start && current_position < value.end) {
        select_tab(key);
      }
    }
  }

  const [open_state, menu_listener] = useState(false);
  const [selected_tab, select_tab] = useState("home");
  return (
    <div ref={ref} className={styles.header_container}>
      <div className={styles.header_phone}>
        <div className={styles.header_phone_display}>
          <h1>Empower.</h1>
          <button
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
                    className={`${styles.header_buttons} ${
                      selected_tab == tab ? styles.header_buttons_active : ""
                    }`}
                    aria-pressed="false"
                    onClick={() => {
                      window.scrollTo({
                        top: (tab_heights as any)[tab].start,
                        behavior: "smooth"
                      });
                    }}
                  >
                    <p key={index}>{tab}</p>
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
            return <p key={index}>LOGO</p>;
          } else {
            return (
              <button
                className={`${styles.header_buttons} ${
                  selected_tab == tab ? styles.header_buttons_active : ""
                }`}
                aria-pressed="false"
                onClick={() => {
                  window.scrollTo({
                    top: (tab_heights as any)[tab].start,
                    behavior: "smooth"
                  });
                }}
              >
                <span key={index}>{tab}</span>
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};
export default Header;
