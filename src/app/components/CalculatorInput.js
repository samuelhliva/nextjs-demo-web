import styles from "@/app/components/calculator.module.css"

export default function CalculatorInput({ name, value, handler, min, max, step, message }) {
    return <div className={styles.form_input}>
            <label htmlFor={`${name}-input`}>Time Range</label>
            <input name="timerange" 
                id={`${name}-input`}
                type="range" 
                min={min} 
                max={max} 
                step={step}
                onChange={handler}
                value={value}
            />
            <span className={styles.info_span}>{`${message}: ${value}`}</span>
        </div>
}