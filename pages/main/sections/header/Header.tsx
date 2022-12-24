import  styles from "./Header.module.scss";
const tabs = [
  "home",
  "about",
  "services",
  "logourl",
  "team",
  "enroll",
  "contact"
];
const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_phone}>
        <div className={styles.header_phone_display}>
          <h1>LOGO</h1>
          <button>Menu</button>
        </div>
        <div className={styles.header_phone_expanded}>
          <div>
            <button>Menu</button>
          </div>
          <div className={styles.header_phone_expanded_tabs}>
            {tabs.map((tab: string, index: number) => {
              if (index !== 3) {
                return <span key={index}>{tab}</span>;
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
            return <p key={index}>{tab}</p>;
          }
        })}
      </div>
    </div>
  );
};
export default Header;
