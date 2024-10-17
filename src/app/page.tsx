import styles from "./page.module.scss";
import Main from "./components/pages/Main";

export default function Home() {
  return (
    <main className={styles["main"]}>
      <Main/>
    </main>
  );
}
