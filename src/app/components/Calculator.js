'use client'

import { useState } from "react"
import styles from "./calculator.module.css"

export default function Calculator() {
    const [amount, setAmount] = useState(0);
    const [timerange, setTimerange] = useState(6);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    const handleTimerangeChange = (e) => {
        setTimerange(e.target.value);
    }

    return (
        <div className={styles.calculator}>
            <div className={styles.heading}>
                <h2>Setup your loan</h2>
            </div>

            <form action={undefined}
                className={styles.setup_form}
            >
                <div className={styles.form_input}>
                    <label htmlFor="ammountInput">Amount</label>
                    <input name="amount"
                        id="ammountInput" 
                        type="range" 
                        min={1} 
                        max={100000} 
                        step={100}
                        onChange={handleAmountChange}
                    />
                    <span className={styles.info_span}>The ammount is {amount}</span>
                </div>
                
                <div className={styles.form_input}>
                    <label htmlFor="timerangeInput">Time Range</label>
                    <input name="timerange" 
                        id="timerangeInput"
                        type="range" 
                        min={6} 
                        max={60} 
                        step={6}
                        onChange={handleTimerangeChange}
                    />
                    <span className={styles.info_span}>The time range is {timerange}</span>
                </div>

                <input type="submit" value={"Apply"} className={styles.submit_btn} />
            </form>
        </div>
    )
}