'use client'

import { useState } from "react"
import styles from "@/app/components/calculator.module.css"
import CalculatorInput from "./CalculatorInput";

export default function CalculatorForm() {
    const [amount, setAmount] = useState(100);
    const [timerange, setTimerange] = useState(6);

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    }

    const handleTimerangeChange = (e) => {
        setTimerange(e.target.value);
    }

  return (
    <form action={undefined}
        className={styles.setup_form}
    >
        <CalculatorInput 
            name={"amount"}
            value={amount}
            handler={handleAmountChange}
            min={100}
            max={10000}
            step={100}
            message={"The amount is"}
        />

        <CalculatorInput 
            name={"timerange"}
            value={timerange}
            handler={handleTimerangeChange}
            min={6}
            max={60}
            step={6}
            message={"The time range is"}
        />

        <input type="submit" value={"Apply"} className={styles.submit_btn} />

        <p className={styles.terms}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia quae minus assumenda! Blanditiis, ratione. Enim ad incidunt dolor magni iusto maxime. Doloremque, iusto exercitationem consectetur, ipsa et dolore nihil in nostrum excepturi tempore, quo quis id quidem minus accusantium. Delectus dolores quos odio magni quasi deserunt eaque obcaecati, modi esse.</p>
    </form>
  )
}
