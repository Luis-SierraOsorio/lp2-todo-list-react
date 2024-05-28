import { useState } from 'react'
import styles from './Input.module.css'

export default function Input({ items, setItems }) {
    const [input, setInput] = useState("")

    function handleAdd() {
        if (input !== "") {
            setItems([
                ...items,
                {
                    id: items.length > 0 ? items[items.length - 1].id + 1 : 0,
                    // id: 0,
                    message: input
                }
            ])

        }

        setInput("");
    }

    return (
        <div className={styles.container}>
            <input className={styles.inputTextBox} type="text" placeholder='Add an item' onChange={e => {
                setInput(e.target.value)
            }} value={input} />
            <button className={styles['add-button']} onClick={handleAdd}>Add</button>
        </div>
    )
}