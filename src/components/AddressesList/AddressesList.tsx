import {ISuggestion} from "../AddressSearcher/AddressSearcher";
import AddressItem from "./AddressItem";
import styles from './AddressesList.module.scss';

interface IAddressesListProps {
  addressesList: ISuggestion[]
}

const AddressesList = ({addressesList}: IAddressesListProps) => {
  return (

    <div className={styles.container}>

      <h3>Адреса</h3>

      {
        addressesList.map(({value}, index, array) => <AddressItem key={index} value={value}/>)
      }

    </div>

  );
}

export default AddressesList;