import styles from "./NewsList.module.scss";
import PageHeading from "../PageHeading/PageHeading";
import NewsItem from "./NewsItem";

const NewsList = () => {
  return (
    <>
      <div className={styles.header}>
        <PageHeading title='Новости'/>
      </div>

      <NewsItem/>
    </>
  );
}

export default NewsList;