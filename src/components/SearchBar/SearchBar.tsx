import searchIcon from "../../images/ic_search_button.svg";
import './SearchBar.module.scss'
import {ChangeEvent, FormEvent} from "react";

interface ISearchBarProps {
  search: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const SearchBar = ({search, onChange, onSubmit}: ISearchBarProps) => {
  return (
    <form onSubmit={onSubmit}>

      <input type="text" value={search} onChange={onChange} placeholder='Введите интересующий вас адрес'/>

      <button type='submit'><img src={searchIcon} alt=""/> Поиск</button>

    </form>
  );
}

export default SearchBar;