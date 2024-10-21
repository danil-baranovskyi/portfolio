import About from "./sections/About";
import Hero from "./sections/Hero"
import styles from "./styles.module.scss";

const Main = () => {
  return (
    <div className={styles["main"]}>
      <Hero/>
      <About/>
    </div>
  )
}

export default Main;