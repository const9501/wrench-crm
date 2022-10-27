import PageHeading from "../PageHeading/PageHeading";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./AddressSearcher.module.scss";
import {FormEvent, useState} from "react";
import AddressesList from "../AddressesList/AddressesList";
import Alert from "../Alert/Alert";

export interface IData {
  postal_code: string
  country: string
  country_iso_code: string
  federal_district: string
  region_fias_id: string
  region_kladr_id: string
  region_iso_code: string
  region_with_type: string
  region_type: string
  region_type_full: string
  region: string
  area_fias_id?: any
  area_kladr_id?: any
  area_with_type?: any
  area_type?: any
  area_type_full?: any
  area?: any
  city_fias_id: string
  city_kladr_id: string
  city_with_type: string
  city_type: string
  city_type_full: string
  city: string
  city_area?: any
  city_district_fias_id?: any
  city_district_kladr_id?: any
  city_district_with_type?: any
  city_district_type?: any
  city_district_type_full?: any
  city_district?: any
  settlement_fias_id?: any
  settlement_kladr_id?: any
  settlement_with_type?: any
  settlement_type?: any
  settlement_type_full?: any
  settlement?: any
  street_fias_id: string
  street_kladr_id: string
  street_with_type: string
  street_type: string
  street_type_full: string
  street: string
  stead_fias_id?: any
  stead_cadnum?: any
  stead_type?: any
  stead_type_full?: any
  stead?: any
  house_fias_id: string
  house_kladr_id: string
  house_cadnum?: any
  house_type: string
  house_type_full: string
  house: string
  block_type?: any
  block_type_full?: any
  block?: any
  entrance?: any
  floor?: any
  flat_fias_id: string
  flat_cadnum?: any
  flat_type: string
  flat_type_full: string
  flat: string
  flat_area?: any
  square_meter_price?: any
  flat_price?: any
  room_fias_id?: any
  room_cadnum?: any
  room_type?: any
  room_type_full?: any
  room?: any
  postal_box?: any
  fias_id: string
  fias_code?: any
  fias_level: string
  fias_actuality_state: string
  kladr_id: string
  geoname_id: string
  capital_marker: string
  okato: string
  oktmo: string
  tax_office: string
  tax_office_legal: string
  timezone?: any
  geo_lat: string
  geo_lon: string
  beltway_hit?: any
  beltway_distance?: any
  metro?: any
  divisions?: any
  qc_geo: string
  qc_complete?: any
  qc_house?: any
  history_values?: any
  unparsed_parts?: any
  source?: any
  qc?: any
}

export interface ISuggestion {
  value: string
  unrestricted_value: string
  data: IData
}

const AddressSearcher = () => {

  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<ISuggestion[] | null>(null);
  const [alert, setAlert] = useState(false);

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault()

    if (search.length < 3) {
      setAlert(true)
      setSuggestions(null)
      return
    } else setAlert(false)

    fetch('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token " + "6bd2afd1dff6c8440138d2732afc839582b691be"
      },
      body: JSON.stringify({query: search, count: 20})
    })
      .then(res => res.json())
      .then(data => setSuggestions(data.suggestions))
  }

  return (
    <>

      <div className={styles.header}>
        <PageHeading title='Поиск адресов'/>
      </div>

      <div className={styles.subtitle}>
        Введите интересующий вас адрес
      </div>

      <div className={styles.searchBar}>
        <SearchBar
          search={search}
          onChange={event => setSearch(event.target.value)}
          onSubmit={submitHandler}
        />
      </div>

      {alert && <Alert variant='error' text='Минимальная длина 3 символа' />}

      {suggestions?.length ? <AddressesList addressesList={suggestions}/> : null}

      {suggestions?.length === 0 && <Alert variant='default' text='Ничего не найдено' />}
    </>
  );

}



export default AddressSearcher;