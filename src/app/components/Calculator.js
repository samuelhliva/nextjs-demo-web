import styles from "./calculator.module.css"
import CalculatorForm from "./CalculatorForm"

export default function Calculator() {

    return (
        <div className={styles.calculator}>
            <div className={styles.heading}>
                <h2>Setup your loan</h2>
            </div>

            <CalculatorForm />
        </div>
    )
}