import styles from "./PageHeading.module.scss";

interface IPageHeadingProps {
  title: string
}

const PageHeading = ({title}: IPageHeadingProps) => {
  return (
    <h2 className={styles.pageHeading}>
      {title}
    </h2>
  );
}

export default PageHeading;