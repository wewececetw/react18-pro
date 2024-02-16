import styles from "../Button.module.css";

export default function Message() {
  function handleClick() {
    console.log("Hello, welcome to React");
  }
  return (
    <div>
      <button className={styles.button} onClick={handleClick}>
        Click here to get a message
      </button>
    </div>
  );
}
