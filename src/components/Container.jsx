import styles from "./container.module.css";

export default function Container({ children }) {
  //it is a structioral component..not a functional component---provides structure not functionality
  return <div className={styles.parentContainer}>{children}</div>;
}
