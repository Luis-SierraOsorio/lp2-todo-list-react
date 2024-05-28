import { useState } from 'react'
import styles from './Input.module.css'

export default function Input({ setItems }) {
    // state to keep track of the input value
    const [input, setInput] = useState("")

    // function to change input state when 'add' button is clicked
    function handleAdd() {
        // error checking
        if (input !== "") {
            // spreading all the previous items and adding new one at the end 
            setItems(items => [
                ...items,
                {
                    id: items.length > 0 ? items[items.length - 1].id + 1 : 0,
                    message: input
                }
            ])

        }

        // resetting input value
        setInput("");
    }

    // JSX
    return (
        <div className={styles.container}>
            <input className={styles.inputTextBox} type="text" placeholder='Add an item' onChange={e => {
                setInput(e.target.value)
            }} value={input} />
            <button className={styles['add-button']} onClick={handleAdd}>Add</button>
        </div>
    )
}