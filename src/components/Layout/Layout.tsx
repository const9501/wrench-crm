import {Link, Outlet} from "react-router-dom";
import styles from "./Layout.module.scss";
import logoIcon from "../../images/ic_logo.svg";
import profileIcon from "../../images/ic_person.svg";
import Navigation from "../Navigation/Navigation";

const Layout = () => {

  return (
    <>

      <header>

        <Link to="/" className={styles.heading}>
          <img src={logoIcon} alt=""/>
          <h1>Wrench CRM</h1>
        </Link>

        <div className={styles.profile}>
          <img src={profileIcon} alt=""/>
          <span>Имя Фамилия</span>
        </div>

      </header>

      <div className={styles.container}>

        <aside>
          <h3>Меню</h3>
          <Navigation/>
        </aside>

        <main>
          <Outlet/>
        </main>

      </div>

    </>
  );
}

export default Layout;