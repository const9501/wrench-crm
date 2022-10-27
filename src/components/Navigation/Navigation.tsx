import {NavLink} from "react-router-dom";
import homeIcon from "../../images/ic_home.svg";
import searchIcon from "../../images/ic_search.svg";
import tablesIcon from "../../images/ic_tables.svg";
import calendarIcon from "../../images/ic_calendar.svg";
import styles from "./Navigation.module.scss";
import mapIcon from "../../images/ic_map.svg";
import widgetsIcon from "../../images/ic_widgets.svg";
import settingsIcon from "../../images/ic_settings.svg";
import closeAdvancedSettingsIcon from "../../images/ic_close_advanced_settings.svg";
import openAdvancedSettingsIcon from "../../images/ic_open_advanced_settings.svg";
import profileSettingsIcon from "../../images/ic_profile_settings.svg";
import financeSettingsIcon from "../../images/ic_finance.svg";
import exitIcon from "../../images/ic_exit.svg";
import {useState} from "react";

interface IIsActive {
  isActive: boolean
}

const Navigation = () => {

  const setActive = ({isActive}: IIsActive): string => isActive ? styles.activeLink : '';
  const [advancedSettingsActive, setAdvancedSettingsActive] = useState(false);

  return (
    <nav>

      <NavLink end to="/" className={setActive}>
        <img src={homeIcon} alt=""/>
        Главная
      </NavLink>

      <NavLink to="address" className={setActive}>
        <img src={searchIcon} alt=""/>
        Поиск
      </NavLink>

      <NavLink to='tables' className={setActive}>
        <img src={tablesIcon} alt=""/>
        Таблицы
      </NavLink>

      <NavLink to='calendar' className={setActive}>
        <img src={calendarIcon} alt=""/>
        Календарь
      </NavLink>

      <NavLink to='map' className={setActive}>
        <img src={mapIcon} alt=""/>
        Карты
      </NavLink>

      <NavLink to='widgets' className={setActive}>
        <img src={widgetsIcon} alt=""/>
        Виджеты
      </NavLink>

      <div className={styles.settingsContainer}>
        <NavLink to='settings' className={setActive}>
          <img src={settingsIcon} alt=""/>
          Настройки
          {
            advancedSettingsActive ?
              <button
                onClick={event => {
                  event.preventDefault()
                  setAdvancedSettingsActive(!advancedSettingsActive)
                }}>
                <img src={closeAdvancedSettingsIcon} alt=""/>
              </button> :
              <button
                onClick={event => {
                  event.preventDefault()
                  setAdvancedSettingsActive(!advancedSettingsActive)
                }}>
                <img src={openAdvancedSettingsIcon} alt=""/>
              </button>
          }
        </NavLink>

        <div className={advancedSettingsActive ? styles.visibleSettings : styles.hiddenSettings}>
          <NavLink to='profileSettings' className={setActive}>
            <img src={profileSettingsIcon} alt=""/>
            Настройки профиля
          </NavLink>

          <NavLink to='financeSettings' className={setActive}>
            <img src={financeSettingsIcon} alt=""/>
            Управление финансами
          </NavLink>
        </div>

      </div>

      <NavLink to='exit'>
        <img src={exitIcon} alt=""/>
        Выход
      </NavLink>

    </nav>
  );
}

export default Navigation;