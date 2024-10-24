import About from "./sections/About";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero"
import Skills from "./sections/Skills";
import styles from "./styles.module.scss";

const Main = () => {
  return (
    <div className={styles["main"]}>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
    </div>
  )
}

export default Main;