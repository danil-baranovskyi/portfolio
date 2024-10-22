import About from "./sections/About";
import Hero from "./sections/Hero"
import Skills from "./sections/Skills";
import styles from "./styles.module.scss";

const Main = () => {
  return (
    <div className={styles["main"]}>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  )
}

export default Main;