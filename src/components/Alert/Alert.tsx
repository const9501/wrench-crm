import styles from "./Alert.module.scss";

interface IAlertProps {
  variant: string
  text: string
}

const Alert = ({variant, text}: IAlertProps) => {
  return (

    <div className={styles[variant]}>
      {text}
    </div>

  );
}

export default Alert;