import styles from './AddressesList.module.scss';

interface IAddressItemProps {
  value: string
}

const AddressItem = ({value}: IAddressItemProps) => {
  return (
    <>

      <div className={styles.separator}></div>

      <div className={styles.item}>
        {value}
      </div>

    </>

  );
}

export default AddressItem;