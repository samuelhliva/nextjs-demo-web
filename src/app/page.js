import styles from "./page.module.css";
import Hero from "./components/Hero";
import Calculator from "./components/Calculator";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero/>
      <Calculator/>
    </div>
  );
}
